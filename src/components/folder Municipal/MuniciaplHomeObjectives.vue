<template>
    <div class="container-fluid text-center text-md-end px-0 px-md-5 mt-0 mt-md-5 pt-5 font_text overflow-hidden">
        <KpapHeaderThreeOne />
        <div data-aos="fade-left" class="d-flex gap-3 justify-content-center justify-content-md-end align-items-center">
            <h5 class="span_red">أهدافنا</h5>
            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle"></i>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.توفير خدمات حياتية أفضل للمواطنين</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">1</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.تشجيع المشاركة المجتمعية في إدارة العمل</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">2</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.خلق جو صحي للعمل والاستقرار الوظيفي</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">3</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.تشجيع المشروعات التنموية والتطويري</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">4</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.المساعدة في خلق فرص عمل</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">5</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.العمل على رفع قدرة الجهاز البلدي وكفاءته</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">6</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center align-items-md-start">
            <p class="mt-1"> العمل على خلق آلية تعاون وتكامل مع المؤسسات الحكومية<br> وتكثيف العلاقات مع الجهات الخارجية
                لتوفير المساعدات الفنية<br>.والمالية لمشاريع المدينة</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">7</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center align-items-md-start">
            <p class="mt-1"> تنفيذ مشاريع تطويرية لمرافق المدينة وبنيتها التحتية، لتلبي حاجات<br>.المواطنين</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">8</p>
        </div>
    </div>
</template>

<script>
import KpapHeaderThreeOne from "../folder header and footer/Header3_1.vue";
export default {
    name: "KpapObjectives",
    created() {
        this.changePageTitle('البلدية - أهدافنا');
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