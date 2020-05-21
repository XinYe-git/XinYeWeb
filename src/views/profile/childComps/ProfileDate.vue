<template>
  <div class="profile-date">
    <div>
      <p @click="check">签到</p>
      <div class="candel">
        <h2>{{checkYear[0]}}年{{checkMonth[0]}}月</h2>
        <ul class="weekend">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ul class="everyDay">
          <li v-for="(item,index) in day"><a>{{item}}</a></li>
        </ul>
        <h3>本月已签到{{checkedTimes}}天，累计0小时0分</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import {checkedDay,checkedToday} from 'network/profile'
  export default {
    name: "ProfileDate",
    inject:['reload'],
    data(){
      return{
        day:{},
        //月份
        checkMonth:{},
        //年份
        checkYear:{},
        //今天
        toDay:{},
        //签到次数
        checkedTimes:'',
        //签到日期
        checkedday:[]
      }
    },
    created(){
        let daysOfMonth = [];
        let existMonth = [];
        let Year=[]
        let nowDay=[]
        //从0开始所以要加1
        let month = new Date().getMonth() + 1;
        let fullYear = new Date().getFullYear();
        let strDate = new Date().getDate();
        //本月最后一天
        let lastDayOfMonth = new Date(fullYear,month, 0).getDate();
        for (let i = 1; i <= lastDayOfMonth; i++) {
          daysOfMonth.push(i);
        }
        nowDay.push(strDate)
        existMonth.push(month)
        Year.push(fullYear)
        this.checkMonth=existMonth
        this.day=daysOfMonth;
        this.checkYear=Year
        this.toDay=nowDay

      //签到日期
      checkedDay().then(res=>{
        this.checkedTimes=res.length
        let li = document.querySelectorAll('.everyDay li')
        for(let i=0;i<res.length;i++){
          li[res[i]-1].className = 'checked'
        }
      })

    },
    methods:{
      check(){
        checkedToday().then(res=>{
          console.log(res);
          if(res==='签到成功!'){
            alert('签到成功')
          }
          if(res==='你今天已签到'){
            alert('你今天已签到')
          }
          this.reload()
          this.$router.go(0)
        })

      },
  }
  }
</script>

<style scoped>
  .profile-date{
    text-align: center;
    margin-top: 50px;
  }
  .profile-date p{
    display: inline-block;
    width: 150px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    border-radius: 20px;
    font-size: 22px;
    margin-bottom: 30px;
    background: #fae59b;
  }
  .candel{
    display: inline-block;
    width: 560px;
    height: 350px;
    border: 5px solid #e7ffe5;
    margin-top: 30px;
    background: #f7f5f7;
  }
  h2{
    font-size: 15px;
    letter-spacing: 5px;
    margin-top: 33px;
  }
  h3{
    margin-top: 25px;
    font-size: 13px;
    color: #808080;
  }
  .weekend{
    margin-top: 22px;
    overflow: hidden;
  }
  .weekend li{
    width: 78px;
    font-size: 12px;
    float: left;
  }
  .everyDay{
    margin-top: 22px;
    overflow: hidden;
  }
  .everyDay li{
    width: 78px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    font-size: 12px;
    float: left;

  }
  .checked{
    background: url("~assets/img/profile/checked.png")no-repeat 20px;
  }
  .everyDay li a{
    display: block;
    margin: 0 auto;
    height: 34px;
    width: 34px;

  }
</style>