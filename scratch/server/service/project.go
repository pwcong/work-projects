package service

import (
	"encoding/json"
	"io/ioutil"
	"mime/multipart"
	"os"
	"strconv"
	"strings"

	"github.com/pwcong/scratch-server/dao"
	"github.com/pwcong/scratch-server/model"

	"github.com/mholt/archiver"
	"github.com/pwcong/scratch-server/utils"
	uuid "github.com/satori/go.uuid"
)

type ProjectService struct {
	Base *BaseService
}

type ProjectJSON struct {
	Sounds []struct {
		SoundID int    `json:"soundID"`
		MD5     string `json:"md5"`
	}
	Costumes []struct {
		BaseLayerID  int    `json:"baseLayerID"`
		BaseLayerMD5 string `json:"baseLayerMD5"`
	}
	Children []struct {
		Sounds []struct {
			SoundID int    `json:"soundID"`
			MD5     string `json:"md5"`
		}
		Costumes []struct {
			BaseLayerID  int    `json:"baseLayerID"`
			BaseLayerMD5 string `json:"baseLayerMD5"`
		}
	}

	PenLayerMD5 string `json:"penLayerMD5"`
	PenLayerID  int    `json:"penLayerID"`
}

func (self *ProjectService) HandleProjectFile(file *multipart.FileHeader, title string, author string) (int64, error) {

	// 打开文件流
	src, err := file.Open()
	if err != nil {
		return 0, err
	}
	defer src.Close()

	// 解压文件
	u := uuid.NewV4()
	dir := "temp/" + u.String()
	err = archiver.Zip.Read(src, dir)
	if err != nil {
		return 0, err
	}
	defer os.RemoveAll(dir)

	// 读取解压所得文件字节
	bytes, err := ioutil.ReadFile(dir + "/project.json")
	if err != nil {
		return 0, err
	}

	// 转换字节为JSON数据
	var pj ProjectJSON
	err = json.Unmarshal(bytes, &pj)
	if err != nil {
		return 0, err
	}
	// 拷贝解压缩所得资源文件
	if pj.PenLayerMD5 != "" {
		t := strings.Split(pj.PenLayerMD5, ".")

		if len(t) == 2 {
			srcPath := dir + "/" + strconv.Itoa(pj.PenLayerID) + "." + t[1]
			dstPath := "static/" + pj.PenLayerMD5

			err := utils.CopyFile(srcPath, dstPath)

			if err != nil {
				return 0, err
			}

		}
	}

	for _, sound := range pj.Sounds {

		if sound.MD5 != "" {

			t := strings.Split(sound.MD5, ".")

			if len(t) == 2 {

				srcPath := dir + "/" + strconv.Itoa(sound.SoundID) + "." + t[1]
				dstPath := "static/" + sound.MD5

				err := utils.CopyFile(srcPath, dstPath)

				if err != nil {
					return 0, err
				}

			}

		}

	}

	for _, costume := range pj.Costumes {

		if costume.BaseLayerMD5 != "" {

			t := strings.Split(costume.BaseLayerMD5, ".")

			if len(t) == 2 {

				srcPath := dir + "/" + strconv.Itoa(costume.BaseLayerID) + "." + t[1]
				dstPath := "static/" + costume.BaseLayerMD5

				err := utils.CopyFile(srcPath, dstPath)

				if err != nil {
					return 0, err
				}

			}

		}

	}

	for _, children := range pj.Children {

		for _, sound := range children.Sounds {

			if sound.MD5 != "" {

				t := strings.Split(sound.MD5, ".")

				if len(t) == 2 {

					srcPath := dir + "/" + strconv.Itoa(sound.SoundID) + "." + t[1]
					dstPath := "static/" + sound.MD5

					err := utils.CopyFile(srcPath, dstPath)

					if err != nil {
						return 0, err
					}

				}

			}

		}

		for _, costume := range children.Costumes {

			if costume.BaseLayerMD5 != "" {

				t := strings.Split(costume.BaseLayerMD5, ".")

				if len(t) == 2 {

					srcPath := dir + "/" + strconv.Itoa(costume.BaseLayerID) + "." + t[1]
					dstPath := "static/" + costume.BaseLayerMD5

					err := utils.CopyFile(srcPath, dstPath)

					if err != nil {
						return 0, err
					}

				}

			}

		}

	}

	if err != nil {
		return 0, err
	}

	return self.SaveProject(string(bytes), title, author)

}

func (self *ProjectService) SaveProject(src string, title string, author string) (int64, error) {

	projectDAO := dao.ProjectDAO{Base: self.Base.DAO}
	return projectDAO.Add(src, title, author)
}

func (self *ProjectService) GetProjectJSON(id int64) (string, error) {

	projectDAO := dao.ProjectDAO{Base: self.Base.DAO}
	res, err := projectDAO.Get(id)
	if err != nil {
		return "", err
	}

	return res.Src, err

}

func (self *ProjectService) GetProjectsList(pageNo int, pageSize int) ([]model.Project, error) {

	if pageNo < 1 {
		pageNo = 1
	}

	if pageSize < 1 {
		pageSize = 1
	}

	projectDAO := dao.ProjectDAO{Base: self.Base.DAO}
	res, err := projectDAO.GetList(pageNo, pageSize)

	if err != nil {
		return nil, err
	}

	return res, err
}
