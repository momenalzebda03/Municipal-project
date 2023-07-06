<template>
    <!-- start main image more-->
    <router-link to="/image" class="d-flex justify-content-end text-decoration-none mb-3">
        <i class="fas fa-times p-4 fs-2 icon_click icon_bakcgorund position-fixed"></i>
    </router-link>
    <section class="container" data-aos="flip-left">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="div_image_center d-flex justify-content-between align-items-center position-relative">
                <div data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                    class="bg-white text-black py-4 icon_click icon_arraow_hover_left back_hover d-flex align-items-center justify-content-center">
                    <i class="fas fa-chevron-left fs-4"></i>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img loading="lazy" src="../../assets/image_page_home_1/ImageMaskWidth.png" alt="" class="w-100">
                    </div>
                    <div class="carousel-item">
                        <img loading="lazy" src="../../assets/image_page_home_1/ImageMaskWidth.png" alt="" class="w-100">
                    </div>
                </div>
                <div data-bs-target="#carouselExampleControls" data-bs-slide="next"
                    class="fs-4 bg-white text-black py-4 icon_click icon_arraow_hover_right back_hover d-flex align-items-center justify-content-center">
                    <i class="fas fa-chevron-right fs-4"></i>
                </div>
            </div>
        </div>
    </section>
    <!-- end main image more-->
</template>

<script>
export default {
    name: "KpapMore",
    beforeRouteLeave(to, from, next) {
        document.body.classList.remove('bg-black');
        next();
    },
    beforeRouteEnter(to, from, next) {
        document.body.classList.add('bg-black');
        next();
    },
    created() {
        this.changePageTitle('البلدية - الصور');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>