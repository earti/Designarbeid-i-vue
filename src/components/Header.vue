<template>
<header class="sticky top-0 grid-rows-1 bg-primary text-gray-25 font-poppins text-title-6 h-header content-center">
    <div class="flex items-center justify-between pl-4 pr-6">
        <!-- Logo -->
        <router-link to="/">
            <img class="h-12 w-12" src="../assets/images/nabla.svg" alt="logo">
        </router-link>

        <!-- Links in header -->
        <nav class="flex">
            <router-link to="/om" class="content-center pr-4">Om Nabla</router-link>
            <router-link to="/for-komponenter" class="content-center px-4">For komponenter</router-link>
            <router-link to="/for-bedrifter" class="content-center px-4">For bedrifter</router-link>
            <router-link to="/ny-student" class="content-center pl-4 pr-3">Ny student?</router-link>
            <router-link to="/profil">
                <img class="h-8 w-8" src="../assets/images/profile.svg" alt="profil">
            </router-link>
        </nav>
    </div>
</header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<script setup>
// No special logic in the header
</script>

<style scoped>
/* You can add any specific styles related to the header component here */
</style>
  