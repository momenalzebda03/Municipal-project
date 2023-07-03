<template>
    <section class="div_footer font_text bg-white">
        <div class="row row_width">
            <router-link to="/news"
                :class="{ 'div_active': isActive('/news') || isActive('/albums') || isActive('/albumsviedo') }"
                class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المركزالإعلامي</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="/list" :class="{ 'div_active': isActive('/list') || isActive('/development') }"
                class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المشاريع</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="/public"
                :class="{ 'div_active': isActive('/public') || isActive('/water') || isActive('/system') }"
                class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>الخدمات</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="/place"
                :class="{ 'div_active': isActive('/place') || isActive('/civilization') || isActive('/biology1') || isActive('/archaeology') || isActive('/citymap') || isActive('/museum') || isActive('/Archaeology1') || isActive('/photo') }"
                class="col pt-4 text-center back_hover text-black text-decoration-none">
                <p>المدينة</p>
                <div class="p_border"></div>
            </router-link>
            <router-link to="/muiciapl"
                :class="{ 'div_active': isActive('/muiciapl') || isActive('/objectives') || isActive('/policy') || isActive('/date') || isActive('/council') || isActive('/members') || isActive('/sessions') || isActive('/committee') || isActive('/biology') || isActive('/plan') || isActive('/structure') || isActive('/money') || isActive('/money1') || isActive('/accompanying') || isActive('/centers') || isActive('/centers1') || isActive('/centers2') || isActive('/centers3') || isActive('/centers4') || isActive('/centers5') || isActive('/centers6') || isActive('/centers7') }"
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