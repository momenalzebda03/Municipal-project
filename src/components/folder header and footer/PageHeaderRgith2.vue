<template>
    <div class="div_width flex-column">
        <router-link to="/muiciapl" title="الأهداف"
            :class="{ 'active': isActive('/muiciapl') || isActive('/objectives') || isActive('/policy') }"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-bullseye fs-5"></i>
        </router-link>
        <router-link to="/date" :class="{ 'active': isActive('/date') }" title="التاريخ"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-clock fs-5"></i>
        </router-link>
        <router-link to="/council" title="المجلس"
            :class="{ 'active': isActive('/council') || isActive('/members') || isActive('/sessions') || isActive('/committee') || isActive('/biology') }"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-users fs-5"></i>
        </router-link>
        <router-link to="/plan" :class="{ 'active': isActive('/plan') }" title="الخطة"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-chalkboard-teacher fs-5"></i>
        </router-link>
        <router-link to="/structure" :class="{ 'active': isActive('/structure') }" title="الهيكلية"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-cubes fs-5"></i>
        </router-link>
        <router-link to="/money" :class="{ 'active': isActive('/money') || isActive('/money1') }" title="الميزانية"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-money-bill-wave fs-5"></i>
        </router-link>
        <router-link to="/accompanying" :class="{ 'active': isActive('/accompanying') }" title="المرافق"
            class="d-flex justify-content-center div_border text-decoration-none">
            <i class="far fa-building fs-5"></i>
        </router-link>
        <router-link to="/centers"
            :class="{ 'active': isActive('/centers') || isActive('/centers1') || isActive('/centers2') || isActive('/centers3') || isActive('/centers4') || isActive('/centers5') || isActive('/centers6') || isActive('/centers7') }"
            title="المراكز" class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fa-solid fa-building-lock fs-5"></i>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "HeaderRightCpap1",
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>