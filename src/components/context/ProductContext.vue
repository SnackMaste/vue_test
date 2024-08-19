<script setup lang="ts">
import { getProducts } from "@/services/apiService";
import { provide, ref, onMounted } from "vue";

const products = ref([]);

onMounted(async () => {
  products.value = await getProducts();
});

provide("products", products);
</script>

<template>
  <slot></slot>
</template>
