<template>
  <div class="d-flex justify-content-between">
    <div class="w-100">
      <HeaderCpap v-if="header_none" />
      <router-view />
      <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background position-absolute">
      <section v-if="shouldShowBackground1" class="container-fluid ms-0 ps-md-5 text-center text-md-start my-3 my-md-4">
        <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
      </section>
      <FooterKpap v-if="footer_none" />
    </div>
    <div>
      <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" v-if="header_none" class="image_hgiht">
    </div>
    <HeaderRightCpap v-if="header_right_none && !isMuiciaplRoute" />
    <HeaderRightCpap1 v-if="isMuiciaplRoute" />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderCpap from "./components/folder header and footer/PageHeader.vue";
import HeaderRightCpap from "./components/folder header and footer/PageHeaderRight.vue";
import FooterKpap from "./components/folder header and footer/PageFooter.vue";
import HeaderRightCpap1 from "./components/folder header and footer/PageHeaderRgith2.vue";

export default {
  components: {
    HeaderCpap,
    HeaderRightCpap,
    FooterKpap,
    HeaderRightCpap1
  },
  computed: {
    isMuiciaplRoute() {
      return this.$route.path === '/muiciapl' || this.$route.path == '/objectives' || this.$route.path == '/muiciapl' || this.$route.path == '/policy' || this.$route.path == '/date' || this.$route.path == '/council' || this.$route.path == '/members' || this.$route.path == '/sessions' || this.$route.path == '/committee' || this.$route.path == "/biology" || this.$route.path == "/plan" || this.$route.path == "/structure" || this.$route.path == "/money" || this.$route.path == "/money1" || this.$route.path == "/accompanying" || this.$route.path == "/centers";
    },
    header_right_none() {
      return this.$route.path !== "/more";
    },
    header_none() {
      return this.$route.path !== "/more";
    },
    shouldShowBackground() {
      return this.$route.path !== '/' && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/accompanying" && this.$route.path !== "/centers";
    },

    shouldShowBackground1() {
      return this.$route.path !== '/' && this.$route.path !== "/image" && this.$route.path !== "/more" && this.$route.path !== "/date" && this.$route.path !== "/accompanying";
    },
    footer_none() {
      return this.$route.path !== "/image" && this.$route.path !== "/more";
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', AOS.refresh);
  }
}
</script>