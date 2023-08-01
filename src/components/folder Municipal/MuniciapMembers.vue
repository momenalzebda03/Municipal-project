<template>
    <!-- start main members -->
    <section class="font_text overflow-hidden">
        <KpapHeaderThreeTow />
        <div class="container-fluid px-4 px-md-5 text-end">
            <div class="row">
                <div class="col-md-6" data-aos="fade-right">
                    <div
                        class="div_left px-0 p-md-5 mt-4 d-flex justify-content-center align-items-center rounded-3 border border-2">
                        <div class="text-center">
                            <img loading="lazy" src="../../assets/image_municipal2/PersonalBorder.png" alt=""
                                class="mb-3 image_border_left rounded-circle">
                            <p class="span_red fw-bold" id="text_left">م. هاشم سكيك</p>
                            <div class="d-flex justify-content-center">
                                <div class="div_hr_center"></div>
                            </div>
                            <div class="d-flex justify-content-center pb-3">
                                <p class="p_hr position-absolute px-3">عضو مجلس بلدي</p>
                            </div>
                            <p>ماجستير إدارة تشييد، مدير عام شركة بالكون للمقاولات والتجارة العامة، عضو مجلس إدارة اتحاد
                                المقاولين، أمين سر مركز التحكيم الهندسي، أمين سر مركز فض الخلافات</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 text-center text-md-end mt-4 mt-md-0" data-aos="fade-left">
                    <p class="fw-bold">أعضاء المجلس البلدي الحاليين</p>
                    <p v-for="item in id_header" :key="item.id">{{ item.text }}</p>
                    <div class="row text-center">
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image1" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member1 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image2" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member2 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image3" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member3 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image4" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member4 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image5" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member5 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job2 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image6" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member6 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image7" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member7 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image8" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member8 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image9" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member9 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                        <div class="col my-4">
                            <img loading="lazy" :src="id_header[3]?.image10" alt="" class="mb-3 rounded-circle image_pisel">
                            <br>
                            <span class="span_red text_poson fw-bold">{{ id_header[5]?.member10 }}</span>
                            <br>
                            <span>{{ id_header[4]?.job1 }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main members -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_members"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const image1 = doc.data().image1;
        const image2 = doc.data().image2;
        const image3 = doc.data().image3;
        const image4 = doc.data().image4;
        const image5 = doc.data().image5;
        const image6 = doc.data().image6;
        const image7 = doc.data().image7;
        const image8 = doc.data().image8;
        const image9 = doc.data().image9;
        const image10 = doc.data().image10;
        const methods = {
            id: doc.id,
            member1: doc.data().member1,
            member2: doc.data().member2,
            member3: doc.data().member3,
            member4: doc.data().member4,
            member5: doc.data().member5,
            member6: doc.data().member6,
            member7: doc.data().member7,
            member8: doc.data().member8,
            member9: doc.data().member9,
            member10: doc.data().member10,
            job1: doc.data().job1,
            job2: doc.data().job2,
            text: doc.data().text,
            image1: image1 ? require("@/assets/image_municipal2/" + image1) : null,
            image2: image2 ? require("@/assets/image_municipal2/" + image2) : null,
            image3: image3 ? require("@/assets/image_municipal2/" + image3) : null,
            image4: image4 ? require("@/assets/image_municipal2/" + image4) : null,
            image5: image5 ? require("@/assets/image_municipal2/" + image5) : null,
            image6: image6 ? require("@/assets/image_municipal2/" + image6) : null,
            image7: image7 ? require("@/assets/image_municipal2/" + image7) : null,
            image8: image8 ? require("@/assets/image_municipal2/" + image8) : null,
            image9: image9 ? require("@/assets/image_municipal2/" + image9) : null,
            image10: image10 ? require("@/assets/image_municipal2/" + image10) : null,
        };
        firearray.push(methods);
    });
    id_header.value = firearray;
});
</script>

<script>
import KpapHeaderThreeTow from "../folder header and footer/Header3_2.vue";
export default {
    name: "KpapMembers",
    components: {
        KpapHeaderThreeTow
    },
    mounted() {
        const image_pisel = document.querySelectorAll(".image_pisel");
        const div_leftImage = document.querySelector(".div_left img");
        const image_src = window.localStorage.getItem("image_src");
        const image_border = window.localStorage.getItem("image_border");
        const text_poson = document.querySelectorAll(".text_poson");
        const text_left = document.getElementById("text_left");
        if (image_src) {
            div_leftImage.setAttribute("src", image_src);
        }
        const storedText = window.localStorage.getItem("text_left");
        if (storedText) {
            text_left.textContent = storedText;
        }
        image_pisel.forEach((image, index) => {
            image.addEventListener("click", () => {
                const title = text_poson[index].textContent;
                text_left.textContent = title;
                window.localStorage.setItem("text_left", title);
                image_pisel.forEach((img) => {
                    img.style.border = "none";
                });
                image.style.border = "5px solid #3EC4B5";
                const newImageSrc = image.getAttribute("src");
                div_leftImage.setAttribute("src", newImageSrc);
                window.localStorage.setItem("image_src", newImageSrc);
                window.localStorage.setItem("image_border", newImageSrc);
            });
        });
        if (image_border && image_pisel.length) {
            const borderedImage = Array.from(image_pisel).find((img) => img.getAttribute("src") === image_border);
            if (borderedImage) {
                borderedImage.style.border = "5px solid #3EC4B5";
            }
        }
    }
}
</script>