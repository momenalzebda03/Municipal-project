<template>
  <div class="d-flex justify-content-between">
    <div class="w-100">
      <HeaderCpap class="pb-2 pb-lg-5" />
      <router-view />
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