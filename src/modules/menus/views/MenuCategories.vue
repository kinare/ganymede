<template>
  <div>
    <section
      class="hero is-small is-dark is-bold"
      style="background: url(https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)  center center / cover no-repeat no-repeat"
    >
      <div class="hero-head">
        <b-navbar>
          <template slot="brand">
            <b-navbar-item @click="$router.go(-1)">
              <b-icon icon="arrow-left" />
            </b-navbar-item>
          </template>
        </b-navbar>
      </div>
      <div
        class="hero-body"
        style="padding-bottom: 0.5rem; padding-top: 0.5rem;"
      >
        <div class="container has-text-centered">
          <h3 class="heading has-text-white is-size-6">
            {{ restaurant.name }}
          </h3>
          <h3 class="heading has-text-white is-size-6">Menu</h3>
        </div>
      </div>
    </section>
    <nav class="panel">
      <div class="panel-block">
        <b-field style="width: 100%">
          <b-input
            placeholder="Search..."
            type="search"
            icon="magnify"
            size="is-small"
            v-model="term"
          >
          </b-input>
        </b-field>
      </div>
      <p class="panel-tabs">
        <a :class="category === '' ? 'is-active' : ''" @click="category = ''"
          >All</a
        >
        <a
          :class="categ === category ? 'is-active' : ''"
          v-for="(categ, index) in categories"
          :key="index"
          @click="category = categ"
          >{{ categ }}</a
        >
      </p>
      <a
        v-for="(menu, index) in menus"
        :key="index"
        class="panel-block is-flex justify-space-between"
      >
        <p style="max-width: 67%">
          <span class="is-size-6 has-text-weight-bold has-text-primary">{{
            menu.name
          }}</span
          ><br />
          <span class="has-text-green-300" style="font-size: 0.75rem ">{{
            menu.description
          }}</span>
        </p>
        KES {{ menu.price }}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MenuCategories",
  data: function() {
    return {
      category: "",
      term: ""
    };
  },
  computed: {
    restaurant() {
      return this.$store.getters["Restaurants/restaurants"]
        .filter(res => {
          return res.id === this.$route.params.id;
        })
        .shift();
    },
    categories() {
      let cat = [];
      for (let key in this.restaurant.menu.categories) {
        cat.push(key);
      }
      return cat;
    },
    menus() {
      let items = [];
      if (this.category === "") {
        for (let key in this.restaurant.menu.categories) {
          items.push(...this.restaurant.menu.categories[key]);
        }
      } else {
        items = this.restaurant.menu.categories[this.category];
      }

      return this.term === ""
        ? items
        : items.filter(item => {
            return (
              item.name.toLowerCase().indexOf(this.term.toLowerCase()) >= 0 ||
              item.description.toLowerCase().indexOf(this.term.toLowerCase()) >=
                0
            );
          });
    }
  }
};
</script>

<style scoped></style>
