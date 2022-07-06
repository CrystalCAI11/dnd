import styled from "@emotion/styled"

import { useAppDispatch } from "../../hooks/use-app"
import { addItem, removeItem } from "../../stores/slices/cart-slice"
import { CartItem } from "../../types/cart"

const ItemInCart: React.FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useAppDispatch()

  return (
    <li>
      <div>
        <h2>{item.name}</h2>
        <Summary>
          <span>${item.price.toFixed(2)}</span>
          <span>x {item.amount}</span>
        </Summary>
      </div>
      <Actions>
        <button onClick={() => dispatch(removeItem(item.id))}>−</button>
        <button onClick={() => dispatch(addItem({ item: item, amount: 1 }))}>
          +
        </button>
      </Actions>
    </li>
  )
}

export default ItemInCart

const Summary = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    &:first-of-type {
      font-weight: bold;
      color: #8a2b06;
    }

    &:nth-of-type(2) {
      font-weight: bold;
      border: 1px solid #ccc;
      padding: 0.25rem 0.75rem;
      border-radius: 6px;
      color: #363636;
    }
  }
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;

    &:hover,
    &:active {
      background-color: #8a2b06;
      color: white;
    }
  }
`
