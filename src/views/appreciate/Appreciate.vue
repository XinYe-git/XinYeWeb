<template>
  <div>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiperSlide v-for="(item,index) in backgroundSrc">
      <img :src="`http://jamkang.club/${item}`">
    </swiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <timep></timep>
    <div class="timetime">
      <span @click="time2020" :class="1===t1?'timecolor':''">2020</span>
      <span @click="time2019" :class="2===t1?'timecolor':''" class="timeb">2019</span>
      <span @click="time2018" :class="3===t1?'timecolor':''">2018</span>
      <span @click="time2017" :class="4===t1?'timecolor':''" class="timeb">2017</span>
      <span @click="time2016" :class="5===t1?'timecolor':''">2016</span>
      <span @click="time2015" :class="6===t1?'timecolor':''" class="timeb">2015</span>
      <span @click="time2014" :class="7===t1?'timecolor':''">2014</span>
    </div>
    <div v-if="1===t1">
      <works>
        <works-item v-for="(item,index) in picture" :item="item" :giveddata="giveddata" :index="index" :lengths="lengths"></works-item>
      </works>
    </div>
    <div v-if="2===t1">

    </div>
    <div v-if="3===t1">

    </div>
    <div v-if="4===t1">

    </div>
    <div v-if="5===t1">

    </div>
    <div v-if="6===t1">

    </div>
    <div v-if="7===t1">

    </div>

  </div>
</template>

<script>
  import Timep from "./childComps/Timep";
  import Works from "./childComps/Works";
  import WorksItem from "./childComps/WorksItem";
  import {backGround2,worksSee,worksSeed} from 'network/appreciate'

  export default {
    name: "Appreciate",
    components: {WorksItem, Works, Timep},
    data(){
      return{
        t1:1,
        // t2:2,
        // t3:3,
        // t4:4,
        // t5:5,
        // t6:6,
        // t7:7,
        giveddata:[],
        lengths:'',
        backgroundSrc:'',
        picture:'',
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
    methods:{
      time2020(){
        this.t1=1
      },
      time2019(){
        this.t1=2
      },
      time2018(){
        this.t1=3
      },
      time2017(){
        this.t1=4
      },
      time2016(){
        this.t1=5
      },
      time2015(){
        this.t1=6
      },
      time2014(){
        this.t1=7
      }
    },
    created(){
      backGround2().then(res=>{
        this.backgroundSrc=res
      })
      worksSee().then(res=>{
        this.picture=res.contest
        this.lengths=res.contest.length
      })

      worksSeed().then(res=>{
        for(let i=0;i<res.contect.length;i++){
          this.giveddata.push(res.contect[i][0].id)
        }
      })

    },
    computed:{
      swiper(){
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style scoped>
  img{
    height: 184px;
  }
  .timeb{
    position: relative;
    top: 60px;
  }
  .timetime{
    position: relative;
   left: 62px;
    top: -80px;
  }
  .timetime span{
    font-size: 12px;
    font-weight: bold;
    color: #46fa5f;
    margin-right: 46px;
  }
  .timecolor{
    color: #eba745 !important;
  }
</style>