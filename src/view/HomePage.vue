<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "vue-router";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-vue-next";

const authStore = useAuthStore();
const color = ref("#000000");
const nombre = ref("");
const isLoading = ref(false);
const router = useRouter();

function timeOut() {
  setTimeout(() => {
    isLoading.value = false;
    router.push("/product");
  }, 2000);
}

function handleSubmit() {
  isLoading.value = true;
  authStore.setName(nombre.value);
  authStore.setColor(color.value);
  timeOut();
}
</script>

<template>
  <div class="flex w-full h-screen justify-center items-center">
    <form
      class="w-1/2 flex flex-col justify-center items-center"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        name="nombre"
        class="w-1/2 h-10 rounded-3xl border-2 border-yellow-400 bg-black text-yellow-400 text-center text-xl font-bold"
        v-model="nombre"
        placeholder="Ingresa tu nombre"
        required
      />
      <label for="color" class="flex my-5">
        <p class="text-yellow-400 font-bold">Ingresa tu color favorito</p>
        <input
          type="color"
          class="mx-5 rounded-md w-5 h-5"
          v-model="color"
          name="color"
        />
      </label>
      <Button
        v-if="!isLoading"
        type="submit"
        variant="ghost"
        class="text-yellow-400 font-bold text-xl"
        >Continuar</Button
      >
      <Button v-else disabled variant="ghost">
        <LoaderCircle
          class="w-10 h-10 animate-spin text-yellow-400"
          strokeWidth="3"
        />
      </Button>
    </form>
  </div>
</template>
