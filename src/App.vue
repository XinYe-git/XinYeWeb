<template>
  <div id="app">
  <xinye-bar></xinye-bar>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import XinyeBar from "components/content/xinyeBar/xinyeBar";
export default {
  name: 'App',
  components: {
    XinyeBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
  @import "./assets/css/normalize.css";
</style>
