<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import { formatCurrency } from "@/lib/utils";
defineProps({
  counter: {
    type: Number,
    default: 0,
  },
  precio: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div>
    <div
      class="w-8 h-8 rounded-full bg-gray-950 border-2 border-yellow-400 relative top-7 left-12 z-10 text-center text-yellow-400"
    >
      {{ counter }}
    </div>
    <button
      class="w-20 h-20 rounded-full bg-gray-950 border-2 border-yellow-400 flex justify-center items-center"
    >
      <ShoppingCart class="text-yellow-400 w-12 h-12 relative" />
    </button>
    <div
      class="w-28 h-10 border-2 border-yellow-400 bg-gray-950 relative -top-3 right-3 text-center pt-1 text-yellow-400"
    >
      {{ formatCurrency(precio) }}
    </div>
  </div>
</template>
