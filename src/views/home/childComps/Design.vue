<template>
  <div class="design">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Design"
  }
</script>

<style scoped>
  .design{
    width: 516px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>