<template>
  <div class="min-h-screen bg-white font-mono">
    <Navbar />
    <div
      class="relative w-full h-[320px] md:h-[400px] mt-12 flex items-center justify-center overflow-hidden"
    >
      <img
        src="/ESQUISSE/webp/Esquisse.webp"
        alt="Madatlas Header"
        class="absolute inset-0 w-full h-full object-cover animate-scaleIn"
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
          <div>Esquisse</div>
          <div>{{ t("esquisse.sujet") }}</div>
          <div>{{ t("esquisse.duree") }}</div>
          <div>{{ t("esquisse.role") }}</div>
        </div>
      </div>
    </div>

    <ProjectTOC
      class="mt-24 mb-24"
      :sections="[
        { label: t('esquisse.tocComprendre'), id: 'comprendre' },
        { label: t('esquisse.tocRecherche'), id: 'recherche' },
        { label: t('esquisse.tocIdeation'), id: 'ideation' },
        { label: t('esquisse.tocFonctionnalites'), id: 'fonctionnalites' },
      ]"
    />

    <div
      id="comprendre"
      ref="section1"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-44 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1 mt-12">
        {{ t("esquisse.comprendreTitle") }}
      </h2>
      <div class="w-32 h-0.5 bg-black mb-4 section-line"></div>
      <p class="mb-10">
        {{ t("esquisse.comprendreP1") }}
      </p>
      <p class="mb-10">
        {{ t("esquisse.comprendreP2") }}
      </p>
    </div>

    <div
      id="recherche"
      ref="uxResearch"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div class="flex-1 md:w-1/2">
          <h1 class="text-2xl font-semibold mb-1">
            {{ t("esquisse.rechercheTitle") }}
          </h1>
          <div class="w-32 h-0.5 bg-[#1a1a4e] mb-4 section-line"></div>
          <p class="mb-6">
            {{ t("esquisse.rechercheP1") }}
          </p>
          <p class="mb-0" v-html="t('esquisse.rechercheP2')"></p>
        </div>
        <div class="flex-1 md:w-1/2 flex items-center justify-center">
          <img
            src="/ESQUISSE/persona.webp"
            alt="Public cibles - Proto-persona"
            class="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>

    <div
      ref="hmw"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <p class="font-semibold mb-4 underline">
        {{ t("esquisse.hmwLabel") }}
      </p>
      <div
        class="bg-black rounded-xl mt-12 py-4 px-8 text-white text-center text-base md:text-lg font-semibold max-w-5xl mx-auto"
      >
        {{ t("esquisse.hmw") }}
      </div>
    </div>

    <div
      id="ideation"
      ref="ideation"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-1">
            {{ t("esquisse.ideationTitle") }}
          </h2>
          <div class="w-32 h-1 bg-black mb-8 section-line"></div>

          <p class="mb-6">
            {{ t("esquisse.ideationP1") }}
          </p>
          <p class="mb-6">
            {{ t("esquisse.ideationP2") }}
          </p>
          <div
            class="bg-black rounded-xl py-5 px-6 text-white text-lg font-semibold mb-10 inline-block"
          >
            <p class="mb-1">{{ t("esquisse.ideationConcept1") }}</p>
            <p>{{ t("esquisse.ideationConcept2") }}</p>
          </div>

          <p class="mb-4">
            {{ t("esquisse.ideationP3") }}
          </p>
          <p>
            {{ t("esquisse.ideationP4") }}
          </p>
        </div>
        <div class="flex-1 flex items-start justify-center pt-16">
          <img
            src="/ESQUISSE/conception.webp"
            alt="Mockup Esquisse"
            class="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>

    <div
      id="fonctionnalites"
      ref="fonctionnalite"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 text-black text-lg text-left animate-on-scroll"
    >
      <h3 class="text-xl font-light underline mt-52 mb-16">
        {{ t("esquisse.fonctionnalitesTitle") }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
        <div class="flex flex-col items-center text-center">
          <img
            src="/ESQUISSE/fonctionnalites_esquisse_3.webp"
            alt="Gamification"
            class="w-full aspect-square object-cover object-top rounded-2xl mb-6"
          />
          <h4 class="text-lg font-bold mb-2">{{ t("esquisse.feat1Title") }}</h4>
          <p class="text-base text-gray-400 font-light">{{ t("esquisse.feat1Desc") }}</p>
        </div>

        <div class="flex flex-col items-center text-center">
          <img
            src="/ESQUISSE/fonctionnalites_esquisse_2.webp"
            alt="Recherche intuitive"
            class="w-full aspect-square object-cover object-top rounded-2xl mb-6"
          />
          <h4 class="text-lg font-bold mb-2">{{ t("esquisse.feat2Title") }}</h4>
          <p class="text-base text-gray-400 font-light">{{ t("esquisse.feat2Desc") }}</p>
        </div>

        <div class="flex flex-col items-center text-center">
          <img
            src="/ESQUISSE/fonctionnalites_esquisse_1.webp"
            alt="Socialisation hybride"
            class="w-full aspect-square object-cover object-top rounded-2xl mb-6"
          />
          <h4 class="text-lg font-bold mb-2">{{ t("esquisse.feat3Title") }}</h4>
          <p class="text-base text-gray-400 font-light">{{ t("esquisse.feat3Desc") }}</p>
        </div>
      </div>

      <p class="text-base font-light mt-32 mb-32">
        {{ t("esquisse.fonctionnalitesP") }}
      </p>
    </div>

    <div
      ref="wireframes"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-20 mb-16 text-black text-lg text-left animate-on-scroll"
    >
      <div class="hidden md:flex items-center mb-16">
        <div class="w-1/4"></div>
        <div class="w-5/12 flex justify-center">
          <span
            class="bg-black text-white text-sm font-semibold px-6 py-2 rounded-lg"
          >
            {{ t("esquisse.wireframeBF") }}
          </span>
        </div>
        <div class="w-1/12"></div>
        <div class="w-5/12 flex justify-center">
          <span
            class="bg-black text-white text-sm font-semibold px-6 py-2 rounded-lg"
          >
            {{ t("esquisse.maquetteHF") }}
          </span>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center mb-20">
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-xl font-semibold">{{ t("esquisse.pageAccueil") }}</h3>
          <div class="w-16 h-0.5 bg-black mt-2"></div>
        </div>
        <div class="flex items-center w-full md:w-3/4">
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/Wireframe1.webp"
              alt="Wireframe page d'accueil"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
          <div class="flex justify-center text-3xl text-gray-400 px-2">
            &rarr;
          </div>
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/mockup1.webp"
              alt="Maquette page d'accueil"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center mb-20">
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-xl font-semibold">
            {{ t("esquisse.pageTutoriels") }}
          </h3>
          <div class="w-16 h-0.5 bg-black mt-2"></div>
        </div>
        <div class="flex items-center w-full md:w-3/4">
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/Wireframe2.webp"
              alt="Wireframe page tutoriels"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
          <div class="flex justify-center text-3xl text-gray-400 px-2">
            &rarr;
          </div>
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/mockup3.webp"
              alt="Maquette page tutoriels"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center mb-20">
        <div class="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 class="text-xl font-semibold">
            {{ t("esquisse.pageMonCompte") }}
          </h3>
          <div class="w-16 h-0.5 bg-black mt-2"></div>
        </div>
        <div class="flex items-center w-full md:w-3/4">
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/Wireframe3.webp"
              alt="Wireframe page Mon Compte"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
          <div class="flex justify-center text-3xl text-gray-400 px-2">
            &rarr;
          </div>
          <div class="flex-1 flex justify-center">
            <img
              src="/ESQUISSE/mockup2.webp"
              alt="Maquette page Mon Compte"
              class="h-72 md:h-96 w-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-gray-100"
    >
      <router-link
        to="/lien-social"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-black text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        <span>&larr;</span> {{ t("lienSocial.precedent") }}
      </router-link>
      <button
        @click="toggleLang()"
        class="relative flex items-center bg-white border border-black rounded-full p-1 cursor-pointer hover:shadow-md transition-shadow duration-300"
      >
        <span class="lang-toggle-indicator absolute top-1 bottom-1 rounded-full bg-black transition-all duration-300 ease-out" :class="currentLang === 'en' ? 'translate-x-full' : 'translate-x-0'"></span>
        <span class="relative z-10 px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300" :class="currentLang === 'fr' ? 'text-white' : 'text-gray-400'">FR</span>
        <span class="relative z-10 px-3 py-1.5 text-sm font-semibold tracking-wide transition-colors duration-300" :class="currentLang === 'en' ? 'text-white' : 'text-gray-400'">EN</span>
      </button>
      <router-link
        to="/windmap"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-black text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        {{ t("lienSocial.suivant") }} <span>&rarr;</span>
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
const uxResearch = ref(null);
const hmw = ref(null);
const ideation = ref(null);
const section3 = ref(null);
const fonctionnalite = ref(null);
const wireframes = ref(null);

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
    uxResearch,
    hmw,
    ideation,
    section3,
    fonctionnalite,
    wireframes,
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
