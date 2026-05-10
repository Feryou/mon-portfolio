<template>
  <span ref="el">{{ displayed }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  to: { type: Number, required: true },
  duration: { type: Number, default: 1500 },
})

const displayed = ref(0)
const el = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCount()
        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )
  if (el.value) observer.observe(el.value)
})

function startCount() {
  const startTime = performance.now()
  const tick = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayed.value = Math.round(eased * props.to)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}
</script>
