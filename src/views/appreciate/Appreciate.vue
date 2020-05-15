<template>
  <div>
  <swiper>
    <swiper-item v-for="(item,index) in backgroundSrc">
      <img :src="`http://jamkang.club/${item}`">
    </swiper-item>
  </swiper>
  <timep></timep>
  <works>
    <works-item v-for="(item,index) in picture" :item="item"></works-item>
  </works>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  import Timep from "./childComps/Timep";
  import Works from "./childComps/Works";
  import WorksItem from "./childComps/WorksItem";
  import {backGround2,worksSee} from 'network/appreciate'

  export default {
    name: "Appreciate",
    components: {WorksItem, Works, Timep, Swiper,SwiperItem},
    data(){
      return{
        backgroundSrc:'',
        picture:''
      }
    },
    created(){
      backGround2().then(res=>{
        this.backgroundSrc=res
      })
      worksSee().then(res=>{
        this.picture=res
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  img{
    height: 184px;
  }
</style>