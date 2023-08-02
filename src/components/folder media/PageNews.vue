<template>
    <!-- start main news -->
    <section class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden px-4 px-md-5">
        <div class="row">
            <div class="col-12 col-md text-center text-md-start" data-aos="fade-right">
                <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev" aria-hidden="true"
                        class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next" aria-hidden="true"
                        class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                </div>
            </div>
            <div class="col-12 col-md col_index_2" data-aos="fade-left">
                <div
                    class="d-flex mt-4 mt-md-0 gap-sm-4 flex-column-reverse gap-0 flex-sm-row justify-content-center justify-content-md-end">
                    <li class="nav-item dropdown nav-link">
                        <a class="text-black icon_hover text-decoration-none dropdown-toggle" :class="rotateClass" href="#"
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span @click="click_rotate" class="dropdown-text">التقويم</span>
                        </a>
                        <div class="dropdown-menu datepicker datepicker_1 shadow rounded-3"></div>
                    </li>
                    <li class="nav-item dropdown nav-link">
                        <a class="text-black icon_hover text-decoration-none dropdown-toggle dropdown_left w-50"
                            :class="rotateClass1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <span @click="click_rotate1" class="dropdown-text">فرز</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">الأحدث أولا</a></li>
                            <li><a class="dropdown-item" href="#">الأقدم أولا</a></li>
                        </ul>
                    </li>
                    <h4 class="fw-bold span_red">أخبار واعلانات</h4>
                </div>
            </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <section class="row mt-2">
                        <div class="col-12 col-md mt-3" data-aos="fade-right">
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text1 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text2 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text3 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text4 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text5 }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[1]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[1]?.news_time1 }}</span>
                                <span>{{ id_header[1]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[1]?.news_title }}</span>
                                <span>{{ id_header[1]?.news_text }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[0]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[0]?.news_time1 }}</span>
                                <span>{{ id_header[0]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[0]?.news_title }}</span>
                                <span>{{ id_header[0]?.news_text }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[2]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[2]?.news_time1 }}</span>
                                <span>{{ id_header[2]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[2]?.news_title }}</span>
                                <span>{{ id_header[2]?.news_text }}</span>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="carousel-item">
                    <section class="row mt-2">
                        <div class="col-12 col-md mt-3" data-aos="fade-right">
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text1 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text2 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text3 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text4 }}</span>
                            </div>
                            <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                                <span class="span_red fw-bold" v-for="item in id_header" :key="item.id">{{
                                    item.text5 }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[1]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[1]?.news_time1 }}</span>
                                <span>{{ id_header[1]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[1]?.news_title }}</span>
                                <span>{{ id_header[1]?.news_text }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[0]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[0]?.news_time1 }}</span>
                                <span>{{ id_header[0]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[0]?.news_title }}</span>
                                <span>{{ id_header[0]?.news_text }}</span>
                            </div>
                        </div>
                        <div class="col-12 col-md mt-3 position-relative d-inline-block" data-aos="fade-up">
                            <img loading="lazy" :src="id_header[2]?.news_image" alt="" class="image_respons">
                            <div
                                class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                <span>{{ id_header[2]?.news_time1 }}</span>
                                <span>{{ id_header[2]?.news_time2 }}</span>
                                <div class="d-flex flex-column align-items-end">
                                    <span class="fas fa-clock"></span>
                                    <div class="bg-white div_hr_vertical me-2"></div>
                                </div>
                                <span>{{ id_header[2]?.news_title }}</span>
                                <span>{{ id_header[2]?.news_text }}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <!-- end main news -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_news"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const news_image = doc.data().news_image;
        const methods = {
            id: doc.id,
            text1: doc.data().text1,
            text2: doc.data().text2,
            text3: doc.data().text3,
            text4: doc.data().text4,
            text5: doc.data().text5,
            news_title: doc.data().news_title,
            news_time1: doc.data().news_time1,
            news_time2: doc.data().news_time2,
            news_text: doc.data().news_text,
            news_image: news_image ? require("@/assets/image_news/" + news_image) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
export default {
    name: "KpapNews",
    data() {
        return {
            rotateClass: '',
            rotateClass1: ''
        };
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
        },
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_rotate() {
            this.rotateClass = this.rotateClass === 'rotate_100' ? '' : 'rotate_100';
        },
        click_rotate1() {
            this.rotateClass1 = this.rotateClass1 === 'rotate_100' ? '' : 'rotate_100';
        },
    },
    created() {
        this.changePageTitle('المركز الأعلامي - الأخبار');
    },
    mounted() {
        this.initializeDatepicker();
    }
}
</script>