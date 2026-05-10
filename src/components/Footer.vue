<template>
  <footer
    class="w-full border-t border-gray-200 px-6 py-4 flex justify-between items-center bg-white"
  >
    <p class="text-gray-800 font-mono text-lg">{{ t('footer.copyright') }}</p>

    <div class="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/feryel-khelifi-7075511b0/"
        target="_blank"
        rel="noopener noreferrer"
        class="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.999h4.56V24H.22V8.999zM8.48 9h4.37v2.1h.06c.61-1.16 2.12-2.38 4.36-2.38 4.67 0 5.53 3.07 5.53 7.06V24h-4.66v-6.73c0-1.61-.03-3.69-2.25-3.69-2.26 0-2.61 1.77-2.61 3.57V24H8.48V9z"
          />
        </svg>
      </a>

      <a
        href="mailto:feryelkhelifi@gmail.com"
        class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
      >
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.333-8-5.333V6h16zM4 18V8.489l8 5.333 8-5.333V18H4z"
          />
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
</script>
