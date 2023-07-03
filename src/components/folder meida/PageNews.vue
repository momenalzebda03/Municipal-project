<template>
    <!-- start main news -->
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
            <div class="col-12 col-md div_my_index" data-aos="fade-left">
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
                    <h4 class="fw-bold span_red">أخبار واعلانات</h4>
                </div>
            </div>
        </div>
        <section class="row mt-2">
            <div class="col text-start">
                <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                    <span class="span_red fw-bold">بيع مضخة قضبان (لبئر زراعي قديم)</span>
                </div>
                <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                    <span class="span_red fw-bold">عطـاء توريد أليات ضاغطة لجمع وترحيل النفايات الصلبة</span>
                </div>
                <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                    <span class="span_red fw-bold">شغل وظيفة "رئيس قسم المنشآت والمباني" بدائرة نظم المعلومات
                        الجغرافية</span>
                </div>
                <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                    <span class="span_red fw-bold">إيداع طلب رخصة حرفة (مولدات كهربائية تجارية) للمواطن/ محمد ايهاب محمد
                        رمضان العشي</span>
                </div>
                <div class="p-4 icon_click div_border_green mt-3 rounded-2 icon_back text-end">
                    <span class="span_red fw-bold">إيداع طلب رخصة حرفة (مولدات كهربائية تجارية) للمواطن/ محمد ايهاب محمد
                        رمضان العشي</span>
                </div>
            </div>
            <!-- <div class="col mt-3">
                <div class="image_container_1 position-relative">
                    <img src="../../assets/image_news/ImageNews1.png" alt="">
                </div>
            </div>
            <div class="col mt-3">
                <div class="image_container_1 position-relative">
                    <img src="../../assets/image_news/ImageNews2.png" alt="">
                </div>
            </div>
            <div class="col mt-3">
                <div class="image_container_1 position-relative">
                    <img src="../../assets/image_news/ImageNews3.png" alt="">
                </div>
            </div> -->
        </section>
    </section>
    <!-- end main news -->
</template>
<script>
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
export default {
    name: "KpapNews",
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
    created() {
        this.changePageTitle('المركز الأعلامي - الأخبار');
    },
}
</script>