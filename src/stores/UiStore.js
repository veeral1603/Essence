import { create } from "zustand";

const UiStore = (set) => ({
  isMobileMenuOpen: false,
  darkMode: false,

  toggleIsMobileMenuOpen: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  setIsMobileMenuOpen: (bool) => set(() => ({ isMobileMenuOpen: bool })),
});

const useUiStore = create(UiStore);

export default useUiStore;
