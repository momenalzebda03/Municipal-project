<template>
    <!-- start main public -->
    <section class="container-fluid text-center text-lg-end px-4 px-lg-5 mt-lg-5 font_text overflow-hidden">
        <h5 class="fw-bold span_red mt-4">الخدمات العامة</h5>
        <div class="d-flex justify-content-end">
            <p class="div_mia div_width_50"> تقدم بلدية غزة نحو 30 خدمة أساسية لسكان مدينة غزة البالغ تعدادهم قرابة
                ‏670 الف نسمة في نهاية عام 2018م بما يشكل 13% من سكان دولة فلسطين
                حيث تبلغ مساحة المدينة 56كم2، مما يجعلها من أكثر المدن كثافة سكانية</p>
        </div>
        <div class="row">
            <router-link :to="{ path: '/water/' + id_header[0]?.id }" data-aos="fade-right"
                class="col-md-6 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i class="fas fa-recycle p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title1 }}</p>
                        <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text1 }}</p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path: '/water/' + id_header[2]?.id }" data-aos="fade-down"
                class="col-md-6 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i
                            class="fas fa-swimming-pool p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title2 }}</p>
                        <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text2 }}</p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path: '/water/' + id_header[1]?.id }" data-aos="fade-left"
                class="col-md-12 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i
                            class="fas fa-faucet-drip p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold" v-for="item in id_header" :key="item.id">{{ item.title3 }}</p>
                        <p class="card-text ms-lg-5" v-for="item in id_header" :key="item.id">{{ item.text3 }}</p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
    <!-- start main public -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_services"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            text1: doc.data().text1,
            text2: doc.data().text2,
            text3: doc.data().text3
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapPublic",
    created() {
        this.changePageTitle('الخدمات - الخدمات العامة');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>