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
import KpapCenters from "../components/folder Municipal/MunicipalCenters.vue";
import KpapCenters1 from "../components/folder Municipal/PageCenters.vue";
import KpapPlace from "../components/folder city/CityPlace.vue";
import KpapCivilization from "../components/folder city/CityCivilization.vue";

const routes = [
  {
    path: "/",
    component: CompHome,
  },
  {
    path: "/application",
    component: ComApplication,
  },
  {
    path: "/proposals",
    component: ComPropsals,
  },
  {
    path: "/questions",
    component: ComQuestions,
  },
  {
    path: "/image",
    component: KpapImage,
  },
  {
    path: "/more",
    component: KpapMore,
  },
  {
    path: "/muiciapl",
    component: KpapMuiciapl,
  },
  {
    path: "/objectives",
    component: KpapObjectives,
  },
  {
    path: "/policy",
    component: KpapPolicy,
  },
  {
    path: "/date",
    component: KpapDate,
  },
  {
    path: "/council",
    component: KpapCouncil,
  },
  {
    path: "/members",
    component: KpapMembers,
  },
  {
    path: "/sessions",
    component: KpapSessions,
  },
  {
    path: "/committee",
    component: KpapCommittee,
  },
  {
    path: "/biology",
    component: KpapBiology,
  },
  {
    path: "/plan",
    component: Kpapplan,
  },
  {
    path: "/structure",
    component: KpapStructure,
  },
  {
    path: "/money",
    component: KpapMoney,
  },
  {
    path: "/money1",
    component: KpapMoney1,
  },
  {
    path: "/accompanying",
    component: KpapAccompanying,
  },
  {
    path: "/centers",
    component: KpapCenters,
  },
  {
    path: "/centers1",
    component: KpapCenters1,
  },
  {
    path: "/centers2",
    component: KpapCenters1,
  },
  {
    path: "/centers3",
    component: KpapCenters1,
  },
  {
    path: "/centers4",
    component: KpapCenters1,
  },
  {
    path: "/centers5",
    component: KpapCenters1,
  },
  {
    path: "/centers6",
    component: KpapCenters1,
  },
  {
    path: "/centers7",
    component: KpapCenters1,
  },
  {
    path: "/place",
    component: KpapPlace,
  },
  {
    path: "/civilization",
    component: KpapCivilization,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
