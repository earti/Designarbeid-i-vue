<template>
    <header class="sticky top-0 grid-rows-1 bg-primary text-gray-25 font-poppins text-title-6 h-header content-center">
      <div class="flex items-center justify-between pl-4 pr-6">
  
        <!-- Tips & tricks -->
        <div class="absolute font-zilla font-semibold tracking-[0.5px] text-s -bottom-6 left-14 bg-primary-800 border-primary-400 border-2 px-2 py-1 rounded-se-xl rounded-ee-xl rounded-es-xl">
          {{ currentQuote }}
        </div>
  
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
    data() {
      return {
        quotes: [
            "Du kan nå endre fargetema i profilen din 🎨", 
            "WebKom er best 💯", 
            "Sjekk ut det nyeste Nabladet 🔆",
          ],
        currentQuote: "Insert et tips" 
      };
    },
    mounted() {
      // Generate a new random quote when the component is mounted
      this.generateQuote();
    },
    methods: {
      generateQuote() {
        const randomIndex = Math.floor(Math.random() * this.quotes.length);
        this.currentQuote = this.quotes[randomIndex];
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add any specific styles related to the header component here */
  </style>
  