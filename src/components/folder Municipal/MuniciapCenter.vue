<template>
    <!-- start main center tow -->
    <section class="container-fluid px-2 px-md-5 text-center text-md-end mt-5 font_text overflow-hidden">
        <h5 class="span_red fw-bold">المراكز</h5>
        <div class="row">
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoOne.png" alt="">
                    <p class="my-4 fw-bold">مركز حديقة إسعاد الطفولة</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoTow.png" alt="">
                    <p class="my-4 fw-bold">مركز حديقة إسعاد الطفولة</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoThree.png" alt="">
                    <p class="my-4 fw-bold">ملعب اليرموك غزة</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoFour.png" alt="">
                    <p class="my-4 fw-bold">مركز الأطراف الصناعية</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoFive.png" alt="">
                    <p class="my-4 fw-bold">مركز هولست الثقافي</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoSix.png" alt="">
                    <p class="my-4 fw-bold">مركز رشاد الشوا الثقافي</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
            <div class="col mt-3">
                <div class="border border-2 bg-white rounded-3 p-4 shadow-sm text-center shadow">
                    <img src="../../assets/image_center/ImageLogoSeven.png" alt="">
                    <p class="my-4 fw-bold">قرية الفنون والحرف</p>
                    <button class="bg-transparent px-5 py-2 rounded-2 button_border icon_click text-nowrap">عرض تفاصيل
                        المركز</button>
                </div>
            </div>
        </div>
    </section>
    <!-- end main center tow -->
</template>

<script>
export default {
    name: "KpapCenter",
    created() {
        this.changePageTitle('البلدية - المراكز - القسم الأخر');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>