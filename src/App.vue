<script setup>
import './style.css'
import './assets/fonts/fonts.css';

import Button from './components/Button_test.vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main class="bg-light">
  <Header></Header>
  <MainContent><router-view></router-view></MainContent>
  <Footer></Footer>
  </main>
</template>
