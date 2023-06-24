import { createRouter, createWebHistory } from "vue-router";
import CompHome from "../components/folder Main/PageHome.vue";
import ComApplication from "../components/folder Main/PageApplication.vue";
import ComPropsals from "../components/folder Main/PageProposals.vue";
import ComQuestions from "../components/folder Main/PageQuestions.vue";
import KpapImage from "../components/folder Main/PageImage.vue";
import KpapMore from "../components/folder Main/PageImageMore.vue";
import KpapMuiciapl from "../components/folder Municipal/MunicipalHome.vue";
import KpapObjectives from "../components/folder Municipal/MuniciaplHomeObjectives.vue";
import KpapPolicy from "../components/folder Municipal/MuniciapHomePolicy.vue";
import KpapDate from "../components/folder Municipal/PageDate.vue";
import KpapCouncil from "../components/folder Municipal/MuniciapCouncil.vue";
import KpapMembers from "../components/folder Municipal/MuniciapMembers.vue";
import KpapSessions from "../components/folder Municipal/MuniciapSessions.vue";
import KpapCommittee from "../components/folder Municipal/MuniciapCommittee.vue";
import KpapBiology from "../components/folder Municipal/MuniciapBiology.vue";
import Kpapplan from "../components/folder Municipal/MuniciapPlan.vue";
import KpapStructure from "../components/folder Municipal/MuniciapStructure.vue";
import KpapMoney from "../components/folder Municipal/MuniciapMoney.vue";
import KpapMoney1 from "../components/folder Municipal/MuniciapMoney1.vue";
import KpapAccompanying from "../components/folder Municipal/MuniciapAccompanying.vue";

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
  {
    path: "/plan",
    name: "plan",
    component: Kpapplan,
  },
  {
    path: "/structure",
    name: "structure",
    component: KpapStructure,
  },
  {
    path: "/money",
    name: "money",
    component: KpapMoney,
  },
  {
    path: "/money1",
    name: "money1",
    component: KpapMoney1,
  },
  {
    path: "/accompanying",
    name: "accompanying",
    component: KpapAccompanying,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
