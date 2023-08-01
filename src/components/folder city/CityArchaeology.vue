<template>
    <!-- start main bilogy -->
    <section class="font_text overflow-hidden">
        <div class="row overflow-hidden">
            <div class="col-md-6 text-center text-md-end mt-5" data-aos="fade-right">
                <h5 class="span_red fw-bold me-4">المعالم الأثرية</h5>
                <div class="overflow-hidden position-relative pb-5 mb-5 div_vh" @click="click_scroll" ref="scrollContainer"
                    @mousedown="mouseDownHandler" @mousemove="mouseMoveHandler">
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title1 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text1 }}
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title2 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text2 }}
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title3 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text3 }}
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title4 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text4 }}
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title5 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text5 }}
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background" v-for="item in id_header" :key="item.id">{{
                                item.title6 }}</span>
                        </div>
                        <p class="mt-3 fw-bold span_background" v-for="item in id_header" :key="item.id"> {{ item.text6 }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 text-end position-relative" data-aos="fade-left">
                <div id="carouselExampleControls" class="carousel slide carousel_height" data-bs-ride="carousel">
                    <div class="carousel-inner height_100">
                        <div class="d-flex align-items-center justify-content-center position-absolute start-25 top-50">
                            <i data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                                class="fas fa-chevron-left fs-4 icon_black image_none back_hover text-white px-4"></i>
                        </div>
                        <router-link to="/more">
                            <div class="carousel-item active height_100">
                                <img loading="lazy" src="../../assets/image_civil2/ImageMosque.png" alt=""
                                    class="w-100 image_object height_100">
                            </div>
                            <div class="carousel-item image_object height_100">
                                <img loading="lazy" src="../../assets/image_civil2/ImageViedo.png" alt=""
                                    class="w-100 image_object height_100">
                            </div>
                        </router-link>
                        <div class="d-flex align-items-center justify-content-center position-absolute end-0 top-50">
                            <i data-bs-target="#carouselExampleControls" data-bs-slide="next"
                                class="fas fa-chevron-right fs-4 icon_black image_none back_hover text-white px-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <img loading="lazy" src="../../assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background_biology position-absolute">
    <!-- end main bilogy -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_archaeology"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            title4: doc.data().title4,
            title5: doc.data().title5,
            title6: doc.data().title6,
            text1: doc.data().text1,
            text2: doc.data().text2,
            text3: doc.data().text3,
            text4: doc.data().text4,
            text5: doc.data().text5,
            text6: doc.data().text6
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapArchaeology",
    data() {
        return {
            pos: { top: 0, y: 0 },
        };
    },
    created() {
        this.changePageTitle('المدينة - الأثار');
    },
    mounted() {
        const container = document.querySelector('body section .row .div_vh');
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            container.scrollBy(0, e.deltaY);
        });
        const ele = document.querySelector('body section .row .div_vh');
        ele.scrollTop = 100;
        ele.addEventListener('mousedown', this.mouseDownHandler);
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_scroll() {
            const mouseDownHandler = (e) => {
                if (this.isCodeRunning) {
                    this.pos = {
                        left: this.$refs.scrollContainer.scrollLeft,
                        top: this.$refs.scrollContainer.scrollTop,
                        x: e.clientX,
                        y: e.clientY
                    };
                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                }
            };
            const mouseMoveHandler = (e) => {
                if (this.isCodeRunning && this.pos) {
                    const dx = e.clientX - this.pos.x;
                    const dy = e.clientY - this.pos.y;
                    this.$refs.scrollContainer.scrollLeft = this.pos.left - dx;
                    this.$refs.scrollContainer.scrollTop = this.pos.top - dy;
                }
            };
            const mouseUpHandler = () => {
                if (this.isCodeRunning) {
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                }
            };
            this.isCodeRunning = true;
            this.$refs.scrollContainer.addEventListener('mousedown', mouseDownHandler);
        }
    }
};
</script>