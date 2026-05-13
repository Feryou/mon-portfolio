<template>
  <div
    class="min-h-screen bg-white text-black font-mono flex flex-col justify-between"
  >
    <Navbar />

    <div class="flex-1 flex items-center justify-center px-6 py-16">
      <div
        class="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center"
      >
        <div class="flex justify-center animate-slideInLeft">
          <img
  src="/perso.gif"
  alt="Illustration"
  class="w-1/3 md:w-1/2 mx-auto transition-transform duration-500 rounded-3xl"
  style="mix-blend-mode: screen"
/>
        </div>

        <div class="flex flex-col justify-center items-start space-y-6">
          <h1
            class="text-3xl md:text-4xl leading-snug font-mono animate-slideUp"
          >
            {{ t("about.title") }}
          </h1>
          <p
            class="text-lg leading-relaxed animate-slideUp delay-200"
            style="opacity: 0; animation-fill-mode: forwards"
          >
            {{ t("about.p1") }}
          </p>

          <p
            class="text-lg leading-relaxed animate-slideUp delay-200"
            style="opacity: 0; animation-fill-mode: forwards"
          >
            {{ t("about.p2") }}
          </p>
          <a
            href="/CV_Feryel_FR.pdf"
            target="_blank"
            rel="noopener"
            class="mt-6 md:mt-2 px-8 py-3 border-2 border-black rounded-full hover:bg-[#9be4c4] hover:text-black transition font-medium text-lg self-start btn-hover-effect animate-slideUp delay-400"
            style="opacity: 0; animation-fill-mode: forwards"
          >
            {{ t("about.cv") }}
          </a>
        </div>
      </div>
    </div>

    <div
      ref="sectionParcours"
      class="w-full max-w-7xl mx-auto px-6 md:px-16 mt-24 mb-16 text-black animate-on-scroll"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-2">
        {{ t("about.parcoursTitre") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#9be4c4] mb-8 section-line"></div>
      <p class="text-lg leading-relaxed">{{ t("about.parcoursP") }}</p>
    </div>

    <div
      ref="sectionVision"
      class="w-full max-w-7xl mx-auto px-6 md:px-16 mt-20 mb-16 text-black animate-on-scroll"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-2">
        {{ t("about.visionTitre") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#9be4c4] mb-8 section-line"></div>
      <p class="text-lg leading-relaxed mb-6">{{ t("about.visionIntro") }}</p>
      <p class="text-lg leading-relaxed mb-4">
        <strong>1. {{ t("about.visionRecherche").split(":")[0] }}</strong>
        {{ ":" + t("about.visionRecherche").split(":").slice(1).join(":") }}
      </p>
      <p class="text-lg leading-relaxed mb-4">
        <strong>2. {{ t("about.visionLangage").split(":")[0] }}</strong>
        {{ ":" + t("about.visionLangage").split(":").slice(1).join(":") }}
      </p>
      <p class="text-lg leading-relaxed">
        <strong>3. {{ t("about.visionEmpathie").split(":")[0] }}</strong>
        {{ ":" + t("about.visionEmpathie").split(":").slice(1).join(":") }}
      </p>
    </div>

    <div
      ref="sectionDT"
      class="w-full max-w-7xl mx-auto px-6 md:px-16 mt-20 mb-16 text-black animate-on-scroll"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-2">
        {{ t("about.dtTitre") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#9be4c4] mb-12 section-line"></div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="i in 4" :key="i" class="flex flex-col gap-4">
          <div
            class="bg-[#9be4c4] rounded-2xl px-5 py-6 text-center font-semibold text-lg leading-snug whitespace-pre-line h-28 flex items-center justify-center"
          >
            {{ t(`about.dt${i}Titre`) }}
          </div>
          <div
            class="border border-[#9be4c4] rounded-2xl px-5 py-6 text-base text-center leading-relaxed flex-1"
          >
            {{ t(`about.dt${i}Desc`) }}
          </div>
        </div>
      </div>
    </div>

    <div
      ref="sectionSkills"
      class="w-full max-w-7xl mx-auto px-6 md:px-16 mt-20 pb-32 animate-on-scroll"
    >
      <h2 class="text-3xl md:text-4xl font-semibold mb-2">
        {{ t("about.competencesTitre") }}
      </h2>
      <div class="w-32 h-0.5 bg-[#9be4c4] mb-12 section-line"></div>

      <div class="overflow-hidden w-full relative skills-carousel">
        <div
          class="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
        ></div>
        <div
          class="flex flex-nowrap animate-slide items-end"
          style="will-change: transform; width: max-content"
        >
          <template v-for="round in 4" :key="round">
            <div
              v-for="(logo, index) in logos"
              :key="`${round}-${logo.name}`"
              class="flex flex-col items-center gap-2 shrink-0 w-16 mr-6 md:w-24 md:mr-12 logo-wave"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <img
                :src="logo.src"
                :alt="logo.name"
                :class="
                  logo.large
                    ? 'w-20 h-20 md:w-28 md:h-28'
                    : 'w-10 h-10 md:w-16 md:h-16'
                "
                class="object-contain"
              />
              <span class="text-xs md:text-sm font-medium text-center">{{
                logo.name
              }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "../src/components/Navbar.vue";
import { useI18n } from "../src/composables/useI18n";

const { t } = useI18n();

const sectionParcours = ref(null);
const sectionVision = ref(null);
const sectionDT = ref(null);
const sectionSkills = ref(null);

const logos = [
  { name: "Figma", src: "/logo_about/figma_logo.webp", large: true },
  { name: "Miro", src: "/logo_about/miro_logo.png" },
  { name: "Notion", src: "/logo_about/notion_logo.png" },
  { name: "Microsoft Clarity", src: "/logo_about/clarity_logo.png" },
  { name: "Google Analytics", src: "/logo_about/Google_analytics_logo.png" },
  { name: "Photoshop", src: "/logo_about/photoshop.png" },
  { name: "Illustrator", src: "/logo_about/illustrator_logo.png" },
  { name: "Premiere Pro", src: "/logo_about/premiere_pro.png" },
];

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  [sectionParcours, sectionVision, sectionDT, sectionSkills].forEach((el) => {
    if (el.value) observer.observe(el.value);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.section-line {
  transition: width 0.6s ease-out;
  width: 0;
}
.animate-on-scroll.visible .section-line {
  width: 8rem;
}

@keyframes wave {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.logo-wave {
  animation: wave 1.8s ease-in-out infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-25%);
  }
}

.animate-slide {
  animation: slide 13s linear infinite;
}

@media (min-width: 768px) {
  .animate-slide {
    animation-duration: 13s;
  }
}

.skills-carousel:hover .animate-slide {
  animation-play-state: paused;
}

.skill-item {
  transition: all 0.3s ease;
  cursor: default;
}

.skill-item:hover {
  color: #9be4c4;
  transform: scale(1.1);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.bounce {
  animation: bounce 0.4s ease-in-out infinite;
}
</style>
