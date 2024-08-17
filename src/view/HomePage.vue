<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const color = ref("#000000");
const nombre = ref("");

const router = useRouter();

function handleSubmit() {
  authStore.setName(nombre.value);
  authStore.setColor(color.value);
  router.push("/product");
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
          class="mx-5 rounded-3xl"
          v-model="color"
          name="color"
        />
      </label>
      <button
        type="submit"
        class="w-1/4 h-10 rounded-3xl border-2 border-yellow-400 bg-black text-yellow-400 text-center text-xl font-bold"
      >
        Continuar
      </button>
    </form>
  </div>
</template>
