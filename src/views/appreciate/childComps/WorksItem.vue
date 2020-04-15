<template>
  <div class="works-item">
    <div class="works-item-middle">
      <img src="~assets/img/appreciate/8.png">
    </div>
    <p v-if="collect" @click="collectClick"><img src="~assets/img/appreciate/collect.png"></p>
    <p v-else @click="collectClick"><img src="~assets/img/appreciate/collected.png"></p>
  </div>
</template>

<script>
  export default {
    name: "WorksItem",
    data(){
      return{
        collect:true
      }
    },
    methods:{
      collectClick(){
        this.collect=!this.collect
      }
    }

  }
</script>

<style scoped>
.works-item{
  margin-top: 20px;
  flex: 1;
}
.works-item-middle{
text-align: center;
}
.works-item p{
float: right;
}
</style>