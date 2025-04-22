import { create } from "zustand";

const UiStore = (set) => ({
  currency: "$",

  isMobileMenuOpen: false,
  isSideCartOpen: false,

  toggleIsMobileMenuOpen: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  setIsMobileMenuOpen: (bool) => set(() => ({ isMobileMenuOpen: bool })),

  toggleIsSideCartOpen: () =>
    set((state) => ({ isSideCartOpen: !state.isSideCartOpen })),

  setIsSideCartOpen: (bool) => set(() => ({ isSideCartOpen: bool })),
});

const useUiStore = create(UiStore);

export default useUiStore;
