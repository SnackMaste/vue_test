<script setup type="ts">
import ProductCard from "../components/cards/ProductCard.vue";
import { useAuthStore } from "../store/authStore";
import { inject } from 'vue';
import { ref } from 'vue';
import ModalDetail from "@/components/modals/ModalDetail.vue";
import TextFilter from "@/components/filters/TextFilter.vue";

const authStore = useAuthStore();
const color = authStore.color;
const products = inject("products");

const dialog = ref(null);
const nombre = ref("");
const descripcion = ref("");
const imagen = ref("");

const openDialog = (name, description, image) => {
  nombre.value = name;
  imagen.value = image;
  descripcion.value = description;
  dialog.value.open();
};
</script>
<template>
  <div class="flex flex-wrap justify-center w-full text-yellow-400">
    <div class="w-full flex justify-around items-center my-5">
      <TextFilter />
    </div>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :color="color"
      :image="product.image"
      :name="product.name"
      :price="product.price"
      :category="product.category"
      :detalleClick="
        () => {
          openDialog(product.name, product.description, product.image);
        }
      "
    />
  </div>
  <ModalDetail
    ref="dialog"
    :description="descripcion"
    :image="imagen"
    :name="nombre"
  />
</template>
