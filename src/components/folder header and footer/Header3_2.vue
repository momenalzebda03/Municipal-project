<template>
    <section class="text-end px-3 px-md-5">
        <div class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden">
            <h4 class="fw-bold span_red">المجلس البلدي</h4>
            <div class="d-flex flex-column flex-md-row justify-content-end my-3 my-md-5 border-3 border-bottom">
                <router-link to="/biology" :class="{ 'div_border_bottom': isActive('/biology') }"
                    class="px-lg-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>لجان الأحياء</p>
                </router-link>
                <router-link to="/committee" :class="{ 'div_border_bottom': isActive('/committee') }"
                    class="my-2 my-md-0 px-lg-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>جلسات لجنة التنظيم</p>
                </router-link>
                <router-link to="/sessions" :class="{ 'div_border_bottom': isActive('/sessions') }"
                    class="px-lg-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>جلسات المجلس</p>
                </router-link>
                <router-link to="/members" :class="{ 'div_border_bottom': isActive('/members') }"
                    class="my-2 my-md-0 px-lg-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>أعضاء المجلس البلدي</p>
                </router-link>
                <router-link to="/council" :class="{ 'div_border_bottom': isActive('/council') }"
                    class="mx-0 px-lg-5 icon_click text-center border_bottom_hover text-black text-decoration-none">
                    <p>كلمة رئيس البلدية</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "KpapHeaderThreeTow",
    created() {
        this.changePageTitle('البلدية - المجلس');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>