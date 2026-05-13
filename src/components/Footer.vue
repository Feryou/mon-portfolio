<template>
  <footer class="w-full border-t border-gray-200 bg-white font-mono">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Colonne gauche : nom + tagline -->
      <div class="flex flex-col gap-3">
        <p class="text-black font-semibold text-lg">Feryel Khelifi</p>
        <p class="text-black text-sm leading-relaxed">Designer</p>
      </div>

      <!-- Colonne centre : disponibilité -->
      <div class="flex flex-col gap-3 md:items-center">
        <p class="text-sm font-semibold text-black mb-1">Disponibilité</p>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#9be4c4] animate-pulse"></span>
          <p class="text-sm text-black">Ouverte aux opportunités en CDI</p>
        </div>
      </div>

      <!-- Colonne droite : contact -->
      <div class="flex flex-col gap-3 md:items-end overflow-hidden">
        <p class="text-sm font-semibold text-black mb-1">Contact</p>
        <div class="flex items-center gap-3 flex-wrap">
          <a href="mailto:feryelkhelifi@gmail.com" class="text-sm text-gray-500 hover:text-black transition-colors">feryelkhelifi@gmail.com</a>
          <a href="https://www.linkedin.com/in/feryel-khelifi-7075511b0/" target="_blank" rel="noopener noreferrer" class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.999h4.56V24H.22V8.999zM8.48 9h4.37v2.1h.06c.61-1.16 2.12-2.38 4.36-2.38 4.67 0 5.53 3.07 5.53 7.06V24h-4.66v-6.73c0-1.61-.03-3.69-2.25-3.69-2.26 0-2.61 1.77-2.61 3.57V24H8.48V9z"/>
            </svg>
          </a>
          <a href="mailto:feryelkhelifi@gmail.com" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l8 5.333 8-5.333V18H4z"/>
            </svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Barre du bas -->
    <div class="border-t border-gray-100 px-6 py-3 flex justify-between items-center max-w-7xl mx-auto">
      <p class="text-black text-xs">{{ t('footer.copyright') }}</p>
      <p class="text-black text-xs">Tous droits réservés</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>