<template>
  <div class="overflow-x-hidden bg-white text-black font-mono">
  
      <Navbar />
  
      <section
        class="flex flex-col lg:flex-row items-center justify-center px-4 md:px-12 pt-8 md:pt-20 gap-8 md:gap-22 relative pb-12"
      >
        <img
          src="/Ampoule_home_page.png"
          alt="Ampoule"
          class="w-full max-w-xs md:max-w-md h-auto mb-8 lg:mb-0 animate-blink -mt-8.5 md:-mt-21 animate-slideInLeft"
        />
        <div
          class="text-center lg:text-left space-y-6 lg:ml-12 flex flex-col justify-center w-full max-w-xl"
        >
          <h1
            class="text-2xl md:text-4xl font-bold animate-slideUp whitespace-nowrap"
          >
            {{ t("landing.hello") }}
          </h1>
          <p
            class="text-base md:text-lg leading-relaxed animate-slideUp delay-200"
            style="opacity: 0; animation-fill-mode: forwards"
          >
            {{ t("landing.intro") }}<br />
            {{ t("landing.intro2") }}
          </p>
          <router-link to="/about" class="inline-block self-center lg:self-start">
            <button
              class="mt-4 mb-20 md:mb-4 px-6 py-2 border border-black rounded-full text-base md:text-lg hover:bg-[#9be4c4] hover:text-black transition duration-300 btn-hover-effect animate-slideUp delay-400"
              style="opacity: 0; animation-fill-mode: forwards"
            >
              {{ t("landing.enSavoirPlus") }}
            </button>
          </router-link>
        </div>
  
        <div
          class="absolute bottom-10 sm:bottom-4 md:bottom-auto md:top-130 left-1/2 transform -translate-x-1/2 animate-fadeIn delay-600"
          style="opacity: 0; animation-fill-mode: forwards"
        >
          <svg
            class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-bounce"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>
  
      <section id="projets" class="flex flex-col items-center mt-16 md:mt-64">
        <div class="w-full max-w-6xl px-6 md:px-2 mb-14 md:-translate-y-20">
          <h1 class="text-2xl font-semibold mb-4">
            {{ t("landing.projetsUx") }}
          </h1>
          <div class="w-32 h-0.5 bg-[#9be4c4]"></div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-2 pb-16 md:pb-32 place-items-center w-full max-w-6xl relative"
        >
          <template v-for="(project, index) in projects" :key="index">
            <div
              :ref="(el) => setProjectRef(el, index)"
              class="relative w-full flex items-center justify-center animate-on-scroll"
              :class="[`delay-${(index % 2) * 200}`]"
            >
              <div
                :class="[
                  'absolute z-0 transition-all duration-500 animate-morph',
                  index % 2 === 0
                    ? '-top-4 md:-top-6 -left-4 md:-left-6'
                    : '-top-4 md:-top-6 -right-4 md:-right-6',
                  'w-12 h-12 md:w-24 md:h-24 bg-[#9be4c4] rounded-full',
                ]"
                :style="{ animationDelay: `${index * 2}s` }"
              ></div>
              <div
                class="relative z-10 group w-full md:max-w-md h-[220px] md:h-[270px] overflow-hidden rounded-[30px] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(155,228,196,0.5)] border border-[#9be4c4]/40 shadow-[0_2px_12px_rgba(0,0,0,0.06)] focus-within:-translate-y-2 focus-within:shadow-[0_20px_60px_-10px_rgba(155,228,196,0.5)]"
              >
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover rounded-[30px] z-0"
                />
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out bg-white/80 backdrop-blur-md rounded-[30px] flex flex-col items-center justify-center text-center z-10 px-4"
                >
                  <h3 class="text-xl md:text-2xl font-semibold mb-2">
                    {{ project.title }}
                  </h3>
                  <div class="w-16 md:w-20 h-0.5 bg-black mb-4"></div>
                  <router-link
                    v-if="project.title === 'Lien social'"
                    to="/lien-social"
                    class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9be4c4]"
                  >
                    {{ t("landing.decouvririSite") }}
                  </router-link>
                  <router-link
                    v-else-if="project.title === 'Esquisse'"
                    to="/Esquisse"
                    class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9be4c4]"
                  >
                    {{ t("landing.voirRendu") }}
                  </router-link>
                  <router-link
                    v-else-if="project.title === 'Windmap'"
                    to="/Windmap"
                    class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9be4c4]"
                  >
                    {{ t("landing.decouvrir") }}
                  </router-link>
                  <router-link
                    v-else-if="project.title === 'Entrepreunariat'"
                    to=""
                    class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9be4c4]"
                  >
                    {{ t("landing.wip") }}
                  </router-link>
                  <button
                    v-else
                    class="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9be4c4]"
                  >
                    {{ t("landing.enSavoirPlusBtn") }}
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import Navbar from "../src/components/Navbar.vue";
  import { useI18n } from "../src/composables/useI18n";
  
  const { t } = useI18n();
  
  const projects = [
    { title: "Lien social", image: "/Pronote.webp" },
    { title: "Esquisse", image: "ESQUISSE/webp/Esquisse.webp" },
    { title: "Windmap", image: "/Windmap.webp" },
    { title: "Journal de bord", image: "/journal_de_bord.webp" },
  ];
  
  const projectRefs = ref([]);
  let observer = null;
  
  const setProjectRef = (el, index) => {
    if (el) {
      projectRefs.value[index] = el;
    }
  };
  
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
  
    projectRefs.value.forEach((el) => {
      if (el) {
        observer.observe(el);
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
  @keyframes blink {
    0% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(1.5);
    }
    100% {
      filter: brightness(1);
    }
  }
  
  .animate-blink {
    animation: blink 2s ease-in-out infinite;
  }
  </style>