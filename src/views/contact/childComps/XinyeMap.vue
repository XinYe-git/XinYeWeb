<template>
  <!--<div class="map">-->
  <!--<div class="xinyemap">-->
    <!--<img src="~assets/img/contact/map.png">-->
    <!--<img class="click" src="~assets/img/contact/click.png">-->
  <!--</div>-->
    <!--<p>湖南省常德市武陵区仙缘小区</p>-->
  <!--</div>-->
  <div>
    <baidu-map class="map" :center="map.center" :zoom="map.zoom">
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <!--定位-->
      <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <!--点-->
      <bm-marker :position="map.center"  animation="BMAP_ANIMATION_DROP">
        <!--提示信息-->
        <!--<bm-info-window :show="map.show" class="maptitle">新叶工作室</bm-info-window>-->
      </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
  export default {
    name: "XinyeMap",
    data: () => ({
      map:{
        center: {lng: 111.66883, lat: 29.053462},
        zoom: 17,
        show: true,
        dragging: true
      },
    }),
    methods: {
      // mapShowme(){
      //   console.log(this.map.show);
      //   // this.map.show=true
      // }
      // handler ({BMap, map}) {
      //   let me = this;
        // console.log(BMap, map)
        // 鼠标缩放
        // map.enableScrollWheelZoom(true);
        // // 点击事件获取经纬度
        // map.addEventListener('click', function (e) {
        //   console.log(e.point.lng, e.point.lat)
        // })
    //   }
    }
  }
</script>

<style scoped>
  .map {
    width: 450px;
    height: 400px;
    margin: 30px auto 50px;
  }
   /*.map{*/
  /*position: relative;*/
  /*}*/
  /*.map p{*/
  /*width: 225px;*/
  /*height: 20px;*/
  /*text-align: right;*/
  /*position: absolute;*/
  /*right: 12px;*/
  /*top: 64px;*/
  /*font-size: 6px;*/
  /*white-space: nowrap;*/
  /*overflow: hidden;*/
  /*text-overflow: ellipsis;*/
  /*color: #ff4254;*/
  /*background:url("~assets/img/contact/line.png") no-repeat bottom;*/
  /*}*/
  /*.xinyemap{*/
  /*text-align: center;*/
  /*margin: 18px auto;*/
  /*}*/
  /*.xinyemap img:first-child{*/
  /*width: 349px;*/
  /*height: 225px;*/
  /*}*/
  /*.xinyemap img:nth-child(2){*/
  /*width: 20px;*/
  /*height: 31px;*/
  /*}*/
  /*.click{*/
  /*position: absolute;*/
  /*right: 226px;*/
  /*top: 50px;*/
  /*}*/

</style>