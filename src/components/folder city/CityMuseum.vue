<template>
    <!-- start main museum -->
    <section class="container-fluid text-center text-lg-end px-lg-5 mt-lg-5 pt-5 font_text overflow-hidden">
        <div class="row">
            <div class="col-lg-7 div_translate_170">
                <img loading="lazy" src="../../assets/image_civiil3/ImageBackground.png" alt="" class="w-100">
            </div>
            <div class="col-lg-5">
                <h5 class="fw-bold span_red">المتحف الإلكتروني</h5>
                <p> تزخر مدينة غزة الفلسطينية بتراث أثري وتاريخي يعود لآلاف السنين، ومنذ نشأتها في عام ثلاثة
                    آلاف قبل الميلاد، تعتبر من أقدم المدن الأثرية والتاريخية، المعبرة عن تجذر الحضارة الفلسطينية العربية منذ
                    أنشأها الكنعانيون، يضم المتحف مئات القطع الأثرية، من فخار، زجاج، عاج، أعمدة كورالثية، زينة نساء، وغيرها،
                    وتعود تلك القطع إلى عدد من العصور، منها العصر اليوناني، الروماني، البيزنطي، والإسلامي بما يحتويه من
                    العصر .الأيوبي والأموي والمملوكي والعثماني</p>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-right">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img :src="id_header[0]?.image1" loading="lazy" class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute"
                                v-for="item in id_header" :key="item.id">{{ item.title1 }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-6 col-lg-4" data-aos="fade-down">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img :src="id_header[0]?.image2" loading="lazy" class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute"
                                v-for="item in id_header" :key="item.id">{{ item.title2 }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-md-12 col-lg-4 mt-3 mt-lg-0" data-aos="fade-left">
                <router-link to="/Archaeology1">
                    <div class="card card_hover icon_click rounded-3">
                        <div class="position-relative">
                            <img :src="id_header[0]?.image3" loading="lazy" class="card-img-top w-100 p-3" alt="...">
                            <div class="image_text w-100 translate-middle text-white position-absolute"
                                v-for="item in id_header" :key="item.id">{{ item.title3 }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
    <!-- start main museum -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_museum"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const methods = {
            id: doc.id,
            title1: doc.data().title1,
            title2: doc.data().title2,
            title3: doc.data().title3,
            image1: image1 ? require("@/assets/image_civiil3/" + image1) : null,
            image2: image2 ? require("@/assets/image_civiil3/" + image2) : null,
            image3: image3 ? require("@/assets/image_civiil3/" + image3) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "KpapMuseum",
    created() {
        this.changePageTitle('المدينة - المتحف');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>