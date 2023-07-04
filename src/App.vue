<template>
  <section class="d-flex height_100">
    <div class="w-100">
      <!-- start app header -->
      <div class="d-flex position-fixed w-100 div_index_4" v-if="header_none">
        <HeaderCpap v-if="header_none" class="w-100" />
        <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" class="image_none height_100"
          v-if="header_none">
        <!-- start header right main -->
        <div
          v-if="header_right_none && !isMuiciaplRoute && !isMuiciaplRoute1 && !isMuiciaplRoute2 && !isMuiciaplRoute3 && !isMuiciaplRoute4"
          class="div_menu_block d-none">
          <input type="checkbox" id="active">
          <label for="active"
            class="menu-btn bg-white border border-2 rounded-3 icon_click position-absolute col_index_2"><span></span></label>
          <label for="active" class="h-100 w-100"></label>
          <div class="wrapper top-0 h-100 position-fixed div_active w-100 container-fluid d-flex justify-content-center">
            <ul class="position-absolute w-75">
              <li><router-link to="/" class="router_link text-center py-3 position-absolute bg-white"><i title="الرئيسية"
                    class="fas fa-home fs-2 text-black icon_hover_white"></i></router-link>
              </li>
              <li><router-link to="/application" class="router_link text-center py-3 position-absolute bg-white"><i
                    title="تطبيق الموبايل" class="fal fa-mobile fs-2 text-black icon_hover_white"></i></router-link>
              </li>
              <li><router-link to="/proposals" class="router_link text-center py-3 position-absolute bg-white"><i
                    title="تواصل معنا" class="fas fa-tty fs-2 text-black icon_hover_white"></i></router-link>
              </li>
              <li><router-link to="/questions" class="router_link text-center py-3 position-absolute bg-white"><i
                    title="الأسئلة الشائعة"
                    class="far fa-question-circle fs-2 text-black icon_hover_white"></i></router-link>
              </li>
            </ul>
          </div>
        </div>
        <HeaderRightCpap class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none"
          v-if="header_right_none && !isMuiciaplRoute && !isMuiciaplRoute1 && !isMuiciaplRoute2 && !isMuiciaplRoute3 && !isMuiciaplRoute4" />
        <!-- end header right main -->
        <HeaderRightCpap1 v-if="isMuiciaplRoute" class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none" />
        <HeaderRightCpap2 v-if="isMuiciaplRoute1" class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none" />
        <HeaderRightCpap3 v-if="isMuiciaplRoute2" class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none" />
        <HeaderRightCpap4 v-if="isMuiciaplRoute3" class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none" />
        <HeaderRightCpap5 v-if="isMuiciaplRoute4" class="bg-white overflow-y-auto overflow-x-hidden height_100 image_none" />
      </div>
      <!-- end app header -->
      <div class="div_show" v-if="header_none"></div>
      <router-view />
      <div class="div_top_respons" v-if="div_margin_none"></div>
      <!-- start icon message -->
      <div class="d-flex align-items-end position-fixed div_bottom_10">
        <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt="">
      </div>
      <div class="d-flex align-items-end position-fixed message_bottom">
        <section v-if="shouldShowBackground1" class="ps-1 ps-md-5 position-absolute">
          <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
        </section>
      </div>
      <!-- end icon message -->
      <!-- start app footer -->
      <div class="d-flex align-items-end position-fixed w-100 div_height_none">
        <FooterKpap v-if="footer_none" class="w-100" />
        <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" class="image_none height_100"
          v-if="header_none">
        <div class="div_width image_none" v-if="header_none"></div>
      </div>
      <!-- end app footer -->
    </div>
    <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" class="image_none" v-if="header_none1">
    <div class="div_width image_none" v-if="header_none"></div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderCpap from "./components/folder header and footer/PageHeader.vue";
