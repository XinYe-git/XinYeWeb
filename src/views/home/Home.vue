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
  import {Swiper,SwiperItem} from 'components/common/swiper'
  import Order from "./childComps/Order";
  import OrderItem from "./childComps/OrderItem";
  import Design from "./childComps/Design";
  import DesignItem from "./childComps/DesignItem";
  export default {
    name: "Home",
    components: {DesignItem, Design, OrderItem, Order, Swiper,SwiperItem}
  }
</script>

<style scoped>
  img{
    height: 260px;
  }
  .order,.design{
    font-size: 17px;
    text-align: center;
    margin-top: 21px;
    color: #000000;
  }
</style>