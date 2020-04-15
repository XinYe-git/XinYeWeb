<template>
 <div>
   <profile-head></profile-head>
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
  export default {
    name: "Profile",
    components: {ProfileDate, ProfileTime, ProfileButton, ProfileHead}
  }
</script>

<style scoped>

</style>