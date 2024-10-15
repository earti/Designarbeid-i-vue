<template>
  <div :data-theme="theme" :class="mode">
    <div class="flex flex-col space-y-4 p-4 items-center">
      <!-- Toggle Classic/Modern Button -->
      <button
        @click="toggleTheme"
        class="px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-primary"
      >
        {{ theme === 'classic' ? 'Switch to Modern' : 'Switch to Classic' }}
      </button>

      <!-- Toggle Lightmode/Darkmode Button -->
      <button
        @click="toggleMode"
        class="px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 bg-secondary"
      >
        {{ mode === 'light' ? 'Switch to Darkmode' : 'Switch to Lightmode' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'classic', // Can be 'classic' or 'modern'
      mode: 'light',    // Can be 'light' or 'dark'
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'classic' ? 'modern' : 'classic';
    },
    toggleMode() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
    },
  },
};
</script>

<style scoped>
/* Add some custom classes if needed */
</style>
