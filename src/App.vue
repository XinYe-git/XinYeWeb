<template>
  <div id="app">
  <xinye-bar></xinye-bar>
    <keep-alive><router-view v-if="isRouterAlive"></router-view></keep-alive>
  </div>
</template>

<script>
import XinyeBar from "components/content/xinyeBar/xinyeBar";
export default {
  name: 'App',
  components: {
    XinyeBar
    },
  provide(){
    return{
      reload:this.reload
    }
  },
    data(){
      return{
        isRouterAlive:true
      }
    },
    methods:{
      reload(){
        this.isRouterAlive=false
        this.$nextTick(function(){
          this.isRouterAlive=true
        })
      }
    }

}
</script>

<style>
  @import "./assets/css/base.css";
  @import "./assets/css/normalize.css";
</style>
