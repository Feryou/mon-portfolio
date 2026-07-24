<template>
  <div class="min-h-screen bg-white font-mono">
    <Navbar />

    <div
      class="max-w-6xl mx-auto px-6 md:px-16 mt-20 md:mt-28 text-black text-left"
    >
      <Transition name="view" mode="out-in">
        <div v-if="!selectedProject" key="grid">
          <h1 class="text-3xl md:text-4xl font-semibold">
            {{ t("autresProjets.title") }}
          </h1>
          <div class="w-48 h-1 bg-[#c6ede6] mt-3 mb-10"></div>

          <p class="text-base md:text-lg mb-4 max-w-4xl">
            {{ t("autresProjets.p1") }}
          </p>
          <p class="text-base md:text-lg mb-16 max-w-4xl">
            {{ t("autresProjets.p2") }}
          </p>

          <div
            class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-52 mb-32 md:gap-10"
          >
            <div
              class="card-item"
              style="--i: 0"
              @click="selectedProject = 'madatlas'"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute -top-4 -left-4 w-12 h-12 md:w-20 md:h-20 bg-[#9be4c4] rounded-full z-0 animate-morph"
                  style="animation-delay: 0s"
                ></div>
                <div
                  class="relative z-10 group w-full overflow-hidden rounded-[30px] border border-black bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl aspect-[3/4] cursor-pointer"
                >
                  <img
                    src="/AUTRES/Madatlas.webp"
                    alt="Madatlas - Magazine"
                    class="w-full h-full object-cover rounded-[30px]"
                  />
                  <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-white/80 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center z-10 px-4"
                  >
                    <h3 class="text-xl md:text-2xl font-semibold mb-2">
                      Madatlas
                    </h3>
                    <div class="w-16 md:w-20 h-0.5 bg-black mb-4"></div>
                    <span
                      class="px-4 py-2 mt-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
                    >
                      {{ t("autresProjets.decouvrirMadatlas") }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card-item"
              style="--i: 1"
              @click="selectedProject = 'blackfriday'"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute -top-4 -right-4 w-12 h-12 md:w-20 md:h-20 bg-[#9be4c4] rounded-full z-0 animate-morph"
                  style="animation-delay: 2.5s"
                ></div>
                <div
                  class="relative z-10 group w-full overflow-hidden rounded-[30px] border border-black bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl aspect-[3/4] cursor-pointer"
                >
                  <img
                    src="/AUTRES/Black Friday.webp"
                    alt="Black Friday - Design mobile"
                    class="w-full h-full object-cover rounded-[30px]"
                  />
                  <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-white/80 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center z-10 px-4"
                  >
                    <h3 class="text-xl md:text-2xl font-semibold mb-2">
                      Black Friday
                    </h3>
                    <div class="w-16 md:w-20 h-0.5 bg-black mb-4"></div>
                    <span
                      class="px-4 py-2 mt-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
                    >
                      {{ t("autresProjets.decouvrirBlackFriday") }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card-item"
              style="--i: 2"
              @click="selectedProject = 'pinkoctober'"
            >
              <div class="relative flex items-center justify-center">
                <div
                  class="absolute -top-4 -left-4 w-12 h-12 md:w-20 md:h-20 bg-[#9be4c4] rounded-full z-0 animate-morph"
                  style="animation-delay: 5s"
                ></div>
                <div
                  class="relative z-10 group w-full overflow-hidden rounded-[30px] border border-black bg-white transition-all duration-500 hover:scale-105 hover:shadow-xl aspect-[3/4] cursor-pointer"
                >
                  <img
                    src="/AUTRES/Pink October.webp"
                    alt="Nuxe - Pink October"
                    class="w-full h-full object-cover rounded-[30px]"
                  />
                  <div
                    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-white/80 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center z-10 px-4"
                  >
                    <h3 class="text-xl md:text-2xl font-semibold mb-2">
                      Pink October
                    </h3>
                    <div class="w-16 md:w-20 h-0.5 bg-black mb-4"></div>
                    <span
                      class="px-4 py-2 mt-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
                    >
                      {{ t("autresProjets.decouvrirPinkOctober") }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ==================== MADATLAS ==================== -->
        <div v-else-if="selectedProject === 'madatlas'" key="madatlas">
          <div class="max-w-5xl mx-auto">
            <button
              @click="selectedProject = null"
              class="mb-8 flex items-center gap-2 text-sm font-medium text-black bg-[#9be4c4] border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.retour") }}
            </button>
          </div>
          <div class="detail-card max-w-5xl mx-auto mb-16">
            <div class="flex items-start justify-between mb-6">
              <span class="text-sm text-gray-600">
                {{ t("autresProjets.projetAnnexe") }}
              </span>
              <span
                class="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600"
              >
                {{ t("autresProjets.badgeMadatlas") }}
              </span>
            </div>

            <h3 class="text-4xl md:text-5xl font-bold text-black mb-6">
              {{ t("madatlas.title") }}
            </h3>
            <p class="font-light text-black max-w-3xl mb-10">
              {{ t("autresProjets.madatlasDesc") }}
            </p>

            <div class="border-t border-gray-300 mb-10"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.missions") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.identiteVisuelle") }},
                  {{ t("autresProjets.supportsImprimes") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.livrables") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.madatlasLivrables") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.contexte") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.madatlasContexte") }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-300 rounded-3xl p-4 flex gap-4">
                <img
                  src="/AUTRES/une_2.webp"
                  alt="Madatlas couverture 1"
                  class="w-1/2 rounded-2xl object-cover"
                />
                <img
                  src="/AUTRES/une2.webp"
                  alt="Madatlas couverture 2"
                  class="w-1/2 rounded-2xl object-cover"
                />
              </div>

              <div class="border border-gray-300 rounded-3xl p-4">
                <img
                  src="/AUTRES/mockup.webp"
                  alt="Madatlas mockup"
                  class="w-full rounded-2xl object-cover mb-4"
                />
                <p class="text-center text-gray-600 text-sm">
                  {{ t("autresProjets.madatlasCaption") }}
                </p>
              </div>
            </div>
          </div>

          <div class="max-w-5xl mx-auto flex justify-between items-center mb-20">
            <button
              @click="prevProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.projetPrecedent") }}
            </button>
            <button
              @click="nextProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              {{ t("autresProjets.projetSuivant") }} →
            </button>
          </div>
        </div>

        <!-- ==================== BLACK FRIDAY ==================== -->
        <div v-else-if="selectedProject === 'blackfriday'" key="blackfriday">
          <div class="max-w-5xl mx-auto">
            <button
              @click="selectedProject = null"
              class="mb-8 flex items-center gap-2 text-sm font-medium text-black bg-[#9be4c4] border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.retour") }}
            </button>
          </div>
          <div class="detail-card max-w-5xl mx-auto mb-16">
            <div class="flex items-start justify-between mb-6">
              <span class="text-sm text-gray-600">
                {{ t("autresProjets.projetAnnexe") }}
              </span>
              <span
                class="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600"
              >
                {{ t("autresProjets.badgeNuxe") }}
              </span>
            </div>

            <h3 class="text-4xl md:text-5xl font-bold text-black mb-6">NUXE</h3>
            <p class="font-light text-black max-w-3xl mb-10">
              {{ t("autresProjets.blackFridayDesc") }}
            </p>

            <div class="border-t border-gray-300 mb-10"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.missions") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.identiteVisuelle") }},
                  {{ t("autresProjets.supportsDigitaux") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.livrables") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.blackFridayLivrables") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.contexte") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.blackFridayContexte") }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-300 rounded-3xl p-4 flex gap-4">
                <div class="w-1/2 h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/AUTRES/POST-NUXE-EU-BLACK FRIDAY-2024_1080x1920.webp"
                    alt="Nuxe Black Friday post 1"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="w-1/2 h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/AUTRES/POST-NUXE-BLACK FRIDAY-2024_WITHOUT_TEXT_1080x1920.webp"
                    alt="Nuxe Black Friday post 2"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div class="border border-gray-300 rounded-3xl p-4">
                <div class="w-full h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src="/AUTRES/BAN_DAT-NUXE-EN-BLACK_FRIDAY_1220x600.webp"
                    alt="Nuxe Black Friday bannière"
                    class="w-full h-full object-contain"
                  />
                </div>
                <p class="text-center text-gray-600 text-sm">
                  {{ t("autresProjets.blackFridayCaption") }}
                </p>
              </div>
            </div>
          </div>

          <div class="max-w-5xl mx-auto flex justify-between items-center mb-20">
            <button
              @click="prevProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.projetPrecedent") }}
            </button>
            <button
              @click="nextProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              {{ t("autresProjets.projetSuivant") }} →
            </button>
          </div>
        </div>

        <!-- ==================== PINK OCTOBER ==================== -->
        <div v-else-if="selectedProject === 'pinkoctober'" key="pinkoctober">
          <div class="max-w-5xl mx-auto">
            <button
              @click="selectedProject = null"
              class="mb-8 flex items-center gap-2 text-sm font-medium text-black bg-[#9be4c4] border border-black rounded-full px-5 py-2.5 hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.retour") }}
            </button>
          </div>
          <div class="detail-card max-w-5xl mx-auto mb-16">
            <div class="flex items-start justify-between mb-6">
              <span class="text-sm text-gray-600">
                {{ t("autresProjets.projetAnnexe") }}
              </span>
              <span
                class="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600"
              >
                {{ t("autresProjets.badgeNuxe") }}
              </span>
            </div>

            <h3 class="text-4xl md:text-5xl font-bold text-black mb-6">NUXE</h3>
            <p class="font-light text-black max-w-3xl mb-10">
              {{ t("autresProjets.pinkOctoberDesc") }}
            </p>

            <div class="border-t border-gray-300 mb-10"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.missions") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.identiteVisuelle") }},
                  {{ t("autresProjets.supportsDigitaux") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.livrables") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.pinkOctoberLivrables") }}
                </p>
              </div>
              <div class="bg-[#EDEBE3] rounded-2xl p-6">
                <p class="text-sm text-gray-600 mb-2">
                  {{ t("autresProjets.contexte") }}
                </p>
                <p class="text-black">
                  {{ t("autresProjets.pinkOctoberContexte") }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-300 rounded-3xl p-4 flex gap-4">
                <div class="w-1/2 h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/AUTRES/IMG_3526.webp"
                    alt="Nuxe Pink October Instagram"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div class="w-1/2 h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/AUTRES/POST-NUXE-EN-PINK_OCTOBER_ALL_CONCERNED-1080x1920.webp"
                    alt="Nuxe Pink October All Concerned"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div class="border border-gray-300 rounded-3xl p-4">
                <div class="w-full h-72 md:h-96 bg-white rounded-2xl flex items-center justify-center overflow-hidden mb-4">
                  <img
                    src="/AUTRES/POST-NUXE-EN-PINK_OCTOBER-ALARMING_SIGNALS-1080x1920.webp"
                    alt="Nuxe Pink October Know the Signs"
                    class="w-full h-full object-contain"
                  />
                </div>
                <p class="text-center text-gray-600 text-sm">
                  {{ t("autresProjets.pinkOctoberCaption") }}
                </p>
              </div>
            </div>
          </div>

          <div class="max-w-5xl mx-auto flex justify-between items-center mb-20">
            <button
              @click="prevProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              ← {{ t("autresProjets.projetPrecedent") }}
            </button>
            <button
              @click="nextProject"
              class="px-6 py-3 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition duration-300"
            >
              {{ t("autresProjets.projetSuivant") }} →
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../src/components/Navbar.vue";
import { useI18n } from "../src/composables/useI18n";

const { t } = useI18n();
const selectedProject = ref(null);

const projectOrder = ["madatlas", "blackfriday", "pinkoctober"];

function nextProject() {
  const idx = projectOrder.indexOf(selectedProject.value);
  selectedProject.value = projectOrder[(idx + 1) % projectOrder.length];
}

function prevProject() {
  const idx = projectOrder.indexOf(selectedProject.value);
  selectedProject.value =
    projectOrder[(idx - 1 + projectOrder.length) % projectOrder.length];
}
</script>

<style scoped>
.view-enter-active {
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.view-leave-active {
  transition: opacity 0.3s ease-in, transform 0.3s ease-in;
}
.view-enter-from {
  opacity: 0;
  transform: translateY(28px) scale(0.99);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.99);
}

.card-item {
  animation: cardIn 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: calc(var(--i) * 100ms);
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-card {
  animation: fadeSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.1s;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>