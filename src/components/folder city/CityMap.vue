<template>
    <!-- start main map 2-->
    <section class="font_text section_bottom position-relative overflow-hidden container-fluid p-0">
        <div class="row">
            <div class="col-lg-8 px-0">
                <div class="position-relative h-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101730.8900374132!2d34.46309920884834!3d31.49186753921051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2s!4v1691593528887!5m2!1sen!2s"
                        class="w-100 h-100 icon_click" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="container-fluid px-5 image_none ms-4 container_image_center position-absolute bottom-0"
                    v-show="div_none">
                    <div class="overflow-y-auto overflow_height overflow-x-hidden">
                        <div class="bg-white direction">
                            <div class="d-flex justify-content-end" @click="icon_bay">
                                <i class="fas fa-times fs-4 border-start border-bottom text-secondary p-3 back_hover"></i>
                            </div>
                            <div class="pt-2 px-5 row">
                                <div class="col-lg-6 mb-4">
                                    <img loading="lazy" src="../../assets/image_municipal6/ImageEngineering.png" alt=""
                                        class="w-100">
                                </div>
                                <div class="col-lg-6 text-center text-lg-end">
                                    <p class="fw-bold">مركز رشاد الشوا الثقافي</p>
                                    <p>يعتبر مركز رشاد الشوا الثقافي في مدينة غزه أول مركز ثقافي يبني في فلسطين, و قد تم
                                        إتمام الـعمل في المبني عام 1988م, هذا وبعد مرور عشرة سـنوات مـنذ البدء في البــناء
                                        وذلـك نتيجة للعراقيل و الصـعوبات الجمة التي وضعتها إدارة الاحتلال الإســرائيلـية
                                        لعرقلة تكملة هذا المشروع وبعد مجهود جبار تخطي كل العقبات من اجـل تحقيق هذا الحـلم
                                    </p>
                                    <p class="my-4">وقد رشح المبني في عام 1992م للحصول علي جائزة ( الأغا خان للإبداع في
                                        الهندسة المعمارية ) يتكون مبنى مركز رشاد الشوا الثقافي من ثلاثة طوابق حيث يوجد في
                                        الطابق الأول ثلاث قاعات متعددة الاستخدام و قاعة معرض تستخدم هذه القاعات </p>
                                </div>
                                <p class="text-end">لإقامة الفعاليات الثقافية المختلفة في المركز منها المعارض الفنية ومعارض
                                    المنتجات التجارية و المؤتمرات الدولية و المحلية و المسرحيات و ورشات العمل و غيرها من
                                    الأنشطة الثقافية و الفنية المختلفة, أما في الطابق الثاني فيوجد مكتبة عامة مع قاعة
                                    للمطالعة, حيث أن المكتبة تلبي جميع احتياجات الباحثين لشتى المعلومات في كافة المجالات و
                                    تخدم جميع المهتمين من(أساتذة الجامعات، الطلاب، الباحثين و المتخصصين وغيرهم)
                                    يعتبر مركز رشاد الشوا الثقافي في مدينة غزة أول مركز ثقافي يتم بناؤه في فلسطين
                                </p>
                                <p class="fw-bold text-end">أهداف المركز</p>
                                <p class="text-end">إن هدف مركز رشاد الشوا الثقافي هو إحياء الوعي الثقافي والبيئي وترسيخ
                                    الهوية الوطنية عن طريق إتاحة الفرصة لكل أشكال الفنون التعبيرية والتشكيلية بما فيها
                                    السينما والمسرح والمعارض الفنية. هذا بالإضافة إلى توفير صالات وخدمات لتامين عقد
                                    الاجتماعات والدورات الثقافية والمحاضرات وفتح المكتبة العامة مكتبة ديانا تماري صباغ
                                    للجمهور حيث تتوفر المراجع العلمية والثقافية في مجالات متخصصة وعامة. والسعي إلى تنمية
                                    القدرات المهارية والفكرية والإبداعية والوجدانية والتي منها :
                                </p>
                                <p class="text-end">
                                    1 - إنهاء العزلة الثقافية والحضارية عن المجتمع الفلسطيني
                                    2 - حلقة اتصال بين غزة وباقي أجزاء فلسطين مع المجتمع العالمي
                                    3 - التبادل الثقافي مع مؤسسات مماثلة عربية وعالمية بهدف إحياء الوعي الثقافي
                                </p>
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
                                <span class="dropdown-text ms-5">المرافق العامة</span>
                            </a>
                            <ul class="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">غزة</a></li>
                                <li><a class="dropdown-item" href="#">النصيرات</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                class="col-lg-4 border-5 border-start overflow-auto background_row_accompaying background_height_100 text-center text-lg-end pt-5 px-0 overflow-auto">
                <div class="px-2 px-lg-0 pe-lg-5">
                    <h5 class="span_red fw-bold mt-5">الخريطة التفاعلية</h5>
                    <span class="div_color_hover">اكتشف غزة وأحياءها ومعالمها</span>
                    <div class="d-flex justify-content-center justify-content-lg-end mt-4 ps-lg-5 px-3 px-lg-0">
                        <div class="d-flex justify-content-end w-100 position-relative pt-3">
                            <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                            <input type="input" class="form__field background_row_accompaying w-100" name="name"
                                id='name' />
                            <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                                المرافق</label>
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
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">7</p>
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
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">8</p>
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
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">9</p>
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
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">10</p>
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
                        <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">11</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main map 2-->
</template>

<script>
export default {
    name: "KpapMap",
    created() {
        this.changePageTitle('المدينة - الخريطة');
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
