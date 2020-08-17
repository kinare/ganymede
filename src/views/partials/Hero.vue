<template>
  <section
    class="hero is-dark is-bold is-small"
    style="background: url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=757&q=80) center center / cover no-repeat no-repeat;"
  >
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <Nav />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h4
          class="heading is-size-5-mobile has-text-weight-bold"
          style="text-shadow: 2px -1px 6px rgba(150, 150, 150, 1);"
        >
          No touch menu for restaurants
        </h4>
      </div>
    </div>

    <b-button
      class="scan-button is-rounded"
      type="is-primary"
      size="is-medium"
      icon-left="qrcode-scan"
    >
      Scan QR
    </b-button>
  </section>
</template>

<script>
import Nav from "../../components/Nav";

export default {
  name: "Hero",
  components: {
    Nav
  }
};
</script>

<style scoped>
.scan-button {
  z-index: 1000;
  position: fixed;
  bottom: 20px;
  right: 30px;
  -webkit-box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.24);
  box-shadow: 10px 10px 10px -2px rgba(0, 0, 0, 0.24);
}
</style>
