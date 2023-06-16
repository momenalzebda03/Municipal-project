<template>
    <div class="div_width position-relative">
        <router-link to="/" v-if="shouldShowBackground"
            class="py-5 d-flex active justify-content-center div_border text-decoration-none">
            <i title="الرجوع" class="fas fa-chevron-right fs-4 icon_color"></i>
        </router-link>
        <router-link to="/" v-if="header_all" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i title="الرجوع" class="fas fa-home fs-4"></i>
        </router-link>
        <router-link v-if="header_all" :class="{ 'active': isActive('/application') }" to="/application"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i title="تطبيق الموبايل" class="fal fa-mobile fs-4"></i>
        </router-link>
        <router-link v-if="header_all" to="/proposals" :class="{ 'active': isActive('/proposals') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i title="تواصل معنا" class="fas fa-tty fs-4"></i>
        </router-link>
        <router-link v-if="header_all" to="/questions" :class="{ 'active': isActive('/questions') }"
            class="py-5 d-flex justify-content-center div_border mb-5 text-decoration-none">
            <i title="الأسئلة الشائعة" class="far fa-question-circle fs-4"></i>
        </router-link>
        <div v-if="header_all" class="div_bottom position-absolute mb-4 d-flex flex-column gap-2 font_text">
            <p class="position-absolute fw-bold p_rights">جميع الحقوق محفوظة لدى <span class="span_red">بلدية غزة</span>
                &copy; 2023
            </p>
            <a href="#">
                <i class="fab fa-twitter-square fs-3 icon_color icon_hover"></i>
            </a>
            <a href="#">
                <i class="fab fa-instagram-square fs-3 icon_color icon_hover"></i>
            </a>
            <a href="#">
                <i class="fab fa-facebook-square fs-3 icon_color icon_hover"></i>
            </a>
        </div>
        <div v-if="shouldShowBackground" class="div_bottom position-absolute mb-4 d-flex flex-column gap-4">
            <a href="#">
                <i class="fa-solid fa-font fs-5 text-black icon_hover"></i>
            </a>
            <a href="#">
                <i class="fas fa-wrench fs-5 text-black icon_hover"></i>
            </a>
            <a href="#">
                <i class="fas fa-print fs-5 text-black icon_hover"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap",
    computed: {
        shouldShowBackground() {
            return this.$route.path == '/image';
        },
        header_all() {
            return this.$route.path !== '/image';
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>