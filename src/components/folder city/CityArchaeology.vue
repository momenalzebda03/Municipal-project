<template>
    <!-- start main bilogy -->
    <section class="font_text overflow-hidden">
        <div class="row overflow-hidden">
            <div class="col-md-6 text-center text-md-end mt-5" data-aos="fade-right">
                <h5 class="span_red fw-bold me-4">المعالم الأثرية</h5>
                <div class="overflow-hidden position-relative div_vh" @click="click_scroll" ref="scrollContainer"
                    @mousedown="mouseDownHandler" @mousemove="mouseMoveHandler">
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">مسجد السيد هاشم</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> يقع بحي الدرج "مدينة غزة القديمة"، ويعد من أجمل جوامع غزة
                            الأثرية وأكبرها، وهو عبارة عن صحن مكشوف تحيط به أربع ظلال أكبرها ظلة القبلة وفي الغرفة التي تفتح
                            على الظلة الغربية ضريح السيد هاشم بن عبد .مناف جد رسول الله محمد "ص" الذي توفي في غزة أثناء
                            رحلته التجارية رحلة الصيف وقد أنشئ المسجد على يد المماليك، وجدده السلطان عبد الحميد سنة 1850م
                            وسميت مدينة غزة "بغزة .هاشم" نسبة إليه
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">سوق القيسارية</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> يقع في حي الدرج وهو ملاصق للجدار الجنوبي للجامع العمري
                            الكبير ويعود بناء السوق إلى العصر المملوكي ويتكون من شارع مغطى بقبو مدبب وعلى جانبي هذا الشارع
                            حوانيت صغيرة مغطاة بأقبية متقاطعة يطلق .عليه سوق القيسارية أو سوق الذهب نسبة إلى تجارة الذهب فيه
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">قصر الباشا سبيل السلطان</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> قع في حي الدرج، ويتكون من طابقين، وتعود أبنية هذا القصر إلى
                            العصر المملوكي، وكان مقراً لنائب غزة في .العصرين المملوكي والعثماني وينسب هذا القصر لآل رضوان
                            الذين امتلكوه في بداية الفترة العثمانية
                        </p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">الزاوية الأحمدية</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> تقع في حي الدرج، وقد أنشأها أتباع السيد أحمد البدوي في
                            القرن 6هـ/14م، المتوفى بطنطا عام 657هـ 1276م، تنفرد هذه الزاوية بغرفتها المضلعة ذات الستة عقود،
                            ويوجد فيها محراباً ضخماً غاية في الروعة، وقبة شاهقة محمولة على رقبة اسطوانية، ويوجد في فناء
                            الزاوية الخارجي قبر رخامي جميل لابنة المقر بهادر .الجوكندار قطلو خاتون المتوفية في 12 ربيع ثاني
                            سنة 733هـ/31 ديسمبر 1332م</p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">حمام السمرة</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> يقع بحي الزيتون، ويعتبر أحد النماذج الرائعة للحمامات
                            العثمانية في فلسطين وهو الحمام الوحيد الباقي لغاية الآن في مدينة غزة، حيث حظي في تخطيطه الانتقال
                            التدريجي من الغرفة الساخنة إلى الغرفة الدافئة ومن ثم الغرفة الباردة والتي سقفت بقبة ذات فتحات
                            مستديرة معشقة بالزجاج الملون يسمح لأشعة الشمس من النفاذ لإضاءة القاعة بضوء طبيعي يضفي على المكان
                            رونقاً وجمالاً، هذا بالإضافة إلى الأرضية الجميلة التي رصفت بمداور رخامية ومربعات ومثلثات ذات
                            ألوان متنوعة، وقد رمم الحمام مؤخراً وأصبح أكثر .جمالاً وروعة</p>
                    </div>
                    <div class="mt-4 ps-md-5 ms-md-5 pe-md-3">
                        <div class="d-flex flex-column flex-md-row justify-content-end gap-4 align-items-center">
                            <router-link to=""
                                class="text-decoration-none d-flex p_backgrpund text-white border border-0 px-4 py-2 button_padding rounded-3 align-items-center gap-2">
                                <span class="span_background">استكشاف</span>
                                <i class="fas fa-map-marker-alt"></i>
                            </router-link>
                            <span class="fw-bold span_background">جامع الشيخ زكريا</span>
                        </div>
                        <p class="mt-3 fw-bold span_background"> يقع بحي الدرج، وأنشئ في القرن الثامن الهجري ولم يبق من هذا
                            الجامع سوى مئذنته الجميلة ودفن في هذا الجامع الشيخ زكريا وقد كتب على ضريحه "هذا قبر الفقيد لله
                            تعالى زكريا التدمري توفى في شهر صفر ".سنة 749هـ</p>
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
                                <img loading="lazy" src="../../assets/image_civil2/ImageMosque.png" alt=""
                                    class="w-100 height_100">
                            </div>
                            <div class="carousel-item height_100">
                                <img loading="lazy" src="../../assets/image_civil2/ImageViedo.png" alt=""
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
    <img loading="lazy" src="../../assets/image_page_home_1/ImageBackground.png" alt=""
        class="image_background_biology position-absolute">
    <!-- end main bilogy -->
</template>

<script>
export default {
    name: "KpapArchaeology",
    data() {
        return {
            pos: { top: 0, y: 0 },
        };
    },
    created() {
        this.changePageTitle('المدينة - الأثار');
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