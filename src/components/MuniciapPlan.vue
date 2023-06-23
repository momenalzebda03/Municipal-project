<template>
    <!-- start main -->
    <section class="container-fluid text-center text-md-end mt-0 mt-md-5 pt-4 font_text overflow-hidden px-3 px-md-5">
        <div class="row">
            <div class="col-12 col-md-6" data-aos="fade-right">
                <p class="fw-bold">..لعرض أو تحميل الخطة الاستراتيجية، يرجى اختيار الخطة أدناه</p>
                <div class="row">
                    <div class="col-12 col-sm-6 mt-4" v-for="item in items" :key="item">
                        <div class="border border-1 py-3 px-4 rounded-3 shadow-sm bg-white">
                            <div
                                class="d-flex gap-3 flex-column-reverse flex-sm-row justify-content-center justify-content-sm-end">
                                <p>الخطة الاستراتيجية لبلدية غزة<br>(2018-2021)</p>
                                <i class="fas fa-file fs-2 icon_color"></i>
                            </div>
                            <hr>
                            <div class="d-flex gap-3 justify-content-center justify-content-sm-start">
                                <div class="d-flex icon_color gap-2 pt-1 align-items-center icon_click icon_hover">
                                    <i class="fas fa-download"></i>
                                    <span>تحميل</span>
                                </div>
                                <div class="d-flex gap-2 mt-3">
                                    <p class="p_line">ك. ب</p>
                                    <p>650</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1"></div>
            <div class="col-12 col-md-5" data-aos="fade-left">
                <div class="d-flex gap-sm-4 flex-column-reverse gap-0 flex-sm-row justify-content-end">
                    <li class="nav-item dropdown nav-link">
                        <a class="text-black icon_hover text-decoration-none dropdown-toggle w-50" :class="rotateClass"
                            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span @click="click_rotate" class="dropdown-text">التقويم</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">جيد</a></li>
                            <li><a class="dropdown-item" href="#">ممتاز</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown nav-link">
                        <a class="text-black icon_hover text-decoration-none dropdown-toggle w-50" :class="rotateClass1"
                            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span @click="click_rotate1" class="dropdown-text">الاصدار</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">0.1</a></li>
                            <li><a class="dropdown-item" href="#">0.2</a></li>
                        </ul>
                    </li>
                    <div class="mb-3 mb-sm-0 mt-4 mt-sm-0">
                        <h4 class="fw-bold span_red">الخطة الاستراتيجية لبلدية غزة</h4>
                    </div>
                </div>
                <div class="mt-4 text-center text-sm-end">
                    <p class="fw-bold">نحرص في بلدية غزة على وضع خطط استراتيجية تستجيب لرؤيتنا وقيمنا، ونسعى في كل خطة إلى
                        ترسيخ ثقافة الريادة والابتكار والاستثمار الأمثل في الموارد البشرية والمادية وتوفير بيئة داعمة ومحفزة
                        تجعل من غزة مدينة صحية وآمنة ومستدامة تتوافر فيها مقومات النجاح
                    </p>
                </div>
                <div class="mt-5 text-center text-sm-end">
                    <p class="fw-bold"> :لبلدية غزة عبر الآتي يمكنك الاطلاع على الخطط والأهداف الاستراتيجية</p>
                    <div
                        class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end bg-white p-4 rounded-4 mt-4 border_dotted shadow-sm">
                        <div>
                            <h6 class="fw-bold">الأهداف</h6>
                            <span> نحرص في بلدية غزة على وضع خطط استراتيجية تستجيب لرؤيتنا
                                وقيمنا، ونسعى في كل خطة إلى ترسيخ ثقافة الريادة والابتكار
                                والاستثمار الأمثل في الموارد البشرية والمادية وتوفير بيئة
                                .داعمة ومحفزة تجعل من غزة
                            </span>
                        </div>
                        <div>
                            <i class="fas fa-bullseye fs-4 p-2 border border-2 rounded-circle icon_color"></i>
                        </div>
                    </div>
                    <div
                        class="d-flex gap-3 flex-sm-row flex-column-reverse justify-content-center justify-content-sm-end bg-white p-4 rounded-4 mt-4 border_dotted shadow-sm">
                        <div>
                            <h6 class="fw-bold">الرؤية</h6>
                            <span> نحرص في بلدية غزة على وضع خطط استراتيجية تستجيب لرؤيتنا
                                وقيمنا، ونسعى في كل خطة إلى ترسيخ ثقافة الريادة والابتكار
                                والاستثمار الأمثل في الموارد البشرية والمادية وتوفير بيئة
                                .داعمة ومحفزة تجعل من غزة
                            </span>
                        </div>
                        <div>
                            <i class="fas fa-eye fs-4 p-2 border border-2 rounded-circle icon_color"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
</template>

<script>
export default {
    name: "KpapPlan",
    created() {
        this.changePageTitle('البلدية - الخطة');
    },
    data() {
        return {
            items: [1, 2, 3, 4],
            rotateClass: '',
            rotateClass1: ''
        };
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_rotate() {
            this.rotateClass = this.rotateClass === 'rotate_100' ? '' : 'rotate_100';
        },
        click_rotate1() {
            this.rotateClass1 = this.rotateClass1 === 'rotate_100' ? '' : 'rotate_100';
        },
    }
}
</script>