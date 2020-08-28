<template>
  <div class="landing">
    <hero />

    <near-by-list />
  </div>
</template>

<script>
import Hero from "@/views/partials/Hero";
import NearByList from "@/views/partials/NearbyList";
export default {
  name: "Landing",
  components: { NearByList, Hero }
};
</script>

<style scoped></style>
