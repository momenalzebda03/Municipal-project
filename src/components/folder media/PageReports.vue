<template>
    <!-- start main reporst -->
    <section class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden px-md-5">
        <div class="row">
            <div class="col-12 col-md text-center text-md-start" data-aos="fade-right">
                <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev" aria-hidden="true"
                        class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next" aria-hidden="true"
                        class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                </div>
            </div>
            <div class="col-12 col-md" data-aos="fade-left">
                <h4 class="fw-bold span_red">تقارير وإصدارات</h4>
                <p>ننشر في بلدية غزة صحيفة هنا غزة والإصدارات والتقارير المالية والتفصيلية التي تفصّل أنشطتنا ومشاريعنا</p>
            </div>
        </div>
        <div id="carouselExampleControls" class="div_mia row_left_screen carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <section class="row">
                        <div class="col-12 col-lg-3 mt-3" data-aos="fade-right">
                            <img src="../../assets/image_reports/ImageReporst3.png" alt="" class="w-100 h-100">
                        </div>
                        <div class="col-12 col-lg-6 mt-3 position-relative" data-aos="fade-down">
                            <img src="../../assets/image_reports/ImageReporst2.png" alt="" class="w-100 h-100">
                            <div class="image_text_right position-absolute transform-middle">
                                <h4 class="text_size">أضرار العدوان الإسرائيلي على البنية التحتية في مدينة غزة</h4>
                                <button class="text-white border border-0 bg-transparent button_hover_border"><i
                                        class="fas fa-download pe-2"></i>تنزيل</button>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3 mt-3 position-relative" data-aos="fade-left">
                            <img src="../../assets/image_reports/ImageReports1.png" alt="" class="w-100 h-100">
                            <div class="image_text_right position-absolute transform-middle ms-3">
                                <h4 class="text_size">صحيفة هنا غزة العدد 37</h4>
                                <button class="text-white border border-0 bg-transparent button_hover_border"><i
                                        class="fas fa-download pe-2"></i>تنزيل</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="carousel-item">
                    <section class="row">
                        <div class="col-12 col-lg-3 mt-3">
                            <img src="../../assets/image_reports/ImageReporst3.png" alt="" class="w-100 h-100">
                        </div>
                        <div class="col-12 col-lg-6 mt-3 position-relative">
                            <img src="../../assets/image_reports/ImageReporst2.png" alt="" class="w-100 h-100">
                            <div class="image_text_right position-absolute transform-middle">
                                <h4 class="text_size">أضرار العدوان الإسرائيلي على البنية التحتية في مدينة غزة</h4>
                                <button class="text-white border border-0 bg-transparent button_hover_border"><i
                                        class="fas fa-download pe-2"></i>تنزيل</button>
                            </div>
                        </div>
                        <div class="col-12 col-lg-3 mt-3 position-relative">
                            <img src="../../assets/image_reports/ImageReports1.png" alt="" class="w-100 h-100">
                            <div class="image_text_right position-absolute transform-middle ms-3">
                                <h4 class="text_size">صحيفة هنا غزة العدد 37</h4>
                                <button class="text-white border border-0 bg-transparent button_hover_border"><i
                                        class="fas fa-download pe-2"></i>تنزيل</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <!-- start main reporst -->
</template>

<script>
export default {
    name: "KpapReports",
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
    created() {
        this.changePageTitle('المركز الأعلامي - التقارير');
    }
}
</script>
