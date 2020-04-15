<template>
  <div>
    <xinye-map></xinye-map>
    <contact-way></contact-way>
    <feed-back></feed-back>
  </div>
</template>

<script>
  import XinyeMap from "./childComps/XinyeMap";
  import ContactWay from "./childComps/ContactWay";
  import FeedBack from "./childComps/FeedBack";
  export default {
    name: "Contact",
    components: {FeedBack, ContactWay, XinyeMap}
  }
</script>

<style scoped>

</style>