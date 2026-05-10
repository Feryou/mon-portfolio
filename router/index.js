import { createRouter, createWebHistory } from "vue-router";
import { wipePhase } from '../src/composables/usePageTransition';
import LandingPage from "../pages/LandingPage.vue";
import About from "../pages/About.vue";
import Windmap from "../pages/Windmap.vue";
import AtelierUx from "../pages/AtelierUx.vue";
import Cabane from "../pages/Cabane.vue";
import Esquisse from "../pages/Esquisse.vue";
import AutresProjets from "../pages/AutresProjets.vue";
import LienSocial from "../pages/LienSocial.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/about", component: About },
  { path: "/windmap", component: Windmap },
  { path: "/atelierux", component: AtelierUx },
  { path: "/cabane", component: Cabane },
  { path: "/esquisse", component: Esquisse },
  { path: "/autres-projets", component: AutresProjets },
  { path: "/lien-social", component: LienSocial },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  if (!from.name || to.path === from.path) return true
  return new Promise((resolve) => {
    wipePhase.value = 'in'
    setTimeout(resolve, 380)
  })
})

router.afterEach(() => {
  if (wipePhase.value === 'in') {
    wipePhase.value = 'out'
    setTimeout(() => { wipePhase.value = '' }, 420)
  }
})

export default router;
