<template>
  <b-navbar type="is-black">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3>QR MENU</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Add My Restaurant</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped></style>
