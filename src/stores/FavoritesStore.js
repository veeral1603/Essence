import { create } from "zustand";
import { persist } from "zustand/middleware";

const FavoritesStore = (set) => ({
  favorites: [],

  addToFavorites: (productObj) =>
    set((state) => ({ favorites: [...state.favorites, productObj] })),

  removeFromFavorites: (productId) =>
    set((state) => ({
      favorites: state.favorites.filter((product) => productId !== product.id),
    })),
});

const useFavoritesStore = create(
  persist(FavoritesStore, { name: "favorites" })
);

export default useFavoritesStore;
