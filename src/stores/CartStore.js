import { create } from "zustand";
import { persist } from "zustand/middleware";

const CartStore = (set, get) => ({
  cart: [],
  shipping: 30,

  addProduct: (productObj) =>
    set((state) => {
      const existingIndex = state.cart.findIndex(
        (prod) =>
          prod.id === productObj.id &&
          prod.size === productObj.size &&
          prod.color === productObj.color
      );

      if (existingIndex !== -1) {
        // Create a new cart array with the updated quantity
        const updatedCart = [...state.cart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + productObj.quantity,
        };
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, productObj] };
      }
    }),
  removeFromCart: (productObj) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.cartItemId !== productObj.cartItemId
      ),
    })),

  increaseQuantity: (productID) =>
    set((state) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === productID) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });

      return { cart: updatedCart };
    }),

  decreaseQuantity: (productID) =>
    set((state) => {
      const updatedCart = state.cart.map((product) => {
        if (product.id === productID) {
          return { ...product, quantity: product.quantity - 1 };
        }

        return product;
      });

      return { cart: updatedCart };
    }),

  getSubTotal: () => {
    const cart = get().cart;
    return cart.reduce((acc, cur) => acc + cur.discountPrice * cur.quantity, 0);
  },

  getTotal: () => {
    return get().getSubTotal() + get().shipping;
  },

  clearCart: () => set({ cart: [] }),
});

const useCartStore = create(persist(CartStore, { name: "cart-storage" }));
// const useCartStore = create(CartStore);

export default useCartStore;
