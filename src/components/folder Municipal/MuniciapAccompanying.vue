<template>
    <!-- start main map 2-->
    <section class="font_text section_bottom position-relative container-fluid p-0 overflow-hidden">
        <div class="row">
            <div class="col-12 col-lg-8 px-0">
                <img src="../../assets/image_municipal5/ImageMap.png" alt="" class="w-100 h-100 icon_click"
                    data-aos="fade-right" @click="div_click_block">
                <div class="container-fluid px-5 image_none ms-4 container_image_center position-absolute bottom-0"
                    v-show="div_none">
                    <div class="overflow-y-auto overflow_height overflow-x-hidden">
                        <div class="bg-white direction">
                            <div class="d-flex justify-content-end" @click="icon_bay">
                                <i class="fas fa-times fs-4 border-start border-bottom text-secondary p-3 back_hover"></i>
                            </div>
                            <div class="pt-2 px-5 row">
                                <div class="col-12 col-lg-6 mb-4">
                                    <img src="../../assets/image_municipal6/ImageEngineering.png" alt="" class="w-100">
                                </div>
                                <div class="col-12 col-lg-6 text-center text-lg-end">
                                    <p class="fw-bold">مبنى الهندسة والتخطيط</p>
                                    <p>يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في فلسطين, و قد تم إتمام
                                        الـعمل في المبني عام 1988م, هذا وبعد مرور عشرة سـنوات مـنذ البدء في البــناء وذلـك
                                        نتيجة للعراقيل و الصـعوبات الجمة التي وضعتها إدارة الاحتلال الإســرائيلـية لعرقلة
                                        تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق هذا الحـلم</p>
                                    <p class="my-4">وقد رشح المبني في عام 1992م للحصول علي جائزة ( الأغا خان للإبداع في
                                        الهندسة المعمارية ) يتكون مبنى مركز رشاد الشوا الثقافي من ثلاثة طوابق حيث يوجد في
                                        الطابق الأول ثلاث قاعات متعددة الاستخدام و قاعة معرض تستخدم هذه القاعات </p>
                                </div>
                                <p class="text-end">يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في فلسطين,
                                    و قد تم إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور عشرة سـنوات مـنذ البدء في
                                    البــناء وذلـك نتيجة للعراقيل و الصـعوبات الجمة التي وضعتها إدارة الاحتلال
                                    الإســرائيلـية لعرقلة تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق
                                    هذا الحـلم</p>
                                <p class="text-end">يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في فلسطين,
                                    و قد تم إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور عشرة سـنوات مـنذ البدء في
                                    البــناء وذلـك نتيجة للعراقيل و الصـعوبات الجمة التي وضعتها إدارة الاحتلال
                                    الإســرائيلـية لعرقلة تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق
                                    هذا الحـلم</p>
                                <p class="text-end">يعتبر مبنى الهندسة والتخطيط في مدينة غزه أول مركز ثقافي يبني في فلسطين,
                                    و قد تم إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور عشرة سـنوات مـنذ البدء في
                                    البــناء وذلـك نتيجة للعراقيل و الصـعوبات الجمة التي وضعتها إدارة الاحتلال
                                    الإســرائيلـية لعرقلة تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق
                                    هذا الحـلم</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                data-aos="fade-left">
                <div class="px-2 px-lg-0 pe-lg-5">
                    <h5 class="span_red fw-bold mt-5">مقار ومرافق البلدية</h5>
                    <span class="div_color_hover">اكتشف مقار ومرافق البلدية</span>
                    <div class="d-flex justify-content-center justify-content-lg-end mt-4 ps-lg-5 px-3 px-lg-0">
                        <div class="d-flex justify-content-end w-100 position-relative pt-3">
                            <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                            <input type="input" class="form__field background_row_accompaying w-100" name="name"
                                id='name' />
                            <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في المقار
                                والمرافق</label>
                        </div>
                    </div>
                </div>
                <div @click="div_click_block"
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
                        <p class="p_center p_backgrpund active_background text-center text-white mt-1 rounded-circle">1</p>
                    </div>
                </div>
                <div @click="div_click_block"
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
                <div @click="div_click_block"
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
                <div @click="div_click_block"
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
                <div @click="div_click_block"
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
                <div @click="div_click_block"
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
    data() {
        return {
            div_none: false
        }
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_accomanying() {
            var dropdownToggle = document.querySelector(".my_circl");
            dropdownToggle.classList.toggle("my_rotate_100");
        },
        div_click_block() {
            this.div_none = true
        },
        icon_bay() {
            this.div_none = false
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