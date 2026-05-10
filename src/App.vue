<script setup>
import FooterComponent from './components/Footer.vue'
import CustomCursor from './components/CustomCursor.vue'
import { wipePhase } from './composables/usePageTransition'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <CustomCursor />
    <div class="wipe-overlay" :class="wipePhase ? `wipe-${wipePhase}` : ''"></div>
    <main class="flex-grow">
      <router-view />
    </main>
    <FooterComponent class="mb-20" />
  </div>
</template>

<style scoped>
</style>
