import { ref } from 'vue'
import { translations } from '../i18n/translations'

const currentLang = ref(localStorage.getItem('lang') || 'fr')

export function useI18n() {
  function t(key) {
    const keys = key.split('.')
    let value = translations[currentLang.value]
    for (const k of keys) {
      if (value === undefined) return key
      value = value[k]
    }
    return value !== undefined ? value : key
  }

  function toggleLang() {
    currentLang.value = currentLang.value === 'fr' ? 'en' : 'fr'
    localStorage.setItem('lang', currentLang.value)
  }

  return {
    currentLang,
    t,
    toggleLang,
  }
}
