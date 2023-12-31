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
import KpapBiology1 from "../components/folder city/CityBiology.vue";
import KpapArchaeology from "../components/folder city/CityArchaeology.vue";
import KpapMap from "../components/folder city/CityMap.vue";
import KpapMuseum from "../components/folder city/CityMuseum.vue";
import KpapArchaeology1 from "../components/folder city/CityArchaeology1.vue";
import KpapPhoto from "../components/folder city/CityPhoto.vue";
import KpapPublic from "../components/folder services/Services Public.vue";
import KpapWater from "../components/folder services/Services Water delivery.vue";
import KpapSystem from "../components/folder services/Serivces System.vue";
import KpapList from "../components/folder projects/Page List.vue";
import KpapDevelopment from "../components/folder projects/Page Development.vue";
import KpapNews from "../components/folder media/PageNews.vue";
import KpapViedo from "../components/folder city/CityViedo.vue";
import KpapAlbums from "../components/folder media/PageAlbums.vue";
import KpapAlbumsVedio from "../components/folder media/PageVeido.vue";
import KpapReports from "../components/folder media/PageReports.vue";
import KpapNumbers from "../components/folder media/PageNumbers.vue";
import KpapSection from "../components/folder Municipal/MuniciapMergeThreeSections.vue";
import KpapCenter from "../components/folder Municipal/MuniciapCenter.vue";

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
  {
    path: "/biology1",
    component: KpapBiology1,
  },
  {
    path: "/archaeology",
    component: KpapArchaeology,
  },
  {
    path: "/citymap",
    component: KpapMap,
  },
  {
    path: "/museum",
    component: KpapMuseum,
  },
  {
    path: "/Archaeology1",
    component: KpapArchaeology1,
  },
  {
    path: "/photo/:id",
    component: KpapPhoto,
  },
  {
    path: "/public",
    component: KpapPublic,
  },
  {
    path: "/water/:id",
    component: KpapWater,
  },
  {
    path: "/system",
    component: KpapSystem,
  },
  {
    path: "/list",
    component: KpapList,
  },
  {
    path: "/development",
    component: KpapDevelopment,
  },
  {
    path: "/news",
    component: KpapNews,
  },
  {
    path: "/viedo",
    component: KpapViedo,
  },
  {
    path: "/albums",
    component: KpapAlbums,
  },
  {
    path: "/albumsviedo",
    component: KpapAlbumsVedio,
  },
  {
    path: "/reports",
    component: KpapReports,
  },
  {
    path: "/numbers",
    component: KpapNumbers,
  },
  {
    path: "/section",
    component: KpapSection,
  },
  {
    path: "/center",
    component: KpapCenter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
