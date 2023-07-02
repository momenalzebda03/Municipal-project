<template>
    <KpapHeaderThreeTow />
    <!-- start main -->
    <section class="container-fluid font_text overflow-hidden px-3 px-md-5">
        <div class="row justify-content-center justify-content-md-end pe-2">
            <div class="d-flex justify-content-center justify-content-md-end col-md-6" data-aos="fade-left">
                <div class="d-flex justify-content-end div_mia div_width_50 position-relative pt-3 px-4 px-md-0">
                    <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                    <input type="input" class="form__field w-100" name="name" id='name' />
                    <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                        الرسائل</label>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-6 col-lg-4 mt-3" v-for="array in arrays" :key="array" data-aos="fade-up">
                <div class="border border-2 rounded-3 px-1 px-md-4 p-4 bg-white text-center text-md-end">
                    <p class="text-secondary">‏19 مارس, 2020</p>
                    <p>مجلس بلدية غزة يناقش مع نشطاء شباب جهود دعم<br>المبادرات الشبابية</p>
                </div>
            </div>
        </div>
    </section>
    <!-- end main -->
</template>

<script>
import KpapHeaderThreeTow from "../folder header and footer/Header3_2.vue"
export default {
    name: "KpapCommittee",
    data() {
        return {
            arrays: [1, 2, 3, 4, 5, 6]
        }
    },
    components: {
        KpapHeaderThreeTow
    }
}
</script>