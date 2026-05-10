<template>
  <div class="min-h-screen bg-white font-mono">
    <Navbar />
    <div
      class="relative w-full h-[320px] md:h-[400px] mt-12 flex items-center justify-center overflow-hidden"
    >
      <img
        src="/PROJET 1/Pronote.webp"
        alt="Pronote"
        class="absolute inset-0 w-full h-full object-cover object-[center_20%] animate-scaleIn"
      />
    </div>
    <div
      ref="infoCard"
      class="max-w-7xl mx-auto bg-white p-4 md:p-10 mt-8 md:mt-16 rounded-3xl shadow-md animate-on-scroll"
    >
      <div
        class="grid grid-cols-[1fr_1fr] gap-y-4 sm:gap-y-8 text-xl sm:text-2xl font-medium text-black"
      >
        <div class="border-r border-black pr-4 sm:pr-8 flex items-center">
          {{ t("projectLabels.nomDuProjet") }}
        </div>
        <div
          class="pl-4 sm:pl-8 font-normal text-lg sm:text-xl flex items-center"
        >
          Lien à l'école
        </div>

        <div class="border-r border-black pr-4 sm:pr-8 flex items-center">
          {{ t("projectLabels.sujet") }}
        </div>
        <div
          class="pl-4 sm:pl-8 font-normal text-lg sm:text-xl flex items-center"
        >
          {{ t("lienSocial.sujet") }}
        </div>

        <div class="border-r border-black pr-4 sm:pr-8 flex items-center">
          {{ t("projectLabels.role") }}
        </div>
        <div
          class="pl-4 sm:pl-8 font-normal text-lg sm:text-xl flex items-center"
        >
          {{ t("lienSocial.role") }}
        </div>

        <div class="border-r border-black pr-4 sm:pr-8 flex items-center">
          {{ t("projectLabels.phaseProjet") }}
        </div>
        <div
          class="pl-4 sm:pl-8 font-normal text-lg sm:text-xl flex items-center"
        >
          {{ t("lienSocial.phaseProjet") }}
        </div>

        <div class="border-r border-black pr-4 sm:pr-8 flex items-center">
          {{ t("projectLabels.commanditaire") }}
        </div>
        <div
          class="pl-4 sm:pl-8 font-normal text-lg sm:text-xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <img
            src="/PROJET 1/Logo-docaposte.svg.png"
            alt=""
            class="h-7 sm:h-10 w-auto object-contain"
          />
          <img
            src="/PROJET 1/unnamed.png"
            alt=""
            class="h-16 sm:h-26 w-auto object-contain"
          />
        </div>
      </div>
    </div>

    <ProjectTOC
      class="mt-24 mb-24"
      :sections="[
        { label: t('lienSocial.tocComprendre'), id: 'comprendre' },
        { label: t('lienSocial.tocRecherche'), id: 'recherche' },
        { label: t('lienSocial.tocIdeation'), id: 'ideation' },
        { label: t('lienSocial.tocStoryboard'), id: 'storyboard' },
        { label: t('lienSocial.tocTests'), id: 'tests' },
        { label: t('lienSocial.tocIterations'), id: 'iterations' },
        { label: t('lienSocial.tocEtapes'), id: 'etapes' },
        { label: t('lienSocial.tocOperationnelle'), id: 'operationnelle' },
      ]"
    />

    <div
      id="comprendre"
      ref="section1"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-44 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h1 class="text-2xl font-semibold mb-1 mt-12">
        {{ t("lienSocial.comprendreTitle") }}
      </h1>
      <div class="w-32 h-0.5 bg-[#A1DFCC] mb-4 section-line"></div>
      <p class="mb-10">
        {{ t("lienSocial.comprendreP1") }}
      </p>

      <p class="mb-10">
        {{ t("lienSocial.comprendreP2") }}
      </p>
    </div>

    <div
      id="recherche"
      ref="uxResearch"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h1 class="text-2xl font-semibold mb-1">
        {{ t("lienSocial.rechercheTitle") }}
      </h1>
      <div class="w-32 h-0.5 bg-[#A1DFCC] mb-10 section-line"></div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="flex flex-col">
          <div
            class="bg-[#A1DFCC] rounded-2xl px-5 py-3 text-center font-semibold text-lg mb-3 whitespace-pre-line"
          >
            {{ t("lienSocial.rechSecondaire") }}
          </div>
          <div class="border border-[#A1DFCC] rounded-2xl p-5 text-lg flex-1">
            <p class="mb-3" v-html="t('lienSocial.rechSecondaireP1')"></p>
            <p>
              {{ t("lienSocial.rechSecondaireP2") }}
            </p>
          </div>
        </div>

        <div class="flex flex-col">
          <div
            class="bg-[#A1DFCC] rounded-2xl px-5 py-3 text-center font-semibold text-lg mb-3 whitespace-pre-line"
          >
            {{ t("lienSocial.rechQualitative") }}
          </div>
          <div class="border border-[#A1DFCC] rounded-2xl p-5 text-lg flex-1">
            <p class="font-semibold mb-2">
              <span class="text-4xl font-bold"
                ><CountUp :to="15" :duration="3000"
              /></span>
              {{ t("lienSocial.rechQualitativeTitle") }}
            </p>
            <ul class="list-disc list-inside space-y-0.5">
              <li>{{ t("lienSocial.rechQualLi1") }}</li>
              <li>{{ t("lienSocial.rechQualLi2") }}</li>
              <li>{{ t("lienSocial.rechQualLi3") }}</li>
            </ul>
            <ul class="list-disc list-inside space-y-0.5 mt-2">
              <li>{{ t("lienSocial.rechQualLi4") }}</li>
              <li>{{ t("lienSocial.rechQualLi5") }}</li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col">
          <div
            class="bg-[#A1DFCC] rounded-2xl px-5 py-3 text-center font-semibold text-lg mb-3 whitespace-pre-line"
          >
            {{ t("lienSocial.rechQuantitative") }}
          </div>
          <div class="border border-[#A1DFCC] rounded-2xl p-5 text-lg flex-1">
            <p class="mb-2">
              <span class="text-4xl font-bold"
                ><CountUp :to="96" :duration="3000"
              /></span>
              {{ t("lienSocial.rechQuantP") }}
            </p>
            <ul class="list-disc list-inside space-y-0.5">
              <li>{{ t("lienSocial.rechQuantLi1") }}</li>
              <li>{{ t("lienSocial.rechQuantLi2") }}</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="mb-3 text-lg">
        {{ t("lienSocial.rechContrainte1") }}
      </p>
      <p class="mb-10 text-lg" v-html="t('lienSocial.rechContrainte2')"></p>

      <p class="font-light mb-4 underline text-lg">
        {{ t("lienSocial.hmwLabel") }}
      </p>
      <div
        class="bg-[#A1DFCC] rounded-2xl mt-12 py-5 px-8 text-center text-lg font-semibold max-w-4xl mx-auto"
      >
        {{ t("lienSocial.hmw") }}
      </div>
    </div>

    <div
      id="ideation"
      ref="ideation"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <h1 class="text-3xl font-semibold mb-1">
            {{ t("lienSocial.ideationTitle") }}
          </h1>
          <div class="w-32 h-1 bg-[#A1DFCC] mb-10 section-line"></div>

          <p class="text-lg font-medium mb-2">
            {{ t("lienSocial.atelierIdeation") }}
          </p>
          <p class="text-lg font-semibold mb-3">
            &rarr; {{ t("lienSocial.brainstorming") }}
          </p>
          <ul class="list-disc list-inside text-lg space-y-1 mb-6">
            <li v-html="t('lienSocial.ideationLi1')"></li>
            <li v-html="t('lienSocial.ideationLi2')"></li>
          </ul>
        </div>

        <div class="flex-1 grid grid-cols-2 grid-rows-2 gap-3">
          <img
            src="/PROJET 1/webp/DSC01526.webp"
            alt="Atelier d'idéation"
            class="w-full h-full object-cover rounded-xl row-span-2"
          />
          <img
            src="/PROJET 1/webp/DSC01529.webp"
            alt="Salle de réunion"
            class="w-full h-48 object-cover rounded-xl"
          />
          <img
            src="/PROJET 1/webp/DSC01702.webp"
            alt="Post-its brainstorming"
            class="w-full h-48 object-cover rounded-xl"
          />
        </div>
      </div>

      <div
        class="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start mt-16"
      >
        <div class="flex-1">
          <p class="text-lg font-semibold underline mb-4">
            {{ t("lienSocial.solutionsTitle") }}
          </p>
          <ul class="list-disc list-inside text-lg space-y-3">
            <li v-html="t('lienSocial.solutionLi1')"></li>
            <li v-html="t('lienSocial.solutionLi2')"></li>
          </ul>
        </div>

        <div class="flex-1 flex items-center justify-center py-10">
          <div class="relative w-[320px] h-[290px] md:w-[420px] md:h-[380px]">
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-52 md:w-72 md:h-72 bg-[#A1DFCC] rounded-full opacity-50 items-center"
            ></div>
            <img
              src="/PROJET 1/webp/Recto2-Pires-Idees-Format-A5.webp"
              alt="Jeu des Pires Idées - Recto"
              class="absolute left-0 top-1/2 -translate-y-1/2 w-44 md:w-60 -rotate-12 drop-shadow-xl z-10"
            />
            <img
              src="/PROJET 1/webp/Verso2-Pires-Idees-Format-A5.webp"
              alt="Jeu des Pires Idées - Verso"
              class="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-56 rotate-12 drop-shadow-xl z-20"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      id="storyboard"
      ref="storyboard"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <h1 class="text-3xl font-semibold mb-1">
            {{ t("lienSocial.storyboardTitle") }}
          </h1>
          <div class="w-32 h-1 bg-[#A1DFCC] mb-10 section-line"></div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-8 items-center justify-between">
        <img
          src="/PROJET 1/webp/Storyboard.webp"
          alt="Storyboard de la solution en 2 étapes"
          class="w-full md:w-1/2 h-auto object-cover rounded-xl"
        />
        <div
          class="w-full md:w-1/3 bg-[#A1DFCC] rounded-lg p-5 md:p-6 text-black text-center text-lg font-light leading-relaxed"
        >
          {{ t("lienSocial.storyboardNote") }}
        </div>
      </div>
    </div>

    <div
      id="tests"
      ref="tests"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <h1 class="text-3xl font-semibold mb-1">
            {{ t("lienSocial.testsTitle") }}
          </h1>
          <div class="w-32 h-1 bg-[#A1DFCC] mb-10 section-line"></div>

          <p class="text-lg mb-8" v-html="t('lienSocial.testsIntro')"></p>

          <div class="flex flex-col sm:flex-row gap-8">
            <div class="flex-1">
              <p class="text-lg font-semibold underline mb-2">
                {{ t("lienSocial.scenario1Title") }}
              </p>
              <p class="text-lg">
                {{ t("lienSocial.scenario1") }}
              </p>
            </div>
            <div class="flex-1">
              <p class="text-lg font-semibold underline mb-2">
                {{ t("lienSocial.scenario2Title") }}
              </p>
              <p class="text-lg">
                {{ t("lienSocial.scenario2") }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="flex-1 flex items-start justify-center overflow-hidden rounded-xl shadow-md"
        >
          <!-- <img
            src="/PROJET 1/webp/Tests.webp"
            alt="Tests d'utilisabilité"
            class="w-full h-72 scale-100 origin-center"
          /> -->
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start mt-20">
        <div class="flex-1">
          <p class="text-lg font-semibold underline mb-8">
            {{ t("lienSocial.retoursTitle") }}
          </p>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
                >1</span
              >
              <p class="text-lg" v-html="t('lienSocial.retour1')"></p>
            </div>
            <div class="flex items-start gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
                >2</span
              >
              <p class="text-lg">
                {{ t("lienSocial.retour2") }}
              </p>
            </div>
            <div class="flex items-start gap-4">
              <span
                class="flex-shrink-0 w-8 h-8 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
                >3</span
              >
              <p class="text-lg">
                {{ t("lienSocial.retour3") }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex-1 flex items-center gap-4">
          <span class="text-5xl font-bold">&rarr;</span>
          <div class="flex flex-col md:flex-row gap-6 w-full">
            <div class="text-center">
              <img
                src="/PROJET 1/webp/airbnb.PNG"
                alt="Airbnb traduction"
                class="w-full md:w-44 rounded-xl shadow-md"
              />
              <p class="text-xs mt-2">Airbnb</p>
            </div>
            <div class="text-center">
              <img
                src="/PROJET 1/webp/image 51.webp"
                alt="Vinted traduction"
                class="w-full md:w-44 rounded-xl shadow-md"
              />
              <p class="text-xs mt-2">Vinted</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="iterations"
      ref="iterations"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <h1 class="text-3xl font-semibold mb-1">
        {{ t("lienSocial.iterationsTitle") }}
      </h1>
      <div class="w-32 h-1 bg-[#A1DFCC] mb-10 section-line"></div>

      <p class="text-lg font-semibold underline mb-4">
        {{ t("lienSocial.changements") }}
      </p>
      <div class="text-lg space-y-1 mb-12">
        <p>&rarr; {{ t("lienSocial.changement1") }}</p>
        <p>&rarr; {{ t("lienSocial.changement2") }}</p>
        <p>&rarr; {{ t("lienSocial.changement3") }}</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 mb-16">
        <div class="flex-1">
          <img
            src="/PROJET 1/webp/prototype1.webp"
            alt="Prototype - Nouvelle discussion"
            class="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div class="flex-1">
          <img
            src="/PROJET 1/webp/prototype2.webp"
            alt="Prototype - Liste des élèves"
            class="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      <div class="flex justify-center">
        <a
          href="https://www.figma.com/proto/zvyGMotoaoAlkBJIoBdPd8/Prototype-VF---Aménagement?node-id=4001-7320&p=f&t=eUoxhwl5A6JNaATn-1&scaling=min-zoom&content-scaling=fixed&page-id=4001%3A5324&starting-point-node-id=4001%3A7320"
          target="_blank" rel="noopener noreferrer" class="inline-block border-2 border-black rounded-full px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors"
        >
          {{ t("lienSocial.voirPrototype") }}
        </a>
      </div>
    </div>

    <div
      id="etapes"
      ref="etapes"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <h1 class="text-3xl font-semibold mb-1">
        {{ t("lienSocial.etapesTitle") }}
      </h1>
      <div class="w-32 h-1 bg-[#A1DFCC] mb-14 section-line"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <div class="flex items-start gap-5">
          <span
            class="flex-shrink-0 w-12 h-12 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
            >1</span
          >
          <p class="text-lg pt-2">
            {{ t("lienSocial.etape1") }}
          </p>
        </div>
        <div class="flex items-start gap-5">
          <span
            class="flex-shrink-0 w-12 h-12 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
            >2</span
          >
          <p class="text-lg pt-2">
            {{ t("lienSocial.etape2") }}
          </p>
        </div>
        <div class="flex items-start gap-5">
          <span
            class="flex-shrink-0 w-12 h-12 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
            >3</span
          >
          <p class="text-lg pt-2">
            {{ t("lienSocial.etape3") }}
          </p>
        </div>
        <div class="flex items-start gap-5">
          <span
            class="flex-shrink-0 w-12 h-12 rounded-full bg-[#A1DFCC] flex items-center justify-center text-lg font-semibold"
            >4</span
          >
          <p class="text-lg pt-2">
            {{ t("lienSocial.etape4") }}
          </p>
        </div>
      </div>
    </div>

    <div
      id="operationnelle"
      ref="operationnelle"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <h1 class="text-3xl font-semibold mb-1">
        {{ t("lienSocial.operationnelleTitle") }}
      </h1>
      <div class="w-32 h-1 bg-[#A1DFCC] mb-14 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20">
        <div class="flex-1">
          <p class="text-lg font-semibold underline mb-6">
            {{ t("lienSocial.pilotageTitle") }}
          </p>
          <div class="text-lg space-y-3">
            <p>&rarr; {{ t("lienSocial.pilotage1") }}</p>
            <p>&rarr; {{ t("lienSocial.pilotage2") }}</p>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/PROJET 1/webp/Pilotage-projet.webp"
            alt="Pilotage du projet - Cascade et Agile"
            class="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <p class="text-lg font-semibold underline mb-6">
            {{ t("lienSocial.budgetTitle") }}
          </p>
          <div class="text-lg space-y-3">
            <p>&rarr; {{ t("lienSocial.budget1") }}</p>
            <p>&rarr; {{ t("lienSocial.budget2") }}</p>
            <p>&rarr; {{ t("lienSocial.budget3") }}</p>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="/PROJET 1/webp/Budget-projet.webp"
            alt="Budget du projet"
            class="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-gray-100"
    >
      <router-link
        to="/windmap"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#A1DFCC] text-black rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        <span>&larr;</span> {{ t("lienSocial.precedent") }}
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
        to="/esquisse"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#A1DFCC] text-black rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
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
import CountUp from "../src/components/CountUp.vue";
import { useI18n } from "../src/composables/useI18n";

const { t, currentLang, toggleLang } = useI18n();

const infoCard = ref(null);
const section1 = ref(null);
const uxResearch = ref(null);
const ideation = ref(null);
const storyboard = ref(null);
const tests = ref(null);
const iterations = ref(null);
const etapes = ref(null);
const operationnelle = ref(null);
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
    ideation,
    storyboard,
    tests,
    iterations,
    etapes,
    operationnelle,
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
