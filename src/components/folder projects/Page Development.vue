<template>
    <!-- start main development -->
    <section class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden px-4 px-md-5">
        <div class="row">
            <div class="col-12 col-md text-center text-md-start" data-aos="fade-right">
                <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="prev" aria-hidden="true"
                        class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                    <i data-bs-target="#carouselExampleControls" data-bs-slide="next" aria-hidden="true"
                        class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                </div>
            </div>
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
                    <h4 class="fw-bold span_red">المشاريع التطويرية</h4>
                </div>
            </div>
        </div>
        <section class="carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <section class="row mt-2">
                        <div class="col mt-3" data-aos="fade-right">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-shower p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[0]?.title }}</p>
                                <p>{{ id_header[0]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[0]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[0]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 70%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-down">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-road p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[1]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[1]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[1]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 80%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="flip-left">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-faucet p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[2]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[2]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[2]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 30%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-up">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-road p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[3]?.title }}</p>
                                <p>{{ id_header[0]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[3]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[3]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 20%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-left">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-faucet p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[4]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[4]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[4]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 40%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="carousel-item">
                    <section class="row mt-2">
                        <div class="col mt-3" data-aos="fade-right">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-shower p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[0]?.title }}</p>
                                <p>{{ id_header[0]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[0]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[0]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 70%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-down">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-road p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[1]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[1]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[1]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 80%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="flip-left">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-faucet p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[2]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[2]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[2]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 30%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-up">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-road p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[3]?.title }}</p>
                                <p>{{ id_header[0]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[3]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[3]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 20%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-left">
                            <div
                                class="border border-2 rounded-3 shadow py-5 px-3 text-center bg-white fw-bold div_project_hover icon_click h-100">
                                <i class="fas fa-faucet p-3 fs-1 border border-2 rounded-3 mb-4 icon_color_hover"></i>
                                <p class="text_hover">{{ id_header[4]?.title }}</p>
                                <p>{{ id_header[4]?.place }}<i class="fas fa-map-marker-alt ps-2"></i></p>
                                <p class="span_red">مدة التنفيذ: {{ id_header[4]?.time }}</p>
                                <hr>
                                <div class="d-flex justify-content-center">
                                    <p class="hr_overlay position-absolute bg-white px-2">€التكلفة:<span> {{
                                        id_header[4]?.salary }}</span>
                                    </p>
                                </div>
                                <p class="span_red mt-3">نسبة الإنجاز</p>
                                <div class="div_about rounded-5 d-flex justify-content-end">
                                    <div class="div_hr_about rounded-5" style="width: 40%;"></div>
                                </div>
                                <div class="mt-4 d-flex justify-content-center gap-3 text-center text-lg-end text-black">
                                    <div class="icon_back rounded-circle p-1">
                                        <span
                                            class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                                    </div>
                                    <span class="text_hover text-secondary text-nowrap mt-1">عرض التفاصيل</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </section>
    <!-- end main development -->
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { db } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
const id_header = ref([]);

onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "page_development"));
    let firearray = [];
    querySnapshot.forEach((doc) => {
        const methods = {
            id: doc.id,
            title: doc.data().title,
            place: doc.data().place,
            time: doc.data().time,
            salary: doc.data().salary,
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
    name: "KpapDevelopment",
    created() {
        this.changePageTitle('المشاريع - التطويرية');
    },
    data() {
        return {
            rotateClass: '',
            rotateClass1: ''
        };
    },
    methods: {
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
            $('[data-date="6"], [data-date="10"]').addClass('custom_class_red');
            $('[data-date="19"], [data-date="30"]').addClass('custom_class_green');
            $('[data-date="16"]').addClass('custom_class_ccc');
        },
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_rotate() {
            this.rotateClass = this.rotateClass === 'rotate_100' ? '' : 'rotate_100';
        },
        click_rotate1() {
            this.rotateClass1 = this.rotateClass1 === 'rotate_100' ? '' : 'rotate_100';
        },
    },
    mounted() {
        this.initializeDatepicker();
    }
}
</script>