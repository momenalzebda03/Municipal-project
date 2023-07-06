<template>
    <!-- start main albmus -->
    <section class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden px-4 px-md-5">
        <div class="row">
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
                    <h4 class="fw-bold span_red">الألبومات</h4>
                </div>
            </div>
        </div>
        <div class="d-flex flex-sm-row flex-column mt-3 justify-content-between">
            <div class="d-flex gap-2 justify-content-center justify-content-lg-start text-secondary">
                <i data-bs-target="#carouselExampleControls" data-bs-slide="prev" aria-hidden="true"
                    class="fas fa-arrow-left p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
                <i data-bs-target="#carouselExampleControls" data-bs-slide="next" aria-hidden="true"
                    class="fas fa-arrow-right p-3 border border-2 rounded-circle icon_arraw icon_click"></i>
            </div>
            <div class="image_respons div_width_92" data-aos="fade-left">
                <div class="d-flex flex-column flex-sm-row justify-content-end border-3 border-bottom">
                    <router-link to="/albumsviedo"
                        class="my-2 my-md-0 px-sm-5 div_border_bottom border_bottom_hover icon_click text-center text-black text-decoration-none d-flex gap-3 justify-content-center align-items-center pb-2">
                        <span>الفيديو</span>
                        <i class="fas fa-play fs-5"></i>
                    </router-link>
                    <router-link to="/albums"
                        class="my-2 my-md-0 px-sm-5 border_bottom_hover icon_click text-center text-black text-decoration-none d-flex gap-3 justify-content-center align-items-center pb-2">
                        <span>الصور</span>
                        <i class="fas fa-file-image fs-5"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row mt-2">
                        <div class="col mt-3" data-aos="fade-right">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo1.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-down">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo2.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-left">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo3.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row mt-2">
                        <div class="col mt-3" data-aos="fade-right">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo1.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-down">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo2.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                        <div class="col mt-3" data-aos="fade-left">
                            <router-link to="/viedo" class="card icon_click">
                                <img loading="lazy" src="../../assets/Image_albpums/ImageAlbpmusVedo3.png"
                                    class="card-img-top" alt="...">
                            </router-link>
                            <div class="card-body div_card_bottom pb-1 p-4">
                                <p>بلدية غزة تفتتح بئر مياه في منطقة<br>الشعف شرق حي التفاح</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main albmus -->
</template>

<script>
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
export default {
    name: "KpapAlbumsVedio",
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
    created() {
        this.changePageTitle('المركز الأعلامي - الألبومات - الفيديو');
    },
    mounted() {
        this.initializeDatepicker();
    }
}
</script>