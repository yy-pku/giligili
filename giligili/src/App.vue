<template>
  <div id="app">
	<MenuBar></MenuBar>
	<router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>

<style>
</style>
