import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { authGuard } from "./authGuard";
import { useAuthStore } from "../store/authStore";
import HomePage from "../view/HomePage.vue";
import ProductPage from "../view/ProductPage.vue";

const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      const authStore = useAuthStore();
      if (authStore.name) {
        next("/product");
      } else {
        next();
      }
    },
  },
];

const privateRoutes: RouteRecordRaw[] = [
  { path: "/product", component: ProductPage, meta: { requiresAuth: true } },
];

const routes: RouteRecordRaw[] = [...publicRoutes, ...privateRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authGuard);

export default router;
