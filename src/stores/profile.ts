import { User } from "firebase/auth";
import { defineStore } from "pinia";

type State = {
  ready: boolean;
  user: User | null;
};

export const useProfileStore = defineStore("profile", {
  state: (): State => ({
    ready: false,
    user: null,
  }),
  actions: {
    setUser(user: User | null) {
      if (!this.ready) {
        this.ready = true;
      }
      this.user = user;
    },
  },
});
