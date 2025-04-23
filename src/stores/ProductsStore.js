import { create } from "zustand";

const ProductsStore = (set) => ({
  products: [],
  setProducts: (products) => set({ products }),
});

const useProductsStore = create(ProductsStore);

export default useProductsStore;
