<script setup lang="ts">
import { useAuthStore } from "../store/authStore";

const authStore = useAuthStore();
const name = authStore.name;
const checkout = authStore.checkOut;
</script>
<template>
  <div
    class="w-full flex border-b border-yellow-400 justify-center items-center h-40 text-center text-yellow-400"
  >
    <div class="w-1/4"></div>
    <div class="w-1/2">
      <h1 class="text-3xl font-bold">Bienvenid@ {{ name }}</h1>
    </div>
    <div class="w-1/4">
      <button v-on:click="checkout" class="font-semibold">Salir</button>
    </div>
  </div>
</template>
