<script setup>
import '../../../style.css'
import '../../../assets/fonts/fonts.css';

</script>

<template>
    <div class="flex w-full flex-grow flex-col">
      <div class="mx-auto flex w-full flex-col px-4 sm:px-6 lg:px-8 max-w-[1200px] py-10">
        <article>
          <h1 id="stillingsutlysninger" class="group flex items-center font-semibold tracking-tight text-title-2 mb-4">
            Hjem
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
        <img src="../../../assets/images/Spin the wheel.png" width="808px">
      </div>
    </div>
</template>

<script>
export default {
  name: 'StillingsannonseView',
}
</script>