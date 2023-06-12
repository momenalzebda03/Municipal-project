<template>
  <div class="d-flex justify-content-between">
    <HeaderCpap class="w-100" />
    <img src="../src/assets/image_logo/ImageSeparator.png" alt="error" class="image_hgiht">
    <HeaderRightCpap />
  </div>
  <router-view />
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderCpap from "../src/components/PageHeader.vue";
import HeaderRightCpap from "../src/components/PageHeaderRight.vue";
export default {
  components: {
    HeaderCpap,
    HeaderRightCpap
  },
  mounted() {
    AOS.init();
    window.addEventListener('scroll', AOS.refresh);
  }
}
</script>