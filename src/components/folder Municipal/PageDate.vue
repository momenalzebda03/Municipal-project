<template>
    <!-- start main date -->
    <section class="mt-5 py-5 container-fluid px-3 px-md-5 text-end">
        <h4 class="fw-bold span_red my-3 mx-3">الخلفية التاريخية</h4>
        <div class="container-fluid font_text">
            <div class="row mb-0 pb-0 mb-md-5 pb-md-5">
                <div class="col-md-12 col-lg-4" data-aos="fade-up">
                    <img src="../../assets/image_municipal/ImageShow.png" alt="" class="w-100 h-100">
                </div>
                <div class="col-md-6 col-lg-4 text-center text-md-end d-flex justify-content-center align-items-center mt-3 mt-md-0"
                    data-aos="fade-down">
                    <div>
                        <h5 class="fw-bold span_red">1918 - 1921</h5>
                        <p class="p_border_bottom d-inline ps-2 py-3">الحاج محمود سليمان أبو خضرة</p>
                        <p class="mt-4">في عام 1918، اختارت حكومة الانتداب البريطاني الحاج محمود سليمان أبو خضرة، رئيسًا
                            للمجلس
                            البلدي لمدينة غزة، وتولى بعد الاحتلال رئاسة البلدية بأمر من الحاكم العسكري لمدة 3 سنوات.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-3 mt-lg-0" data-aos="fade-down">
                    <img src="../../assets/image_municipal/ImageDate.png" alt="" class="w-100 h-100">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div
            class="container-fluid ps-md-5 px-2 px-md-5 text-center text-md-start my-3 my-md-5 d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5">
            <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
            <div class="w-100">
                <div class="row justify-content-start">
                    <div class="col mt-4 mt-lg-0">
                        <p>1961 - 1956</p>
                    </div>
                    <div class="col mt-4 mt-lg-0">
                        <p>1948 - 1945</p>
                    </div>
                    <div class="col mt-4 mt-lg-0">
                        <p>1934 - 1928</p>
                    </div>
                    <div class="col mt-4 mt-lg-0">
                        <p>1928 - 1924</p>
                    </div>
                    <div class="col col_hover position-relative mb-4 mt-4 mt-lg-0">
                        <div class="div_line position-absolute"></div>
                        <p>1921 - 1918</p>
                    </div>
                    <div class="col col-lg-1 mt-4 mt-lg-0 text-center">
                        <p>1917 - 1906</p>
                    </div>
                    <div class="col mt-4 mt-lg-0 text-center text-md-end">
                        <p>نشأة البلدية</p>
                    </div>
                </div>
                <div class="div_hr d-flex justify-content-end">
                </div>
            </div>
        </div>
    </section>
    <!-- end main date -->
</template>

<script>
export default {
    name: "KpapDate",
    created() {
        this.changePageTitle('البلدية - التاريخ');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>