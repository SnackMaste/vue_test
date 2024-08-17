import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    name: "",
    color: "",
  }),
  actions: {
    setName(newName: string) {
      this.name = newName;
    },
    setColor(newColor: string) {
      this.color = newColor;
    },
    checkOut() {
      this.name = "";
      this.color = "";
      const router = useRouter();
      router.push("/");
    },
  },
  getters: {
    getName: (state) => state.name,
    getColor: (state) => state.color,
  },
  persist: true,
});
