import { create } from "zustand";

const UiStore = (set) => ({
  currency: "$",

  isMobileMenuOpen: false,
  isSideCartOpen: false,
  isMobileFiltersOpen: false,

  toggleIsMobileMenuOpen: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

  setIsMobileMenuOpen: (bool) => set(() => ({ isMobileMenuOpen: bool })),

  toggleIsSideCartOpen: () =>
    set((state) => ({ isSideCartOpen: !state.isSideCartOpen })),

  setIsSideCartOpen: (bool) => set(() => ({ isSideCartOpen: bool })),

  toggleIsMobileFiltersOpen: () =>
    set((state) => ({ isMobileFiltersOpen: !state.isMobileFiltersOpen })),

  setIsMobileFiltersOpen: (bool) => set(() => ({ isMobileFiltersOpen: bool })),
});

const useUiStore = create(UiStore);

export default useUiStore;
