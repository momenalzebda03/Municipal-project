<template>
    <!-- start main map 2-->
    <section class="font_text section_bottom overfolw-hidden container-fluid">
        <div class="row">
            <div class="col-12 col-lg-8 px-0">                
                <img src="../../assets/image_municipal5/ImageMap.png" alt="" class="w-100 h-100">
                <div class="container-fluid px-5 mx-4">
                    <div class="image_none position-absolute message_top justify-content-between">
                        <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
                        <li class="nav-item dropdown icon_width nav-link ps-5 py-3 rounded-3" @click="click_accomanying"
                            id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            <a class="text-white text-decoration-none dropdown-toggle my_circl w-50" href="#" role="button">
                                <span class="dropdown-text ms-5">المقار والمرافق</span>
                            </a>
                            <ul class="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">غزة</a></li>
                                <li><a class="dropdown-item" href="#">النصيرات</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4 border-5 border-start background_row_accompaying text-center text-lg-end pt-5 px-0"
                data-aos="fade-right">
                <div class="px-2 px-lg-0 pe-lg-5">
                    <h5 class="span_red fw-bold mt-5">مقار ومرافق البلدية</h5>
                    <span class="div_color_hover">اكتشف مقار ومرافق البلدية</span>
                    <div class="d-flex justify-content-center justify-content-lg-end mt-4 ps-lg-5">
                        <div class="d-flex justify-content-end w-100 position-relative pt-3">
                            <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                            <input type="input" class="form__field background_row_accompaying w-100" name="name"
                                id='name' />
                            <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في المقار
                                والمرافق</label>
                        </div>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-5 div_hover_color div_mia active_div_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover active_color_hover"><i class="fa-solid fa-circle-info me-2"
                                title="التفاصيل"></i> معلومات
                        </p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 active_color_hover1 mt-1">مبنى دائرة النظام والانضباط</span>
                        <p class="div_color_hover2 active_color_hover2 mt-2">082556984 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">1</p>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-4 div_hover_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover"><i class="fa-solid fa-circle-info me-2" title="التفاصيل"></i> معلومات</p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 mt-1">محكمة صلح بلدية غزة</span>
                        <p class="div_color_hover2 mt-2">082555271 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">2</p>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-4 div_hover_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover"><i class="fa-solid fa-circle-info me-2" title="التفاصيل"></i> معلومات</p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 mt-1">مبنى الجباية العامة</span>
                        <p class="div_color_hover2 mt-2">082556984 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">3</p>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-4 div_hover_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover"><i class="fa-solid fa-circle-info me-2" title="التفاصيل"></i> معلومات</p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 mt-1">محكمة البلدية الاستثماري</span>
                        <p class="div_color_hover2 mt-2">082555271 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">4</p>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-4 div_hover_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover"><i class="fa-solid fa-circle-info me-2" title="التفاصيل"></i> معلومات</p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 mt-1">مبنى الهندسة والتخطيط</span>
                        <p class="div_color_hover2 mt-2">082555271 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">5</p>
                    </div>
                </div>
                <div
                    class="pe-lg-5 pt-4 div_hover_color icon_click fw-bold d-flex gap-lg-2 flex-lg-row flex-column-reverse justify-content-center justify-content-lg-end">
                    <div class="me-lg-5 text-secondary">
                        <p class="div_color_hover"><i class="fa-solid fa-circle-info me-2" title="التفاصيل"></i> معلومات</p>
                    </div>
                    <div class="text-center text-lg-end">
                        <span class="div_color_hover1 mt-1">المسلخ</span>
                        <p class="div_color_hover2 mt-2">082555271 <i class="fas fa-tty"></i></p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">6</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main map 2-->
</template>
<script>
export default {
    name: "KpapAccompanying",
    created() {
        this.changePageTitle('البلدية - المرافق');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_accomanying() {
            var dropdownToggle = document.querySelector(".my_circl");
            dropdownToggle.classList.toggle("my_rotate_100");
        }
    },
    mounted() {
        var tag_header = document.querySelectorAll(".div_hover_color");
        var p_backgrpund = document.querySelectorAll(".p_backgrpund");
        var div_color_hover = document.querySelectorAll(".div_color_hover");
        var div_color_hover1 = document.querySelectorAll(".div_color_hover1");
        var div_color_hover2 = document.querySelectorAll(".div_color_hover2");
        for (let i = 0; i < tag_header.length; i++) {
            var chekd = tag_header[i];
            chekd.addEventListener("click", function () {
                for (let i = 0; i < tag_header.length; i++) {
                    tag_header[i].classList.remove("active_div_color");
                }
                this.classList.add("active_div_color");

                for (let i = 0; i < p_backgrpund.length; i++) {
                    p_backgrpund[i].classList.remove("active_background");
                }
                this.querySelector(".p_backgrpund").classList.add("active_background");

                for (let i = 0; i < div_color_hover.length; i++) {
                    div_color_hover[i].classList.remove("active_color_hover");
                }
                this.querySelector(".div_color_hover").classList.add("active_color_hover");

                for (let i = 0; i < div_color_hover1.length; i++) {
                    div_color_hover1[i].classList.remove("active_color_hover1");
                }
                this.querySelector(".div_color_hover1").classList.add("active_color_hover1");

                for (let i = 0; i < div_color_hover2.length; i++) {
                    div_color_hover2[i].classList.remove("active_color_hover2");
                }
                this.querySelector(".div_color_hover2").classList.add("active_color_hover2");
            });
        }
    }
}
</script>