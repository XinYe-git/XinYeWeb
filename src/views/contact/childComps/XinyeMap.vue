<template>
  <div class="map">
  <div class="xinyemap">
    <img src="~assets/img/contact/map.png">
    <img class="click" src="~assets/img/contact/click.png">
  </div>
    <p>湖南省常德市武陵区仙缘小区</p>
  </div>
</template>

<script>
  export default {
    name: "XinyeMap"
  }
</script>

<style scoped>
  .map{
    position: relative;
  }
  .map p{
    width: 225px;
    height: 20px;
    text-align: right;
    position: absolute;
    right: 12px;
    top: 64px;
    font-size: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ff4254;
    background:url("~assets/img/contact/line.png") no-repeat bottom;
  }
  .xinyemap{
    text-align: center;
    margin: 18px auto;
  }
  .xinyemap img:first-child{
    width: 349px;
    height: 225px;
  }
  .xinyemap img:nth-child(2){
    width: 20px;
    height: 31px;
  }
  .click{
    position: absolute;
    right: 226px;
    top: 50px;
  }

</style>