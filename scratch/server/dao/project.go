package dao

import (
	"time"

	"github.com/pwcong/scratch-server/model"
)

type ProjectDAO struct {
	Base *BaseDAO
}

const SCHEMA_ADD = `INSERT INTO projects (src, title, author, createdAt) VALUES (?, ?, ?, ?)`
const SCHEMA_GET = `SELECT * FROM projects WHERE id=?`
const SCHEMA_GET_ALL = `SELECT * FROM projects ORDER BY createdAt DESC LIMIT ?,?`

func (self *ProjectDAO) Add(src string, title string, author string) (int64, error) {

	res, err := self.Base.DB.MySQL.Exec(SCHEMA_ADD, src, title, author, time.Now())

	if err != nil {
		return 0, err
	}

	id, err := res.LastInsertId()
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (self *ProjectDAO) Get(id int64) (model.Project, error) {

	var res model.Project

	err := self.Base.DB.MySQL.QueryRowx(SCHEMA_GET, id).StructScan(&res)

	if err != nil {
		return model.Project{}, err
	}

	return res, nil
}

func (self *ProjectDAO) GetList(pageNo int, pageSize int) ([]model.Project, error) {

	var res []model.Project

	rows, err := self.Base.DB.MySQL.Query(SCHEMA_GET_ALL, (pageNo-1)*pageSize, pageSize)

	if err != nil {
		return res, err
	}

	for rows.Next() {

		var item model.Project
		rows.Scan(&item.ID, &item.Author, &item.Title, &item.Src, &item.CreatedAt)

		res = append(res, item)
	}

	return res, err

}
