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
  <button class="flex flex-col items-center justify-center h-34">
    <div
      class="w-8 h-8 rounded-full bg-gray-950 border-2 border-yellow-400 relative left-7 z-10 text-center text-yellow-400"
    >
      {{ counter }}
    </div>
    <div
      class="w-20 h-20 rounded-full bg-gray-950 border-2 border-yellow-400 flex justify-center items-center absolute"
    >
      <ShoppingCart class="text-yellow-400 w-12 h-12" />
    </div>
    <div
      class="w-28 h-10 border-2 border-yellow-400 bg-gray-950 relative top-7 text-center pt-1 text-yellow-400"
    >
      {{ formatCurrency(precio) }}
    </div>
  </button>
</template>
