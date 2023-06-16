import { createRouter, createWebHistory } from "vue-router";
import CompHome from "../components/PageHome.vue";
import ComApplication from "../components/PageApplication.vue";
import ComPropsals from "../components/PageProposals.vue";
import ComQuestions from "../components/PageQuestions.vue";
import KpapImage from "../components/PageImage.vue";
import KpapMore from "../components/PageImageMore.vue";

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
  {
    path: "/image",
    name: "image",
    component: KpapImage,
  },
  {
    path: "/more",
    name: "more",
    component: KpapMore,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
