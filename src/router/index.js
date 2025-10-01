import HomeBase from "@/views/homeBase.vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import parent from "../components/parent.vue";
const header = () => import("../components/headerMenu.vue");
const product = () => import("../views/product.vue");
const homeBase = () => import("../views/homeBase.vue");


const routes = [
  {
    path: "/",
    component: homeBase,
  },
  {
    path: "/product/:id",
    name:'productPage',
    component: product,
  },
];

const router = createRouter({
  history: createWebHashHistory("/testing/"),
  routes,
});


export default router;
