import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/modules/landing/views/Landing";
import QrReader from "@/modules/qr/views/QrReader";
import Menu from "@/modules/menus/views/Menu";
import MenuCategories from "@/modules/menus/views/MenuCategories";
import MenuSubCategories from "@/modules/menus/views/MenuSubCategories";
import MenuOrder from "@/modules/menus/views/MenuOrder";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/scan",
    component: QrReader
  },
  {
    path: "/menu",
    component: Menu,
    children: [
      {
        path: ":id",
        component: MenuCategories
      },
      {
        path: "menu-items/:id/:sub_id",
        component: MenuSubCategories
      },
      {
        path: "menu-order",
        component: MenuOrder
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
