<template>
  <div class="d-flex justify-content-between">
    <div class="w-100">
      <HeaderCpap class="pb-2 pb-lg-5" />
      <router-view />
      <img v-if="shouldShowBackground" src="../src/assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background position-absolute">
      <FooterKpap />
    </div>
    <div>
      <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" class="image_hgiht">
    </div>
    <HeaderRightCpap />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderCpap from "../src/components/PageHeader.vue";
import HeaderRightCpap from "../src/components/PageHeaderRight.vue";
import FooterKpap from "../src/components/PageFooter.vue";

export default {
  components: {
    HeaderCpap,
    HeaderRightCpap,
    FooterKpap
  },
  computed: {
    shouldShowBackground() {
      return this.$route.path !== '/';
    }
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', AOS.refresh);
  }
}
</script>