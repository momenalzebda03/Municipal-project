<template>
    <!-- start page centers -->
    <section v-if="section_garden" class="header_width">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">مركز حديقةإسعاد الطفولة</p>
                    <img src="../../assets/image_municipal8/MyLogo1.png" alt="" class="border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 " alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 " alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions5.png" class="d-block w-100 " alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1</p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2</p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعة الأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_stadium">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">ملعب اليرموك غزة</p>
                    <img src="../../assets/image_municipal8/MyLogo8.png" alt="" class="w-25 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions1.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_parties">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <img src="../../assets/image_municipal8/MyLogo7.png" alt="" class="w-75 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions1.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_rashad">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">مكتبة بلدية غزة العامة</p>
                    <img src="../../assets/image_municipal8/MyLogo2.png" alt="" class="w-25 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions6.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_arts">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">قرية الفنون والحرف</p>
                    <img src="../../assets/image_municipal8/MyLogo3.png" alt="" class="w-25 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions5.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_library">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">مكتبة بلدية غزة العامة</p>
                    <img src="../../assets/image_municipal8/MyLogo2.png" alt="" class="w-25 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions4.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section v-if="section_culture">
        <div class="text-center">
            <router-link to="/" class="position-fixed image_none router_position">
                <img src="../../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
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
                    <p class="fw-bold">مركز هولست الثقافي</p>
                    <img src="../../assets/image_municipal8/MyLogo5.png" alt="" class="w-25 border border-2 rounded-circle">
                </div>
            </div>
        </nav>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner carousel_height">
                <div class="carousel-item active">
                    <img src="../../assets/image_municipal8/positions7.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions2.png" class="d-block w-100 carousel_height" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/image_municipal8/positions3.png" class="d-block w-100 carousel_height" alt="...">
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
                                                <p class="px-4">إنشاء الحدائق العامة وتشجير الشوارع والمحافظة على الشاطئ
                                                    والقيام بأعمال الإنقاذ البحري
                                                </p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال بناء</p>
                                            </div>
                                            <div class="carousel-item">
                                                <p class="px-4">انشاء اعمال هنا بناء</p>
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
                            <p class="mt-1"> تزويد الأشخاص الذين فقدوا أطراف سفلية أو علوية، فردية أو
                                .مزدوجة، بالأطراف والأجهزة اللازمة لهم</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">1
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1"> تدريب الأشخاص المعاقين على استعمال أجهزتهم والانخراط
                                .في المجتمع والاعتماد على ذاتهم وقدراتهم الخاصة</p>
                            <div class="d-flex justify-content-center">
                                <p class="p_center fw-bold mt-2 text-center pb-4 border border-2 rounded-circle">2
                                </p>
                            </div>
                        </div>
                        <div
                            class="div_width_number1 mt-3 d-flex gap-md-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                            <p class="mt-1">تزويد المرضى وخاصة مرضى شلل الأطفال بالأجهزة المساعدة
                                .الازمة لهم </p>
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
                        <p class="mt-2 me-2"> برزت مشكلة المعاقين حركيًا في سنة 1975، وفي وسط هموم قطاع غزة، الكبيرة
                            والكثيرة، وكذلك الاعاقات الناتجة عن الحروب والتوتر الأمني، أو نتيجة أمراض السكر وحوادث الطرق،
                            فقامت الهيئة الخيرية لقطاع غزة، وبشخص مؤسسها ورئيسها المرحوم الحاج/ رشاد الشوا بالدعوة إلى عقد
                            لقاء بين مجموعة من مؤسسة غزية لإنشاء مركز للأطراف الصناعية يقوم على حل مشاكل المعاقين جسديًا
                            ورعايتهم وتقديم العون الدائم لهم، وفعلا تم ايفاد شخصين للتدريب في .الأردن على صناعةالأطراف
                            الصناعية لمدة عامين</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- start page centers -->
</template>

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