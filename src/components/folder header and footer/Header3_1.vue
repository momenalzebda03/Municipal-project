<template>
    <!-- start header council -->
    <section>
        <div>
            <h4 class="fw-bold span_red">بلدية غزة</h4>
            <div class="d-flex flex-column flex-md-row justify-content-end my-3 my-md-5 border-3 border-bottom">
                <router-link to="/policy" :class="{ 'div_border_bottom': isActive('/policy') }"
                    class="px-sm-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>سياسة البلدية</p>
                </router-link>
                <router-link to="/objectives" :class="{ 'div_border_bottom': isActive('/objectives') }"
                    class="my-2 my-md-0 px-sm-5 border_bottom_hover icon_click text-center text-black text-decoration-none">
                    <p>أهداف البلدية</p>
                </router-link>
                <router-link to="/muiciapl" :class="{ 'div_border_bottom': isActive('/muiciapl') }"
                    class="px-sm-5 icon_click text-center border_bottom_hover text-black text-decoration-none">
                    <p>رؤية البلدية</p>
                </router-link>
            </div>
        </div>
    </section>
    <!-- end header council -->
</template>

<script>
export default {
    name: "KpapHeaderThreeOne",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>