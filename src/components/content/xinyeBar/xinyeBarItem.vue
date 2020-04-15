<template>
  <div>
    <ul class="xinyebar-item-home left">
      <li @click="homeClick" :style="activeStyle">
        <slot></slot>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "xinyeBarItem",
    data(){
      return{

      }
    },
    props:{
      path:String
    },
    methods:{
      homeClick(){
        this.$router.push(this.path)
      }
    }, computed:{
      isActive(){
        //活跃路径和路径相等时，返回true
        return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
        //判断活跃来进行颜色绑定
        return this.isActive ?{color:'#e9a84a'}:{}
      }
    }
  }
</script>

<style scoped>
  .xinyebar-item-home{
    margin-left: 33px;

  }
</style>