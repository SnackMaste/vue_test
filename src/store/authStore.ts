import { defineStore } from "pinia";

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
      location.href = "/";
    },
  },
  getters: {
    getName: (state) => state.name,
    getColor: (state) => state.color,
  },
  persist: true,
});
