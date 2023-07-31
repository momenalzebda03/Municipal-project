<template>
    <!-- start main -->
    <section class="mt-md-5 section_questions">
        <div class="container-fluid px-4 font_text">
            <div class="row px-md-4 d-flex flex-column-reverse flex-lg-row">
                <div class="col-lg-6 mt-5 mt-lg-0" data-aos="fade-right">
                    <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                        <i data-bs-target="#carouselExampleControls" data-bs-slide="prev" aria-hidden="true"
                            class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                        <i data-bs-target="#carouselExampleControls" data-bs-slide="next" aria-hidden="true"
                            class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide pb-md-3" data-bs-ride="carousel">
                        <div class="carousel-inner pb-md-3">
                            <div class="carousel-item active">
                                <div class="div_margin rounded-3 p-3 shadow text-end">
                                    <p class="fw-bold">الإجابة</p>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre1 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">1</p>
                                    </div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre2 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">2</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="div_margin rounded-3 p-3 shadow text-end">
                                    <p class="fw-bold">الإجابة</p>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre1 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">1</p>
                                    </div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre2 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">2</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="div_margin rounded-3 p-3 shadow text-end">
                                    <p class="fw-bold">الإجابة</p>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre1 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">1</p>
                                    </div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre2 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">2</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="div_margin rounded-3 p-3 shadow text-end">
                                    <p class="fw-bold">الإجابة</p>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre1 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">1</p>
                                    </div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre2 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">2</p>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="div_margin rounded-3 p-3 shadow text-end">
                                    <p class="fw-bold">الإجابة</p>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre1 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">1</p>
                                    </div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <p v-for="item in id_header" :key="item.id"> {{ item.answre2 }}</p>
                                        <p class="p_center mt-1 text-center fw-bold border border-1 rounded-circle">2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 text-center text-sm-end mt-3 mt-lg-0" data-aos="fade-left">
                    <div class="text-center text-sm-end d-flex flex-column flex-sm-row gap-2 justify-content-end">
                        <h5 class="span_red fw-bold mt-2">الأسئلة الشائعة</h5>
                        <div class="d-flex justify-content-center">
                            <i
                                class="fas fa-question-circle border border-2 rounded-circle text-center pt-2 fs-5 my_icon_width"></i>
                        </div>
                    </div>
                    <p class="mt-3 text-secondary">هنا بعض الأسئلة الشائعة وإجاباتها</p>
                    <div class="d-flex justify-content-center justify-content-md-end">
                        <div class="d-flex justify-content-end div_mia div_width_50 position-relative pt-3">
                            <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                            <input type="input" class="form__field w-100" name="name" id='name' />
                            <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                                الرسائل</label>
                        </div>
                    </div>
                    <div class="fw-bold mt-5 bg-white px-4 py-3 shadow border border-1 rounded-3 my_active back_hover"
                        data-bs-slide-to="0" data-bs-target="#carouselExampleControls">
                        <span v-for="item in id_header" :key="item.id">{{ item.text_questions1 }}</span>
                    </div>
                    <div class="fw-bold mt-3 bg-white px-4 py-3 shadow border border-1 rounded-3 back_hover"
                        data-bs-slide-to="1" data-bs-target="#carouselExampleControls">
                        <span v-for="item in id_header" :key="item.id">{{ item.text_questions2 }}</span>
                    </div>
                    <div class="fw-bold mt-3 bg-white px-4 py-3 shadow border border-1 rounded-3 back_hover"
                        data-bs-slide-to="2" data-bs-target="#carouselExampleControls">
                        <span v-for="item in id_header" :key="item.id">{{ item.text_questions2 }}</span>
                    </div>
                    <div class="fw-bold mt-3 bg-white px-4 py-3 shadow border border-1 rounded-3 back_hover"
                        data-bs-slide-to="3" data-bs-target="#carouselExampleControls">
                        <span v-for="item in id_header" :key="item.id">{{ item.text_questions3 }}</span>
                    </div>
                    <div class="fw-bold mt-3 bg-white px-4 py-3 shadow border border-1 rounded-3 back_hover"
                        data-bs-slide-to="4" data-bs-target="#carouselExampleControls">
                        <span v-for="item in id_header" :key="item.id">{{ item.text_questions4 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
    <div class="d-flex justify-content-center">
        <div class="row mt-5 div_mia div_boostrap">
            <div class="col-6 text-center col-sm">
                <span
                    class="fas fa-chevron-left pt-2 text-center rounded-3 border border-1 active_click number_width"></span>
            </div>
            <div class="col-6 text-center col-sm">
                <p class="pt-1 rounded-3 border text-center border-1 active_click number_width">5</p>
            </div>
            <div class="col-6 d-flex justify-content-center justify-content-sm-start col-sm">
                <p class="pt-1 rounded-3 border text-center border-1 active_click number_width">4</p>
            </div>
            <div class="col-6 text-center col-sm">
                <p class="pt-1 rounded-3 border text-center border-1 active_click number_width">3</p>
            </div>
            <div class="col-6 d-flex justify-content-center justify-content-sm-start col-sm">
                <p class="pt-1 rounded-3 border text-center border-1 active_click number_width">2</p>
            </div>
            <div class="col-6 text-center col-sm">
                <p class="pt-1 rounded-3 border text-center border-1 active_click number_width">1</p>
            </div>
            <div class="col-6 text-center col-sm">
                <span
                    class="fas fa-chevron-right pt-2 text-center rounded-3 border border-1 active_click number_width"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "PageQuestions"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const methods = {
            id: doc.id,
            text_questions1: doc.data().text_one,
            text_questions2: doc.data().text_tow,
            text_questions3: doc.data().text_three,
            text_questions4: doc.data().text_four,
            answre1: doc.data().answre_one,
            answre2: doc.data().answre_tow,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
export default {
    name: "kpapQusetions",
    data() {
        return {
            activeQuestion: null,
        };
    },
    created() {
        this.changePageTitle('البلدية - الأسئلة');
    },
    mounted() {
        const carousel = document.getElementById('carouselExampleControls');
        const backHoverItems = document.getElementsByClassName('back_hover');

        for (let i = 0; i < backHoverItems.length; i++) {
            const backHoverItem = backHoverItems[i];

            carousel.addEventListener('slid.bs.carousel', function (event) {
                const activeSlideIndex = event.to;
                const targetSlideIndex = parseInt(backHoverItem.dataset.bsSlideTo);

                if (activeSlideIndex === targetSlideIndex) {
                    backHoverItem.classList.add('my_active');
                } else {
                    backHoverItem.classList.remove('my_active');
                }
            });
        }
        var tag_header = document.querySelectorAll(".back_hover");
        for (let i = 0; i < tag_header.length; i++) {
            var chekd = tag_header[i];
            chekd.addEventListener("click", function () {
                for (let i = 0; i < tag_header.length; i++) {
                    tag_header[i].classList.remove("my_active");
                }
                this.classList.add("my_active");
            });
        }
        var active_click = document.querySelectorAll(".active_click");
        for (let i = 0; i < active_click.length; i++) {
            var chekd1 = active_click[i];
            chekd1.addEventListener("click", function () {
                for (let i = 0; i < active_click.length; i++) {
                    active_click[i].classList.remove("active_color");
                }
                this.classList.add("active_color");
            });
        }
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>