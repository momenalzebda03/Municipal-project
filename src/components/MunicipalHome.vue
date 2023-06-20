<template>
    <section>
        <div class="container-fluid text-center text-md-end px-2 px-md-5 mt-0 mt-md-5 pt-5 font_text overflow-hidden">
            <KpapHeaderThreeOne />
            <div data-aos="fade-left"
                class="d-flex gap-3 flex-md-row flex-column justify-content-center justify-content-md-end align-items-center">
                <h5 class="span_red">رؤيتنا</h5>
                <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color"></i>
            </div>
            <p data-aos="fade-left" class="mt-3 me-0 me-md-2 p_bottom">تسعى بلدية غزة إلى أن تكون مدينة غزة، مركزا اقتصاديا
                وحضاريا وثقافيا<br>لقطاع غزة، وتقدم البلدية في سبيل الوصول إلى ذلك خدمات متميزة<br> ضمن بيئة مستدامة ومشاركة
                مجتمعية واعية، يسود فيها الأمن والعدالة<br>.الإجتماعية، وتفتخر بأصالتها وإرثها الحضاري الفلسطيني</p>
        </div>
    </section>
    <section>
        <div class="container-fluid ms-0 ps-md-5 text-center text-md-start my-3">
            <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
        </div>
    </section>
</template>

<script>
import KpapHeaderThreeOne from "../components/Header3_1.vue";
export default {
    name: "KpapMuiciapl",
    components: {
        KpapHeaderThreeOne
    }
}
</script>