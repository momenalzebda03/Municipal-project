<template>
    <!-- start main -->
    <section>
        <div class="container-fluid px-4 font_text overflow-hidden">
            <div class="row">
                <div class="col-12 col-lg-6 text-center text-lg-end mt-5 mb-2 mb-lg-0 my-lg-0" data-aos="fade-right">
                    <h5 class="span_red fw-bold">مقترحات</h5>
                    <p>.أهلا بك .. نحن على استعداد لخدمتك واستقبال كافة اقتراحاتك واستفساراتك</p>
                    <form method="" enctype="multipart/form-data" action="">
                        <div class="d-flex flex-column flex-lg-row gap-3 gap-lg-5 text-center text-md-end">
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">الأسم كاملا</label>
                                <br>
                                <input type="text"
                                    class="mt-2 w-100 p-3 text-end select_backgound_input border border-1 shadow-sm rounded-4"
                                    placeholder="أدخل أسمك رباعيا">
                            </div>
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">نوع المقترح</label>
                                <br>
                                <select
                                    class="mt-2 w-100 border border-1 shadow-sm p-3 text-end select_backgound rounded-4">
                                    <option value="">أختر نوع المقترح</option>
                                    <option value="">غزة</option>
                                    <option value="">رفح</option>
                                    <option value="">رام الله</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row gap-3 gap-lg-5 text-center text-md-end mt-3">
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">البريد الالكتروني</label>
                                <br>
                                <input type="text"
                                    class="mt-2 w-100 p-3 text-end select_backgound_input border border-1 shadow-sm rounded-4"
                                    placeholder="أدخل بريدك الالكتروني">
                            </div>
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">رقم الجوال</label>
                                <br>
                                <input type="text"
                                    class="mt-2 w-100 p-3 text-end select_backgound_input border border-1 shadow-sm rounded-4"
                                    placeholder="أدخل رقم جوالك">
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-lg-row gap-3 gap-lg-5 text-center text-md-end mt-3">
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">رقم اشتراك البلدية <span
                                        class="text-secondary">(اختياري)</span></label>
                                <br>
                                <input type="text"
                                    class="mt-2 w-100 p-3 text-end select_backgound_input border border-1 shadow-sm rounded-4"
                                    placeholder="أدخل رقم اشتراك البلدية">
                            </div>
                            <div class="w-100">
                                <label class="fw-bold me-2 font_text">عنوان السكن</label>
                                <br>
                                <input type="text"
                                    class="mt-2 w-100 p-3 text-end select_backgound_input border border-1 shadow-sm rounded-4"
                                    placeholder="أدخل عنوان سكنك">
                            </div>
                        </div>
                        <div class="mt-3">
                            <label for="">ارفاق الملف</label>
                            <div
                                class="w-100 bg-white mt-2 border border-1 shadow-sm rounded-4 p-5 d-flex justify-content-center align-items-center">
                                <div class="text-center">
                                    <label for="fileInput">
                                        <input type="file" id="fileInput" class="d-none">
                                        <span class="span_red fw-bold icon_click">ارفاق ملف</span> أو السحب والأفلات هنا<br>
                                        يجب ألا يزيد حجم الملف عن 5 ميجا
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <label for="">بيانات المقترح</label>
                            <br>
                            <div class="position-relative">
                                <textarea class="w-100 mt-2 rounded-4 border border-1 shadow-sm text-end pt-2 pe-2"
                                    placeholder="... اكتب نص مقترحك هنا" rows="5"></textarea>
                                <i
                                    class="fab fa-telegram-plane position-absolute icon_absoute text-white fs-4 icon_width p-2"></i>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-12 pe-0 pe-lg-5 col-lg-6 text-center text-lg-end" data-aos="fade-left">
                    <h5 class="span_red fw-bold">جاهزون لنسمع مقترحاتك</h5>
                    <p>أهلا بك .. يمكنك التواصل معنا مباشرة على أرقامنا التالية</p>
                    <p class="fw-bold mt-4">تواصل معنا</p>
                    <div class="d-flex flex-column flex-lg-row justify-content-end gap-1 gap-lg-5 mt-3 div_size">
                        <p><span class="fw-bold me-1">021542354</span> :رقم الشكاوي</p>
                        <p class="div_from"><span class="me-2 fw-bold">info@gaza-city.org</span> البريد الإلاكتروني
                        </p>
                    </div>
                    <div class="d-flex flex-column flex-lg-row justify-content-end gap-1 gap-lg-5 div_size">
                        <p><span class="fw-bold me-1">2824400</span> :رقم الفاكس</p>
                        <p class="div_from"><span class="fw-bold me-4">2844055</span> رقم الهاتف</p>
                    </div>
                    <div class="d-flex flex-column flex-lg-row justify-content-end gap-1 gap-lg-5 div_size">
                        <p><span class="fw-bold me-1">16</span> :عنوان البريد</p>
                        <p class="div_from"><span class="fw-bold me-2">16</span> :الرمز البريدي</p>
                    </div>
                    <p class="mt-3 fw-bold">الشبكات الاجتماعية</p>
                    <div class="container-fluid d-flex justify-content-center justify-content-lg-end">
                        <div class="row justify-content-center justify-content-lg-end">
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-snapchat-ghost icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-tiktok icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-instagram icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-facebook-f icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-telegram-plane icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                            <div class="col col-md-1 m-2 text-center">
                                <a href="#" class="text-black">
                                    <i
                                        class="px-2 fab fa-whatsapp icon_background pt-2 my_icon_width border border-1 border-secondary rounded-circle fs-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <img src="../assets/image_page_home/ImageMap1.png" alt="" class="mt-4 row_width div_mia">
                    </a>
                </div>
            </div>
        </div>
        <div class="container-fluid ms-0 ps-md-5 text-center text-md-start my-3 my-md-5">
            <i class="fab fa-facebook-messenger p-3 fs-4 icon_width text-white rounded-circle"></i>
        </div>
    </section>
    <!-- end main -->
</template>

<script>
export default {
    name: "KpapPropsals",
    created() {
        this.changePageTitle('البلدية - المقترحات');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>