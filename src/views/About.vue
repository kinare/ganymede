<template>
  <section class="hero is-fullheight is-white is-bold">
    <div class="hero-body">
      <div class="container">
        <logo />
        <h1 class="is-size-1 heading">No Touch Menu</h1>
        <p class="subtitle">
          No touch menu is a Qr scanner for restaurants, it aids in preventing
          the spread of covid by providing a touchless menu
        </p>
        <hr />
        <h5 class="heading">Credits</h5>
        <p class=" has-text-gray-300 is-size-7">Karani : Founder</p>
        <p class="has-text-gray-300 is-size-7">Michael : Developer</p>
      </div>
    </div>
  </section>
</template>
<script>
import Logo from "@/components/Logo";
export default {
  components: { Logo }
};
</script>
