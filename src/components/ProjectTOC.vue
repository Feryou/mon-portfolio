<template>
  <div class="sticky top-0 z-20 w-full backdrop-blur-md bg-white/80 border-b border-black/10 shadow-sm">
    <div ref="tocContainer" class="max-w-6xl mx-auto flex items-center gap-1 sm:gap-2 px-4 py-3 overflow-x-auto scrollbar-hide">
      <button
        v-for="(section, i) in sections"
        :key="section.id"
        :ref="(el) => { if (el) buttonRefs[i] = el }"
        class="relative px-4 py-2 text-xs sm:text-sm rounded-full transition-all duration-300 select-none whitespace-nowrap shrink-0"
        :class="[
          activeIndex === i
            ? 'bg-black text-white font-semibold shadow-md'
            : 'text-black/60 hover:text-black hover:bg-black/5 font-medium',
        ]"
        @click="scrollTo(section.id, i)"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from "vue";

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);
const tocContainer = ref(null);
const buttonRefs = ref({});
let observer = null;

watch(activeIndex, async (newIdx) => {
  await nextTick();
  const btn = buttonRefs.value[newIdx];
  const container = tocContainer.value;
  if (btn && container) {
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const containerWidth = container.offsetWidth;
    container.scrollTo({
      left: btnLeft - containerWidth / 2 + btnWidth / 2,
      behavior: "smooth",
    });
  }
});

function scrollTo(id, idx) {
  activeIndex.value = idx;
  const el = document.getElementById(id);
  if (el) {
    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = props.sections.findIndex((s) => s.id === entry.target.id);
          if (idx !== -1) {
            activeIndex.value = idx;
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: "-70px 0px -20% 0px" }
  );

  props.sections.forEach((section) => {
    const el = document.getElementById(section.id);
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
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
