import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import PageNotFound from "../views/PageNotFound.vue";
import AddUser from "../views/AddUser.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  { path: "/addUser", name: "addUser", component: AddUser },
  {
    path: "/users",
    name: "users",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Users
  },
  { path: "*", component: PageNotFound }
];

const router = new VueRouter({
  mode: "history",
  routes,
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || PageNotFound;
    }
  }
});

export default router;
