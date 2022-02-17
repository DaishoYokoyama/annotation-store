import { defineStore } from "pinia";
import { ToastType, Toast } from "@/models";

let counter = 0;

export const useUiStore = defineStore("ui", {
  state: () => ({
    progress: false,
    toasts: [] as Toast[],
  }),
  actions: {
    showProgress() {
      this.progress = true;
    },
    hideProgress() {
      this.progress = false;
    },
    addToast(type: ToastType, message: string, millisec = 2000) {
      const id = counter++;
      const toast: Toast = { id, type, message };
      this.toasts.push(toast);

      setTimeout(() => {
        this.toasts = this.toasts.filter((x) => x.id !== id);
      }, millisec);
    },
  },
});
