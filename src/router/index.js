import { createRouter, createWebHistory } from "vue-router";
import CompHome from "../components/PageHome.vue";
import ComApplication from "../components/PageApplication.vue";
import ComPropsals from "../components/PageProposals.vue";
import ComQuestions from "../components/PageQuestions.vue";
import KpapImage from "../components/PageImage.vue";
import KpapMore from "../components/PageImageMore.vue";
import KpapMuiciapl from "../components/MunicipalHome.vue";
import KpapObjectives from "../components/MuniciaplHomeObjectives.vue";
import KpapPolicy from "../components/MuniciapHomePolicy.vue";
import KpapDate from "../components/PageDate.vue";
import KpapCouncil from "../components/MuniciapCouncil.vue";
import KpapMembers from "../components/MuniciapMembers.vue";
import KpapSessions from "../components/MuniciapSessions.vue";
import KpapCommittee from "../components/MuniciapCommittee.vue";
import KpapBiology from "../components/MuniciapBiology.vue";

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
  {
    path: "/muiciapl",
    name: "muiciapl",
    component: KpapMuiciapl,
  },
  {
    path: "/objectives",
    name: "objectives",
    component: KpapObjectives,
  },
  {
    path: "/policy",
    name: "policy",
    component: KpapPolicy,
  },
  {
    path: "/date",
    name: "date",
    component: KpapDate,
  },
  {
    path: "/council",
    name: "council",
    component: KpapCouncil,
  },
  {
    path: "/members",
    name: "members",
    component: KpapMembers,
  },
  {
    path: "/sessions",
    name: "sessions",
    component: KpapSessions,
  },
  {
    path: "/committee",
    name: "committee",
    component: KpapCommittee,
  },
  {
    path: "/biology",
    name: "biology",
    component: KpapBiology,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
