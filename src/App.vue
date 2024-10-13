<script setup>
import './style.css'
import './assets/fonts/fonts.css';

import Button from './components/Button_test.vue';
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header></Header>
  <MainContent>
    <div class="flex w-full flex-grow flex-col">
      <div class="mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8 max-w-[1200px] py-10">
        <article>
          <h1 id="stillingsutlysninger" class="group flex items-center font-semibold tracking-tight text-title-2 mb-4">
            Stillingsutlysninger
          </h1>
          <div class="w-full max-w-240 space-y-4">
            <p class="break-words py-1 text-l">
              Ta kontakt med oss dersom dere har en relevant stillingsutlysning dere ønsker å legge ut på siden.
            </p>
            <p class="break-words py-1 text-l">
              <strong>Bedriftskontakten</strong>: 
              <a class="transition-colors underline font-medium duration-200 after:content-['_↗'] hover:text-blue-500" node="[object Object]" href="mailto:bedkom@nabla.no">
                bedkom(at)nabla.no
              </a>
            </p>
          </div>
        </article>
      </div>
    </div>
  </MainContent>
  <Footer></Footer>
  <!--<Button class="text-gray-classic-900 font-poppins" size="small" variant="primary" @click="alert('Button clicked!');">Click Ma!</Button>-->
</template>

