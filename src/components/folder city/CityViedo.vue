<template>
    <!-- start main image more-->
    <router-link to="/biology1" class="d-flex justify-content-end text-decoration-none mb-3">
        <i class="fas fa-times p-4 fs-2 icon_click icon_bakcgorund position-fixed"></i>
    </router-link>
    <section class="container" data-aos="flip-left">
        <video src="../../assets/volderviedo/Viedo1.mp4" class="w-100" controls></video>
    </section>
    <!-- end main image more-->
</template>

<script>
export default {
    name: "KpapViedo",
    beforeRouteLeave(to, from, next) {
        document.body.classList.remove('bg-black');
        next();
    },
    beforeRouteEnter(to, from, next) {
        document.body.classList.add('bg-black');
        next();
    },
    created() {
        this.changePageTitle('المدينة - فيديو');
    },
    methods: {
        changePageTitle(newTitle) {
            document.title = newTitle;
        },
    },
}
</script>