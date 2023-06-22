<template>
    <KpapHeaderThreeTow />
    <!-- start main -->
    <section class="container-fluid px-2 px-md-5 font_text overflow-hidden mb-5 pb-2">
        <div class="row text-end">
            <div class="col-12 col-md-8 mt-3 mb-5 pb-5 mb-md-0 pb-md-0" data-aos="fade-right">
                <div class="position-relative">
                    <img src="../assets/image_municipal3/ImageMap.png" alt="" class="w-100 image_height"
                        @click="div_click_block">
                    <div class="bg-white div_mia position-absolute translate-middle start-50 top-50" v-show="div_none">
                        <div class="d-flex justify-content-end" @click="icon_exit">
                            <i class="fas fa-times fs-4 border-start border-bottom text-secondary p-3 back_hover"></i>
                        </div>
                        <div class="pt-2 px-5 text-center text-md-end">
                            <p class="fw-bold">لجنة حي منطقة الزيتون</p>
                            <div class="d-flex justify-content-end gap-md-5 flex-column flex-md-row gap-0">
                                <p>حي منطقة الزيتون <i class="fas fa-map-marker-alt"></i></p>
                                <p>0599486227 <i class="fas fa-tty"></i></p>
                            </div>
                            <p class="fw-bold mt-2">أعضاء لجنة الحي</p>
                            <div class="d-flex gap-4 text-center flex-column flex-sm-row pb-3">
                                <div>
                                    <img src="../assets/image_municipal2/Personal1.png" alt=""
                                        class="mb-3 rounded-circle div_respone_width">
                                    <br>
                                    <span class="span_red fw-bold">أ. مروان الغول</span>
                                </div>
                                <div>
                                    <img src="../assets/image_municipal3/ImagePeroons2.png" alt=""
                                        class=" mb-3 rounded-circle div_respone_width">
                                    <br>
                                    <span class="span_red fw-bold">أ. مروان الغول</span>
                                </div>
                                <div>
                                    <img src="../assets/image_municipal3/ImagePerons3.png" alt=""
                                        class="mb-3 rounded-circle div_respone_width">
                                    <br>
                                    <span class="span_red fw-bold">د. جميل طرزي</span>
                                </div>
                                <div>
                                    <img src="../assets/image_municipal3/ImagePerons4.png" alt=""
                                        class="mb-3 rounded-circle div_respone_width1">
                                    <br>
                                    <span class="span_red fw-bold">أ. بدر صبرة</span>
                                </div>
                                <div>
                                    <img src="../assets/image_municipal3/ImagePerons5.png" alt=""
                                        class="mb-3 rounded-circle div_respone_width">
                                    <br>
                                    <span class="span_red fw-bold">أ. د. يحيى السراج</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mt-5 pt-5 mt-md-3 pt-md-0" data-aos="fade-left">
                <div class="background_row h-100">
                    <h5 class="px-3 pt-3 span_red fw-bold">لجان الأحياء</h5>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة الشيخ رضوان</span>
                            <p class="div_color_hover1 text-secondary mt-2">0599486227 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">1</p>
                        </div>
                    </div>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة الزيتون</span>
                            <p class="div_color_hover1 text-secondary mt-2">0599843331 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-white mt-1 text-center rounded-circle">2</p>
                        </div>
                    </div>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة الشاطي الجنوبي</span>
                            <p class="div_color_hover1 text-secondary mt-2">0592998935 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">3</p>
                        </div>
                    </div>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة الشاطي الشمالي وحي النصر</span>
                            <p class="div_color_hover1 text-secondary mt-2">0599750375 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">4</p>
                        </div>
                    </div>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة المحطة - التفاح الغربي</span>
                            <p class="div_color_hover1 text-secondary mt-2">0598881878 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-center text-white mt-1 rounded-circle">5</p>
                        </div>
                    </div>
                    <div
                        class="py-2 px-3 div_hover_color icon_click fw-bold d-flex gap-md-2 flex-md-row flex-column-reverse justify-content-center justify-content-md-end">
                        <div class="text-center text-md-end">
                            <span class="div_color_hover mt-1">لجنة حي منطقة الدرج</span>
                            <p class="div_color_hover1 text-secondary mt-2">0598881878 <i class="fas fa-tty"></i></p>
                        </div>
                        <div class="d-flex justify-content-center">
                            <p class="p_center p_backgrpund text-white mt-1 text-center rounded-circle">6</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
</template>

<script>
import KpapHeaderThreeTow from "../components/Header3_2.vue";

export default {
    name: "KpapBiology",
    data() {
        return {
            div_none: false
        }
    },
    components: {
        KpapHeaderThreeTow,
    },

    methods: {
        div_click_block() {
            this.div_none = !this.div_none
        },
        icon_exit() {
            this.div_none = false
        }
    },

    mounted() {
        var tag_header = document.querySelectorAll(".div_hover_color");
        var p_backgrpund = document.querySelectorAll(".p_backgrpund");
        var div_color_hover = document.querySelectorAll(".div_color_hover");
        var div_color_hover1 = document.querySelectorAll(".div_color_hover1");
        var activeItem = localStorage.getItem("activeItem");
        if (activeItem) {
            for (let i = 0; i < div_color_hover1.length; i++) {
                if (div_color_hover1[i].innerText === activeItem) {
                    div_color_hover1[i].classList.add("active_color_hover1");
                    div_color_hover1[i].closest(".div_hover_color").classList.add("active_div_color");
                    div_color_hover1[i].closest(".div_hover_color").querySelector(".p_backgrpund").classList.add("active_background");
                    div_color_hover1[i].closest(".div_hover_color").querySelector(".div_color_hover").classList.add("active_color_hover");
                }
            }
        }

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
                localStorage.setItem("activeItem", this.querySelector(".div_color_hover1").innerText);
            });
        }
    },
};
</script>