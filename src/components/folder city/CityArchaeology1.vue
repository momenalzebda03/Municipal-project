<template>
    <!-- start main Archaeology1 -->
    <div class="text-center text-md-end">
        <router-link to="/museum"
            class="fas fa-times fs-3 icon_click position-fixed text-black router_close text-decoration-none icon_hover"></router-link>
    </div>
    <section class="container-fluid text-center text-lg-end px-lg-5 mt-lg-5 pt-5 font_text overflow-hidden">
        <h5 class="fw-bold span_red mt-4">الأثار</h5>
        <div class="row">
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-right">
                <router-link :to="{ path: '/photo/' + id_header[2]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[2]?.image1" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for=" item in id_header" :key="item.id">{{ item.title1 }}
                        </h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-down">
                <router-link :to="{ path: '/photo/' + id_header[4]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[4]?.image2" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for=" item in id_header" :key="item.id">{{ item.title2 }}
                        </h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-left">
                <router-link :to="{ path: '/photo/' + id_header[0]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[0]?.image3" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for=" item in id_header" :key="item.id">{{ item.title3 }}
                        </h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-right">
                <router-link :to="{ path: '/photo/' + id_header[1]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[1]?.image4" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for=" item in id_header" :key="item.id">{{ item.ttite4 }}
                        </h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-down">
                <router-link :to="{ path: '/photo/' + id_header[5]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[5]?.image5" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for=" item in id_header" :key="item.id">{{ item.title5 }}
                        </h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4 mt-3" data-aos="fade-left">
                <router-link :to="{ path: '/photo/' + id_header[3]?.id }"
                    class="card card_hover icon_click rounded-3 text-decoration-none shadow">
                    <div class="overflow-hidden">
                        <img loading="lazy" :src="id_header[3]?.image6" class="card-img-top w-100 p-3" alt="...">
                    </div>
                    <div class="card-body text-center text-lg-end">
                        <h5 class="card_title_hover fw-bold" v-for="item in id_header" :key="item.id">{{ item.title6 }}</h5>
                        <div
                            class="mt-4 d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end text-black">
                            <div class="icon_back rounded-circle p-1">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="text_hover mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
    <!-- end main Archaeology1 -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "museum_Antiquities"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const image4 = doc.data().image4;
        const image5 = doc.data().image5;
        const image6 = doc.data().image6;
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            ttite4: doc.data().ttite4,
            title5: doc.data().title5,
            title6: doc.data().title6,
            image1: image1 ? require("@/assets/image_civiil4/" + image1) : null,
            image2: image2 ? require("@/assets/image_civiil4/" + image2) : null,
            image3: image3 ? require("@/assets/image_civiil4/" + image3) : null,
            image4: image4 ? require("@/assets/image_civiil4/" + image4) : null,
            image5: image5 ? require("@/assets/image_civiil4/" + image5) : null,
            image6: image6 ? require("@/assets/image_civiil4/" + image6) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapArchaeology1",
    created() {
        this.changePageTitle('المدينة - الأثار');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>