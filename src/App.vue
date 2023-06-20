<template>
  <div class="d-flex justify-content-between">
    <div class="w-100">
      <HeaderCpap v-if="header_none" />
      <router-view />
      <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background position-absolute">
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
import HeaderCpap from "../src/components/PageHeader.vue";
import HeaderRightCpap from "../src/components/PageHeaderRight.vue";
import FooterKpap from "../src/components/PageFooter.vue";
import HeaderRightCpap1 from "../src/components/PageHeaderRgith2.vue";

export default {
  components: {
    HeaderCpap,
    HeaderRightCpap,
    FooterKpap,
    HeaderRightCpap1
  },
  computed: {
    isMuiciaplRoute() {
      return this.$route.path === '/muiciapl' || this.$route.path == '/objectives' || this.$route.path == '/muiciapl' || this.$route.path == '/policy' || this.$route.path == '/date' || this.$route.path == '/council' || this.$route.path == '/members' || this.$route.path == '/sessions' || this.$route.path == '/committee';
    },
    header_right_none() {
      return this.$route.path !== "/more";
    },
    header_none() {
      return this.$route.path !== "/more";
    },
    shouldShowBackground() {
      return this.$route.path !== '/' && this.$route.path !== "/image" && this.$route.path !== "/more";
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