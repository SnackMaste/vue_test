<script setup lang="ts">
import ProductCard from "../components/cards/ProductCard.vue";
import { useAuthStore } from "../store/authStore";
import { inject, ref, computed, Ref } from "vue";
import ModalDetail from "@/components/modals/ModalDetail.vue";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import CarShop from "@/components/CarShop.vue";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const listCarShop: {
  id: number;
  cantidad: number;
  precio: number;
  name: string;
  precioTotalProduct: number;
}[] = [];
const totalProducts = ref(0);
const totalPrice = ref(0);
const authStore = useAuthStore();
const color = authStore.color;
const products = inject<Ref<Product[]>>("products", ref([]));
const dialog = ref<InstanceType<typeof ModalDetail> | null>(null);
const nombre = ref<string>("");
const descripcion = ref<string>("");
const imagen = ref<string>("");
const searchQuery = ref<string>("");

const openDialog = (name: string, description: string, image: string) => {
  nombre.value = name;
  imagen.value = image;
  descripcion.value = description;
  dialog.value?.open();
};

function removeAccents(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const filteredProducts = computed<Product[]>(() => {
  return products.value.filter((product: Product) => {
    return removeAccents(product.name)
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
  });
});

const addProductCarShop = ({
  id,
  cantidad,
  precio,
  name,
}: {
  id: number;
  cantidad: number;
  precio: number;
  name: string;
}) => {
  const index = listCarShop.findIndex((item) => item.id === id);
  if (index !== -1) {
    if (cantidad === 0) {
      listCarShop.splice(index, 1);
    } else {
      const precioTotal = cantidad * precio;
      listCarShop[index].precioTotalProduct = precioTotal;
      listCarShop[index].cantidad = cantidad;
    }
  } else {
    const precioTotal = cantidad * precio;
    listCarShop.push({
      id,
      cantidad,
      precio,
      name,
      precioTotalProduct: precioTotal,
    });
  }

  updateIndicatorCarShop();
};

const updateIndicatorCarShop = () => {
  let productos = 0;
  let precios = 0;
  listCarShop.forEach((item) => {
    productos += item.cantidad;
    precios += item.precioTotalProduct;
  });

  totalProducts.value = productos;
  totalPrice.value = precios;
};
</script>

<template>
  <div class="flex flex-wrap justify-center w-full text-yellow-400">
    <div class="w-full flex justify-around items-center my-5">
      <div class="relative">
        <Input
          type="text"
          id="search"
          placeholder="Filtrar"
          class="pl-10 bg-transparent border-yellow-400 focus-visible:ring-offset-0"
          v-model="searchQuery"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search
            class="size-6 text-muted-foreground text-yellow-400"
            stroke-width="3"
          />
        </span>
      </div>
    </div>
    <ProductCard
      v-for="product in filteredProducts"
      @update:cantidad="addProductCarShop"
      :key="product.id"
      :id="String(product.id)"
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
  <CarShop
    class="fixed bottom-20 right-10"
    :counter="totalProducts"
    :precio="totalPrice"
  />
  <ModalDetail
    ref="dialog"
    :description="descripcion"
    :image="imagen"
    :name="nombre"
  />
</template>
