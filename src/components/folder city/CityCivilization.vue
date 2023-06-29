<template>
    <!-- start header civilization -->
    <section class="container-fluid text-center text-md-end px-md-5 mt-md-5 pt-5 font_text">
        <div>
            <h4 class="fw-bold span_red">غزة تاريخ وحضارة</h4>
            <div class="d-flex flex-column flex-md-row justify-content-end my-3 my-md-5 border-3 border-bottom">
                <router-link to="/" class="ps-md-5 border_bottom_hover icon_click text-black text-decoration-none">
                    <p>غزة الحضارة</p>
                </router-link>
                <router-link to="/civilization"
                    class="my-2 ps-md-5 my-md-0 border_bottom_hover div_border_bottom icon_click text-black text-decoration-none">
                    <p>غزة التاريخ</p>
                </router-link>
            </div>
        </div>
    </section>
    <!-- end header civilization -->
    <!-- start main civilization -->
    <section>
        <div class="container-fluid px-2 px-md-5 font_text overflow-hidden">
            <div class="row">
                <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-right">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="overflow-hidden">
                            <img src="../../assets/image_civil1/Gaza1.png" class="card-img-top w-100 p-3" alt="...">
                        </div>
                        <div class="card-body text-center text-lg-end">
                            <h5 class="card_title_hover fw-bold">غزة في العصر الإسلامي</h5>
                            <p class="card-text ms-lg-5">رجالاتها وشخصياتها</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-right">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="overflow-hidden">
                            <img src="../../assets/image_civil1/Gaza2.png" class="card-img-top w-100 p-3" alt="...">
                        </div>
                        <div class="card-body text-center text-lg-end">
                            <h5 class="card_title_hover fw-bold">غزة في العصور الوسطى</h5>
                            <p class="card-text ms-lg-5">العراقة والتراث</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4 mt-3" data-aos="fade-right">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="overflow-hidden">
                            <img src="../../assets/image_civil1/Gaza3.png" class="card-img-top w-100 p-3" alt="...">
                        </div>
                        <div class="card-body text-center text-lg-end">
                            <h5 class="card_title_hover fw-bold">غزة الحاضر والمستقبل</h5>
                            <p class="card-text ms-lg-5">قلب فلسطين النابض</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="../../assets/image_civil1/ImageBackground.png" alt="" class="position-absolute w-100 image_back_image">
    </section>
    <!-- end main civilization -->
</template>

<script>
export default {
    name: "KpapCivilization",
    created() {
        this.changePageTitle('المدينة - الحضارة');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>