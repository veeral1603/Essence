import { create } from "zustand";
import { persist } from "zustand/middleware";

const AuthStore = (set) => ({
  isAuth: true,
});

const useAuthStore = create(persist(AuthStore, { name: "auth" }));

export default useAuthStore;
