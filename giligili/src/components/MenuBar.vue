<template>
	<el-menu class="top-bar" mode="horizontal" router>
		<el-menu-item index="/login" > 登录</el-menu-item>
		<el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="/postvideo">投稿视频</el-menu-item>
		<el-menu-item index="/about">关于我们</el-menu-item>
	</el-menu>
	
</template>

<script>
	export default {
		name: 'MenuBar'
	}
</script>

<style scoped lang="css">
.top-bar{
	margin-bottom: 30px;
}	
</style>
