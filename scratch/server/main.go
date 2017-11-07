package main

import (
	"log"
	"strconv"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	"github.com/pwcong/scratch-server/config"
	"github.com/pwcong/scratch-server/db"
	"github.com/pwcong/scratch-server/router"
	"github.com/pwcong/scratch-server/utils"
)

func initMiddlewares(e *echo.Echo, conf *config.Config) {

	middlewaresConfig := conf.Middlewares

	loggerConfig, ok := middlewaresConfig["logger"]
	if ok && loggerConfig.Active {
		e.Use(middleware.Logger())
	}

	corsConfig, ok := middlewaresConfig["cors"]
	if ok && corsConfig.Active {
		e.Use(middleware.CORS())

	}

}

func initRoutes(e *echo.Echo, conf *config.Config, db *db.DB) {

	router.Init(e, conf, db)

}

func main() {

	// 初始化配置
	conf, err := config.Initialize()
	if err != nil {
		log.Fatal(err)
	}

	// 初始化数据库
	mySQLConfig, ok := conf.Databases["mysql"]
	if !ok {
		log.Fatal("Can not load configuration of MySQL")
	}
	mysql, err := db.Open("mysql", mySQLConfig.Username, mySQLConfig.Password, mySQLConfig.DBName, mySQLConfig.Host, mySQLConfig.Port)
	if err != nil {
		log.Fatal(err)
	}

	db := db.DB{MySQL: mysql}

	e := echo.New()
	// 初始化中间件
	initMiddlewares(e, &conf)
	// 初始化路由
	initRoutes(e, &conf, &db)

	// 运行服务
	if conf.Server.Port == 80 {
		e.Logger.Fatal(e.Start(conf.Server.Host))
	} else {
		e.Logger.Fatal(e.Start(conf.Server.Host + ":" + strconv.Itoa(conf.Server.Port)))
	}
}

func init() {

	// 初始化目录
	err := utils.MkdirIFNotExist("temp")
	if err != nil {
		log.Fatal(err)
	}

	err = utils.MkdirIFNotExist("static")
	if err != nil {
		log.Fatal(err)
	}

}
