<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import ProductContext from "./components/context/ProductContext.vue";

const route = useRoute();
</script>

<template>
  <div class="bg-gray-950 w-full min-h-screen">
    <HeaderComponent v-if="route.path !== '/'" />
    <ProductContext>
      <router-view></router-view>
    </ProductContext>
  </div>
</template>
