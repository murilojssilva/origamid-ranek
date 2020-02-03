import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
