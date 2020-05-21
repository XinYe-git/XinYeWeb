<template>
  <div class="works-item">
    <div class="works-item-middle">
      <img :src="`http://jamkang.club/${item.picture}`">
    </div>
    <p v-if="collected[index]" @click="collectClick"><img src="~assets/img/appreciate/collect.png"></p>
    <p v-else @click="collectClick"><img src="~assets/img/appreciate/collected.png"></p>
  </div>
</template>

<script>
  import {workgive} from 'network/appreciate'
  export default {
    name: "WorksItem",
    props:{
      item:{
        type: Object,
        default(){
          return{}
        }
        }
        ,
        giveddata:{
          type: Array,
          default(){
            return{}
          }
      },
      index:{
        type: Number,
        default(){
          return{}
        }
      },
      lengths:{
    type: Number,
  default(){
      return{}
    }
  }

    },
    data(){
      return{
        collected:[]
      }
    },
    methods:{
      async  collectClick(){
        let data=await workgive(this.item.id)
        this.$router.go(0)
        if(data.return==='收藏成功'){
            alert('收藏成功')
          }
          if(data.return==='取消收藏成功'){
            alert('取消收藏成功')
          }
        console.log(this.collected);
      // .indexOf(this.item.id)

      }
    },
    created(){
      // console.log(this.giveddata[this.index]);
        //判断数组中是否存在相同id
      for(let i=0;i<this.lengths;i++){
        this.collected.push(this.giveddata.indexOf(this.item.id)===-1)
      }


    }

  }
</script>

<style scoped>
.works-item{
  margin-top: 20px;
  position: relative;
  margin-bottom: 30px;

}
.works-item-middle{
  width: 166px;
text-align: center;
}
.works-item-middle img{
  width: 100%;
  height: 100%;
}
.works-item p{
  position: absolute;
  right: 0;
}
</style>