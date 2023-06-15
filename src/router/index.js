import { createRouter, createWebHistory } from "vue-router";
import CompHome from "../components/PageHome.vue";
import ComApplication from "../components/PageApplication.vue";
import ComPropsals from "../components/PageProposals.vue";
import ComQuestions from "../components/PageQuestions.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: CompHome,
  },
  {
    path: "/application",
    name: "application",
    component: ComApplication,
  },
  {
    path: "/proposals",
    name: "proposals",
    component: ComPropsals,
  },
  {
    path: "/questions",
    name: "questions",
    component: ComQuestions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
