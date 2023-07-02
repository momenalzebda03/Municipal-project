<template>
    <section>
        <div class="container-fluid text-center text-md-end px-4 px-md-5 mt-md-5 pt-5 font_text overflow-hidden">
            <KpapHeaderThreeOne />
            <div data-aos="fade-left"
                class="d-flex gap-3 flex-md-row flex-column justify-content-center justify-content-md-end align-items-center">
                <h5 class="span_red">رؤيتنا</h5>
                <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color"></i>
            </div>
            <p data-aos="fade-left" class="mt-3 me-md-2 p_bottom">تسعى بلدية غزة إلى أن تكون مدينة غزة، مركزا اقتصاديا
                وحضاريا وثقافيا<br>لقطاع غزة، وتقدم البلدية في سبيل الوصول إلى ذلك خدمات متميزة<br> ضمن بيئة مستدامة ومشاركة
                مجتمعية واعية، يسود فيها الأمن والعدالة<br>.الإجتماعية، وتفتخر بأصالتها وإرثها الحضاري الفلسطيني</p>
        </div>
    </section>
</template>

<script>
import KpapHeaderThreeOne from "../folder header and footer/Header3_1.vue";
export default {
    name: "KpapMuiciapl",
    created() {
        this.changePageTitle('البلدية - رؤيتنا');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
    components: {
        KpapHeaderThreeOne
    }
}
</script>