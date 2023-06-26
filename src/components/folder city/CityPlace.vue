<template>
    <!-- start main place -->
    <section class="container-fluid px-2 px-md-5 font_text overflow-hidden mt-5">
        <div class="row">
            <div class="col-12 col-lg-8">
                <img src="../../assets/image_civil/ImageMap.png" alt=""
                    class="position-absolute w-50 image_index image_map image_none">
                <img src="../../assets/image_civil/ImageCity.png" alt="" class="div_mia image_75 mt-4"
                    data-aos="fade-right">
            </div>
            <div class="col-12 col-lg-4 text-center text-lg-end mt-4" data-aos="fade-left">
                <p class="span_red fw-bold">الموقع والمناخ</p>
                <p> غزة مدينة ساحلية فلسطينية، وأكبر مدن قطاع غزة وتقع في شماله، في
                    الطرف الجنوبي للساحل الشرقي من البحر المتوسط. تبعد عن مدينة القدس
                    مسافة 78 كم إلى الجنوب الغربي، وهي مركز محافظة غزة وأكبر مدن السلطة
                    الفلسطينية من حيث تعداد السكان، حيث بلغ عدد سكان محافظة غزة 700 ألف
                    نسمة في عام 2013، ما يجعلها أكبر تجمع للفلسطينيين في فلسطين، تبلغ
                    .مساحتها 56 كم2، مما يجعلها من أكثر المدن كثافة بالسكان في العالم</p>
                <p class="my-4">تعتبر مدينة غزة من أهم المدن الفلسطينية، لأهمية موقعها الاستراتيجي
                    والأهمية الاقتصادية والعمرانية للمدينة، بالإضافة إلى كونها المقر المؤقت
                    .للسلطة الوطنية الفلسطينية، ووجود الكثير من مقراتها ووزارتها فيها</p>
                <p> أسس المدينة الكنعانيون في القرن الخامس عشر قبل الميلاد، احتلها الكثير من
                    . الغزاة كالفراعنة والإغريق والرومان والبيزنطيون والعثمانيون والإنجليز وغيرهم
                    . في عام 635 م دخل المسلمون العرب المدينة وأصبحت مركزاً إسلامياً مهماً
                    يوجد بها قبر هاشم بن عبد مناف الجد الثاني للنبي محمد بن عبد الله، لذلك
                    تُسمى أيضاً "غزة هاشم"، كما أنها مسقط رأس الإمام الشافعي الذي ولد عام
                    .767م وهو أحد أئمة المذاهب الأربعة عند المسلمين السنة</p>
            </div>
        </div>
    </section>
    <!-- end main place -->
</template>

<script>
export default {
    name: "KpapPlace",
    created() {
        this.changePageTitle('المدينة - الموقع');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    }
}
</script>