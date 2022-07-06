import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/use-app"
import { getMealsFetch } from "../../stores/slices/meal-slice"
import { Card } from "../UI/Card"
import MealItem from "./MealItem"

const AvailableMeals: React.FC = () => {
  const meals = useAppSelector((state) => state.meal.meals)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMealsFetch())
  }, [dispatch])

  return (
    <div>
      <MealsList>
        <Card>
          <ul>
            {meals.map((meal) => (
              <MealItem key={meal.id} mealItem={meal} />
            ))}
          </ul>
        </Card>
      </MealsList>
    </div>
  )
}

export default AvailableMeals

const mealsAppear = keyframes`
   from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const MealsList = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealsAppear} 1s ease-out forwards;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
