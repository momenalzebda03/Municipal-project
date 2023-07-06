<template>
    <!-- start main museum -->
    <section class="container-fluid text-center text-lg-end px-lg-5 mt-lg-5 pt-5 font_text overflow-hidden">
        <div class="row">
            <div class="col-lg-7 div_translate_170">
                <img loading="lazy" src="../../assets/image_civiil3/ImageBackground.png" alt="" class="w-100">
            </div>
            <div class="col-lg-5">
                <h5 class="fw-bold span_red">المتحف الإلكتروني</h5>
                <p> تزخر مدينة غزة الفلسطينية بتراث أثري وتاريخي يعود لآلاف السنين، ومنذ نشأتها في عام ثلاثة
                    آلاف قبل الميلاد، تعتبر من أقدم المدن الأثرية والتاريخية، المعبرة عن تجذر الحضارة الفلسطينية العربية منذ
                    أنشأها الكنعانيون، يضم المتحف مئات القطع الأثرية، من فخار، زجاج، عاج، أعمدة كورالثية، زينة نساء، وغيرها،
                    وتعود تلك القطع إلى عدد من العصور، منها العصر اليوناني، الروماني، البيزنطي، والإسلامي بما يحتويه من
                    العصر .الأيوبي والأموي والمملوكي والعثماني</p>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-right">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img loading="lazy" src="../../assets/image_civiil3/ImageMuseum.png"
                                class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute">الفلكلور الفلسطيني
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-down">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img loading="lazy" src="../../assets/image_civiil3/ImageDabkeh.png"
                                class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute">الحرف اليدوية</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-12 col-lg-4 mt-3 mt-lg-0" data-aos="fade-left">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img loading="lazy" src="../../assets/image_civiil3/ImageDate.png"
                                class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute">الأثار في غزة</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
    <!-- start main museum -->
</template>

<script>
export default {
    name: "KpapMuseum",
    created() {
        this.changePageTitle('المدينة - المتحف');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>