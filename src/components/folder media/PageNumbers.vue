<template>
    <!-- start main numbers-->
    <section class="text-end px-3 px-md-5">
        <div class="container-fluid text-center text-md-end mt-md-5 pt-4 font_text overflow-hidden">
            <h4 class="fw-bold span_red">أرقام وإحصائيات</h4>
            <div class="row">
                <div class="col-12 col-lg-4 py-4 fw-bold mt-3" data-aos="fade-right">
                    <p class="span_red">تطور السكان</p>
                    <p>مدينة ساحلية فلسطينية، وأكبر مدن قطاع غزة وتقع في شماله، في الطرف الجنوبي للساحل الشرقي من البحر
                        المتوسط. تبعد عن مدينة القدس مسافة 78 كم إلى الجنوب الغربي، وهي مركز محافظة غزة وأكبر مدن السلطة
                        الفلسطينية من حيث تعداد السكان، حيث بلغ عدد سكان محافظة غزة 700 ألف نسمة في عام 2013، ما يجعلها أكبر
                        تجمع للفلسطينيين في فلسطين تبلغ مساحتها 56 كم2، مما يجعلها من أكثر المدن كثافة بالسكان في العالم
                    </p>
                    <p>تعتبر مدينة غزة من أهم المدن الفلسطينية، لأهمية موقعها الاستراتيجي والأهمية الاقتصادية والعمرانية
                        للمدينة، بالإضافة إلى كونها المقر المؤقت للسلطة الوطنية الفلسطينية، ووجود الكثير من مقراتها ووزارتها
                        فيها
                    </p>
                </div>
                <div class="col-12 col-lg-6 mt-3 d-flex justify-content-center" data-aos="fade-down">
                    <img src="../../assets/Image_Number/ImageTable.png" alt="" class="w-100 h-100">
                    <div>
                        <div class="div_text_number justify-content-between ms-3 position-absolute d-flex flex-column">
                            <p>600,000</p>
                            <p>500,000</p>
                            <p>400,000</p>
                            <p>300,000</p>
                            <p>200,000</p>
                            <p>100,000</p>
                        </div>
                    </div>
                    <div class="d-flex div_box align-items-end position-absolute">
                        <div class="box_2020 d-flex align-items-end justify-content-center">
                            <p class="text_end">2020</p>
                        </div>
                        <div class="box_2010 d-flex align-items-end justify-content-center">
                            <p class="text_end">2010</p>
                        </div>
                        <div class="box_2000 d-flex align-items-end justify-content-center">
                            <p class="text_end">2000</p>
                        </div>
                        <div class="box_1990 d-flex align-items-end justify-content-center">
                            <p class="text_end">1990</p>
                        </div>
                        <div class="box_1980 d-flex align-items-end justify-content-center">
                            <p class="text_end">1980</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-2" data-aos="fade-right">
                    <div class="row">
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover justify-content-center justify-content-md-end mt-5">
                            <span class="span_black text-nowrap">تطور العمران</span>
                            <div class="div_width_hover"></div>
                        </div>
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover mt-5 justify-content-center justify-content-md-end">
                            <span class="active_span_black span_black text-nowrap">تطور السكان</span>
                            <div class="div_width_hover active_div_width_hover"></div>
                        </div>
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover mt-5 justify-content-center justify-content-md-end">
                            <span class="span_black text-nowrap">تطور البنية التحتية</span>
                            <div class="div_width_hover"></div>
                        </div>
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover mt-5 justify-content-center justify-content-md-end">
                            <span class="span_black text-nowrap">تطور الانتاج</span>
                            <div class="div_width_hover"></div>
                        </div>
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover mt-5 justify-content-center justify-content-md-end">
                            <span class="span_black text-nowrap">تطور الزراعة</span>
                            <div class="div_width_hover"></div>
                        </div>
                        <div
                            class="col icon_click d-flex align-items-center gap-2 flex_hover mt-5 justify-content-center justify-content-md-end">
                            <span class="span_black text-nowrap">تطور الصناعة</span>
                            <div class="div_width_hover"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end main numbers-->
</template>

<script>
export default {
    name: "KpapNumbers",
    created() {
        this.changePageTitle('المركز الأعلامي - أرقام');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
    mounted() {
        const containers = document.querySelectorAll('.icon_click');
        containers.forEach(container => {
            container.addEventListener("click", function () {
                const active_span = document.querySelector('.active_span_black');
                if (active_span) {
                    active_span.classList.remove('active_span_black');
                }
                const active_span_black = container.querySelector('.span_black');
                active_span_black.classList.add('active_span_black');
                const active_div_width_hover = document.querySelector('.active_div_width_hover');
                if (active_div_width_hover) {
                    active_div_width_hover.classList.remove('active_div_width_hover');
                }
                const div_width_hover = container.querySelector('.div_width_hover');
                div_width_hover.classList.add('active_div_width_hover');
            });
        });
    }
}
</script>