<template>
  <nav
    class="border border-black rounded-[2rem] px-6 py-4 flex items-center w-full max-w-7xl mx-auto mt-6 relative z-30"
  >
    <router-link to="/">
      <img src="/logo.png" alt="" class="h-10 md:h-12 w-auto m-4" />
    </router-link>

    <div class="flex-1"></div>

    <div
      class="hidden lg:flex space-x-8 text-xl font-medium transition-all duration-500 ease-in-out absolute right-24"
      :class="
        isMenuOpen && isDesktop
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8 pointer-events-none'
      "
    >
      <a
        href="#"
        @click.prevent="goToProjects"
        class="hover:underline whitespace-nowrap cursor-pointer"
        >{{ t("nav.projetsUx") }}</a
      >
      <router-link
        to="/autres-projets"
        class="hover:underline whitespace-nowrap"
        >{{ t("nav.autres") }}</router-link
      >
      <router-link to="/about" class="hover:underline whitespace-nowrap">{{
        t("nav.aPropos")
      }}</router-link>
    </div>

    <img
      :src="menuIcon"
      alt="Menu"
      class="w-10 h-10 md:w-20 md:h-20 cursor-pointer z-40 transition-all duration-500 ease-in-out"
      :class="isMenuOpen && isDesktop ? 'lg:-translate-x-110' : 'translate-x-0'"
      @click="toggleMenu"
    />

    <Transition name="slide-up">
      <div
        v-if="isMenuOpen && !isDesktop"
        class="fixed inset-0 bg-white text-black flex flex-col justify-center items-center space-y-8 text-2xl font-semibold z-30 lg:hidden"
      >
        <a
          href="#"
          @click.prevent="goToProjects"
          class="hover:underline cursor-pointer"
          >{{ t("nav.projetsUx") }}</a
        >
        <router-link
          to="/autres-projets"
          @click="closeMenu"
          class="hover:underline"
          >{{ t("nav.autres") }}</router-link
        >
        <router-link to="/about" @click="closeMenu" class="hover:underline">{{
          t("nav.aPropos")
        }}</router-link>
        <button @click="closeMenu" class="mt-12 text-sm underline">
          {{ t("nav.fermer") }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "../composables/useI18n";
import menuIcon from "/Menu-burger.png";

const { t, currentLang, toggleLang } = useI18n();
const router = useRouter();
const route = useRoute();

const goToProjects = () => {
  if (route.path === "/") {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        document
          .getElementById("projets")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }
  closeMenu();
};

const isMenuOpen = ref(false);
const isDesktop = ref(window.innerWidth >= 1024);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleResize = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
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
