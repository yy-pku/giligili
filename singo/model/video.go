package model

import "github.com/jinzhu/gorm"

// Video 用户模型
type Video struct {
	gorm.Model
	Title string
	Info  string
}
