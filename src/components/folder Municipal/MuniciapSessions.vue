<template>
    <!-- start main sessions -->
    <KpapHeaderThreeTow />
    <section class="container-fluid font_text">
        <div class="row px-md-5 overflow-hidden">
            <div class="col" data-aos="fade-right">
                <div class="datepicker shadow rounded-3">
                </div>
                <div class="d-flex justify-content-center gap-md-5 gap-2 flex-column flex-md-row ms-md-5 ps-md-5">
                    <div class="d-flex gap-2 justify-content-center justify-content-md-end">
                        <p>القادمة</p>
                        <div class="div_circle rounded-circle circle_color_green mt-1"></div>
                    </div>
                    <div class="d-flex gap-2 justify-content-center justify-content-md-end">
                        <p>السابقة</p>
                        <div class="div_circle rounded-circle circle_color_red mt-1"></div>
                    </div>
                    <div class="d-flex gap-2 justify-content-center justify-content-md-end">
                        <p>الحالية</p>
                        <div class="div_circle rounded-circle icon_width mt-1"></div>
                    </div>
                </div>
                <div class="d-flex justify-content-center ms-md-5 ps-md-5 mt-3">
                    <div class="ms-md-5 ps-md-5">
                        <button class="ms-md-4 px-5 button_padding border border-0 rounded-4">عرض جميع الجلسات</button>
                    </div>
                </div>
            </div>
            <div class="col text-end" data-aos="fade-left">
                <div class="d-flex justify-content-center justify-content-lg-end px-4 px-md-0">
                    <div class="d-flex justify-content-end div_mia div_width_50 position-relative pt-3">
                        <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                        <input type="input" class="form__field w-100" name="name" id='name' />
                        <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                            الرسائل</label>
                    </div>
                </div>
                <div class="mb-4 mb-md-0 mt-4 fw-bold text-center text-md-end">
                    <span class="span_red">‏16 ديسمبر, 2021</span>
                    <br>
                    <span>مجلس بلدية غزة يناقش مع نشطاء شباب جهود دعم المبادرات الشبابية (عنوان القرار الصادر يوضع
                        هنا)</span>
                </div>
                <div
                    class="mt-3 mt-lg-0 d-flex justify-content-end gap-1 gap-lg-4 flex-column flex-lg-row text-center align-items-center">
                    <div data-aos="fade-up">
                        <button class="px-5 button_padding border border-0 rounded-4">طباعة الجلسة <i
                                class="fas fa-print ms-2"></i></button>
                    </div>
                    <div class="mt-4 pt-1" data-aos="fade-down">
                        <div class="py-3">
                            <a class="button px-4 py-3 rounded-4 text-decoration-none position-relative div_active"
                                href="#">عرض الجلسة</a>
                        </div>
                        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix"
                                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div class="me-1 text-center text-md-end" data-aos="fade-left">
                    <p class="span_red fw-bold">القرارات الصادرة عن الجلسة</p>
                    <div class="d-flex justify-content-end gap-0 gap-md-5 flex-column flex-md-row">
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions2
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">2</p>
                            </div>
                        </div>
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions1
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">1</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end gap-md-5 flex-column flex-md-row gap-0 text-center">
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions4
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">4</p>
                            </div>
                        </div>
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions3
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">3</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end gap-md-5 flex-column flex-md-row gap-0 text-center">
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions4
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">6</p>
                            </div>
                        </div>
                        <div>
                            <div
                                class="div_width_number px-2 px-md-0 fw-bold d-flex gap-md-1 flex-md-row flex-column-reverse justify-content-center justify-content-md-end align-items-center">
                                <p v-for="item in id_header" :key="item.id" class="mt-1">{{ item.decisions5
                                }}</p>
                                <p class="p_center mt-1 text-center border border-2 rounded-circle">5</p>
                            </div>
                        </div>
                    </div>
                    <p class="fw-bold span_red my-2">الأعضاء الحاضرين</p>
                    <div class="row text-center">
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image1" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{ item.member1
                            }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image2" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{ item.member2
                            }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image3" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{ item.member3
                            }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image4" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{ item.member1
                            }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image5" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{ item.member5
                            }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main sessions -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_members"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const image4 = doc.data().image4;
        const image5 = doc.data().image5;
        const methods = {
            id: doc.id,
            member1: doc.data().member1,
            member2: doc.data().member2,
            member3: doc.data().member3,
            member4: doc.data().member4,
            member5: doc.data().member5,
            image1: image1 ? require("@/assets/image_municipal2/" + image1) : null,
            image2: image2 ? require("@/assets/image_municipal2/" + image2) : null,
            image3: image3 ? require("@/assets/image_municipal2/" + image3) : null,
            image4: image4 ? require("@/assets/image_municipal2/" + image4) : null,
            image5: image5 ? require("@/assets/image_municipal2/" + image5) : null,
            decisions1: doc.data().decisions1,
            decisions2: doc.data().decisions2,
            decisions3: doc.data().decisions3,
            decisions4: doc.data().decisions4,
            decisions5: doc.data().decisions5,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
import KpapHeaderThreeTow from "../folder header and footer/Header3_2.vue";
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
export default {
    name: "KpapSessions",
    components: {
        KpapHeaderThreeTow,
    },
    methods: {
        initializeDatepicker() {
            $(".datepicker").datepicker({
                dayNamesMin: ["الخميس", "الإربعاء", "الثلاثاء", "الإثنين", "الأحد", "السبت", "الجمعة"],
                monthNames: [
                    "يناير",
                    "فبراير",
                    "مارس",
                    "أبريل",
                    "مايو",
                    "يونيو",
                    "يوليو",
                    "أغسطس",
                    "سبتمبر",
                    "أكتوبر",
                    "نوفمبر",
                    "ديسمبر"
                ],
            });
            $('[data-date="6"], [data-date="10"]').addClass('custom_class_red');
            $('[data-date="19"], [data-date="30"]').addClass('custom_class_green');
            $('[data-date="16"]').addClass('custom_class_ccc');
        }
    },
    mounted() {
        this.initializeDatepicker();
    }
};
</script>