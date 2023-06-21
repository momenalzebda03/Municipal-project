<template>
    <section class="div_footer font_text">
        <div class="row row_width">
            <router-link to="" class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المركزالإعلامي</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="" class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المشاريع</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="" class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>الخدمات</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="" class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المدينة</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="/muiciapl"
                :class="{ 'div_active': isActive('/muiciapl') || isActive('/objectives') || isActive('/policy') || isActive('/date') || isActive('/council') || isActive('/members') || isActive('/sessions') || isActive('/committee') || isActive('/biology') }"
                class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>البلدية</p>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "FooterKpap",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>