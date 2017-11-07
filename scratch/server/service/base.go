package service

import (
	"github.com/pwcong/scratch-server/config"
	"github.com/pwcong/scratch-server/dao"
)

type BaseService struct {
	Conf *config.Config
	DAO  *dao.BaseDAO
}
