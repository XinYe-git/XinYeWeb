<template>
  <div class="order">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Order"
  }
</script>

<style scoped>
.order{
  width: 575px;
  display: flex;
  margin: 0 auto;
}
</style>