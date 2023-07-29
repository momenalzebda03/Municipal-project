<template>
    <!-- start main money 1-->
    <section class="text-end px-5">
        <div class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text">
            <h4 class="fw-bold span_red">الميزانية والموازنة</h4>
            <div class="d-flex flex-column flex-md-row justify-content-end my-3 my-md-5 border-3 border-bottom">
                <router-link to="/money1"
                    class="px-sm-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>الموازنة والميزانية</p>
                </router-link>
                <router-link to="/money"
                    class="my-2 my-md-0 px-sm-5 div_border_bottom border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>الموازنة المقروءة</p>
                </router-link>
            </div>
            <div class="row">
                <div class="col-md-5 text-center fw-bold d-flex justify-content-center" data-aos="fade-right">
                    <div>
                        <span>أين تذهب أموال بلدية غزة؟</span>
                        <br>
                        <span class="span_red">المصروفات</span>
                        <div>
                            <div class="position-absolute p_rights div_text_position">
                                <span class="span_red">49,245,300</span>
                                <br>
                                <span>الرواتب ومحلقاتها</span>
                            </div>
                            <div class="p_rights div_line_point position-absolute"></div>
                        </div>
                        <div class="div_translate_line">
                            <div class="position-absolute p_rights div_text_position_1">
                                <div class="d-flex gap-2">
                                    <p>مصاريف هندسية</p>
                                    <p class="span_red">25,000</p>
                                </div>
                            </div>
                            <div class="p_rights div_line_point position-absolute"></div>
                        </div>
                        <div class="div_translate_line_1">
                            <div class="position-absolute p_rights div_text_position_2">
                                <div class="d-flex gap-2">
                                    <p>مصاريف تقاعدية</p>
                                    <p class="span_red">170,000</p>
                                </div>
                            </div>
                            <div class="p_rights div_line_point_1 position-absolute"></div>
                        </div>
                        <div class="div_translate_line_2">
                            <div class="position-absolute p_rights div_text_position_3">
                                <div class="d-flex gap-2">
                                    <p>الأمن والإطفاء</p>
                                    <p class="span_red">545,000</p>
                                </div>
                            </div>
                            <div class="p_rights div_line_point_2 position-absolute"></div>
                        </div>
                        <div class="div_statistic mt-4 rounded-circle d-flex justify-content-center align-items-center">
                            <div
                                class="div_center_white bg-white rounded-circle d-flex justify-content-center align-items-center">
                                <div>
                                    <span>إجمالي المصروفات</span>
                                    <br>
                                    <span>125,625,372.58</span>
                                    <br>
                                    <span>شيكل</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 text-center" data-aos="fade-left">

                </div>
                <div class="col-md-2 my-3 my-md-5">
                    <p>welcome</p>
                    <!-- <div class="border-2 border-end pe-4 row h-100 d-flex justify-content-end">
                        <div class="col col-md-12">
                            <p>1917 - 1906</p>
                        </div>
                        <div class="col col-md-12 col_hover1">
                            <div class="div_line1"></div>
                            <p class="me-lg-3 mt-0 mt-sm-4">1921 - 1918</p>
                        </div>
                        <div class="col col-md-12 d-flex align-items-center justify-content-center justify-content-md-end">
                            <p>1917 - 1906</p>
                        </div>
                        <div class="col col-md-12 d-flex align-items-center justify-content-center justify-content-md-end">
                            <p>1917 - 1906</p>
                        </div>
                        <div class="col col-md-12 d-flex align-items-end justify-content-center justify-content-md-end">
                            <p>1917 - 1906</p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
    <!-- end main money 1-->
</template>

<script>
export default {
    name: "KpapMoney",
    created() {
        this.changePageTitle('البلدية - الميزانية');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>