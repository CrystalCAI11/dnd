export interface CartItem {
  id: string
  name: string
  amount: number
  price: number
}

export interface Cart {
  cartItems: CartItem[]
  totalPrice: number
  totalAmount: number
}
