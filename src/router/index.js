import { createRouter, createWebHistory } from "vue-router";
import CompHome from "../components/PageHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CompHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
