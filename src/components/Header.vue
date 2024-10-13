<template>
<header class="sticky top-0 grid-rows-1 bg-primary-classic text-gray-classic-25 font-poppins text-title-6 h-header content-center">
    <div class="flex items-center justify-between pl-4 pr-6">
        <!-- Logo -->
        <a href="/">
            <img class="h-12 w-12" src="../assets/images/nabla.svg" alt="logo">
        </a>

        <!-- Links in header -->
        <nav class="flex">
            <a href="/om/" class="content-center pr-4">Om Nabla</a>
            <a href="/for-komponenter/" class="content-center px-4">For komponenter</a>
            <a href="/for-bedrifter/" class="content-center px-4">For bedrifter</a>
            <a href="/ny-student/" class="content-center px-4">Ny student?</a>
            <a href="/profil/">
                <img class="h-8 w-8" src="../assets/images/profile.svg" alt="profil">
            </a>
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
  