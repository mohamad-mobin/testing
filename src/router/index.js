import { createRouter, createWebHashHistory } from "vue-router";
// import parent from "../components/parent.vue";
const parent = () => import('../components/parent.vue')
const about = () => import("../components/about.vue");
const home = () => import("../components/home.vue");
const login = () => import("../components/login.vue");

const routes = [
  {
    path: "/",
    component: parent,
    children:[
        {
            path:'about',
            component: about,
            name:'about'
        },
        {
            path:'home/:id?',
            component: home,
            name:'home'
        },
        {
            path:'login',
            component: login,
            name:'login'
        }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory("/testing/"),
  routes,
});


export default router;
