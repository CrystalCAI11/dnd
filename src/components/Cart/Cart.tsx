import styled from "@emotion/styled"

import { useAppDispatch, useAppSelector } from "../../hooks/use-app"
import { showHideCart } from "../../stores/slices/cart-slice"
import Modal from "../UI/Modal"
import ItemInCart from "./ItemInCart"

const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const { cartItems, totalPrice, totalAmount } = useAppSelector(
    (state) => state.cart.cart
  )

  const showHideCartHandler = () => {
    dispatch(showHideCart())
  }

  return (
    <Modal onClose={showHideCartHandler}>
      <CartItems>
        {cartItems.map((item) => (
          <ItemInCart key={item.id} item={item} />
        ))}
      </CartItems>
      <Total>
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </Total>
      <Actions>
        <button onClick={showHideCartHandler}>Close</button>
        {!!totalAmount && <button>Order</button>}
      </Actions>
    </Modal>
  )
}

export default Cart

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0;
    margin: 1rem 0;

    h2 {
      margin: 0 0 0.5rem 0;
      color: #363636;
    }
  }
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`

const Actions = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;

    &:hover,
    &:active {
      background-color: #5a1a01;
      border-color: #5a1a01;
      color: white;
    }

    &:first-of-type {
      color: #8a2b06;
    }

    &:nth-of-type(2) {
      background-color: #8a2b06;
      color: white;
    }
  }
`
