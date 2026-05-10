<template>
  <div class="min-h-screen bg-white font-mono">
    <Navbar />
    <div
      class="relative w-full h-[320px] md:h-[400px] mt-12 flex items-center justify-center overflow-hidden"
    >
      <img
        src="/Windmap.webp"
        alt="Windmap"
        class="absolute inset-0 w-full h-full object-cover object-[center_30%] animate-scaleIn"
      />
    </div>
    <div
      ref="infoCard"
      class="max-w-4xl mx-auto bg-white p-4 md:p-10 mt-8 md:mt-16 rounded-3xl shadow-md animate-on-scroll"
    >
      <div
        class="grid grid-cols-2 gap-4 sm:gap-8 text-xl sm:text-2xl font-medium text-black"
      >
        <div class="space-y-4 sm:space-y-8 border-r border-black pr-4 sm:pr-8">
          <div>{{ t("projectLabels.nomDuProjet") }}</div>
          <div>{{ t("projectLabels.sujet") }}</div>
          <div>{{ t("projectLabels.duree") }}</div>
          <div>{{ t("projectLabels.role") }}</div>
        </div>
        <div
          class="space-y-4 sm:space-y-8 pl-4 sm:pl-8 font-normal text-base sm:text-xl"
        >
          <div>Windmap</div>
          <div>{{ t("windmap.sujet") }}</div>
          <div>{{ t("windmap.duree") }}</div>
          <div>{{ t("windmap.role") }}</div>
        </div>
      </div>
    </div>

    <ProjectTOC
      class="mt-24 mb-24"
      :sections="[
        { label: t('windmap.tocComprendre'), id: 'comprendre' },
        { label: t('windmap.tocRecherche'), id: 'recherche' },
        { label: t('windmap.tocPrototype'), id: 'prototype' },
        { label: t('windmap.tocPerspectives'), id: 'perspectives' },
      ]"
    />

    <div
      id="comprendre"
      ref="section1"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-44 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h1 class="text-2xl font-semibold mb-1 mt-12">
        {{ t("windmap.comprendreTitle") }}
      </h1>
      <div class="w-32 h-0.5 bg-[#b7d2f7] mb-4 section-line"></div>
      <p class="mb-10">
        {{ t("windmap.comprendreP1") }}
      </p>

      <p class="mb-10">
        {{ t("windmap.comprendreP2") }}
      </p>

      <div
        id="recherche"
        class="flex flex-col md:flex-row gap-8 md:gap-12 mt-52 mb-32 items-start"
      >
        <div class="flex-1">
          <h1 class="text-2xl font-semibold mb-1">
            {{ t("windmap.rechercheTitle") }}
          </h1>
          <div class="w-32 h-0.5 bg-[#1a1a4e] mb-4 section-line"></div>
          <p class="mb-6">
            {{ t("windmap.rechercheP1") }}
          </p>
          <p class="mb-0" v-html="t('windmap.rechercheP2')"></p>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <div
            class="bg-[#223C8D] flex-1 rounded-lg p-8 md:p-10 text-white text-center text-lg md:text-xl font-semibold leading-relaxed"
          >
            {{ t("windmap.hmw") }}
          </div>
        </div>
      </div>
    </div>

    <div
      ref="gallery"
      class="relative w-full flex justify-center items-center mt-52 mb-32 my-20 animate-on-scroll-scale"
    >
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[550px] h-[75vw] max-h-[550px] bg-[#c6ede6] rounded-full z-0"
      ></div>
      <div
        class="relative z-10 flex flex-col items-center w-full max-w-5xl space-y-6 px-8"
      >
        <div
          class="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-8"
        >
          <img
            src="/WINDMAP PAGE/Identite_visuelle_2.webp"
            alt="Windmap 1"
            class="rounded-xl shadow-lg bg-white w-full md:w-[45%] hover:scale-105 transition-transform duration-500"
          />
          <img
            src="/WINDMAP PAGE/Identite_visuelle_3.webp"
            alt="Windmap 2"
            class="rounded-xl shadow-lg bg-white w-full md:w-[45%] hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div
          class="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-8"
        >
          <img
            src="/WINDMAP PAGE/Identite_visuelle_4.webp"
            alt="Windmap 3"
            class="rounded-xl shadow-lg bg-white w-full md:w-[45%] hover:scale-105 transition-transform duration-500"
          />
          <img
            src="/WINDMAP PAGE/Identite_visuelle_5.webp"
            alt="Windmap 4"
            class="rounded-xl shadow-lg bg-white w-full md:w-[45%] hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div class="flex justify-center w-full">
          <img
            src="/WINDMAP PAGE/Identite_visuelle_6.webp"
            alt="Windmap 5"
            class="rounded-xl shadow-lg bg-white w-full md:w-[45%] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
    <div
      id="prototype"
      ref="section2"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1 mt-12">
        {{ t("windmap.prototypeTitle") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#b7d2f7] mb-4 section-line"></div>
      <ul class="list-disc ml-8 mb-10 space-y-2">
        <li>{{ t("windmap.prototypeLi") }}</li>
      </ul>
    </div>

    <div
      ref="mockup"
      class="w-full flex justify-center my-20 animate-on-scroll-scale"
    >
      <img
        src="/WINDMAP PAGE/windmap_maquette.webp"
        alt="Maquette Figma Windmap"
        class="rounded-xl border-4 border-[#4a90e2] bg-[#222] w-full md:w-[45%] max-w-2xl hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div ref="ctaButton" class="flex justify-center my-20 animate-on-scroll">
      <a
        href="https://www.figma.com/proto/739ZGXaFy5iTFn154WUeW0/WindMap?node-id=2-62&p=f&t=QO5hsjB5AqUyTeaZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A62&show-proto-sidebar=1"
        target="_blank"
        class="px-8 py-3 border-2 border-black rounded-full text-lg font-medium hover:bg-[#9be4c4] hover:text-black transition duration-300 btn-hover-effect"
      >
        {{ t("windmap.testerMaquette") }}
      </a>
    </div>
    <div
      id="perspectives"
      ref="section3"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-8 md:gap-12 mt-12 items-start">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-1">
            {{ t("windmap.perspectivesTitle") }}
          </h2>
          <div class="w-32 h-0.5 bg-[#1a1a4e] mb-6 section-line"></div>
          <p class="mb-4 text-lg text-gray-700">
            {{ t("windmap.perspectivesIntro") }}
          </p>
          <ul class="list-disc ml-6 mb-10 space-y-1 text-lg text-gray-700">
            <li>{{ t("windmap.perspectivesLi1") }}</li>
            <li>{{ t("windmap.perspectivesLi2") }}</li>
          </ul>

          <h3 class="text-2xl font-semibold mb-6">
            {{ t("windmap.kpiTitle") }}
          </h3>
          <div class="space-y-5">
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-[#223C8D] flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              >
                1
              </div>
              <span>{{ t("windmap.kpi1") }}</span>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-[#223C8D] flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              >
                2
              </div>
              <span>{{ t("windmap.kpi2") }}</span>
            </div>
            <div class="flex items-center gap-4">
              <div
                class="w-10 h-10 rounded-full bg-[#223C8D] flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              >
                3
              </div>
              <span>{{ t("windmap.kpi3") }}</span>
            </div>
          </div>
        </div>
        <div class="flex-1 flex items-center justify-center gap-4">
          <img
            src="/WINDMAP PAGE/windmap_mobile_1.webp"
            alt="Windmap mobile splash"
            class="w-[45%] max-w-[220px] drop-shadow-xl"
          />
          <img
            src="/WINDMAP PAGE/windmap_mobile_2.webp"
            alt="Windmap mobile app"
            class="w-[45%] max-w-[220px] drop-shadow-xl"
          />
        </div>
      </div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-6 md:px-16 mt-52 mb-32 text-center">
      <p class="text-base md:text-lg text-black font-medium">
        {{ t("windmap.conclusion") }}
      </p>
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-gray-100"
    >
      <router-link
        to="/esquisse"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#1a1a4e] text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        <span>&larr;</span> {{ t("windmap.precedent") }}
      </router-link>
      <button
        @click="toggleLang()"
        class="relative flex items-center bg-white border border-black rounded-full p-1 cursor-pointer hover:shadow-md transition-shadow duration-300"
      >
        <span
          class="lang-toggle-indicator absolute top-1 bottom-1 rounded-full bg-black transition-all duration-300 ease-out"
          :class="currentLang === 'en' ? 'translate-x-full' : 'translate-x-0'"
        ></span>
        <span
          class="relative z-10 px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300"
          :class="currentLang === 'fr' ? 'text-white' : 'text-gray-400'"
          >FR</span
        >
        <span
          class="relative z-10 px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300"
          :class="currentLang === 'en' ? 'text-white' : 'text-gray-400'"
          >EN</span
        >
      </button>
      <router-link
        to="/lien-social"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#1a1a4e] text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        {{ t("windmap.suivant") }} <span>&rarr;</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Navbar from "../src/components/Navbar.vue";
import ProjectTOC from "../src/components/ProjectTOC.vue";
import { useI18n } from "../src/composables/useI18n";

const { t, currentLang, toggleLang } = useI18n();

const infoCard = ref(null);
const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);
const gallery = ref(null);
const mockup = ref(null);
const ctaButton = ref(null);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  const elements = [
    infoCard,
    section1,
    section2,
    section3,
    gallery,
    mockup,
    ctaButton,
  ];
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
