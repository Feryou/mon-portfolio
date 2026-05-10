<template>
  <template v-if="!isTouchDevice">
    <div ref="dotEl" class="cursor-dot">
      <div
        class="cursor-dot-inner"
        :class="{ 'is-hovering': isHovering, 'is-clicking': isClicking }"
      ></div>
    </div>
    <div ref="ringEl" class="cursor-ring">
      <div class="cursor-ring-inner" :class="{ 'is-hovering': isHovering }"></div>
    </div>
  </template>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dotEl = ref(null)
const ringEl = ref(null)
const isHovering = ref(false)
const isClicking = ref(false)
const isTouchDevice = ref(true)

let rafId = null
let mouseX = -200
let mouseY = -200
let ringX = mouseX
let ringY = mouseY

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const onMouseOver = (e) => {
  isHovering.value = !!e.target.closest(
    'a, button, [role="button"], .cursor-pointer, input, label, select'
  )
}

const onMouseDown = () => { isClicking.value = true }
const onMouseUp = () => { isClicking.value = false }

const animate = () => {
  if (dotEl.value) {
    dotEl.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  }
  ringX += (mouseX - ringX) * 0.12
  ringY += (mouseY - ringY) * 0.12
  if (ringEl.value) {
    ringEl.value.style.transform = `translate(${ringX}px, ${ringY}px)`
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(hover: none)').matches
  if (isTouchDevice.value) return

  document.body.classList.add('has-custom-cursor')
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  animate()
})

onUnmounted(() => {
  document.body.classList.remove('has-custom-cursor')
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>
