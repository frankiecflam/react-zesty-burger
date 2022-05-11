import { createSlice } from "@reduxjs/toolkit";

const cartStateFromStorage = JSON.parse(
  localStorage.getItem("zesty-burger-cart")
);

const CartInitialState = cartStateFromStorage || {
  items: [],
  totalAmount: 0,
};

function addItemToCart(state, action) {
  const newItem = {
    ...action.payload,
    quantity: 1,
  };

  let updatedItems;

  // Check if it already exists in the cart
  const existed = state.items.find((item) => item.id === newItem.id);
  const newTotalAmount = state.totalAmount + newItem.price;

  if (!existed) {
    updatedItems = [...state.items, newItem];
  } else {
    // If it already exists, update its quantity
    const updatedExistingItem = {
      ...existed,
      quantity: existed.quantity + 1,
    };

    updatedItems = [
      ...state.items.filter((item) => item.id !== newItem.id),
      updatedExistingItem,
    ];
  }

  const updatedCartState = {
    items: updatedItems,
    totalAmount: newTotalAmount,
  };

  localStorage.setItem("zesty-burger-cart", JSON.stringify(updatedCartState));

  return updatedCartState;
}

function removeItemFromCart(state, action) {
  // Check if it has more than 1,
  const itemToUpdate = state.items.find(
    (item) => item.id === action.payload.id
  );
  const newTotalAmount = state.totalAmount - itemToUpdate.price;

  let updatedItems;

  if (itemToUpdate.quantity > 1) {
    const updatedExistingItem = {
      ...itemToUpdate,
      quantity: itemToUpdate.quantity - 1,
    };
    updatedItems = [
      ...state.items.filter((item) => item.id !== itemToUpdate.id),
      updatedExistingItem,
    ];
  } else {
    updatedItems = state.items.filter((item) => item.id !== itemToUpdate.id);
  }
  const updatedCartState = {
    items: updatedItems,
    totalAmount: newTotalAmount,
  };

  localStorage.setItem("zesty-burger-cart", JSON.stringify(updatedCartState));

  return updatedCartState;
}

function resetCart() {
  localStorage.removeItem("zesty-burger-cart");
  return CartInitialState;
}

const CartSlice = createSlice({
  name: "cart",
  initialState: CartInitialState,
  reducers: {
    addItem: addItemToCart,

    removeItem: removeItemFromCart,

    cartReset: resetCart,
  },
});

export const { addItem, removeItem, cartReset } = CartSlice.actions;

export default CartSlice;
