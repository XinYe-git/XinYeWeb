<template>
 <div>
   <profile-head :profileMessage="profileMessage"></profile-head>
   <profile-button></profile-button>
   <profile-time></profile-time>
   <profile-date></profile-date>
 </div>
</template>

<script>
  import ProfileHead from "./childComps/ProfileHead";
  import ProfileButton from "./childComps/ProfileButton";
  import ProfileTime from "./childComps/ProfileTime";
  import ProfileDate from "./childComps/ProfileDate";
  import {checkProfiledata} from 'network/profile'
  export default {
    name: "Profile",
    data(){
      return{
        profileMessage:{}
      }
    },
    components: {ProfileDate, ProfileTime, ProfileButton, ProfileHead},
    created(){
      checkProfiledata().then(res=>{
        this.profileMessage=res
      })

    }
  }
</script>

<style scoped>

</style>