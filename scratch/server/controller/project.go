package controller

import (
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/labstack/echo"
	"github.com/pwcong/scratch-server/model"
	"github.com/pwcong/scratch-server/service"
)

type ProjectController struct {
	Base *BaseController
}

const (
	PREFIX = "/project"

	URL_PROJECT_GET    = PREFIX + "/:id"
	URL_PROJECT_UPLOAD = PREFIX

	URL_PROJECT_GETLIST = "/projects"
)

func (self *ProjectController) Upload(c echo.Context) error {

	service := service.ProjectService{Base: self.Base.Service}

	// 获取文件
	form, err := c.MultipartForm()

	if err != nil {
		return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusBadRequest, Msg: err.Error()})
	}

	files := form.File["files"]
	var ids []int64

	for _, file := range files {

		var title string
		var author string

		fns := strings.Split(strings.Split(file.Filename, ".")[0], "-")

		if len(fns) < 1 {
			title = "Untitled"
			author = "Unknown"
		} else if len(fns) < 2 {
			title = fns[0]
			author = "Unknown"
		} else {
			title = fns[0]
			author = fns[1]
		}

		id, err := service.HandleProjectFile(file, title, author)
		fmt.Println(err)
		if err == nil {
			ids = append(ids, id)
		}
	}

	return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusOK, Result: struct {
		IDS []int64 `json:"ids"`
	}{IDS: ids}})

}

func (self *ProjectController) Get(c echo.Context) error {

	id, err := strconv.Atoi(c.Param("id"))

	if err != nil {
		return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusBadRequest, Msg: err.Error()})
	}

	service := service.ProjectService{Base: self.Base.Service}

	res, err := service.GetProjectJSON(int64(id))

	if err != nil {
		return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusBadRequest, Msg: err.Error()})

	}

	return c.JSONBlob(http.StatusOK, []byte(res))

}

func (self *ProjectController) GetList(c echo.Context) error {

	pageNoParam := c.QueryParam("pageNo")
	if pageNoParam == "" {
		pageNoParam = "1"
	}

	var pageNo int
	pageNo, err := strconv.Atoi(pageNoParam)
	if err != nil {
		pageNo = 1
	}

	pageSizeParam := c.QueryParam("pageSize")
	if pageSizeParam == "" {
		pageSizeParam = "20"
	}

	var pageSize int
	pageSize, err = strconv.Atoi(pageSizeParam)
	if err != nil {
		pageSize = 20
	}

	service := service.ProjectService{Base: self.Base.Service}
	res, err := service.GetProjectsList(pageNo, pageSize)

	if err != nil {
		return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusBadRequest, Msg: err.Error()})
	}

	return c.JSON(http.StatusOK, BaseJSONResponse{Code: http.StatusOK, Result: struct {
		List []model.Project `json:"list"`
	}{List: res}})

}
