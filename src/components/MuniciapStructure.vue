<template>
    <!-- start main -->
    <div class="position-relative" v-show="div_display">
        <div
            class="d-flex justify-content-center align-items-center position-absolute start-50 div_center_none pt-3 pb-4 shadow-lg bg-white">
            <div>
                <div class="text-start ps-2">
                    <i class="fas fa-times fs-4 icon_click" @click="div_none"></i>
                </div>
                <div class="ps-5 text-center pe-3">
                    <p class="fw-bold ps-lg-5 ms-lg-5">أقسام الإدارة العامة للشؤون الإدارية</p>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الأول من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">1</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الثاني من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">2</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الثالث من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">3</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الرابع من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">4</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الخامس من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">5</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم السادس من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">6</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم السابع من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">7</span>
                    </div>
                    <div
                        class="div_width_number1 ps-lg-5 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                        <span class="mt-1 ps-lg-5">القسم الثامن من أقسام الإدارة</span>
                        <span class="p_center mt-1 text-center border border-2 rounded-circle">8</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="container-fluid text-center mt-0 mt-md-5 pt-4 font_text px-3 px-md-5 overflow-hidden div_px">
        <h3 class="span_red fw-bold mb-5" data-aos="flip-left">الهيكلية الإدارية لبلدية غزة</h3>
        <div class="d-flex justify-content-center" data-aos="flip-left">
            <h4 class="custom_class_red div_width_president py-3 div_mia fw-bold rounded-3">رئاسة البلدية</h4>
        </div>
        <div class="row align-items-center mt-4">
            <div class="col-12 col-md-6 col-lg-5 text-center text-md-end div_end_before" data-aos="fade-right">
                <span class="fw-bold py-3 px-3 bg-white border border-2 rounded-3 shadow-sm">دائرة الرقابة العامة</span>
            </div>
            <div class="col-2 div_color_center image_none"></div>
            <div class="col-12 col-md-6 col-lg-5 text-center text-md-start mt-5 mt-md-0 div_start_before"
                data-aos="fade-left">
                <span class="fw-bold py-3 px-0 px-md-3 bg-white border border-2 rounded-3 shadow-sm">وحدة المستشار
                    القانوني</span>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5 mx-2 mx-sm-0">
            <div class="px-3 px-sm-5 py-3 bg-white border border-2 rounded-3 shadow-sm position-absolute"
                data-aos="fade-left">
                <span class="fw-bold">دائرة خدمات الجمهور</span>
            </div>
        </div>
        <div class="row mt-5 pt-5 mx-0 justify-content-center">
            <div class="col-7 div_color_center image_none justify-content-between px-0">
                <div class="div_before_after image_none"></div>
                <div class="div_before_after image_none"></div>
            </div>
        </div>
        <div class="row align-items-center mt-3 justify-content-center">
            <div class="col-12 col-lg-3 p_bottom" data-aos="fade-up">
                <div class="py-3 bg-white border border-2 rounded-3 shadow-sm">
                    <span class="fw-bold">الإدارة العامة للخدمات</span>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col-7 div_color_center image_none justify-content-between px-0">
                        <div class="div_before_after1 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                        <div class="div_before_after1 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row px-0 mt-3 justify-content-center">
                        <div class="col-12 col-lg-6" data-aos="fade-right">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">دائرة العلاقات<br>العامة والإعلام</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mt-lg-0" data-aos="fade-left">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">الإدارة العامة للمياه<br>والصرف الصحي</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 mt-3 py-5 py-lg-0 mt-sm-0 p_bottom" data-aos="fade-donw">
                <div class="py-3 bg-white border border-2 rounded-3 shadow-sm px-4">
                    <span class="fw-bold">الإدارة العامة للشؤون المالية</span>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col-7 div_color_center image_none justify-content-between px-0">
                        <div class="div_before_after1 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                        <div class="div_before_after1 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row px-0 mt-3 justify-content-center">
                        <div class="col-12 col-lg-6" data-aos="fade-right">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">الإدارة العامة<br>للتنظيم</span>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mt-lg-0" data-aos="fade-left">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">الإدارة العامة<br>للهندسة والتخطيط</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 mt-3" data-aos="fade-up">
                <div class="py-3 bg-white border border-2 rounded-3 shadow-sm px-4">
                    <span class="fw-bold">الإدارة العامة للشؤون الإدارية</span>
                </div>
                <div class="row mt-5 justify-content-center">
                    <div class="col-7 div_color_center image_none justify-content-between px-0">
                        <div class="div_before_after2 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                        <div class="div_before_after1 image_none">
                            <div class="mt-5 pt-4 position-relative">
                                <i @click="div_center"
                                    class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                            </div>
                        </div>
                    </div>
                    <div class="row px-0 mt-3 justify-content-center">
                        <div class="col-12 col-lg-6 position-relative" data-aos="fade-right">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">الإدارة العامة<br>للمراكز الثقافية</span>
                            </div>
                            <div class="row mt-5 pt-4 justify-content-center">
                                <div class="col-9 div_color_center image_none justify-content-between px-0">
                                    <div class="div_before_after3 image_none">
                                        <div class="mt-5 pt-5 position-relative">
                                            <i @click="div_center"
                                                class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                                        </div>
                                    </div>
                                    <div class="div_before_after3 image_none">
                                        <div class="mt-5 pt-5 position-relative">
                                            <i @click="div_center"
                                                class="fas fa-plus icon_left p-2 position-absolute mt-5 image_none rounded-circle div_active icon_background icon_click"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="row px-0 mt-1 justify-content-center">
                                    <div class="col-12 col-lg-6" data-aos="fade-right">
                                        <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                            <span class="fw-bold">الإدارة العامة<br>للمراكز الثقافية</span>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 mt-3 mt-lg-0" data-aos="fade-left">
                                        <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                            <span class="fw-bold">الإدارة العامة<br>للصحة والبيئة</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 mt-3 mt-lg-0" data-aos="fade-left">
                            <div class="py-3 bg-white border border-2 rounded-3 shadow-sm text-center">
                                <span class="fw-bold">الإدارة العامة<br>للصحة والبيئة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
</template>
<script>
export default {
    name: "KpapStructure",
    data() {
        return {
            div_display: false
        }
    },
    created() {
        this.changePageTitle('البلدية - الهيكلية');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        div_center() {
            var div_px = document.querySelector(".div_px");
            div_px.style.filter = "blur(5px)"
            this.div_display = true
        },
        div_none() {
            var div_px = document.querySelector(".div_px");
            div_px.style.filter = "blur(0px)"
            this.div_display = false
        }
    }
}
</script>