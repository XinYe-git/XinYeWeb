<template>
 <div>
   <profile-head :profileMessage="profileMessage"></profile-head>
   <profile-button @firstcontent="first" @secondcontent="second" @thirdcontent="third" @forthcontent="forth"></profile-button>
   <div v-if="1===currentindex">
     <profile-time></profile-time>
     <profile-date></profile-date>
   </div>
   <div v-if="2===currentindex" >
  <profilebook></profilebook>
   </div>
   <div v-if="3===currentindex">
  <profilegive></profilegive>
   </div>
   <div v-if="4===currentindex">
  <profilemanage></profilemanage>
   </div>

 </div>
</template>

<script>
  import ProfileHead from "./childComps/ProfileHead";
  import ProfileButton from "./childComps/ProfileButton";
  import ProfileTime from "./childComps/ProfileTime";
  import ProfileDate from "./childComps/ProfileDate";
  import {checkProfiledata} from 'network/profile'
  import Profilebook from "./childComps/Profilebook";
  import Profilegive from "./childComps/Profilegive";
  import Profilemanage from "./childComps/Profilemanage";
  export default {
    name: "Profile",
    data(){
      return{
        profileMessage:{},
        currentindex:1
      }
    },
    components: {Profilemanage, Profilegive, Profilebook, ProfileDate, ProfileTime, ProfileButton, ProfileHead},
    created(){
      checkProfiledata().then(res=>{
        this.profileMessage=res
      })

    },
    methods:{
      first(current){
        this.currentindex=current
      },
      second(current){
        this.currentindex=current
      },
      third(current){
        this.currentindex=current
      },
      forth(current){
        this.currentindex=current
      }
    }
  }
</script>

<style scoped>

</style>