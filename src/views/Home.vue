<template>
  <div id="home">
    <hero />

    <near-by-list />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from "@/views/partials/Hero";
import NearByList from "@/views/partials/NearbyList";
export default {
  name: "Home",
  components: { NearByList, Hero }
};
</script>
