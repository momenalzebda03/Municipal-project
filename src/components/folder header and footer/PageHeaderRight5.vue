<template>
    <div class="div_width position-relative">
        <router-link to="/list" title="المشاريع القائمة" :class="{ 'active': isActive('/list') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none px-4">
            <i class="fab fa-r-project fs-5"></i>
        </router-link>
        <router-link to="/development" title="المشاريع التطويرية" :class="{ 'active': isActive('/development') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none px-4">
            <i class="fas fa-lightbulb fs-5"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap5",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>