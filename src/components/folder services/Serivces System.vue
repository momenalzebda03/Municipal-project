<template>
    <!-- start main system -->
    <section class="container-fluid text-center text-lg-end px-lg-5 mt-lg-3 font_text overflow-hidden">
        <div class="row mt-2">
            <div class="col-md-6 text-start mt-3">
                <div class="px-4 px-md-0">
                    <div class="d-flex justify-content-end div_mia position-relative pt-3 div_from">
                        <i class="fa fa-search icon_search position-absolute top-50 start-0 text-muted"></i>
                        <input type="input" class="form__field w-100" name="name" id='name' />
                        <label for="name" class="form__label text-secondary position-absolute d-block">ابحث في
                            الرسائل</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6 mt-3">
                <h5 class="fw-bold span_red">أنظمة وأدلة</h5>
            </div>
            <div class="row my-5 mx-0">
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-right">
                    <span class="span_hover">خدمات<br>اخرى</span>
                    <i class="fa-solid fa-taxi icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-left">
                    <span class="span_hover">خدمات<br>الحرف</span>
                    <i
                        class="fa-solid fa-palette icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-up">
                    <span class="span_hover">التخطيط<br>الحصري</span>
                    <i
                        class="fa-sharp fa-solid fa-building-user icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-down">
                    <span class="span_hover">الخدمات<br>الصرف الصحي</span>
                    <i
                        class="fas fa-hand-holding-water icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-right">
                    <span class="span_hover">خدمات<br>الكهرباء</span>
                    <i class="fa-solid fa-bolt icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-left">
                    <span class="span_hover">خدمات<br>المياة</span>
                    <i class="fas fa-tint icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-up">
                    <span class="span_hover">خدمات<br>البناء</span>
                    <i class="fas fa-building icon_click p-4 rounded-circle icon_back button_padding icon_col_hover"></i>
                </div>
                <div class="col mt-3 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-end gap-3 align-items-center"
                    id="div_forech" data-aos="fade-down">
                    <span class="span_hover active_span_hover">جميع<br>الخدمات</span>
                    <i
                        class="fa-sharp fa-solid fa-desktop icon_click p-4 rounded-circle icon_back button_padding div_active_icon icon_col_hover"></i>
                </div>
            </div>
        </div>
    </section>
    <section class="container-fluid px-lg-5 mt-lg-3 font_text overflow-hidden icon_back py-5">
        <div class="overflow-x-auto">
            <div class="overflow-hidden pb-3 cursor_grap d-flex justify-content-between gap-1" @click="click_scroll"
                ref="scrollContainer" @mousedown="mouseDownHandler" @mousemove="mouseMoveHandler">
                <div id="div_active_scroll"
                    class="text-center py-2 icon_col_hover active_before div_active_icon border border-2 rounded-3 position-relative div_padding_scroll span_hover button_padding icon_click">
                    <span class="span_background">فحص عداد مياه</span>
                </div>
                <div id="div_active_scroll"
                    class="text-center py-2 icon_col_hover border border-2 rounded-3 position-relative div_padding_scroll span_hover button_padding icon_click">
                    <span class="span_background">فحص عداد مياه</span>
                </div>
            </div>
        </div>
    </section>
    <!-- end main system -->
</template>

<script>
export default {
    name: "KpapSystem",
    data() {
        return {
            pos: { top: 0, y: 0 },
        };
    },
    created() {
        this.changePageTitle('الخدمات - دليل المعاملات');
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
    },
    mounted() {
        const containers = document.querySelectorAll('#div_forech');
        containers.forEach(container => {
            const icon = container.querySelector('.icon_col_hover');
            const text = container.querySelector('.span_hover');
            icon.addEventListener('mouseover', () => {
                text.classList.add('icon_color');
            });
            icon.addEventListener('mouseout', () => {
                text.classList.remove('icon_color');
            });
            icon.addEventListener('click', function () {
                const activeText = document.querySelector('.active_span_hover');
                if (activeText) {
                    activeText.classList.remove('active_span_hover');
                }
                for (let i = 0; i < containers.length; i++) {
                    containers[i].querySelector('.button_padding').classList.remove('div_active_icon');
                }
                this.classList.add('div_active_icon');
                text.classList.add('active_span_hover');
            });
        });
        const div_active_scroll = document.querySelectorAll('#div_active_scroll');
        div_active_scroll.forEach(container => {
            const icon = container.querySelector('.icon_col_hover');
            icon.addEventListener('click', function () {
                for (let i = 0; i < containers.length; i++) {
                    containers[i].querySelector('.button_padding').classList.remove('div_active_icon');
                }
                this.classList.add('div_active_icon');
            });
        });
    }
}
</script>