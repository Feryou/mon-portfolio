<template>
    <div class="min-h-screen bg-white font-mono">
      <Navbar />

      <div class="relative w-full h-[320px] md:h-[400px] mt-12 flex items-center justify-center overflow-hidden">
        <img src="/CABANE_PAGE/Cabane.webp" alt="Cabane Header"
             class="absolute inset-0 w-full h-full object-cover animate-scaleIn" />
        <h1 class="hidden lg:block relative z-10 text-5xl md:text-5xl font-bold italic text-green-900 bg-white/70 px-8 py-2 md:ml-48 md:mb-48 rounded-xl shadow animate-slideInRight">
          La p'tite cabane
        </h1>
      </div>

      <div ref="infoCard" class="max-w-3xl mx-auto bg-white p-4 md:p-10 mt-8 md:mt-16 rounded-3xl shadow-md animate-on-scroll">
  <div class="grid grid-cols-2 gap-4 sm:gap-8 text-xl sm:text-2xl font-medium text-black">
    <div class="space-y-4 sm:space-y-8 border-r border-black pr-4 sm:pr-8">
      <div>{{ t('projectLabels.nomDuProjet') }}</div>
      <div>{{ t('projectLabels.sujet') }}</div>
      <div>{{ t('projectLabels.duree') }}</div>
      <div>{{ t('projectLabels.role') }}</div>
    </div>
    <div class="space-y-4 sm:space-y-8 pl-4 sm:pl-8 font-normal text-base sm:text-xl">
      <div>La P'tite Cabane</div>
      <div>{{ t('cabane.sujet') }}</div>
      <div>{{ t('cabane.duree') }}</div>
      <div>{{ t('cabane.role') }}</div>
    </div>
  </div>
</div>

      <div ref="section1" class="w-full max-w-5xl mx-auto bg-white px-4 py-6 md:p-8 mt-8 text-black text-lg animate-on-scroll">
        <h2 class="text-2xl font-semibold mb-1 mt-12">{{ t('cabane.comprendreTitle') }}</h2>
        <div class="w-32 h-0.5 bg-[#DCC196] mb-4 section-line"></div>
        <p class="mb-10">
          {{ t('cabane.comprendreP') }}
        </p>

        <h2 class="text-2xl font-semibold mb-1 mt-12">{{ t('cabane.definitionTitle') }}</h2>
        <div class="w-32 h-0.5 bg-[#DCC196] mb-4 section-line"></div>
        <ul class="list-disc ml-6 mb-10 space-y-2">
          <li>{{ t('cabane.definitionLi1') }}</li>
          <li>{{ t('cabane.definitionLi2') }}</li>
        </ul>

<h2 class="text-2xl font-semibold mb-1 mt-12">{{ t('cabane.ideationTitle') }}</h2>
<div class="w-32 h-0.5 bg-[#DCC196] mb-4 section-line"></div>
<ul class="list-disc ml-6 mb-10 space-y-2">
  <li>{{ t('cabane.ideationLi1') }}</li>
  <li>{{ t('cabane.ideationLi2') }}</li>
</ul>

<div class="flex flex-col md:flex-row gap-6 justify-center items-start">
  <img
    src="/CABANE_PAGE/ideation_1.webp"
    alt="Identité visuelle - logos"
    class="w-full md:w-1/2 rounded-xl border border-black shadow hover:scale-105 transition-transform duration-500"
  />
  <img
  src="/CABANE_PAGE/ideation_2.webp"
  alt="Identité visuelle - couleurs"
  class="w-full md:w-1/2 rounded-xl border border-black shadow md:mt-42 md:ml-6 hover:scale-105 transition-transform duration-500"
/>
</div>
      </div>

      <div ref="section2" class="w-full max-w-5xl mx-auto bg-white px-4 py-6 md:p-8 mt-8 mb-8 text-black text-lg animate-on-scroll">
        <h2 class="text-2xl font-semibold mb-1 mt-12">{{ t('cabane.prototypageTitle') }}</h2>
        <div class="w-32 h-0.5 bg-[#DCC196] mb-4 section-line"></div>
        <ul class="list-disc ml-6 mb-10 space-y-2">
          <li>{{ t('cabane.prototypageLi1') }}</li>
          <li>{{ t('cabane.prototypageLi2') }}</li>
        </ul>
        <div class="flex flex-col md:flex-row gap-6 justify-center items-start">
          <img src="/CABANE_PAGE/prototypage_cabane.webp" alt="Planche développement"
               class="w-full md:w-1/2 rounded-xl border border-gray-300 shadow hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <div ref="section3" class="w-full max-w-5xl mx-auto bg-white px-4 py-6 md:p-8 mt-8 mb-8 text-black text-lg animate-on-scroll">
        <h2 class="text-2xl font-semibold mb-1 mt-12">{{ t('cabane.perspectivesTitle') }}</h2>
        <div class="w-32 h-0.5 bg-[#DCC196] mb-4 section-line"></div>
        <ul class="list-disc ml-6 mb-10 space-y-2">
          <li>{{ t('cabane.perspectivesLi') }}</li>
        </ul>
      </div>
    </div>
  </template>

  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import Navbar from '../src/components/Navbar.vue'
  import { useI18n } from '../src/composables/useI18n';

  const { t } = useI18n();

  const infoCard = ref(null);
  const section1 = ref(null);
  const section2 = ref(null);
  const section3 = ref(null);

  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = [infoCard, section1, section2, section3];
    elements.forEach((el) => {
      if (el.value) {
        observer.observe(el.value);
      }
    });
  });

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
    }
  });
  </script>

  <style scoped>
  .section-line {
    transition: width 0.6s ease-out;
    width: 0;
  }

  .visible .section-line,
  .animate-on-scroll.visible .section-line {
    width: 8rem;
  }
  </style>
