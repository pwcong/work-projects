package controller

import (
	"github.com/pwcong/scratch-server/config"
	"github.com/pwcong/scratch-server/service"
)

type BaseController struct {
	Conf    *config.Config
	Service *service.BaseService
}

type BaseJSONResponse struct {
	Code   int         `json:"code"`
	Msg    string      `json:"msg"`
	Result interface{} `json:"result"`
}
