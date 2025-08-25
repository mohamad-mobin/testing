import HomeBase from "@/components/homeBase.vue";
import { createRouter, createWebHashHistory } from "vue-router";
// import parent from "../components/parent.vue";
const header = () => import("../components/headerMenu.vue");
const product = () => import("../components/product.vue");
const homeBase = () => import("../components/homeBase.vue");


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
