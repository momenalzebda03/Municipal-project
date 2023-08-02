<template>
    <div class="div_width flex-column">
        <router-link to="/public" title="الخدمات العامة"
            :class="{ 'active': isActive('/public') || isActive(`/water/${this.photoId}`) }"
            class="div_border d-flex justify-content-center div_border text-decoration-none px-4">
            <i class="fas fa-taxi fs-5"></i>
        </router-link>
        <router-link to="/system" title="دليل المعاملات" :class="{ 'active': isActive('/system') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none px-4">
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
    },
    computed: {
        photoId() {
            return this.$route.params.id;
        },
    }
}
</script>