import axios from 'axios'

const postVideo = form =>axios.post('/api/v1/videos',form).then(res =>res.data)
const getVideo = () =>axios.get('/api/v1/video/${id}').then(res =>res.data)
const getVideos = () =>axios.get('/api/v1/videos').then(res =>res.data)

const userLogin = form =>axios.post('/api/v1/user/login',form).then(res =>res.data)


export{
	postVideo,
	getVideo,
	getVideos,
	userLogin
}