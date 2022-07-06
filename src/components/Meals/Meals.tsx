import { Fragment } from "react"

import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"

const Meals: React.FC = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals
