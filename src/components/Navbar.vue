<template>
  <nav
    class="border border-black rounded-[2rem] px-6 py-4 flex items-center w-full max-w-7xl mx-auto mt-6 relative z-30"
  >
    <router-link to="/">
      <img src="/logo.png" alt="" class="h-10 md:h-12 w-auto m-4" />
    </router-link>

    <div class="flex-1"></div>

    <!-- Liens toujours visibles sur desktop -->
    <div class="hidden lg:flex space-x-8 text-xl font-medium mr-8">
      <a href="#" @click.prevent="goToProjects" class="hover:underline whitespace-nowrap cursor-pointer">{{ t("nav.projetsUx") }}</a>
      <router-link to="/autres-projets" class="hover:underline whitespace-nowrap">{{ t("nav.autres") }}</router-link>
      <router-link to="/about" class="hover:underline whitespace-nowrap">{{ t("nav.aPropos") }}</router-link>
    </div>

    <!-- Burger SVG uniquement sur mobile -->
    <button
      class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer z-40"
      @click="toggleMenu"
      aria-label="Ouvrir le menu"
    >
      <span class="block w-6 h-0.5 bg-black transition-all duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
      <span class="block w-6 h-0.5 bg-black transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''"></span>
      <span class="block w-6 h-0.5 bg-black transition-all duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
    </button>

    <Transition name="slide-up">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white text-black flex flex-col justify-center items-center space-y-8 text-2xl font-semibold z-30 lg:hidden"
      >
        <a href="#" @click.prevent="goToProjects" class="hover:underline cursor-pointer">{{ t("nav.projetsUx") }}</a>
        <router-link to="/autres-projets" @click="closeMenu" class="hover:underline">{{ t("nav.autres") }}</router-link>
        <router-link to="/about" @click="closeMenu" class="hover:underline">{{ t("nav.aPropos") }}</router-link>
        <button @click="closeMenu" class="mt-12 text-sm underline">{{ t("nav.fermer") }}</button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const goToProjects = () => {
  if (route.path === "/") {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }
  closeMenu();
};
</script>

<style scoped>
.slide-up-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-leave-active {
  transition: all 0.3s ease-in;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>