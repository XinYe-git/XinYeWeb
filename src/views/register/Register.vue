<template>
  <div>
    <register-head></register-head>
    <register-body></register-body>
  </div>
</template>

<script>
  import RegisterHead from "./childComps/RegisterHead";
  import RegisterBody from "./childComps/RegisterBody";
  export default {
    name: "Register",
    components: {RegisterBody, RegisterHead}
  }
</script>

<style scoped>

</style>