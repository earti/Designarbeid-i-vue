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
        <div class="group" data-dropdown-content="om" @mouseenter="showDropdown('om')" @mouseleave="hideDropdown">
          <router-link to="/om" class="content-center pr-4">Om Nabla</router-link>
        </div>
        <div class="group" data-dropdown-content="for-komponenter" @mouseenter="showDropdown('for-komponenter')" @mouseleave="hideDropdown">
          <router-link to="/for-komponenter" class="content-center px-4">For Komponenter</router-link>
        </div>
        <div class="group" data-dropdown-content="for-bedrifter" @mouseenter="showDropdown('for-bedrifter')" @mouseleave="hideDropdown">
          <router-link to="/for-bedrifter" class="content-center px-4">For Bedrifter</router-link>
        </div>
        <router-link to="/ny-student" class="content-center pl-4 pr-3">Ny student?</router-link>
        <router-link to="/profil">
          <img class="h-8 w-8" src="../assets/images/profile.svg" alt="profil">
        </router-link>
      </nav>
    </div>

    <!-- Dropdown content box -->
    <div v-if="isDropdownVisible" id="dropdown-box" class="absolute top-full opacity-0 transition-all duration-300 ease-in-out z-1 w-full">
      <div class="relative bg-light p-6 grid grid-cols-2 gap-4 text-m font-poppins rounded-[8px]">
        <router-link
          v-for="(link, index) in dropdownContent"
          :key="index"
          :to="link.to"
          class="p-2 transition ease-in-out duration-200 text-gray-darker font-semibold hover:text-primary-600 cursor-pointer"
        >
          {{ link.text }}
          <p v-if="link.description" class="text-gray-dark font-normal">{{ link.description }}</p>
        </router-link>
      </div>
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
        "Ny kodegolf! ⛳",
        "Nye brettspill på kontoret 🎲",
        "Oter 🦦",
        "Lenge leve Snabla 🐘",
        "Lenge leve Nabi 🐘",
        "UFO? 🛸",
        "KultKom ☄️",
        "God påske! 🐣",
        "Søk undergruppe 📅",
        "Scary Nabla 🦇",
        "🎃🎃🎃",
        "Pumpkin spice latte 🍂",
        "17.mai 🎉",
        "Gratulerer med dagen 🎉",
        "Søk UKAAAAA, bli slave du også 🧨",
        "Skal DU stille på SKE? 😇",
        "Du SKAL stille på SKE! 😈",
        "God jul 🎄",
        "Sjekket Joulekalenderen i dag? 🎁",
        "Kanelbolleonsdag 🍴",
        "Sconestorsdag 🫓",
        "Fredagsquiz ❔",
      ],
      currentQuote: "Insert et tips",
      isDropdownVisible: false,
      dropdownContent: []
    };
  },
  mounted() {
    this.generateQuote();
  },
  methods: {
    generateQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes[randomIndex];
    },
    showDropdown(contentKey) {
      const dropdownData = {
        om: [
          { to: "/om/nabla", text: "Om Oss", description: "Hva er Nabla?" },
          { to: "/om/fond", text: "Nablas fond", description: "Fond?" },
          { to: "/om/forretningsorden", text: "Om forretningsorden" },
          { to: "/om/lover-og-forskrifter", text: "Nablas lover", description: "Våre lover og forskrifter" },
          { to: "/om/retningslinjer", text: "Våre retningslinjer" },
          { to: "/om/stillingsbeskrivelser", text: "Stillingsbeskrivelser", description: "Om styrestillinger" },
          { to: "/om/tillitsvalgte", text: "Tillitsvalgte" }
        ],
        'for-komponenter': [
          { to: "/for-komponenter/arrangementer", text: "Arrangementer" },
          { to: "/for-komponenter/blogg", text: "Blogg" },
          { to: "/for-komponenter/faglig-innhold", text: "Faglig innhold" },
          { to: "/for-komponenter/interessegrupper", text: "Interessegrupper" },
          { to: "/for-komponenter/kjellern", text: "Kjellern" },
          { to: "/for-komponenter/komiteer", text: "Komiteer" },
          { to: "/for-komponenter/kontakt", text: "Kontakt" },
          { to: "/for-komponenter/motereferater", text: "Møtereferater" },
          { to: "/for-komponenter/okonomisk-stotte", text: "Økonomisk støtte" },
          { to: "/for-komponenter/stillingsannonser", text: "Stillingsannonser" },
          { to: "/for-komponenter/styret", text: "Styret" },
          { to: "/for-komponenter/tjenester", text: "Våre tjenester" },
          { to: "/for-komponenter/utleggsskjema", text: "Utleggsskjema" },
          { to: "/for-komponenter/varsling", text: "Varsling" }
        ],
        'for-bedrifter': [
          { to: "/for-bedrifter/bedriftsbesok", text: "Bedriftsbesok" },
          { to: "/for-bedrifter/bedriftspresentasjon", text: "Bedriftspresentasjon" },
          { to: "/for-bedrifter/eureka", text: "Eureka" },
          { to: "/for-bedrifter/kurs", text: "Kurs" },
          { to: "/for-bedrifter/screeningintervju", text: "Screeningintervju" },
          { to: "/for-bedrifter/stillingsannonse", text: "Stillingsannonse" }
        ]
      };
      this.dropdownContent = dropdownData[contentKey] || [];
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
