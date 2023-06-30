<template>
    <div class="div_width position-relative">
        <router-link to="/public" title="الخدمات العامة" :class="{ 'active': isActive('/public') || isActive('/water') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-taxi fs-5"></i>
        </router-link>
        <router-link to="/system" title="دليل المعاملات" :class="{ 'active': isActive('/system') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-book fs-5"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap4",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>