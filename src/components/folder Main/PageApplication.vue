<template>
    <!-- start main application-->
    <section class="mt-md-5">
        <div class="container-fluid px-5 font_text overflow-hidden">
            <div class="row">
                <div class="col-lg-6 text-center" data-aos="fade-right">
                    <img src="../../assets/image_page_home_1/ImageApplicachan.png" alt="" class="image_respons">
                </div>
                <div class="col-lg-6 mt-4 fw-bold" data-aos="fade-left">
                    <h4 class="span_red fw-bold text-center text-lg-end">تطبيق مصمم خصيصأ لك</h4>
                    <P class="mt-3 text-center text-lg-end"> من خلال التطبيق الخاص بنا, يمكنك اجراء العديد من الخدمات التي
                        تساعد<br>.وتسهل عليك الكثير من الوقت والجهد</P>
                    <router-link to="" class="text-black text-decoration-none text-center text-md-end">
                        <div class="d-flex gap-3 flex-column-reverse flex-md-row justify-content-end mt-4"
                            id="hover-container">
                            <div class="mt-2">
                                <span class="p_hover">متابعة المعاملات</span>
                                <br>
                                <p class="mt-1 text-secondary">.بإمكانك تقديم وطلب المعاملات من خلال التطبيق ومتابعة جميع
                                    المعاملات
                                </p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <i
                                    class="fas fa-calendar-check fs-3 rounded-circle icon_background border border-2 d-flex pt-3 justify-content-center"></i>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="" class="text-black text-decoration-none text-center text-md-end">
                        <div class="d-flex gap-3 flex-column-reverse flex-md-row justify-content-end mt-4"
                            id="hover-container">
                            <div class="mt-2">
                                <span class="p_hover">تقديم شكوى</span>
                                <br>
                                <p class="mt-1 text-secondary">.بإمكانك تقديم شكوى ومتابعة الرد عليها ومعرفة حالة الشكوى</p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <i
                                    class="fas fa-exclamation-triangle fs-3 rounded-circle icon_background border border-2 d-flex pt-3 justify-content-center"></i>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="" class="text-black text-decoration-none text-center text-md-end">
                        <div class="d-flex gap-3 flex-column-reverse flex-md-row justify-content-end mt-4"
                            id="hover-container">
                            <div class="mt-2">
                                <span class="p_hover">إدخال قراءة العداد</span>
                                <br>
                                <p class="mt-1 text-secondary">.بإمكانك إدخال قراءة عداد المياه ومعرفة التفاصيل حول اشتراك
                                    المياه الخاص بك</p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <i
                                    class="fas fa-sort-numeric-up-alt fs-3 rounded-circle icon_background border border-2 d-flex pt-3 justify-content-center"></i>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="" class="text-black text-decoration-none text-center text-md-end">
                        <div class="d-flex gap-3 flex-column-reverse flex-md-row justify-content-end mt-4"
                            id="hover-container">
                            <div class="mt-2">
                                <span class="p_hover">دليل الحرف</span>
                                <br>
                                <p class="mt-1 text-secondary">.بإمكانك متابعة الحرف المجاورة لموقعك الحالي من خلال التطبيق
                                </p>
                            </div>
                            <div class="d-flex justify-content-center">
                                <i
                                    class="fas fa-tools fs-3 rounded-circle icon_background border border-2 d-flex pt-3 justify-content-center"></i>
                            </div>
                        </div>
                    </router-link>
                    <div class="d-flex flex-column flex-md-row gap-0 gap-md-4 justify-content-end">
                        <a href="#" class="text-cetner text-md-end mt-5 div_flex_width text-decoration-none">
                            <div
                                class="d-flex align-items-center gap-3 px-3 py-2 rounded-3 bg-black text-white border div_button">
                                <div>
                                    <i class="fab fa-apple fs-1"></i>
                                </div>
                                <div class="text-start">
                                    <span class="span_size">available on the</span>
                                    <br>
                                    <h5 class="fw-bold">app store</h5>
                                </div>
                            </div>
                        </a>
                        <a href="#" class="text-cetner text-md-end mt-2 mt-md-5 div_flex_width text-decoration-none">
                            <div
                                class="d-flex align-items-center gap-3 px-3 py-2 rounded-3 bg-black text-white border div_button">
                                <div>
                                    <img src="../../assets/image_page_home_1/GooglePlay.png" alt="">
                                </div>
                                <div class="text-start">
                                    <span class="span_size">GET IT ON</span>
                                    <br>
                                    <h5 class="fw-bold">google play</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main application -->
</template>

<script>
export default {
    name: "KpapApp",
    created() {
        this.changePageTitle('البلدية - التطبيق');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
    mounted() {
        const containers = document.querySelectorAll('#hover-container');
        containers.forEach(container => {
            const icon = container.querySelector('.icon_background');
            const text = container.querySelector('.p_hover');

            icon.addEventListener('mouseover', () => {
                text.classList.add('hovered');
            });

            icon.addEventListener('mouseout', () => {
                text.classList.remove('hovered');
            });
        });
    }
};
</script>