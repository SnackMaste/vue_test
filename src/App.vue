<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";

const route = useRoute();
</script>

<template>
  <HeaderComponent v-if="route.path !== '/'" />
  <router-view></router-view>
</template>
