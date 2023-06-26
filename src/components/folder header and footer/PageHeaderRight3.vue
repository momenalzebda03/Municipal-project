<template>
    <div class="div_width position-relative">
        <router-link to="/place" title="الموقع" :class="{ 'active': isActive('/place') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-map-marker-alt fs-5"></i>
        </router-link>
        <router-link to="/civilization" title="الحضارة" :class="{ 'active': isActive('/civilization') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-hourglass-half fs-5"></i>
        </router-link>
        <router-link to="/" title="السكن" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-unlock fs-5"></i>
        </router-link>
        <router-link to="/" title="التاريخ" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-map-marked-alt fs-5"></i>
        </router-link>
        <router-link to="/" title="الخريطة" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-map fs-5"></i>
        </router-link>
        <router-link to="/" title="المتحف" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fab fa-fort-awesome fs-5"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap2",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>