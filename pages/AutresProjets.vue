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
                    src="/Madatlas.webp"
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
                    src="/Black Friday.webp"
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
                    src="/Pink October.webp"
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

        <div v-else-if="selectedProject === 'madatlas'" key="madatlas">
          <button
            @click="selectedProject = null"
            class="mb-8 flex items-center gap-2 text-sm text-black hover:opacity-60 transition duration-200"
          >
            ← {{ t("autresProjets.retour") }}
          </button>

          <div
            class="detail-card max-w-7xl mx-auto bg-white border border-black rounded-3xl shadow-md mb-16 overflow-hidden"
          >
            <div class="detail-header bg-[#95B79E] px-10 py-12">
              <h3 class="text-4xl font-light text-black mb-6">
                {{ t("madatlas.title") }}
              </h3>
              <p class="font-light text-black max-w-3xl">
                {{ t("autresProjets.madatlasDesc") }}
              </p>
            </div>

            <div
              class="detail-body px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <h6 class="text-xl font-light text-black underline mb-4">
                  {{ t("autresProjets.missions") }} :
                </h6>
                <ul class="font-light text-black mb-10 space-y-1">
                  <li>-{{ t("autresProjets.identiteVisuelle") }}</li>
                  <li>-{{ t("autresProjets.supportsImprimes") }}</li>
                </ul>

                <div class="flex gap-4">
                  <img
                    src="/MADATLAS DETAIL/une_2.webp"
                    alt="Madatlas couverture 1"
                    class="w-1/2 rounded-xl object-cover"
                  />
                  <img
                    src="/MADATLAS DETAIL/une2.webp"
                    alt="Madatlas couverture 2"
                    class="w-1/2 rounded-xl object-cover"
                  />
                </div>
              </div>

              <div class="flex flex-col items-center justify-start">
                <img
                  src="/MADATLAS DETAIL/mockup.webp"
                  alt="Madatlas mockup"
                  class="w-full rounded-xl object-cover mb-4"
                />
                <p class="text-center font-light text-black text-sm">
                  {{ t("autresProjets.madatlasCaption") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="selectedProject === 'blackfriday'" key="blackfriday">
          <button
            @click="selectedProject = null"
            class="mb-8 flex items-center gap-2 text-sm text-black hover:opacity-60 transition duration-200"
          >
            ← {{ t("autresProjets.retour") }}
          </button>

          <div
            class="detail-card max-w-7xl mx-auto bg-white border border-black rounded-3xl shadow-md mb-16 overflow-hidden"
          >
            <div class="detail-header bg-[#95B79E] px-10 py-12">
              <h3 class="text-4xl font-light text-black mb-6">NUXE</h3>
              <p class="font-light text-black max-w-3xl">
                {{ t("autresProjets.blackFridayDesc") }}
              </p>
            </div>

            <div
              class="detail-body px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              <div>
                <h6 class="text-xl font-light text-black underline mb-4">
                  {{ t("autresProjets.missions") }} :
                </h6>
                <ul class="font-light text-black mb-10 space-y-1">
                  <li>-{{ t("autresProjets.identiteVisuelle") }}</li>
                  <li>-{{ t("autresProjets.supportsDigitaux") }}</li>
                </ul>

                <img
                  src="/NUXE/NUXE BF DETAIL/BAN_DAT-NUXE-EN-BLACK_FRIDAY_1220x600.webp"
                  alt="Nuxe Black Friday bannière"
                  class="w-full rounded-xl object-cover"
                />
              </div>

              <div class="flex gap-4 items-start">
                <img
                  src="/NUXE/NUXE BF DETAIL/POST-NUXE-EU-BLACK FRIDAY-2024_1080x1920.webp"
                  alt="Nuxe Black Friday post 1"
                  class="w-1/2 rounded-xl object-cover"
                />
                <img
                  src="/NUXE/NUXE BF DETAIL/POST-NUXE-BLACK FRIDAY-2024_WITHOUT_TEXT_1080x1920.webp"
                  alt="Nuxe Black Friday post 2"
                  class="w-1/2 rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="selectedProject === 'pinkoctober'" key="pinkoctober">
          <button
            @click="selectedProject = null"
            class="mb-8 flex items-center gap-2 text-sm text-black hover:opacity-60 transition duration-200"
          >
            ← {{ t("autresProjets.retour") }}
          </button>

          <div
            class="detail-card max-w-7xl mx-auto bg-white border border-black rounded-3xl shadow-md mb-16 overflow-hidden"
          >
            <div class="detail-header bg-[#f0d6e8] px-10 py-12">
              <h3 class="text-4xl font-light text-black mb-6">NUXE</h3>
              <p class="font-light text-black max-w-3xl">
                {{ t("autresProjets.pinkOctoberDesc") }}
              </p>
            </div>

            <div
              class="detail-body px-10 py-12 grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10 items-start"
            >
              <div>
                <h6 class="text-xl font-light text-black underline mb-4">
                  {{ t("autresProjets.missions") }} :
                </h6>
                <ul class="font-light text-black space-y-4">
                  <li>-{{ t("autresProjets.identiteVisuelle") }}</li>
                  <li>-{{ t("autresProjets.supportsDigitaux") }}</li>
                </ul>
              </div>

              <div class="flex flex-col md:flex-row gap-4 md:items-start">
                <img
                  src="/NUXE/NUXE PO DETAIL/IMG_3526.webp"
                  alt="Nuxe Pink October Instagram"
                  class="w-full md:w-1/3 rounded-xl object-cover"
                />
                <img
                  src="/NUXE/NUXE PO DETAIL/POST-NUXE-EN-PINK_OCTOBER_ALL_CONCERNED-1080x1920.webp"
                  alt="Nuxe Pink October All Concerned"
                  class="w-full md:w-1/3 rounded-xl object-cover"
                />
                <img
                  src="/NUXE/NUXE PO DETAIL/POST-NUXE-EN-PINK_OCTOBER-ALARMING_SIGNALS-1080x1920.webp"
                  alt="Nuxe Pink October Know the Signs"
                  class="w-full md:w-1/3 rounded-xl object-cover"
                />
              </div>
            </div>
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
  animation: cardIn 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.1s;
}

.detail-header {
  animation: fadeSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.25s;
}

.detail-body {
  animation: fadeSlideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.38s;
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
