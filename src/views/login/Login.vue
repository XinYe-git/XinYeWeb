<template>
  <div>
    <login-head></login-head>
    <login-body></login-body>
  </div>
</template>

<script>
  import LoginHead from "./childComps/LoginHead";
  import LoginBody from "./childComps/LoginBody";
  export default {
    name: "Login",
    components: {LoginBody, LoginHead}
  }
</script>

<style scoped>

</style>