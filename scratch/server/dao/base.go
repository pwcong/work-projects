package dao

import (
	"github.com/pwcong/scratch-server/config"
	"github.com/pwcong/scratch-server/db"
)

type BaseDAO struct {
	Conf *config.Config
	DB   *db.DB
}
