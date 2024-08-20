<script setup lang="ts">
import { defineProps, computed, ref, watch } from "vue";
import Button from "../ui/button/Button.vue";
import { formatCurrency } from "@/lib/utils";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

const cantidad = ref(0);
const props = defineProps<{
  id: string;
  color: string;
  image: string;
  name: string;
  price: number;
  category: string;
  detalleClick: () => void;
}>();
const idProducto = ref(props.id);
const emit = defineEmits(["update:cantidad"]);

function isColorLight(color: string): boolean {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 149;
}

const textClass = computed(() =>
  isColorLight(props.color)
    ? "text-black hover:text-black"
    : "text-yellow-400 hover:text-yellow-400",
);
const borderClass = computed(() =>
  isColorLight(props.color) ? "border-black" : "border-yellow-400",
);

const addProduct = () => {
  cantidad.value = 1;
};

watch(cantidad, (nuevoValor) => {
  emit("update:cantidad", {
    id: props.id,
    cantidad: nuevoValor,
    precio: props.price,
  });
});
</script>

<template>
  <div
    class="w-52 m-5 rounded-3xl border-2 min-h-80 flex flex-col items-center justify-around"
    :class="borderClass"
    :style="{ backgroundColor: props.color }"
    :id="idProducto"
  >
    <img
      :src="`./src/assets/images/products/${props.image}`"
      class="w-44 h-44 rounded-3xl border-2 mt-2"
      :class="borderClass"
    />
    <div class="w-full">
      <div class="w-full flex mt-2 justify-center items-center">
        <Button
          variant="ghost"
          class="w-1/2 text-center border-t border-r py-2 font-semibold hover:text-base hover:px-1.5 hover:bg-transparent rounded-none"
          :class="[textClass, borderClass]"
          @click="props.detalleClick"
        >
          DETALLE
        </Button>
        <Button
          v-if="cantidad === 0"
          variant="ghost"
          class="w-1/2 text-center border-t border-l py-2 font-semibold hover:text-base hover:px-1.5 hover:bg-transparent rounded-none"
          :class="[textClass, borderClass]"
          @click="addProduct"
        >
          AGREGAR
        </Button>
        <NumberField
          v-else
          class="w-1/2 rounded-none border border-b-0 focus:ring-offset-0 h-10"
          :class="[textClass, borderClass]"
          id="cantidad"
          v-model="cantidad"
          :default-value="1"
          :min="0"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput
              class="bg-transparent w-full rounded-none border-none focus-visible:ring-offset-0"
            />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
      <div
        class="w-full text-center py-2 text-wrap font-bold border-y-2 cursor-default"
        :class="[textClass, borderClass]"
      >
        {{ props.name }}
      </div>
    </div>
    <div
      class="w-full text-center py-2 cursor-default font-semibold"
      :class="textClass"
    >
      {{ formatCurrency(props.price) }} COP
    </div>
  </div>
</template>
