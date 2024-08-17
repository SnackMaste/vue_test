import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export function authGuard(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const isAuthenticated = !!localStorage.getItem('nombre');

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
}