<template>
    <!-- start main albmus -->
    <section class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden px-md-5">
        <div class="row">
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
                    <h4 class="fw-bold span_red">الألبومات</h4>
                </div>
            </div>
        </div>
        <div class="d-flex flex-sm-row flex-column mt-3 justify-content-between">
            <div class="image_respons" data-aos="fade-right">
                <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                    <i class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                    <i class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                </div>
            </div>
            <div class="div_mia div_width_92" data-aos="fade-left">
                <div class="d-flex flex-column flex-sm-row justify-content-end border-3 border-bottom">
                    <router-link to="/albumsviedo"
                        class="my-2 my-md-0 px-sm-5 border_bottom_hover icon_click text-center text-black text-decoration-none d-flex gap-3 justify-content-center align-items-center pb-2">
                        <span>الفيديو</span>
                        <i class="fas fa-play fs-5"></i>
                    </router-link>
                    <router-link to="/albums"
                        class="my-2 my-md-0 px-sm-5 div_border_bottom border_bottom_hover icon_click text-center text-black text-decoration-none d-flex gap-3 justify-content-center align-items-center pb-2">
                        <span>الصور</span>
                        <i class="fas fa-file-image fs-5"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <section class="row mt-2">
            <div class="col mt-3" data-aos="fade-right">
                <div class="card icon_click">
                    <div id="outerCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img loading="lazy" :src="id_header[2]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                            <div class="carousel-item">
                                <img loading="lazy" :src="id_header[1]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-control-prev" data-bs-target="#outerCarousel" data-bs-slide="prev">
                        <div class="position-absolute start-0 bottom-50">
                            <i data-bs-target="#outerCarousel" data-bs-slide="prev"
                                class="fas fa-chevron-left fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="carousel-control-next" data-bs-target="#outerCarousel" data-bs-slide="next">
                        <div class="position-absolute end-0 bottom-50">
                            <i data-bs-target="#outerCarousel" data-bs-slide="next"
                                class="fas fa-chevron-right fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="card-body div_card_bottom pb-1 p-4">
                        <div class="d-flex flex-column flex-sm-row justify-content-between">
                            <div class="d-flex flex-sm-column flex-row justify-content-center text-center gap-2">
                                <span>{{ id_header[2]?.number }}</span>
                                <i class="fas fa-file-image fs-5"></i>
                            </div>
                            <p>{{ id_header[2]?.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-3" data-aos="fade-down">
                <div class="card icon_click">
                    <div id="outerCarousel1" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img loading="lazy" :src="id_header[0]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                            <div class="carousel-item">
                                <img loading="lazy" :src="id_header[1]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-control-prev" data-bs-target="#outerCarousel1" data-bs-slide="prev">
                        <div class="position-absolute start-0 bottom-50">
                            <i data-bs-target="#outerCarousel1" data-bs-slide="prev"
                                class="fas fa-chevron-left fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="carousel-control-next" data-bs-target="#outerCarousel1" data-bs-slide="next">
                        <div class="position-absolute end-0 bottom-50">
                            <i data-bs-target="#outerCarousel1" data-bs-slide="next"
                                class="fas fa-chevron-right fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="card-body div_card_bottom pb-1 p-4">
                        <div class="d-flex flex-column flex-sm-row justify-content-between">
                            <div class="d-flex flex-sm-column flex-row justify-content-center text-center gap-2">
                                <span>{{ id_header[0]?.number }}</span>
                                <i class="fas fa-file-image fs-5"></i>
                            </div>
                            <p>{{ id_header[0]?.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-3" data-aos="fade-left">
                <div class="card icon_click">
                    <div id="outerCarousel2" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img loading="lazy" :src="id_header[1]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                            <div class="carousel-item">
                                <img loading="lazy" :src="id_header[2]?.image" class="card-img-top" alt="...">
                                <i
                                    class="fas fa-image position-absolute start-50 top-50 translate-middle d-none div_hover_block p-4 bg-white rounded-circle fs-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-control-prev" data-bs-target="#outerCarousel2" data-bs-slide="prev">
                        <div class="position-absolute start-0 bottom-50">
                            <i data-bs-target="#outerCarousel2" data-bs-slide="prev"
                                class="fas fa-chevron-left fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="carousel-control-next" data-bs-target="#outerCarousel2" data-bs-slide="next">
                        <div class="position-absolute end-0 bottom-50">
                            <i data-bs-target="#outerCarousel2" data-bs-slide="next"
                                class="fas fa-chevron-right fs-4 arraw_image image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                    <div class="card-body div_card_bottom pb-1 p-4">
                        <div class="d-flex flex-column flex-sm-row justify-content-between">
                            <div class="d-flex flex-sm-column flex-row justify-content-center text-center gap-2">
                                <span>{{ id_header[1]?.number }}</span>
                                <i class="fas fa-file-image fs-5"></i>
                            </div>
                            <p>{{ id_header[1]?.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    <!-- end main albmus -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_news_image"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image = doc.data().image;
        const methods = {
            id: doc.id,
            text: doc.data().text,
            number: doc.data().number,
            image: image ? require("@/assets/Image_albpums/" + image) : null,
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
    name: "KpapAlbums",
    data() {
        return {
            rotateClass: '',
            rotateClass1: ''
        };
    },
    methods: {
        click_rotate() {
            this.rotateClass = this.rotateClass === 'rotate_100' ? '' : 'rotate_100';
        },
        click_rotate1() {
            this.rotateClass1 = this.rotateClass1 === 'rotate_100' ? '' : 'rotate_100';
        },
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
        }
    },
    created() {
        this.changePageTitle('المركز الأعلامي - الألبومات - الصور');
    },
    mounted() {
        this.initializeDatepicker();
    }
}
</script>