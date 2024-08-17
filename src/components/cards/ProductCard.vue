<script setup lang="ts">
import Data from "../../../backend/data.json";
import { defineProps, computed } from "vue";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
const { color } = defineProps({
  color: {
    type: String,
    required: true,
  },
});

function isColorLight(color: string) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 149;
}

const textClass = computed(() =>
  isColorLight(color) ? "text-black" : "text-yellow-400",
);
const borderClass = computed(() =>
  isColorLight(color) ? "border-black" : "border-yellow-400",
);
const products: Product[] = Data;
function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
</script>

<template>
  <div
    v-for="product in products"
    :key="product['id']"
    class="w-52 m-5 rounded-3xl border-2 min-h-80 flex flex-col items-center justify-around"
    :class="borderClass"
    :style="{ backgroundColor: color }"
  >
    <img
      :src="`./src/assets/images/products/${product['image']}`"
      class="w-44 h-44 rounded-3xl border-2 mt-2"
      :class="borderClass"
    />
    <div class="w-full">
      <div class="w-full flex mt-2 justify-center items-center">
        <button
          class="w-1/2 text-center border-t py-2 font-semibold hover:text-lg hover:py-1.5"
          :class="[textClass, borderClass]"
        >
          DETALLE
        </button>
        <div class="border-x h-10" :class="borderClass"></div>
        <button
          class="w-1/2 text-center border-t py-2 font-semibold hover:text-lg hover:py-1.5"
          :class="[textClass, borderClass]"
        >
          AGREGAR
        </button>
      </div>
      <div
        class="w-full text-center py-2 text-wrap font-bold border-y-2 cursor-default"
        :class="[textClass, borderClass]"
      >
        {{ product["name"] }}
      </div>
    </div>
    <div class="w-full text-center py-2 cursor-default" :class="textClass">
      {{ formatCurrency(product["price"]) }} COP
    </div>
  </div>
</template>
