<template>
    <!-- start page centers -->
    <section v-if="section_garden" class="header_width">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col d-flex align-items-end justify-content-center active_router_bottom router_bottom">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="d-flex text-end flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title1 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo1" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png" class="d-block w-100 " alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png" class="d-block w-100 " alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions5.png" class="d-block w-100 " alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="icon_color fas fa-bullseye fs-4 p-3 border border-2 rounded-circle"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1</p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2</p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="icon_color fas fa-eye fs-4 p-3 border border-2 rounded-circle"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_stadium">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom1">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom1 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom1">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom1 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom1">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom1 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom1">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom1 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom1">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom1 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom1 router_bottom1">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom1 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title2 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo2" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions1.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc1 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc1 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc1"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc1"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_parties">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom2 router_bottom2">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom2 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title3 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo3" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions1.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc2 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc2 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc2"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc2"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_rashad">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom2">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom2 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom2 router_bottom2">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom2 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title4 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo4" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions6.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc2 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc2 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc2"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc2"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_arts">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom4 router_bottom4">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom4 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title5 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo5" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions5.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc4 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc4 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc4"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc4"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_library">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom3">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom3 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom3">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom3 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom3">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom3 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom3">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom3 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom3">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom3 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom3 router_bottom3">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom3 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title6 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo6" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions4.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc3 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc3 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc3"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc3"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_culture">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img loading="lazy" src="../../assets/image_logo/ImageLogo.png" alt=""
                    class="position-absolute image_center">
            </router-link>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white pt-5 pb-lg-1 nav_top border border-1">
            <div
                class="container-fluid px-3 px-md-5 d-flex justify-content-center flex-lg-row flex-column-reverse align-items-lg-end">
                <div class="container-fluid text-center text-lg-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <div class="row w-100 d-flex align-items-end">
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>بيانات الاتصال</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>مواعيد العمل</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>ألبومات الصور والفيديو</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>أخبار واعلانات</p>
                                </router-link>
                            </div>
                            <div class="col-2 d-flex align-items-end justify-content-center router_bottom4">
                                <router-link to="/"
                                    class="px-sm-5 mt-3 mt-lg-0 router_bottom4 text-center text-black text-decoration-none">
                                    <p>خدمات المركز</p>
                                </router-link>
                            </div>
                            <div
                                class="col-2 d-flex align-items-end justify-content-center active_router_bottom4 router_bottom4">
                                <router-link to="/"
                                    class="mt-lg-0 text-center text-black active_router_bottom4 text-decoration-none">
                                    <p>الرؤية والأهداف</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex text-end align-items-center justify-content-center justify-content-lg-end gap-3 pb-2">
                    <p class="fw-bold" v-for="item in id_header" :key="item.id">{{ item.title7 }}</p>
                    <img loading="lazy" :src="id_header[1]?.logo7" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img loading="lazy" src="../../assets/image_municipal8/positions7.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions2.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img loading="lazy" src="../../assets/image_municipal8/positions3.png"
                        class="d-block w-100 carousel_height" alt="...">
                </div>
            </div>
            <div class="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <div class="position-absolute start-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                        class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
            <div class="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <div class="position-absolute end-0">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                        class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                </div>
            </div>
        </div>
        <div class="container-fluid px-md-5 mt-2">
            <div class="row overflow-hidden">
                <div class="col-md-6 col-lg-4 my-3 text-center" data-aos="fade-down">
                    <div class="py-4 rounded-4 mt-4 div_color_col overflow-auto div_heigt_bottom">
                        <p class="mt-4 fw-bold">أهم الخدمات الأساسية التي تقدمها البلدية</p>
                        <div class="mt-5 pt-1">
                            <div id="carouselExampleControls1" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="d-flex justify-content-between mt-5">
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="prev"
                                            class="icon_color_clirc4 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-left fs-4"></i>
                                        </div>
                                        <div>
                                            <div class="carousel-item active">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4" v-for="item in id_header" :key="item.id">{{ item.ser }}</p>F
                                            </div>
                                        </div>
                                        <div data-bs-target="#carouselExampleControls1" data-bs-slide="next"
                                            class="icon_color_clirc4 py-4 px-3 icon_click div_image_center back_hover d-flex align-items-center justify-content-center">
                                            <i class="fas fa-chevron-right fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-6 col-lg-4 my-3 text-center text-lg-end" data-aos="fade-down">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-lg-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">أهداف المركز</h6>
                            <i class="fas fa-bullseye fs-4 p-3 border border-2 rounded-circle icon_color_clirc4"></i>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj1 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj2 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1" v-for="item in id_header" :key="item.id">{{ item.obj3 }}</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">3
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white col-md-12 col-lg-4 my-3 text-center text-sm-end" data-aos="fade-left">
                    <div class="p-4 rounded-4 mt-4 border_dotted overflow-auto div_heigt_bottom">
                        <div
                            class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end align-items-center">
                            <h6 class="fw-bold">رؤية المركز</h6>
                            <i class="fas fa-eye fs-4 p-3 border border-2 rounded-circle icon_color_clirc4"></i>
                        </div>
                        <p class="mt-2 me-2" v-for="item in id_header" :key="item.id">{{ item.my_string }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- start page centers -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_center"));
    const querySnapshot_center = await getDocs(collection(db, "special_center"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const image4 = doc.data().image4;
        const image5 = doc.data().image5;
        const image6 = doc.data().image6;
        const image7 = doc.data().image7;
        const logo1 = doc.data().logo1;
        const logo2 = doc.data().logo2;
        const logo3 = doc.data().logo3;
        const logo4 = doc.data().logo4;
        const logo5 = doc.data().logo5;
        const logo6 = doc.data().logo6;
        const logo7 = doc.data().logo7;
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            title4: doc.data().title4,
            title5: doc.data().title5,
            title6: doc.data().title6,
            title7: doc.data().title7,
            image1: image1 ? require("@/assets/image_municipal7/" + image1) : null,
            image2: image2 ? require("@/assets/image_municipal7/" + image2) : null,
            image3: image3 ? require("@/assets/image_municipal7/" + image3) : null,
            image4: image4 ? require("@/assets/image_municipal7/" + image4) : null,
            image5: image5 ? require("@/assets/image_municipal7/" + image5) : null,
            image6: image6 ? require("@/assets/image_municipal7/" + image6) : null,
            image7: image7 ? require("@/assets/image_municipal7/" + image7) : null,
            logo1: logo1 ? require("@/assets/image_municipal8/" + logo1) : null,
            logo2: logo2 ? require("@/assets/image_municipal8/" + logo2) : null,
            logo3: logo3 ? require("@/assets/image_municipal8/" + logo3) : null,
            logo4: logo4 ? require("@/assets/image_municipal8/" + logo4) : null,
            logo5: logo5 ? require("@/assets/image_municipal8/" + logo5) : null,
            logo6: logo6 ? require("@/assets/image_municipal8/" + logo6) : null,
            logo7: logo7 ? require("@/assets/image_municipal8/" + logo7) : null,
        };
        firearray.push(methods);
    });
    querySnapshot_center.forEach((doc) => {
        const methods = {
            id: doc.id,
            my_string: doc.data().my_string,
            obj1: doc.data().obj1,
            obj2: doc.data().obj2,
            obj3: doc.data().obj3,
            ser: doc.data().ser
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapCernterHeader",
    created() {
        this.changePageTitle('البلدية - المراكز');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
    computed: {
        section_garden() {
            return this.$route.path === '/centers1'
        },
        section_stadium() {
            return this.$route.path === '/centers2'
        },
        section_parties() {
            return this.$route.path === '/centers3'
        },
        section_rashad() {
            return this.$route.path === '/centers4'
        },
        section_arts() {
            return this.$route.path === '/centers5'
        },
        section_library() {
            return this.$route.path === '/centers6'
        },
        section_culture() {
            return this.$route.path === '/centers7'
        },
    }
}
</script>