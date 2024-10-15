<template>
    <div class="flex items-center justify-between">
        
        <!-- Image -->
        <img class="w-100 ml-8" src="../../assets/images/Stock-people.jpg" alt="Image">
        
        <!-- Text and buttons -->
        <div>
            <div class="w-140">
                <div class="text-gray-classic-600 font-lato text-subtitle-1">Neste Arrangement:</div>
                <div class="text-gray-classic-950 font-poppins text-title-2">Immatrikuleringsball</div>
                <div class="text-gray-classic-900 font-lato text-m">Insert en beskrivelse av det neste arrangementet her. Insert en beskrivelse av det neste arrangementet her. Insert en beskrivelse av det neste arrangementet her. Insert en beskrivelse av det neste arrangementet her.</div>
            </div>
            <div class="flex justify-around w-120 mt-8">
                <router-link to="/" class="underline p-2">Se flere</router-link>
                <router-link to="/" class="bg-primary-classic-500 text-gray-classic-25 p-2 rounded-[4px]">Meld deg på!</router-link>

            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    name: "NesteArrangement",
};
</script>

<script setup>
// No special logic
</script>

<style scoped>
/* You can add any specific styles related to the component here */
</style>
  