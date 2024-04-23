// "use client";

// import { useRouter } from "next/router";
// import { createContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const router = useRouter;

//   useEffect(() => {
//     setCartToState();
//   }, []);

//   const setCartToState = () => {
//     setCart(
//       localStorage.getItem("cart")
//         ? JSON.parse(localStorage.getItem("cart"))
//         : []
//     );
//   };

//   const addItemToCart = async ({ name, price, image, quantity = 1 }) => {
//     const item = {
//       name,
//       price,
//       image,
//       quantity,
//     };

//     const isItemExist = cart?.cartItems?.find(
//       (i) => i.product === item.product
//     );

//     // const isItemExist = false;

//     let newCartItems;
//     if (isItemExist) {
//       newCartItems = cart?.cartItems?.map((i) =>
//         i.product === isItemExist.product ? item : i
//       );
//     } else {
//       newCartItems = [...(cart?.cartItems || []), item];
//     }

//     localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
//     setCartToState();
//   };

//   return (
//     <CartContext.Provider value={{ cart, addItemToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
// const initialState = {
//   items: [],
//   itemsPrice: 0,
//   totalPrice: 0,
// };

// export const cartStore =
// import zustand, { create } from "zustand";

// const useCartStore = create((set) => ({
//   cartItems: [],
//   addItem: (item) => set((state) => ({ cartItems: [...state.Items, item] })),
// }));

// export default useCartStore;
