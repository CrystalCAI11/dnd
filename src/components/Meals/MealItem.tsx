import styled from "@emotion/styled"
import { FormEvent, useRef } from "react"

import { useAppDispatch } from "../../hooks/use-app"
import { addItem } from "../../stores/slices/cart-slice"
import { Meal } from "../../types/meal"
import Input from "../UI/Input"

const MealItem: React.FC<{ mealItem: Meal }> = ({ mealItem }) => {
  const { id, name, description, price } = mealItem
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLInputElement | null>(null)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addItem({ item: mealItem, amount: +ref.current?.value! }))
  }

  return (
    <Container>
      <div>
        <h3>{name}</h3>
        <Description>{description}</Description>
        <Price>${price.toFixed(2)}</Price>
      </div>
      <div>
        <MealItemForm onSubmit={submitHandler}>
          <Input
            ref={ref}
            label="Amount"
            input={{
              id: "amount" + id,
              type: "number",
              min: "1",
              max: "100",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>+ Add</button>
        </MealItemForm>
      </div>
    </Container>
  )
}

export default MealItem

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  h3 {
    margin: 0 0 0.25rem 0;
  }
`

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`

const Description = styled.div`
  font-style: italic;
`

const MealItemForm = styled.form`
  text-align: right;
  button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #641e03;
      border-color: #641e03;
    }
  }
`
