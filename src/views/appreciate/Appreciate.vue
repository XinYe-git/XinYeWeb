<template>
  <div>
  <swiper>
    <swiper-item>
      <img src="~assets/img/home/lunbo1.png">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/home/lunbo2.png">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/home/lunbo1.png">
    </swiper-item>
    <swiper-item>
      <img src="~assets/img/home/lunbo2.png">
    </swiper-item>
  </swiper>
  <timep></timep>
  <works>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
    <works-item></works-item>
  </works>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  import Timep from "./childComps/Timep";
  import Works from "./childComps/Works";
  import WorksItem from "./childComps/WorksItem";

  export default {
    name: "Appreciate",
    components: {WorksItem, Works, Timep, Swiper,SwiperItem}
  }
</script>

<style scoped>
  img{
    height: 184px;
  }
</style>