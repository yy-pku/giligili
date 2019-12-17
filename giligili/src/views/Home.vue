<template>
	<div class="home">
		<div class="">
			<el-row :gutter="20">
				<el-col :span="4" v-for="video in videos" :key="video.id">
				<el-card>
					<img class="video-avatar" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
					<div>
						<div class="video-title">{{video.title}}</div>
						<div class="video-bottom clearfix">
							<span class="video-info">{{video.info}}</span>
						</div>
					</div>
				</el-card>				  
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import * as API from '@/api/video'
	
	export default{
		name:'home',
		data(){
			return {
				videos:[]
			}
		},
		methods:{
			load(){
				API.getVideos().then((res)=>{
					this.videos = res.data
				})
			}
		},
		beforeMount(){
			this.load()
		}		
	}
</script>

<style  scoped lang="css">
.video-avatar{
	width:100%
}
.video-title{
	margin: 10px 0px 10px 0px;
}
.video-bottom{
	margin-top: 4px;
}
.video-info{
	color:#909399
}
</style>
