<template>
    <!-- start main image -->
    <section class="font_text overflow-hidden">
        <div class="row overflow-hidden">
            <div class="col-md-6 text-center text-md-end mt-5" data-aos="fade-right">
                <router-link to="/Archaeology1"
                    class="fas fa-times fs-3 icon_click text-black text-decoration-none icon_hover"></router-link>
                <h1 class="fw-bold mt-3">{{ getTitleById($route.params.id) }}</h1>
                <span>فلسطين - غزة - دير البلح</span>
                <div class="d-flex justify-content-center justify-content-md-end mt-2">
                    <hr class="w-75">
                </div>
                <p class="px-4 px-md-0 fw-bold">
                    تشتهر مدينة دير البلح بمجموعة من التوابيت المصنوعة على شكل إنسان، التي يعود تاريخها إلى العصر
                    البرونزي المتأخر والمنسوب إلى ما يسمى بملوك الفلسطينيين، يعود تاريخ المقبرة إلى الفترة ما بين القرن
                    الرابع عشر قبل الميلاد و 1200 قبل الميلاد، هذه المجموعة المدهشة من التوابيت ذات أغطية الوجوه
                    .المتحركة تشكل أكبر مجموعة من التوابيت المصنوعة على شكل إنسان والتي اكتشفت في فلسطين
                </p>
                <p class="px-4 px-md-0 fw-bold">
                    وجدت التوابيت في مجموعات من ثلاثة أو أكثر، وتبلغ المسافة بين كل مجموعة وأخرى بين 3-4أمتار،
                    اكتشفت هذه التوابيت في قبور محفورة من حجر الكركار أو الطين الأحمر الموجهة نحو البحر، اكتشف مع هذه
                    التوابيت كميات كبيرة من الأواني المصنوعة من الالباستر، ومنها من الفخار الكنعاني والمايسيني والقبرصي
                    .والمصري ويبدو أنها كانت تستخدم قرابين للدفن
                </p>
                <p class="px-4 px-md-0 fw-bold">
                    تم التنقيب في مقبرة دير البلح بين عامي 1972 و 1982م لمصلحة دائرة الآثار في الجامعة العبرية بالقدس
                    وجمعية استكشاف إسرائيل. لايوجد في الواقع اليوم شيء من هذه الآثار لأن كل المكتشفات معروضة الآن
                    في متحف الروكفلر ومتحف إسرائيل في القدس. في العام 1971م نظم الجنرال موشيه دايان حملة تنقيب غير
                    شرعية عن الآثار في المنطقة وقد ضم كل المكتشفات التي وجدها إلى مقتنياته الشخصية التي احتفظ بها
                    حتى وفاته، وبعد ذلك بيعت جميع هذه المقتنيات التي تضم مجموعة كبيرة من آثار دير البلح من قبل ورثته
                    .لمتحف إسرائيل
                </p>
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
                                <img loading="lazy" :src=getImageById($route.params.id) alt="" class="w-100 height_100">
                            </div>
                            <div class="carousel-item">
                                <img loading="lazy" src="../../assets/image_page_home_1/ImageMask.png" alt=""
                                    class="w-100 height_100">
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
    <!-- end main image -->
    <img loading="lazy" src="../../assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background_biology position-absolute">
    <section class="container-fluid ms-0 ps-md-5 text-center text-md-start position-absolute translate_100 image_none">
        <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
    </section>
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
function getTitleById(id) {
    const item = id_header.value.find((item) => item.id === id);
    return item ? item.title1 || item.title2 || item.title3 || item.title4 || item.title5 || item.title6 : '';
}
function getImageById(id) {
    const item = id_header.value.find((item) => item.id === id);
    return item ? item.image1 || item.image2 || item.image3 || item.image4 || item.image5 || item.image6 : '';
}
</script>

<script>
export default {
    name: "KpapPhoto",
    created() {
        this.changePageTitle('المدينة - الأثار - الصور');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>