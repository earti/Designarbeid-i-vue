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
      <nav class="flex items-center">
      <div class="group" data-dropdown-content="om">
          <router-link to="/om" class="content-center pr-4">Om Nabla</router-link>
      </div>
      <div class="group" data-dropdown-content="for-komponenter">
          <router-link to="/for-komponenter" class="content-center px-4">For Komponenter</router-link>
      </div>
      <div class="group" data-dropdown-content="for-bedrifter">
          <router-link to="/for-bedrifter" class="content-center px-4">For Bedrifter</router-link>
      </div>
      <router-link to="/ny-student" class="content-center pl-4 pr-3">Ny student?</router-link>
      <router-link to="/profil">
          <img class="h-8 w-8" src="../assets/images/profile.svg" alt="profil">
      </router-link>
      </nav>
  </div>
  <div id="dropdown-box" class="absolute top-full opacity-0 invisible transition-all duration-300 ease-in-out z-1 w-full">
      <div class="relative bg-light p-6 grid grid-cols-2 gap-4 text-m font-poppins rounded-[8px]">
          <!-- Content dynamically populated -->
      </div>
  </div>
  </header>

</template>
  
<script>
document.addEventListener('DOMContentLoaded', () => {
  const dropdownBox = document.getElementById('dropdown-box');
  const headerItems = document.querySelectorAll('nav .group');
  let isDropdownActive = false; // Track if dropdown is visible
  let previousItem = null; // Track the previously hovered item
  
  // Define the dropdown content for each menu item
  const dropdownData = {
  om: `
      <router-link to="/om/nabla" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Om Oss<p class="text-gray-dark font-normal">Hva er Nabla?</p></router-link>
      <router-link to="/om/fond" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Nablas fond<p class="text-gray-dark font-normal">Fond?</p></router-link>
      <router-link to="/om/forretningsorden" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Om forretningsorden</router-link>
      <router-link to="/om/lover-og-forskrifter" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Nablas lover<p class="text-gray-dark font-normal">Våre lover og forskrifter</p></router-link>
      <router-link to="/om/retningslinjer" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Våre retningslinjer</router-link>
      <router-link to="/om/stillingsbeskrivelser" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Stillingsbeskrivelser<p class="text-gray-dark font-normal">Om styrestillinger</p></router-link>
      <router-link to="/om/tillitsvalgte" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Tillitsvalgte</router-link>
  `,
  'for-komponenter': `
      <router-link to="/for-komponenter/arrangementer" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Arrangementer</router-link>
      <router-link to="/for-komponenter/blogg" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Blogg</router-link>
      <router-link to="/for-komponenter/faglig-innhold" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Faglig innhold</router-link>
      <router-link to="/for-komponenter/interessegrupper" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Interessegrupper</router-link>
      <router-link to="/for-komponenter/kjellern" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Kjellern</router-link>
      <router-link to="/for-komponenter/komiteer" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Komiteer</router-link>
      <router-link to="/for-komponenter/kontakt" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Kontakt</router-link>
      <router-link to="/for-komponenter/motereferater" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Møtereferater</router-link>
      <router-link to="/for-komponenter/okonomisk-stotte" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Økonomisk støtte</router-link>
      <router-link to="/for-komponenter/stillingsannonser" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Stillingsannonser</router-link>
      <router-link to="/for-komponenter/styret" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Styret</router-link>
      <router-link to="/for-komponenter/tjenester" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Våre tjenester</router-link>
      <router-link to="/for-komponenter/utleggsskjema" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Utleggsskjema</router-link>
      <router-link to="/for-komponenter/varsling" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Varsling</router-link>
  `,
  'for-bedrifter': `
      <router-link to="/for-bedrifter/bedriftsbesok" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Bedriftsbesok</router-link>
      <router-link to="/for-bedrifter/bedriftspresentasjon" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Bedriftspresentasjon</router-link>
      <router-link to="/for-bedrifter/eureka" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Eureka</router-link>
      <router-link to="/for-bedrifter/kurs" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Kurs</router-link>
      <router-link to="/for-bedrifter/screeningintervju" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Screeningintervju</router-link>
      <router-link to="/for-bedrifter/stillingsannonse" class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600">Stillingsannonse</router-link>
  `
  };

  headerItems.forEach(item => {
      const contentKey = item.dataset.dropdownContent;
      // Initialize dropdown state
      dropdownBox.style.opacity = '0';
      dropdownBox.style.visibility = 'hidden';

      // Show dropdown on hover
      item.addEventListener('mouseenter', (e) => {
          const boundingRect = item.getBoundingClientRect();

          // Update dropdown content
          dropdownBox.querySelector('.grid').innerHTML = dropdownData[contentKey] || '';
          dropdownBox.style.display = 'none'; // Hide to measure width
          dropdownBox.style.display = ''; // Show again to measure

          const dropdownWidth = 560;


          // Move the dropdown box smoothly from previous item to current item
          if (previousItem !==null) {
              const previousRect = previousItem.getBoundingClientRect();
              
              dropdownBox.style.left = `${dropdownBox.offsetLeft + boundingRect.left + (boundingRect.width / 2) - previousRect.left - (previousRect.width / 2)}px`; // Update left position
              dropdownBox.style.width = `${dropdownWidth}px`; // Update width
              dropdownBox.style.transition = 'left 0.3s ease, width 0.3s ease'; // Add transition for smooth movement

          } else {
              // If this is the first hover, set the dropdown box's initial position
              dropdownBox.style.left = `${boundingRect.left + (boundingRect.width / 2) - (dropdownWidth / 2)}px`;
              dropdownBox.style.width = `${dropdownWidth}px`;
              // Show the dropdown (fade-in)
              dropdownBox.style.opacity = '1';
              dropdownBox.style.visibility = 'visible';
              dropdownBox.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';

          }

          setTimeout(() => {
          }, 300); // Small delay to ensure smooth transition

          // Update the previous hovered item
          previousItem = item;
          isDropdownActive = true;
      });

      // Hide dropdown when leaving the item or dropdown
      item.addEventListener('mouseleave', () => {
          isDropdownActive = false;
          checkDropdownVisibility();
      });
  });

  // Add mouse enter and leave events to the dropdown box
  dropdownBox.addEventListener('mouseenter', () => {
      isDropdownActive = true; // Keep the dropdown active
  });

  dropdownBox.addEventListener('mouseleave', () => {
      isDropdownActive = false; // Will check visibility
      checkDropdownVisibility();
  });

  function checkDropdownVisibility() {
      setTimeout(() => {
          if (!isDropdownActive) {
              // Fade out the dropdown
              dropdownBox.style.opacity = '0';
              dropdownBox.style.visibility = 'hidden';
              previousItem = null; // Reset previous item on hide
          }
      }, 300); // Delay to give smooth transition effect
  }
});
export default {
  name: "Header",
  data() {
  return {
      quotes: [
      // Kan kobles opp mot URLer når backend kommer på plass, og av knapp i profil
      // 40% sannsynlighet for sesongbasert, så ta en quote av sesongquotes eller vanlige quotes
          "Du kan nå endre fargetema i profilen din 🎨", 
          "WebKom er best 💯", 
          "Sjekk ut det nyeste Nabladet 🔆",
          "Ny kodegolf! ⛳",
          "Nye brettspill på kontoret 🎲",
          "Oter 🦦",
          "Lenge leve Snabla 🐘",
          "Lenge leve Nabi 🐘",
          "UFO? 🛸",
          "KultKom ☄️",
          "God påske! 🐣", //if påske, finn en kalender elns
          "Søk undergruppe 📅", //if september
          "Scary Nabla 🦇", //if oktober
          "🎃🎃🎃", //if oktober
          "Pumpkin spice latte 🍂", //if september/oktober
          "17.mai 🎉", //if 17.mai
          "Gratulerer med dagen 🎉", //if 17.mai
          "Søk UKAAAAA, bli slave du også 🧨", //if UKA
          "Skal DU stille på SKE? 😇", //if SKE
          "Du SKAL stille på SKE! 😈", //if SKE
          "God jul 🎄", //if desember
          "Sjekket Joulekalenderen i dag? 🎁", //if desember
          "Kanelbolleonsdag 🍴", //if onsdag
          "Sconestorsdag 🫓", //if torsdag
          "Fredagsquiz ❔", //if fredag
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
</style>
