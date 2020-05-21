<template>
  <div>
    <div class="givecontent">
      <div v-for="(item,index) in givedimage" class="giveimage">
        <img :src="`http://jamkang.club/${item[0].picture}`">
      </div>
    </div>
  </div>
</template>

<script>
  import {workGived} from 'network/profile'
  export default {
    name: "Profilegive",
    data(){
      return{
        givedimage:''
      }
    },
    created(){
    workGived().then(res=>{
      this.givedimage=res.contect
    })
  }


  }
</script>

<style scoped>
.givecontent{
  width: 555px;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
}
  .giveimage{
    margin-bottom: 60px;
    width: 206px;
  }

.giveimage img{
  width: 100%;
  height: 100%;
}
</style>