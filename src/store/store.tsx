import { create } from "zustand";
import { productAddCartType } from "../types";

interface CartStore {
  productsInCart: productAddCartType[];
  addProductToCart: (product: productAddCartType) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  productsInCart: [],
  addProductToCart: (product: productAddCartType) => {
    set(() => {
      const { productsInCart } = useCartStore.getState();

      const productInCart = productsInCart.find(
        (item) => item.productId === product.productId,
      );
      if (productInCart) {
        return {
          productsInCart: productsInCart.map((item) =>
            item.productId === product.productId
              ? { ...item, quantity: item.quantity + product.quantity }
              : item,
          ),
        };
      } else {
        return {
          productsInCart: [...productsInCart, product],
        };
      }
    });
  },
  // deleteProductInCart: (productInCartId: number) => {
  //     set((state) => {
  //         state.productsInCart = state.productsInCart.filter(
  //             (item) => item.productId !== productInCartId
  //         )
  //     })
  // },
  // getProductsInCart: () => {
  //     return set((state) => state.productsInCart)
  // },
  // getProductsInCartLength: () => {
  //     return set((state) => state.productsInCart.length)
  // },
  // getTotalPrice: () => {
  //     return set((state) => {
  //         return state.productsInCart.reduce((total, item) => {
  //             const product = products.find(
  //                 (product) => product.id === item.productId
  //             )
  //             return total + product.priceSale * item.quantity
  //         }, 0)
  //     })
  // },
}));

interface ToastStore {
  message: string | null;
  status: "success" | "error" | "pending" | null;
  setMessage: (message: string) => void;
  setStatus: (status: "success" | "error" | "pending" | null) => void;
  clear: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  message: null,
  status: null,
  setMessage: (message) => set({ message }),
  setStatus: (status) => set({ status }),
  clear: () => set({ message: null, status: null }),
}));
