<template>
    <div class="div_width flex-column">
        <router-link to="/news" title="الأخبار" :class="{ 'active': isActive('/news') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-newspaper fs-5"></i>
        </router-link>
        <router-link to="/albums" title="الألبومات" :class="{ 'active': isActive('/albums') || isActive('/albumsviedo') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-photo-video fs-5"></i>
        </router-link>
        <router-link to="/reports" title="تقارير وإصدارات" :class="{ 'active': isActive('/reports') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-folder-open fs-5"></i>
        </router-link>
        <router-link to="/numbers" title="أرقام وأحصائيات" :class="{ 'active': isActive('/numbers') }"
            class="div_border d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-globe fs-5"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap6",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>