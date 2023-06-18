<template>
    <div class="div_width position-relative">
        <router-link to="/muiciapl"
            :class="{ 'active': isActive('/muiciapl') || isActive('/objectives') || isActive('/policy') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-bullseye fs-4"></i>
        </router-link>
        <router-link to="/date" :class="{ 'active': isActive('/date') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-clock fs-4"></i>
        </router-link>
        <router-link to="/council" :class="{ 'active': isActive('/council') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-users fs-4"></i>
        </router-link>
        <router-link to="/" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-chalkboard-teacher fs-4"></i>
        </router-link>
        <router-link to="/" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-cubes fs-4"></i>
        </router-link>
        <router-link to="/" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fas fa-money-bill-wave fs-4"></i>
        </router-link>
        <router-link to="/" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="far fa-building fs-4"></i>
        </router-link>
        <router-link to="/" :class="{ 'active': isActive('/') }"
            class="py-5 d-flex justify-content-center div_border text-decoration-none">
            <i class="fa-solid fa-building-lock fs-4"></i>
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