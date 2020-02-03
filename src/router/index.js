import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Produto from "../views/Produto";
import Login from "../views/Login";
import Usuario from "../views/usuario/Usuario";

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
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/usuario",
    name: "usuario",
    component: Usuario
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
