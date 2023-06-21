<template>
    <div class="container-fluid text-center text-md-end px-0 px-md-5 mt-0 mt-md-5 pt-5 font_text overflow-hidden">
        <KpapHeaderThreeOne />
        <div data-aos="fade-left" class="d-flex gap-3 justify-content-center justify-content-md-end align-items-center">
            <h5 class="span_red">سياستنا</h5>
            <i class="fas fa-shield-alt fs-4 p-3 border border-2 rounded-circle icon_color"></i>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.العدالة والمساواة في توزيع الخدمات</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">1</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.تشجيع المشاركة المجتمعية في إدارة العمل</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">2</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center align-items-md-start">
            <p class="mt-1"> إتباع سياسة محاسبة المسؤولين وتقييم الأداء للعاملين في أجهزة<br> .البلدية مع مكافأة المجتهد
                ومحاسبة المخطئ</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">3</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center align-items-md-start">
            <p class="mt-1"> تقديم خدمات للجمهور في كافة المجالات الثقافية والاجتماعية<br>
                .والرياضية</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">4</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.تطوير المدينة القديمة والحفاظ على طابعها الحضاري والثقافي والتاريخي</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">5</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
            <p class="mt-1">.تكافؤ الفرص عند التعيين والترقية</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">6</p>
        </div>
        <div data-aos="fade-left"
            class="px-2 px-md-0 fw-bold mt-3 d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center align-items-md-start">
            <p class="mt-1"> استقلالية البلدية الإدارية والمالية مع الاحتفاظ بعلاقات تنظيمية<br>
                وإدارية عملية ومنتجة مع الجهات الرسمية والشعبية وذلك ضمن<br>
                .الهدف العام للسلطة الوطنية</p>
            <p class="p_center mt-1 text-center border border-2 rounded-circle">7</p>
        </div>
    </div>    
</template>

<script>
import KpapHeaderThreeOne from "../components/Header3_1.vue";
export default {
    name: "KpapPolicy",
    components: {
        KpapHeaderThreeOne
    }
}
</script>