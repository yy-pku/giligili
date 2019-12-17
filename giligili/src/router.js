import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import PostVideo from './views/PostVideo.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/login',
			name:'login',
			component:Login
		},
		{
			path:'/',
			name:'home',
			component:Home
		},
		{
			path:'/postvideo',
			name:'postvideo',
			component:PostVideo
		},
		{
			path:'/about',
			name:'about',
			component:About
		}
	]
})