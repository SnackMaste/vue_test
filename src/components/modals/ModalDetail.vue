<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Button from "../ui/button/Button.vue";
import { ref, defineEmits } from "vue";

const isOpen = ref(false);
const emit = defineEmits(["close"]);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
  emit("close");
};

defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

defineExpose({ open });
</script>
<template>
  <Dialog v-model:open="isOpen">
    <DialogContent
      class="bg-gray-950 text-yellow-400 border-2 border-yellow-400"
    >
      <DialogHeader>
        <DialogTitle class="font-bold text-center text-2xl">{{
          name
        }}</DialogTitle>
        <DialogDescription>
          <div class="w-full flex justify-around items-center my-5">
            <p class="px-5 font-semibold text-base">
              {{ description }}
            </p>
            <img
              :src="`./src/assets/images/products/${image}`"
              class="w-44 h-44 rounded-3xl border-2 border-yellow-400"
            />
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          @click="close"
          variant="ghost"
          class="font-bold text-lg hover:bg-red-600"
          >Cerrar</Button
        >
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
