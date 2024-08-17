<script setup type="ts">
import ProductCard from "../components/cards/ProductCard.vue";
import { useAuthStore } from "../store/authStore";

const authStore = useAuthStore();

const color = authStore.color;
const name = authStore.name;
</script>
<template>
  <div class="flex flex-wrap justify-center w-full">
    <ProductCard :color="color" :name="name" />
  </div>
</template>
