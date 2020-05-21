<template>
  <div class="works">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Works"
  }
</script>

<style scoped>
.works{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>