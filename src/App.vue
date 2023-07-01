<template>
  <div class="d-flex div_height_vh">
    <div class="w-100">
      <div class="d-flex position-fixed w-100 h-100">
        <div class="w-100 d-flex justify-content-between flex-column">
          <HeaderCpap v-if="header_none" />
          <FooterKpap v-if="footer_none" class="footer_top" />
        </div>
        <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" v-if="header_none" class="h-100">
        <HeaderRightCpap class="bg-white"
          v-if="header_right_none && !isMuiciaplRoute && !isMuiciaplRoute1 && !isMuiciaplRoute2" />
        <HeaderRightCpap1 v-if="isMuiciaplRoute" class="bg-white overflow-auto" />
        <HeaderRightCpap2 v-if="isMuiciaplRoute1" class="bg-white overflow-auto" />
        <HeaderRightCpap3 v-if="isMuiciaplRoute2" class="bg-white overflow-auto" />
      </div>
      <div class="div_show" v-if="header_none"></div>
      <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background position-absolute">
      <section v-if="shouldShowBackground1" class="container-fluid ms-0 ps-md-5 text-center text-md-start my-3 my-md-4">
        <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
      </section>
      <router-view />
      <div class="mt-5 pt-5" v-if="div_margin_none"></div>
    </div>
    <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" v-if="header_none1">
    <div class="div_width"></div>
  </div>
</template>

<!-- <template>
  <div class="d-flex">
    <div class="w-100">
      <HeaderCpap v-if="header_none" />
      <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt=""
      class="image_background position-absolute">
      <section v-if="shouldShowBackground1" class="container-fluid ms-0 ps-md-5 text-center text-md-start my-3 my-md-4">
        <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
      </section>
      <router-view />
      <FooterKpap v-if="footer_none" />
    </div>
    <div>
      <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" v-if="header_none" class="image_hgiht">
    </div>
    <HeaderRightCpap v-if="header_right_none && !isMuiciaplRoute && !isMuiciaplRoute1 && !isMuiciaplRoute2" />
    <HeaderRightCpap1 v-if="isMuiciaplRoute" />
    <HeaderRightCpap2 v-if="isMuiciaplRoute1" />
    <HeaderRightCpap3 v-if="isMuiciaplRoute2" />
  </div>
</template> -->

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderCpap from "./components/folder header and footer/PageHeader.vue";
import HeaderRightCpap from "./components/folder header and footer/PageHeaderRight.vue";
import FooterKpap from "./components/folder header and footer/PageFooter.vue";
import HeaderRightCpap1 from "./components/folder header and footer/PageHeaderRgith2.vue";
import HeaderRightCpap2 from "./components/folder header and footer/PageHeaderRight3.vue";
import HeaderRightCpap3 from "./components/folder header and footer/PageHeaderRgith4.vue";

export default {
  components: {
    HeaderCpap,
    HeaderRightCpap,
    FooterKpap,
    HeaderRightCpap1,
    HeaderRightCpap2,
    HeaderRightCpap3
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
    header_right_none() {
      return this.$route.path !== "/more";
    },
    header_none() {
      return this.$route.path !== "/more";
    },
    header_none1() {
      return this.$route.path === "/image" || this.$route.path === "/accompanying" || this.$route.path === "/centers7" || this.$route.path === "/centers1" || this.$route.path === "/centers2" || this.$route.path === "/centers3" || this.$route.path === "/centers4" || this.$route.path === "/centers5" || this.$route.path === "/centers6" || this.$route.path === "/biology1" || this.$route.path === "/archaeology" || this.$route.path === "/citymap" || this.$route.path === "/photo";
    },
    shouldShowBackground() {
      return this.$route.path !== "/" && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/accompanying" && this.$route.path !== "/biology1" && this.$route.path !== "/archaeology" && this.$route.path !== "/citymap" && this.$route.path !== "/photo";
    },

    shouldShowBackground1() {
      return this.$route.path !== "/" && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/date" && this.$route.path !== "/accompanying" && this.$route.path !== "/biology1" && this.$route.path !== "/archaeology" && this.$route.path !== "/citymap" && this.$route.path !== "/photo";
    },
    footer_none() {
      return this.$route.path !== "/image" && this.$route.path !== "/more";
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener("scroll", AOS.refresh);
  }
}
</script>