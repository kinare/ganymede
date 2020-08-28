<template>
  <section class="container">
    <h3 class="heading has-text-centered has-margin-top-20">
      Nearby Restaurants
    </h3>

    <div class="columns is-multiline">
      <div class="column is-full-mobile">
        <div
          v-for="(restaurant, index) in restaurants"
          :key="index"
          @click="$router.push(`/menu/${restaurant.id}`)"
          class="box has-margin-left-10 has-margin-right-10 has-margin-top-20 has-margin-bottom-20"
          style="position: relative; height: 100px"
        >
          <div
            class="item-image"
            style="border-top-left-radius: 6px; border-bottom-left-radius: 6px; position: absolute; top: 0; bottom: 0; left: 0; height: 100%; width: 30%; background: url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)  center center / cover no-repeat no-repeat;;"
          ></div>
          <div
            style="width: 70%; height: 100%; box-sizing: border-box; padding: 20px 10px; position: absolute; top: 0; bottom: 0; right: 0;"
          >
            <h4 class="is-size-6" style="font-weight: bolder">
              {{ restaurant.name }}
            </h4>
            <p class="is-size-7">{{ restaurant.description }}</p>
            <p class="is-size-7">{{ restaurant.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NearByList",
  computed: {
    restaurants() {
      return this.$store.getters["Restaurants/restaurants"];
    }
  }
};
</script>

<style scoped></style>
