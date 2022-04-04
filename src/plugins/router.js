import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";

Vue.use(VueRouter);

const Routes = {
  mode: "history",
  routes: [
    { path: "/about", component: HelloWorld },
    { path: "/dashboard", component: HelloWorld },
    { path: "/login", component: HelloWorld }
  ]
};

export default new VueRouter(Routes);
