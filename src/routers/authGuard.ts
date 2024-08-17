import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "../store/authStore";

export function authGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.name;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
}
