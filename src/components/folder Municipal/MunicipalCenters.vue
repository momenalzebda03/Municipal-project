<template>
    <!-- start main centers -->
    <section class="font_text mt-5 px-3 px-md-5 container-fluid overflow-hidden">
        <h4 class="span_red text-center text-lg-end me-3 fw-bold">المراكز</h4>
        <div class="row">
            <router-link to="/centers1" data-aos="fade-right"
                class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image1" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo1" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title1 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text1 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/centers2" data-aos="fade-down" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image2" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo2" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title2 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text2 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/centers3" data-aos="fade-left" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image3" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo3" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title3 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text3 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/centers4" data-aos="fade-right"
                class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image4" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo4" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title4 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text4 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/centers5" data-aos="fade-down" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image5" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo5" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title5 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text5 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/centers6" data-aos="fade-left" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image6" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo6" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title6 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text6 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
            <div class="col-md-12 col-lg-4"></div>
            <div class="col-md-12 col-lg-4"></div>
            <router-link to="/centers7" data-aos="fade-left"
                class="col-md-12 col-lg-4 icon_click text-decoration-none mt-5">
                <div class="card shadow h-100">
                    <div class="div_bottom_30">
                        <img loading="lazy" :src="id_header[0]?.image7" class="card-img-top p-2" alt="...">
                        <div class="text-center div_translate">
                            <img loading="lazy" :src="id_header[1]?.logo7" alt="" class="image_repons">
                        </div>
                        <div class="card-body pb-0 div_translate text-center text-lg-end">
                            <h5 class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title7 }}</h5>
                            <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text7 }}</p>
                            <div
                                class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                                <div class="icon_back rounded-circle p-1">
                                    <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                </div>
                                <span class="text_hover mt-1 text-nowrap">عرض التفاصيل</span>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
    <!-- end main centers -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_center"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const image4 = doc.data().image4;
        const image5 = doc.data().image5;
        const image6 = doc.data().image6;
        const image7 = doc.data().image7;
        const logo1 = doc.data().logo1;
        const logo2 = doc.data().logo2;
        const logo3 = doc.data().logo3;
        const logo4 = doc.data().logo4;
        const logo5 = doc.data().logo5;
        const logo6 = doc.data().logo6;
        const logo7 = doc.data().logo7;
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            title4: doc.data().title4,
            title5: doc.data().title5,
            title6: doc.data().title6,
            title7: doc.data().title7,
            text1: doc.data().text1,
            text2: doc.data().text2,
            text3: doc.data().text3,
            text4: doc.data().text4,
            text5: doc.data().text5,
            text6: doc.data().text6,
            text7: doc.data().text7,
            image1: image1 ? require("@/assets/image_municipal7/" + image1) : null,
            image2: image2 ? require("@/assets/image_municipal7/" + image2) : null,
            image3: image3 ? require("@/assets/image_municipal7/" + image3) : null,
            image4: image4 ? require("@/assets/image_municipal7/" + image4) : null,
            image5: image5 ? require("@/assets/image_municipal7/" + image5) : null,
            image6: image6 ? require("@/assets/image_municipal7/" + image6) : null,
            image7: image7 ? require("@/assets/image_municipal7/" + image7) : null,
            logo1: logo1 ? require("@/assets/image_municipal8/" + logo1) : null,
            logo2: logo2 ? require("@/assets/image_municipal8/" + logo2) : null,
            logo3: logo3 ? require("@/assets/image_municipal8/" + logo3) : null,
            logo4: logo4 ? require("@/assets/image_municipal8/" + logo4) : null,
            logo5: logo5 ? require("@/assets/image_municipal8/" + logo5) : null,
            logo6: logo6 ? require("@/assets/image_municipal8/" + logo6) : null,
            logo7: logo7 ? require("@/assets/image_municipal8/" + logo7) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapCenters",
    created() {
        this.changePageTitle('البلدية - المراكز');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>