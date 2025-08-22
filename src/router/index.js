import { createRouter, createWebHashHistory } from "vue-router";
// import parent from "../components/parent.vue";
const header = () => import("../components/header.vue");

const routes = [
  {
    path: "/",
    component: header,
  },
];

const router = createRouter({
  history: createWebHashHistory("/testing/"),
  routes,
});


export default router;
