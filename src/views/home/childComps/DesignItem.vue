<template>
  <div class="design-item">
    <div class="design-item-left">
      <img  src="~assets/img/home/design.png">
      <p>高端设计</p>
    </div>
    <div class="design-item-right">
      <img  src="~assets/img/home/design.png">
      <p>高端设计</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DesignItem"
  }
</script>

<style scoped>
img{
  width: 202px;
  height: 184px;
}
  .design-item{
      margin-top: 5%;
      margin-bottom: 15%;
      overflow: hidden;
  }
.design-item-left img{
  margin-right: 10px;
}
.design-item-right img{
  margin-left: 10px;
}
  .design-item-left,.design-item-left p,.design-item-left img{
    float: left;
  }
  .design-item-right,.design-item-right p,.design-item-right img{
    float: right;
  }
  .design-item p{
    display: inline-block;
    width: 24px;
    height: 154px;
    line-height: 24px;
    font-size: 19px;
    word-break:break-all;
    margin-top: 30px;
  }
</style>