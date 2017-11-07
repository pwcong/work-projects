package model

type Project struct {
	ID        int64  `db:"id" json:"id"`
	Author    string `db:"author" json:"author"`
	Title     string `db:"title" json:"title"`
	Src       string `db:"src" json:"src"`
	CreatedAt string `db:"createdAt" json:"createdAt"`
}
