import { createSlice } from "@reduxjs/toolkit"

import { Cart } from "../../types/cart"

interface CartSlice {
  isShow: boolean
  cart: Cart
  isLoading: boolean
  error: any
}

const initialState: CartSlice = {
  isShow: false,
  cart: {
    cartItems: [],
    totalPrice: 0,
    totalAmount: 0,
  },
  isLoading: false,
  error: "",
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showHideCart(state) {
      state.isShow = !state.isShow
    },
    addItem(state, action) {
      state.cart.totalAmount = state.cart.totalAmount + action.payload.amount
      state.cart.totalPrice =
        state.cart.totalPrice +
        action.payload.item.price * action.payload.amount
      const existingCartItemIndex = state.cart.cartItems.findIndex(
        (item) => item.id === action.payload.item.id
      )
      if (existingCartItemIndex !== -1) {
        state.cart.cartItems[existingCartItemIndex].amount =
          state.cart.cartItems[existingCartItemIndex].amount +
          action.payload.amount
      } else {
        state.cart.cartItems = state.cart.cartItems.concat({
          ...action.payload.item,
          amount: action.payload.amount,
        })
      }
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.cart.cartItems.findIndex(
        (item) => item.id === action.payload
      )
      const existingCartItem = state.cart.cartItems[existingCartItemIndex]
      if (existingCartItem.amount === 1) {
        state.cart.cartItems = state.cart.cartItems.filter(
          (item) => item.id !== action.payload
        )
      } else {
        existingCartItem.amount = existingCartItem.amount - 1
      }
      state.cart.totalAmount = state.cart.totalAmount - 1
      state.cart.totalPrice = state.cart.totalPrice - existingCartItem.price
    },
  },
})

export const { showHideCart, addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
