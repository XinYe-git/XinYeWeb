<template>
  <div class="order-item">
    <img src="~assets/img/home/order.png">
    <p>微信小程序开发</p>
    <button @click="created">创建订单</button>
  </div>
</template>

<script>
  export default {
    name: "OrderItem",
    methods:{
      created(){
        alert('请前往PC端进行操作')
      }
    }
  }
</script>

<style scoped>
  img{
    width: 80px;
    height: 60px;
  }
.order-item{
  flex: 1;
}
.order-item p{
  font-size: 10px;
  margin-top: 13px;
}
.order-item button{
  width: 70px;
  height: 21px;
  line-height: 21px;
  font-size: 8px;
  margin-top: 6px;
  background: #fde07f;
  border: none;
  color: #749a01;
  font-weight:bold;
  overflow: hidden;
}
</style>