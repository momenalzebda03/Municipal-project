<template>
    <!-- start main home -->
    <section class="mt-md-5 mx-3 mx-md-0">
        <div class="container-fluid px-md-5 font_text">
            <div class="row">
                <div class="col-md-6 col-lg-4 mt-5 position-relative d-inline-block" data-aos="fade-up">
                    <a href="#">
                        <img src="../../assets/image_page_home/ImageMap.png" alt="" loading="lazy" class="w-100 h-100">
                        <div class="overlay_text fw-bold position-absolute text-center text-md-end">
                            <p class="span_red">في غزة</p>
                            <p class="text-secondary">هل تبحث عن مكان (متحف, بنك, مستشفى،...) ؟</p>
                            <div class="d-flex justify-content-center justify-content-md-end mt-4">
                                <router-link to=""
                                    class="d-flex p_backgrpund text-decoration-none text-white px-4 border border-0 py-2 button_padding rounded-3 align-items-center gap-2">
                                    <span class="span_background">استكشاف</span>
                                    <i class="fas fa-map-marker-alt"></i>
                                </router-link>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-lg-4 my-3 my-lg-0" data-aos="fade-down">
                    <div class="d-flex flex-column-reverse flex-md-row justify-content-md-between justify-content-center">
                        <div class="d-flex gap-3 justify-content-center">
                            <div class="d-flex gap-1">
                                <div class="rounded-circle div_more"></div>
                                <div class="rounded-circle div_more"></div>
                                <div class="rounded-circle div_more"></div>
                            </div>
                            <div>
                                <p>المزيد</p>
                            </div>
                        </div>
                        <h4 class="fw-bold span_red text-center">إعلانات البلدية</h4>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner shadow rounded-4">
                            <div class="carousel-item active">
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div
                                    class="shadow bg-white px-4 pt-4 pb-0 rounded-4 text-center text-lg-end link_hover mt-1">
                                    <a href="#" class="text-decoration-none text-black fw-bold">
                                        <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                                        <div class="d-flex flex_row justify-content-between pt-lg-4">
                                            <div class="d-flex gap-2 link justify-content-center">
                                                <i class="fas fa-angle-double-left icon_margin1"></i>
                                                <p>قراءة المزيد</p>
                                            </div>
                                            <div
                                                class="d-flex gap-2 gap-lg-1 span_red justify-content-center flex-column-reverse flex-md-row">
                                                <p v-for="item in id_header" :key="item.id">{{ item.date }}</p>
                                                <i class="fas fa-clock icon_margin"></i>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-indicators d-flex justify-content-center gap-1">
                            <div class="rounded-circle div_more_carous border border-2 border-dark bg-black active position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                aria-current="true" aria-label="Slide 1"></div>
                            <div class="rounded-circle div_more_carous border border-2 border-dark bg-black position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-current="true" aria-label="Slide 2"></div>
                            <div class="rounded-circle div_more_carous bg-black border border-2 border-dark position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-current="true" aria-label="Slide 3"></div>
                            <div class="rounded-circle div_more_carous bg-black border border-2 border-dark position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-current="true" aria-label="Slide 4"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4 mt-5" data-aos="fade-down">
                    <div
                        class="div_top w-100 position-absolute pe-4 mb-2 d-flex flex-column-reverse pt-3 pt-lg-0 flex-md-row justify-content-md-between justify-content-center">
                        <div class="d-flex gap-3 justify-content-center">
                            <div class="d-flex gap-1">
                                <div class="rounded-circle div_more"></div>
                                <div class="rounded-circle div_more"></div>
                                <div class="rounded-circle div_more"></div>
                            </div>
                            <div>
                                <p>المزيد</p>
                            </div>
                        </div>
                        <h4 class="fw-bold span_red text-center">أخبار اليوم</h4>
                    </div>
                    <div id="carouselExampleIndicators1" class="h-100 carousel slide mt-5 pt-3 pt-lg-0 mt-lg-0"
                        data-bs-ride="carousel">
                        <div class="carousel-inner h-100">
                            <router-link to="image" class="h-100 carousel-item active">
                                <img :src="id_header[1]?.image" alt="" loading="lazy" class="w-100 h-100">
                                <div
                                    class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                    <span v-for="item in id_header" :key="item.id">{{ item.date1 }}</span>
                                    <span v-for="item in id_header" :key="item.id">{{ item.date2 }}</span>
                                    <div class="d-flex flex-column align-items-end">
                                        <span class="fas fa-clock"></span>
                                        <div class="bg-white div_hr_vertical me-2"></div>
                                    </div>
                                    <span v-for="item in id_header" :key="item.id">{{ item.time }}</span>
                                    <span v-for="item in id_header" :key="item.id">{{ item.my_text }}</span>
                                </div>
                            </router-link>
                            <router-link to="image" class="h-100 carousel-item">
                                <img :src="id_header[1]?.image" alt="" loading="lazy" class="w-100 h-100">
                                <div
                                    class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                    <span>09</span>
                                    <span>08</span>
                                    <div class="d-flex flex-column align-items-end">
                                        <span class="fas fa-clock"></span>
                                        <div class="bg-white div_hr_vertical me-2"></div>
                                    </div>
                                    <span>13:27:03</span>
                                    <span>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</span>
                                </div>
                            </router-link>
                            <router-link to="image" class="h-100 carousel-item">
                                <img :src="id_header[1]?.image" alt="" loading="lazy" class="w-100 h-100">
                                <div
                                    class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                    <span>09</span>
                                    <span>08</span>
                                    <div class="d-flex flex-column align-items-end">
                                        <span class="fas fa-clock"></span>
                                        <div class="bg-white div_hr_vertical me-2"></div>
                                    </div>
                                    <span>13:27:03</span>
                                    <span>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</span>
                                </div>
                            </router-link>
                            <router-link to="image" class="h-100 carousel-item">
                                <img :src="id_header[1]?.image" alt="" loading="lazy" class="w-100 h-100">
                                <div
                                    class="overlay_text fw-bold position-absolute text-center text-md-end d-flex flex-column text-white">
                                    <span>09</span>
                                    <span>08</span>
                                    <div class="d-flex flex-column align-items-end">
                                        <span class="fas fa-clock"></span>
                                        <div class="bg-white div_hr_vertical me-2"></div>
                                    </div>
                                    <span>13:27:03</span>
                                    <span>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="carousel-indicators d-flex justify-content-center gap-1">
                            <div class="rounded-circle div_more_carous border border-2 border-dark bg-black active position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0"
                                aria-current="true" aria-label="Slide 1"></div>
                            <div class="rounded-circle div_more_carous border border-2 border-dark bg-black position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1"
                                aria-current="true" aria-label="Slide 2"></div>
                            <div class="rounded-circle div_more_carous bg-black border border-2 border-dark position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2"
                                aria-current="true" aria-label="Slide 3"></div>
                            <div class="rounded-circle div_more_carous bg-black border border-2 border-dark position-relative"
                                type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3"
                                aria-current="true" aria-label="Slide 4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end main home -->
        </div>
    </section>
    <!-- start main account -->
    <section class="font_text section_maring">
        <div class="text-center span_red">
            <h4 class="fw-bold" data-aos="flip-left">الوصول السريع</h4>
        </div>
        <div class="d-none d-lg-flex image_index justify-content-between position-absolute">
            <img loading="lazy" src="../../assets/image_page_home/ImageBackground.png" alt="">
            <img loading="lazy" src="../../assets/image_page_home/ImageBackground.png" alt="">
        </div>
        <div class="container mt-lg-5 pt-2">
            <div class="row">
                <div class="col fw-bold" data-aos="fade-up">
                    <div class="d-flex flex-column flex-lg-row justify-content-center gap-2 text-decoration-none">
                        <p class="mt-2 text-black p_hover text-center text-lg-end">مشاريع<br>البلدية</p>
                        <router-link to="" class="text-decoration-none">
                            <div class="d-flex text-center justify-content-center">
                                <i class="fas fa-laptop icon_width p-4 fs-5 text-white rounded-circle"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col fw-bold" data-aos="fade-down">
                    <div class="d-flex flex-column flex-lg-row justify-content-center gap-2 text-decoration-none">
                        <p class="mt-2 text-black p_hover text-center text-lg-end">المعاملات<br>دليل</p>
                        <router-link to="" class="text-decoration-none">
                            <div class="d-flex text-center justify-content-center">
                                <i class="fas fa-book-open icon_width p-4 fs-5 text-white rounded-circle"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="col" data-aos="fade-up">
                    <div
                        class="d-flex fw-bold flex-column flex-lg-row justify-content-center gap-2 text-decoration-none me-lg-5 pe-lg-4">
                        <p class="mt-2 text-black p_hover text-center text-lg-end">الألكترونية<br>الخدمات</p>
                        <div class="d-flex text-center justify-content-center">
                            <i @click="click_flex"
                                class="fas fa-handshake-alt icon_width p-4 fs-5 text-white rounded-circle"></i>
                        </div>
                    </div>
                    <div v-if="divVisible"
                        class="div_visible bg-white position-absolute d-flex justify-content-center mt-2 mt-lg-0">
                        <div class="text-center icon_click" @click="click_flex">
                            <i class="fa-solid fa-palette"></i>
                            <p class="mt-2">بوابة<br>التوظيف</p>
                        </div>
                        <div class="mt-sm-5 mt-0 mx-0 mx-sm-3 text-center icon_click" @click="click_flex">
                            <i class="fa-solid fa-users"></i>
                            <p class="mt-2">خدمات<br>الموظفين</p>
                        </div>
                        <div class="text-center icon_click" @click="click_flex">
                            <i class="fa-solid fa-users-viewfinder"></i>
                            <p class="mt-2">اهداف<br>الموظفين</p>
                        </div>
                    </div>
                </div>
                <div class="col fw-bold" data-aos="fade-down">
                    <div class="d-flex flex-column flex-lg-row justify-content-center gap-2 text-decoration-none">
                        <p class="mt-2 text-black p_hover text-center text-lg-end">الشكاوى<br>والاستفسارات</p>
                        <router-link to="" class="text-decoration-none">
                            <div class="d-flex text-center justify-content-center">
                                <i class="fas fa-users icon_width p-4 fs-5 text-white rounded-circle"></i>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main account -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "PageHome"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image = doc.data().image;
        const methods = {
            id: doc.id,
            text: doc.data().bextadvertisentsdate,
            date: doc.data().date,
            date1: doc.data().date1,
            date2: doc.data().date2,
            my_text: doc.data().text,
            time: doc.data().time,
            image: image ? require("@/assets/image_page_home/" + image) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>
<script>
export default {
    name: "HomeKpap",
    data() {
        return {
            divVisible: false,
        };
    },
    created() {
        this.changePageTitle('البلدية - الرئيسية');
    },
    methods: {
        click_flex() {
            this.divVisible = !this.divVisible;
        },
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
};
</script>