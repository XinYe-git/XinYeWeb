<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiperSlide v-for="(item,index) in backgroundSrc">
      <img :src="`http://jamkang.club/${item}`">
    </swiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <p class="order">我们专注创新网络发展 </p>
  <order>
    <order-item></order-item>
    <order-item></order-item>
    <order-item></order-item>
    <order-item></order-item>
    <order-item></order-item>
  </order>
  <p class="design">原创的设计，高端的技术服务</p>
  <design>
    <design-item></design-item>
    <design-item></design-item>
  </design>
  </div>
</template>

<script>
  import Order from "./childComps/Order";
  import OrderItem from "./childComps/OrderItem";
  import Design from "./childComps/Design";
  import DesignItem from "./childComps/DesignItem";
  import {backGround} from 'network/home'
  export default {
    name: "Home",
    components: {DesignItem, Design, OrderItem, Order},
    data(){
      return{
        backgroundSrc:'',
        swiperOption:{
          loop:true,
          speed:1000,
          pagination:{
            el:".swiper-pagination",
            type:'bullets'
          },
          autoplay:{
            delay:3000,
            disableOnInteraction:false
          }
        }
      }
    },
    computed:{
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
      // this.swiper.slideTo(3,1000,false)
    },
    created(){
      backGround().then(res=>{
        this.backgroundSrc=res
      })

    }

  }
</script>

<style scoped>
  img{
    height: 260px;
    width: 640px;
  }
  .order,.design{
    font-size: 17px;
    text-align: center;
    margin-top: 5%;
    color: #000000;

  }
</style>