import HeaderRightCpap from "./components/folder header and footer/PageHeaderRight.vue";
import FooterKpap from "./components/folder header and footer/PageFooter.vue";
import HeaderRightCpap1 from "./components/folder header and footer/PageHeaderRgith2.vue";
import HeaderRightCpap2 from "./components/folder header and footer/PageHeaderRight3.vue";
import HeaderRightCpap3 from "./components/folder header and footer/PageHeaderRgith4.vue";
import HeaderRightCpap4 from "./components/folder header and footer/PageHeaderRight5.vue";
import HeaderRightCpap5 from "./components/folder header and footer/PageHeaderRight6.vue";

export default {
  components: {
    HeaderCpap,
    HeaderRightCpap,
    FooterKpap,
    HeaderRightCpap1,
    HeaderRightCpap2,
    HeaderRightCpap3,
    HeaderRightCpap4,
    HeaderRightCpap5
  },
  computed: {
    div_margin_none() {
      return this.$route.path !== "/accompanying" && this.$route.path !== "/citymap" && this.$route.path !== "/archaeology" && this.$route.path !== "/biology1" && this.$route.path !== "/photo" && this.$route.path !== "/image";
    },
    isMuiciaplRoute() {
      return this.$route.path === "/muiciapl" || this.$route.path == "/objectives" || this.$route.path == "/muiciapl" || this.$route.path == "/policy" || this.$route.path == "/date" || this.$route.path == "/council" || this.$route.path == "/members" || this.$route.path == "/sessions" || this.$route.path == "/committee" || this.$route.path == "/biology" || this.$route.path == "/plan" || this.$route.path == "/structure" || this.$route.path == "/money" || this.$route.path == "/money1" || this.$route.path == "/accompanying" || this.$route.path == "/centers" || this.$route.path == "/centers1" || this.$route.path == "/centers2" || this.$route.path == "/centers3" || this.$route.path == "/centers4" || this.$route.path == "/centers5" || this.$route.path == "/centers6" || this.$route.path == "/centers7";
    },
    isMuiciaplRoute1() {
      return this.$route.path === "/place" || this.$route.path === "/civilization" || this.$route.path === "/biology1" || this.$route.path === "/archaeology" || this.$route.path === "/citymap" || this.$route.path === "/museum" || this.$route.path === "/Archaeology1" || this.$route.path === "/photo";
    },
    isMuiciaplRoute2() {
      return this.$route.path === "/public" || this.$route.path === "/water" || this.$route.path === "/system";
    },
    isMuiciaplRoute3() {
      return this.$route.path === "/list" || this.$route.path === "/development";
    },
    isMuiciaplRoute4() {
      return this.$route.path === "/news" || this.$route.path === "/albums" || this.$route.path === "/albumsviedo" || this.$route.path === "/reports" || this.$route.path === "/numbers";
    },
    header_right_none() {
      return this.$route.path !== "/more" && this.$route.path !== "/viedo";
    },
    header_none() {
      return this.$route.path !== "/more" && this.$route.path !== "/viedo";
    },
    header_none1() {
      return this.$route.path === "/image" || this.$route.path === "/accompanying" || this.$route.path === "/centers7" || this.$route.path === "/centers1" || this.$route.path === "/centers2" || this.$route.path === "/centers3" || this.$route.path === "/centers4" || this.$route.path === "/centers5" || this.$route.path === "/centers6" || this.$route.path === "/biology1" || this.$route.path === "/archaeology" || this.$route.path === "/citymap" || this.$route.path === "/photo";
    },
    shouldShowBackground() {
      return this.$route.path !== "/" && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/viedo" && this.$route.path !== "/accompanying" && this.$route.path !== "/biology1" && this.$route.path !== "/archaeology" && this.$route.path !== "/citymap" && this.$route.path !== "/photo";
    },

    shouldShowBackground1() {
      return this.$route.path !== "/" && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/viedo" && this.$route.path !== "/date" && this.$route.path !== "/accompanying" && this.$route.path !== "/biology1" && this.$route.path !== "/archaeology" && this.$route.path !== "/citymap" && this.$route.path !== "/photo";
    },
    footer_none() {
      return this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/viedo";
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener("scroll", AOS.refresh);
  }
}
</script>