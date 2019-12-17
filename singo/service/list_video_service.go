package service

import (
	"giligili/model"
	"giligili/serializer"
)

// ListVideoService 视频投稿的服务
type ListVideoService struct {
}

// Create 创建视频
func (service *ListVideoService) List() serializer.Response {
	var videos []model.Video
	err := model.DB.Find(&videos).Error
	if err != nil {
		return serializer.Response{
			Code:  5000,
			Msg:   "数据库连接错误",
			Error: err.Error(),
		}
	}

	return serializer.Response{
		Data: serializer.BuildVideos(videos),
	}
}
