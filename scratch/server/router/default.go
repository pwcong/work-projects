package router

import (
	"github.com/pwcong/scratch-server/config"
	"github.com/pwcong/scratch-server/controller"
	"github.com/pwcong/scratch-server/dao"
	"github.com/pwcong/scratch-server/db"
	"github.com/pwcong/scratch-server/service"

	"github.com/labstack/echo"
)

const API_VERSION = "v1"

const GLOBAL_PREFIX = "/api/" + API_VERSION

func Init(e *echo.Echo, conf *config.Config, db *db.DB) {

	e.Static("/", "view/dist")
	e.Static("/player", "view/player")
	e.Static("/editor", "view/editor")
	e.Static("/static", "static")

	baseDAO := &dao.BaseDAO{Conf: conf, DB: db}
	baseService := &service.BaseService{Conf: conf, DAO: baseDAO}
	baseController := &controller.BaseController{Conf: conf, Service: baseService}

	projectController := &controller.ProjectController{Base: baseController}

	e.GET(GLOBAL_PREFIX+controller.URL_PROJECT_GET, projectController.Get)
	e.POST(GLOBAL_PREFIX+controller.URL_PROJECT_UPLOAD, projectController.Upload)
	e.GET(GLOBAL_PREFIX+controller.URL_PROJECT_GETLIST, projectController.GetList)

}
