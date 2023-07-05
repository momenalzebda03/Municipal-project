<template>
    <!-- start main public -->
    <section class="container-fluid text-center text-lg-end px-4 px-lg-5 mt-lg-5 font_text overflow-hidden">
        <h5 class="fw-bold span_red mt-4">الخدمات العامة</h5>
        <div class="d-flex justify-content-end">
            <p class="div_mia div_width_50"> تقدم بلدية غزة نحو 30 خدمة أساسية لسكان مدينة غزة البالغ تعدادهم قرابة
                ‏670 الف نسمة في نهاية عام 2018م بما يشكل 13% من سكان دولة فلسطين
                حيث تبلغ مساحة المدينة 56كم2، مما يجعلها من أكثر المدن كثافة سكانية</p>
        </div>
        <div class="row">
            <router-link to="/water" data-aos="fade-right" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i class="fas fa-recycle p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold">خدمات النظافة</p>
                        <p class="card-text ms-lg-5"> تقدم خدمة جمع النفايات والفضلات من الشوارع والمنازل والمحلات
                            العامة وتجميعها في محطة الترحيل المؤقتة بمنطقة اليرموك وسط
                            المدينة، قبل نقلها وترحيلها إلى المكب الرئيس في منطقة جحر الديك
                            .شرق مدينة غزة، والتعامل معها
                        </p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/water" data-aos="fade-down" class="col-md-6 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i
                            class="fas fa-swimming-pool p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold">الصرف الصحي</p>
                        <p class="card-text ms-lg-5"> تولي بلدية غزة قطاع الصرف الصحي اهتمامًا كبيرًا وتعمل على زيادة رقعة
                            المناطق المشمولة بشبكات التصريف والحد من ظاهرة الآبار الامتصاصية
                            التي تتسبب بتسرب المياه العادمة إلى الخزانات الجوفية وإلحاق أضرار
                            .بالأراضي الزراعية والتربة
                        </p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link to="/water" data-aos="fade-left" class="col-md-12 col-lg-4 icon_click text-decoration-none mt-3">
                <div class="card p-3 shadow-sm h-100 button_padding">
                    <div class="card-body text-center text-lg-end">
                        <i
                            class="fas fa-faucet-drip p-3 border border-2 rounded-3 mb-4 button_icon_hover icon_color_hover"></i>
                        <p class="card-title fw-bold">توصيل المياه</p>
                        <p class="card-text ms-lg-5"> خدمة تزويد سكان مدينة غزة بالمياه الصالحة للاستخدام من كافة
                            المصادر المتاحة، وتعيين مواصفات لوازمها كالعدادات والشبكات وتنظيم
                            توزيعها وتحديد أسعارها وبدل الاشتراك فيها، والتأكد من سلامتها
                            .وجودتها ومنع تلوث مصادرها
                        </p>
                        <div
                            class="d-flex justify-content-center justify-content-lg-end gap-3 text-center text-lg-end mt-5">
                            <div class="icon_back rounded-circle p-1 d-flex align-items-center">
                                <span class="fas fa-arrow-left p_center icon_color text-center pt-1 span_left"></span>
                            </div>
                            <span class="mt-1">عرض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
    <!-- start main public -->
</template>

<script>
export default {
    name: "KpapPublic",
    created() {
        this.changePageTitle('الخدمات - الخدمات العامة');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>