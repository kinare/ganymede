<template>
  <div class="content" :class="`has-text-${align}`">
    <figure
      :style="align !== 'centered' ? 'text-align: unset; margin: 0 0' : ''"
    >
      <a href="/">
        <img
          src="@/assets/logo.jpg"
          alt="Logo"
          align="align"
          :width="size"
          :ligth="light"
        />
      </a>
    </figure>
  </div>
</template>

<script>
export default {
  name: "logo",
  props: {
    size: {
      type: Number,
      default: 70
    },
    light: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "centered"
    }
  }
};
</script>

<style scoped />
