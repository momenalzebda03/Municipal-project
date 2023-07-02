<template>
    <!-- start main bilogy -->
    <section class="font_text">
        <div class="row overflow-hidden">
            <div class="col-md-6 text-center text-md-end mt-5" data-aos="fade-right">
                <h5 class="span_red fw-bold me-4">الأحياء</h5>
                <div class="overflow-hidden position-relative div_vh" @click="click_scroll" ref="scrollContainer"
                    @mousedown="mouseDownHandler" @mousemove="mouseMoveHandler">
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حي الشجاعية</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> حي الشجاعية من أكبر أحياء مدينة غزة، ويقع إلى الشرق مباشرة
                            من مدينة غزة وينقسم إلى قسمين الشجاعية الجنوبية (التركمان) والشجاعية الشمالية (اجديدة)، بُنى
                            خلال عهد الأيوبيين، وينسب في تسميته إلى "شجاع الدين عثمان الكردي" الذي استشهد في إحدى المعارك
                            بين الأيوبيين والصليبيين سنة 637 هجري/1239 ميلادي قد أنتصر المسلمون في هذه المعركة وكانت بعد
                            معركة حطين .يسكنه حوالي 100,000 نسمة. الشجاعية تحتوي على العديد من الهياكل القديمة والمساجد
                            والمقابر. تبعد مقبرة الحرب .العالمية الاولى 2 كيلومتر (1.2 ميل) إلى الشمال من المركز التجاري في
                            الحي
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حي الشيخ رضوان</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> حي الشيخ رضوان هو أحد أحياء مدينة غزة ويحده من الغرب مخيم
                            الشاطئ للاجئين ومن الجنوب حي الرمال الشمالي ومن الشمال محافظة شمال قطاع غزة ومن الشرق يحده حي
                            التفاح ومنطقة اليرموك. يعد حي الشيخ رضوان من أهم أحياء مدينة غزة حيث يمر به شارع الجلاء ويمر به
                            أيضاً شارع النصر كما ويوجد به "مقبرة .الشيخ رضوان" أحد مقابر مدينة غزة و ممن دفن فيها القياديان
                            أحمد ياسين وعبد العزيز الرنتيسي
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حي التفاح</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> حي التفاح أحد احياء مدينة غزة ، تعود هذه التسمية لكثرة
                            أشجار التفاح التي كانت تنتشر في هذا الحى وهو من الأحياء القديمة بمدينة غزة, تبلغ مساحته 2898
                            دونم وبلغ عدد سكانه عام 2011م 41500 نسمة, اما , بالنسبة لللمراكز الصحية الموجودة ففيه مركزان
                            للرعاية الأولية الحكومية هما عيادة الصوراني وعيادة الحرية ومركز صحي غزة يتبع وكالة الغوث، ومركز
                            حيفا التابع لجمعية الصلاح الإسلامية, كما يوجد به العديد من .المدارس والمساجد منها مسجد علي ابن
                            مروان الاثري, القعقاع- الجولاني ، وفيها فرع لجامعة الإسراء</p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حي الدرج</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> حي الدرج هو أحد أحياء غزة تبلغ مساحته 2820 دونم أي بنسبة
                            8,8% من جملة مساحة مدينة غزة، وسبب تسميته بهذا الاسم يرجع إلى التدرج في طبوغرافية هذا الحي، ويضم
                            الحي العديد من الحارات منها السيد هاشم، والسدرة، وقرقش، والفوأخير، وبني عامر، وبلغ عدد سكانه عام
                            2011 50000 نسمة، ويوجد به مركز للرعاية الأولية الحكومية (مركز شهداء الدرج الصحي)، ومركز رعاية
                            الأسرة التابع لجمعية اتحاد الكنائس، ومستشفى الخدمة العامة التابع لجمعية الخدمة العامة، ومركز
                            الأطراف الصناعية التابع لبلدبة غزة، ومجمع الصحابة الطبي التابع لجمعية الصحابة، ومركز سان جون لطب
                            وجراحة العيون التابع لجمعية ماريوحنا للعيون، ومركز الرضوان التابع لجمعية الأيدي الرحيمة، كما
                            يتواجد بالحي العديد من المدارس الحكومية والتابعة لوكالة .غوث والخاصة وعلي كافة المراحل</p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حي الرمال</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> حي الرمال هو حي يقع في مدينة غزة على بعد 3 كيلومتر من مركز
                            المدينة. يقع بمحاذاة الخط الساحلي، يعتبر أكثر الأحياء ازدهاراً في مدينة غزة. يقطع شارع عمر
                            المختار، وهو الشارع الرئيسي في غزة، حي الرمال من الشمال إلى الجنوب و يتميز هذا الحي بالكثير من
                            الوجود السكانى، نظرا لجماله الباهر الطبيعي، ولكونه مركزاً .تجاريا كبيرا</p>
                    </div>
                </div>
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
                                <img src="../../assets/image_civil2/ImageViedo.png" alt="" class="w-100 height_100">
                            </div>
                            <div class="carousel-item height_100">
                                <img src="../../assets/image_civil2/ImageMosque.png" alt="" class="w-100 height_100">
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
    <img src="../../assets/image_page_home_1/ImageBackground.png" alt="" class="image_background_biology position-absolute">
    <!-- end main bilogy -->
</template>

<script>
export default {
    name: "KpapBiology1",
    data() {
        return {
            pos: { top: 0, y: 0 },
        };
    },
    created() {
        this.changePageTitle('المدينة - السكن');
    },
    mounted() {
        const container = document.querySelector('body section .row .div_vh');
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            container.scrollBy(0, e.deltaY);
        });
        const ele = document.querySelector('body section .row .div_vh');
        ele.scrollTop = 100;
        ele.addEventListener('mousedown', this.mouseDownHandler);
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
        click_scroll() {
            const mouseDownHandler = (e) => {
                if (this.isCodeRunning) {
                    this.pos = {
                        left: this.$refs.scrollContainer.scrollLeft,
                        top: this.$refs.scrollContainer.scrollTop,
                        x: e.clientX,
                        y: e.clientY
                    };
                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                }
            };
            const mouseMoveHandler = (e) => {
                if (this.isCodeRunning && this.pos) {
                    const dx = e.clientX - this.pos.x;
                    const dy = e.clientY - this.pos.y;
                    this.$refs.scrollContainer.scrollLeft = this.pos.left - dx;
                    this.$refs.scrollContainer.scrollTop = this.pos.top - dy;
                }
            };
            const mouseUpHandler = () => {
                if (this.isCodeRunning) {
                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mouseup', mouseUpHandler);
                }
            };
            this.isCodeRunning = true;
            this.$refs.scrollContainer.addEventListener('mousedown', mouseDownHandler);
        }
    }
};
</script>