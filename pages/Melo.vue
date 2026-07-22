<template>
  <div class="min-h-screen bg-white font-mono">
    <Navbar />
    <div
      class="relative w-full h-[320px] md:h-[440px] mt-12 flex items-center justify-center overflow-hidden"
    >
      <img
        src="/MELO/mockup_hero.webp"
        alt="Melio - Reprenez le contrôle de votre suivi médical"
        class="absolute inset-0 w-full h-full object-cover object-[center_25%] animate-scaleIn"
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
          <div>Melio</div>
          <div>{{ t("melo.sujet") }}</div>
          <div>{{ t("melo.duree") }}</div>
          <div>{{ t("melo.role") }}</div>
        </div>
      </div>
    </div>

    <ProjectTOC
      class="mt-24 mb-24"
      :sections="[
        { label: t('melo.tocComprendre'), id: 'comprendre' },
        { label: t('melo.tocRecherche'), id: 'recherche' },
        { label: t('melo.tocIdeation'), id: 'ideation' },
        { label: t('melo.tocConception'), id: 'conception' },
        { label: t('melo.tocFonctionnalites'), id: 'fonctionnalites' },
        { label: t('melo.tocTests'), id: 'tests' },
        { label: t('melo.tocBusiness'), id: 'business' },
        { label: t('melo.tocVision'), id: 'vision' },
      ]"
    />

    <!-- Comprendre le projet -->
    <div
      id="comprendre"
      ref="section1"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-44 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1 mt-12">
        {{ t("melo.comprendreTitle") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#7A1E35] mb-4 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center mt-6">
        <div class="flex-1">
          <p class="mb-8">{{ t("melo.comprendreP1") }}</p>
          <p class="mb-8" v-html="t('melo.comprendreP2')"></p>
          <p v-html="t('melo.comprendreP3')"></p>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="/MELO/mockup_affiche.webp"
            alt="Melo - suivi médical sur mobile"
            class="w-full max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- UX Research -->
    <div
      id="recherche"
      ref="uxResearch"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h1 class="text-2xl font-semibold mb-1">{{ t("melo.rechercheTitle") }}</h1>
      <div class="w-32 h-0.5 bg-[#7A1E35] mb-6 section-line"></div>
      <p class="mb-10" v-html="t('melo.rechercheIntro')"></p>

      <div class="flex flex-col md:flex-row gap-6 mb-16 items-stretch">
        <div class="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="flex flex-col">
            <div
              class="bg-[#D9D3F0] text-black rounded-2xl px-5 py-3 text-center font-semibold text-lg mb-3 whitespace-pre-line"
            >
              {{ t("melo.rechSecondaire") }}
            </div>
            <div class="border border-[#D9D3F0] rounded-2xl p-5 text-lg flex-1">
              <p class="text-sm uppercase tracking-wide text-gray-400 mb-3">
                {{ t("melo.rechSecondaireSub") }}
              </p>
              <p class="font-semibold mb-2">{{ t("melo.rechSecondaireTitle") }}</p>
              <ul class="list-disc list-inside space-y-1">
                <li>{{ t("melo.rechSecondaireLi1") }}</li>
                <li>{{ t("melo.rechSecondaireLi2") }}</li>
                <li>{{ t("melo.rechSecondaireLi3") }}</li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="bg-[#D9D3F0] text-black rounded-2xl px-5 py-3 text-center font-semibold text-lg mb-3 whitespace-pre-line"
            >
              {{ t("melo.rechQualitative") }}
            </div>
            <div class="border border-[#D9D3F0] rounded-2xl p-5 text-lg flex-1">
              <p class="font-semibold mb-2">
                <span class="text-4xl font-bold"
                  ><CountUp :to="15" :duration="3000"
                /></span>
                {{ t("melo.rechQualitativeTitle") }}
              </p>
              <ul class="list-disc list-inside space-y-1">
                <li>{{ t("melo.rechQualLi1") }}</li>
                <li>{{ t("melo.rechQualLi2") }}</li>
                <li>{{ t("melo.rechQualLi3") }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex-1 flex justify-center items-start">
          <img
            src="/MELO/verbatim.webp"
            alt="Persona - Elisabeth, 39 ans"
            class="w-full"
          />
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <p class="mb-6" v-html="t('melo.pilliersP1')"></p>
          <ul class="space-y-1.5 mb-6">
            <li
              v-for="(pillier, i) in ['pillier1', 'pillier2', 'pillier3', 'pillier4', 'pillier5']"
              :key="i"
            >
              &bull; {{ t(`melo.${pillier}`) }}
            </li>
          </ul>
          <p v-html="t('melo.pilliersP2')"></p>
        </div>
        <div class="flex-1">
          <img
            src="/MELO/benchmark.webp"
            alt="Écosystème des services de santé connectés à Melio"
            class="w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>

    <div
      class="w-full max-w-5xl mx-auto bg-[#D9D3F0] rounded-2xl mt-4 mb-32 py-8 px-8 text-black text-center text-lg md:text-xl font-semibold leading-relaxed"
    >
      {{ t("melo.hmw") }}
    </div>

    <!-- Idéation -->
    <div
      id="ideation"
      ref="ideation"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.ideationTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <p class="text-lg font-semibold mb-1">{{ t("melo.ideationAtelierTitle") }}</p>
          <p class="text-base text-gray-500 mb-6">{{ t("melo.ideationAtelierSub") }}</p>
          <p class="mb-6">{{ t("melo.ideationP1") }}</p>
          <p v-html="t('melo.ideationP2')"></p>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="/MELO/app.webp"
            alt="Écrans de prototypage - atelier d'idéation"
            class="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div class="mt-16">
        <p class="text-lg font-semibold underline mb-6">{{ t("melo.resultatsTitle") }}</p>
        <div class="flex flex-col gap-3">
          <div
            v-for="(res, i) in ['resultat1', 'resultat2', 'resultat3']"
            :key="i"
            class="flex items-start gap-5 border border-[#7A1E35]/30 rounded-2xl p-4 md:p-5"
          >
            <span
              class="flex-shrink-0 w-10 h-10 rounded-full bg-[#7A1E35] text-white flex items-center justify-center font-semibold"
              >{{ i + 1 }}</span
            >
            <p class="text-lg leading-relaxed pt-1">{{ t(`melo.${res}`) }}</p>
          </div>
        </div>
      </div>

      <div class="bg-[#E8674F] text-white rounded-2xl p-6 md:p-8 mt-12">
        <p class="text-lg font-semibold mb-3">{{ t("melo.tensionTitle") }}</p>
        <p class="leading-relaxed">{{ t("melo.tensionP") }}</p>
      </div>
    </div>

    <!-- Conception sous contrainte réglementaire -->
    <div
      id="conception"
      ref="conception"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.conceptionTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative bg-[#E8674F] text-white rounded-2xl p-6 pt-10 mt-6">
          <img src="/MELO/tension.webp" alt="" class="absolute -top-6 left-6 w-16 h-16 object-contain drop-shadow-md" />
          <p class="font-semibold mb-3">{{ t("melo.conception1Title") }}</p>
          <p class="text-base leading-relaxed">{{ t("melo.conception1P") }}</p>
        </div>
        <div class="relative bg-[#F5E7A8] text-black rounded-2xl p-6 pt-10 mt-6">
          <img src="/MELO/commu.webp" alt="" class="absolute -top-6 left-6 w-16 h-16 object-contain drop-shadow-md" />
          <p class="font-semibold mb-3">{{ t("melo.conception2Title") }}</p>
          <p class="text-base leading-relaxed">{{ t("melo.conception2P") }}</p>
        </div>
        <div class="relative bg-[#D9D3F0] text-black rounded-2xl p-6 pt-10 mt-6">
          <img src="/MELO/phone.webp" alt="" class="absolute -top-6 left-6 w-16 h-16 object-contain drop-shadow-md" />
          <p class="font-semibold mb-3">{{ t("melo.conception3Title") }}</p>
          <p class="text-base leading-relaxed">{{ t("melo.conception3P") }}</p>
        </div>
        <div class="relative bg-[#5B6FD6] text-white rounded-2xl p-6 pt-10 mt-6">
          <img src="/MELO/conception.webp" alt="" class="absolute -top-6 left-6 w-16 h-16 object-contain drop-shadow-md" />
          <p class="font-semibold mb-3">{{ t("melo.conception4Title") }}</p>
          <p class="text-base leading-relaxed">{{ t("melo.conception4P") }}</p>
        </div>
      </div>
    </div>

    <!-- Fonctionnalités principales -->
    <div
      id="fonctionnalites"
      ref="fonctionnalites"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.fonctionnalitesTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        <div class="flex-1">
          <p class="text-base font-semibold uppercase tracking-wide text-gray-400 mb-4">
            {{ t("melo.mvpLabel") }}
          </p>
          <div class="flex flex-col gap-4 mb-8">
            <div
              v-for="(feat, i) in ['feat1', 'feat2', 'feat3']"
              :key="i"
              class="flex items-start gap-5"
            >
              <span
                class="flex-shrink-0 w-10 h-10 rounded-full bg-[#7A1E35] text-white flex items-center justify-center font-semibold"
                >{{ i + 1 }}</span
              >
              <p class="pt-1.5">{{ t(`melo.${feat}`) }}</p>
            </div>
          </div>

          <p class="text-base font-semibold uppercase tracking-wide text-gray-400 mb-4">
            {{ t("melo.postMvpLabel") }}
          </p>
          <div class="flex flex-col gap-4">
            <div
              v-for="(feat, i) in ['feat4', 'feat5']"
              :key="i"
              class="flex items-start gap-5"
            >
              <span
                class="flex-shrink-0 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold"
                >{{ i + 4 }}</span
              >
              <p class="pt-1.5">{{ t(`melo.${feat}`) }}</p>
            </div>
          </div>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="/MELO/montre.webp"
            alt="Rappel de suivi sur montre connectée"
            class="w-full max-w-sm rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div
        class="relative h-[280px] sm:h-[360px] md:h-[520px] mt-16 select-none overflow-hidden"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <div
          v-for="(screen, i) in screens"
          :key="i"
          class="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
          :class="screenOffset(i) === 2 ? 'hidden md:flex' : 'flex'"
          :style="screenStyle(i)"
        >
          <img
            :src="screen"
            :alt="t(`melo.screen${i + 1}`)"
            class="h-full w-auto rounded-[1.5rem] md:rounded-[2.2rem] shadow-2xl"
          />
        </div>

        <button
          @click="prevScreen"
          aria-label="Écran précédent"
          class="absolute top-1/2 left-1 md:-left-6 -translate-y-1/2 z-40 w-8 h-8 md:w-10 md:h-10 text-sm md:text-base rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7A1E35] hover:text-white transition"
        >
          &larr;
        </button>
        <button
          @click="nextScreen"
          aria-label="Écran suivant"
          class="absolute top-1/2 right-1 md:-right-6 -translate-y-1/2 z-40 w-8 h-8 md:w-10 md:h-10 text-sm md:text-base rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#7A1E35] hover:text-white transition"
        >
          &rarr;
        </button>
      </div>

      <p class="text-center text-sm text-gray-500 mt-6">
        {{ t(`melo.screen${activeScreen + 1}`) }}
      </p>

      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="(screen, i) in screens"
          :key="i"
          @click="activeScreen = i"
          :aria-label="`Aller à l'écran ${i + 1}`"
          class="w-2.5 h-2.5 rounded-full transition"
            :class="activeScreen === i ? 'bg-[#7A1E35]' : 'bg-[#D9D3F0]'"
          ></button>
      </div>
      <div class="flex justify-center mt-8">
        <a
          href="https://www.figma.com/proto/LBFcKPAMC7INeLxPgxzncP/Projet-entrepreneurial?node-id=473-4340&viewport=71%2C151%2C0.12&t=fTmdt5aS9LiQhhJp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=473%3A4340&show-proto-sidebar=1&page-id=327%3A2783"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          {{ t("melo.testerMaquette") }}
        </a>
      </div>
    </div>

    <!-- Tests d'utilisabilité -->
    <div
      id="tests"
      ref="tests"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.testsTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div class="flex-1">
          <p class="mb-6">{{ t("melo.testsP") }}</p>
          <p class="font-semibold mb-2">{{ t("melo.testsValideTitle") }}</p>
          <p class="mb-6">{{ t("melo.testsValideP") }}</p>
          <p class="font-semibold mb-2">{{ t("melo.testsIdentifieTitle") }}</p>
          <p>{{ t("melo.testsIdentifieP") }}</p>
        </div>
        <div class="flex-1 bg-[#FBE4E1] rounded-3xl p-6">
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3 text-center">
              <p class="font-semibold text-sm">{{ t("melo.testsTag1Title") }}</p>
              <p class="text-xs opacity-80">{{ t("melo.testsTag1Sub") }}</p>
            </div>
            <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3 text-center">
              <p class="font-semibold text-sm">{{ t("melo.testsTag2Title") }}</p>
              <p class="text-xs opacity-80">{{ t("melo.testsTag2Sub") }}</p>
            </div>
            <div class="bg-[#D9D3F0] rounded-xl px-4 py-3 text-center flex items-center justify-center">
              <p class="font-semibold text-sm">{{ t("melo.testsValideTitle") }}</p>
            </div>
            <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3 text-center flex items-center justify-center">
              <p class="font-semibold text-sm">{{ t("melo.testsTagFrictions") }}</p>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-[#D9D3F0] rounded-xl px-3 py-3 text-center flex items-center justify-center">
                <p class="font-semibold text-sm">{{ t("melo.testsTagAccessible") }}</p>
              </div>
              <div class="bg-[#D9D3F0] rounded-xl px-3 py-3 text-center flex items-center justify-center">
                <p class="font-semibold text-sm">{{ t("melo.testsTagIntuitif") }}</p>
              </div>
              <div class="bg-[#D9D3F0] rounded-xl px-3 py-3 text-center flex items-center justify-center">
                <p class="font-semibold text-sm">{{ t("melo.testsTagConfiance") }}</p>
              </div>
              <div class="bg-[#D9D3F0] rounded-xl px-3 py-3 text-center flex items-center justify-center">
                <p class="font-semibold text-sm">{{ t("melo.testsTagFun") }}</p>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3">
                <p class="font-semibold text-sm">{{ t("melo.testsTagCouleurTitle") }}</p>
                <p class="text-xs opacity-80">{{ t("melo.testsTagCouleurSub") }}</p>
              </div>
              <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3">
                <p class="font-semibold text-sm">{{ t("melo.testsTagEchelleTitle") }}</p>
                <p class="text-xs opacity-80">{{ t("melo.testsTagEchelleSub") }}</p>
              </div>
              <div class="bg-[#E8674F] text-white rounded-xl px-4 py-3">
                <p class="font-semibold text-sm">{{ t("melo.testsTagPathologieTitle") }}</p>
                <p class="text-xs opacity-80">{{ t("melo.testsTagPathologieSub") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="text-base text-gray-500 italic mt-10">{{ t("melo.testsConclusion") }}</p>
    </div>

    <!-- Business model -->
    <div
      id="business"
      ref="business"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-lg text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.businessTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <div class="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        <div class="flex-1">
          <p class="mb-6 font-semibold">{{ t("melo.businessModele") }}</p>
          <p class="mb-6">{{ t("melo.businessP1") }}</p>
          <p class="mb-6">{{ t("melo.businessP2") }}</p>
          <p>{{ t("melo.businessP3") }}</p>
        </div>
        <div class="flex-1">
          <img
            src="/MELO/business_model.webp"
            alt="Modèle B2B2C - médecins et mutuelles"
            class="w-full rounded-2xl shadow-lg"
          />
          <div class="grid grid-cols-2 gap-4 mt-6">
            <div class="text-center">
              <p class="font-semibold">{{ t("melo.medecinsLabel") }}</p>
              <p class="text-sm text-gray-500">{{ t("melo.medecinsSub") }}</p>
            </div>
            <div class="text-center">
              <p class="font-semibold">{{ t("melo.mutuellesLabel") }}</p>
              <p class="text-sm text-gray-500">{{ t("melo.mutuellesSub") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vision à 12-24 mois -->
    <div
      id="vision"
      ref="vision"
      class="w-full max-w-7xl mx-auto bg-white px-6 md:px-16 mt-52 mb-32 text-black text-left animate-on-scroll"
    >
      <h2 class="text-2xl font-semibold mb-1">{{ t("melo.visionTitle") }}</h2>
      <div class="w-32 h-1 bg-[#7A1E35] mb-10 section-line"></div>

      <img
        src="/MELO/vision.webp"
        alt="Vision produit Melio à 12-24 mois"
        class="hidden md:block w-full rounded-3xl shadow-lg"
      />
      <img
        src="/MELO/next_step_mobile.webp"
        alt="Vision produit Melio à 12-24 mois"
        class="block md:hidden w-full rounded-3xl shadow-lg"
      />
    </div>

    <div
      class="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-16 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-t border-gray-100"
    >
      <router-link
        to="/lien-social"
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#E8674F] text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        <span>&larr;</span> {{ t("melo.precedent") }}
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
        class="inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 bg-[#E8674F] text-white rounded-full text-xs md:text-lg font-medium hover:opacity-90 transition"
      >
        {{ t("melo.suivant") }} <span>&rarr;</span>
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

const screens = [
  "/MELO/screens/m1.webp",
  "/MELO/screens/m2.webp",
  "/MELO/screens/m3.webp",
  "/MELO/screens/m4.webp",
  "/MELO/screens/m5.webp",
  "/MELO/screens/m6.webp",
  "/MELO/screens/m7.webp",
  "/MELO/screens/m8.webp",
];
const activeScreen = ref(0);
const nextScreen = () => {
  activeScreen.value = (activeScreen.value + 1) % screens.length;
};
const prevScreen = () => {
  activeScreen.value = (activeScreen.value - 1 + screens.length) % screens.length;
};
let touchStartX = 0;
const onTouchStart = (e) => {
  touchStartX = e.changedTouches[0].clientX;
};
const onTouchEnd = (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (delta > 40) prevScreen();
  else if (delta < -40) nextScreen();
};

const screenOffset = (i) => {
  let offset = i - activeScreen.value;
  if (offset < 0) offset += screens.length;
  return offset;
};

const screenStyle = (i) => {
  const offset = screenOffset(i);
  if (offset > 2) {
    return { transform: "translateX(0) scale(0.8)", opacity: 0, zIndex: 0, pointerEvents: "none" };
  }
  const steps = [
    { x: 0, scale: 1, opacity: 1, z: 30 },
    { x: 34, scale: 0.86, opacity: 0.65, z: 20 },
    { x: 60, scale: 0.74, opacity: 0.35, z: 10 },
  ];
  const s = steps[offset];
  return {
    transform: `translateX(${s.x}%) scale(${s.scale})`,
    opacity: s.opacity,
    zIndex: s.z,
    pointerEvents: offset === 0 ? "auto" : "none",
  };
};

const infoCard = ref(null);
const section1 = ref(null);
const uxResearch = ref(null);
const ideation = ref(null);
const conception = ref(null);
const fonctionnalites = ref(null);
const tests = ref(null);
const business = ref(null);
const vision = ref(null);
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
    conception,
    fonctionnalites,
    tests,
    business,
    vision,
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