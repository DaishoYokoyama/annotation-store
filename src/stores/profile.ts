import { User } from "firebase/auth";
import { defineStore } from "pinia";

type State = {
  user: User | null;
};

export const useProfileStore = defineStore("profile", {
  state: (): State => ({
    user: null,
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
  },
});
