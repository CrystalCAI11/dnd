import { Fragment } from "react"

import "./App.css"
import Cart from "./components/Cart/Cart"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import { useAppSelector } from "./hooks/use-app"

const App: React.FC = () => {
  const isShowcart = useAppSelector((state) => state.cart.isShow)

  return (
    <Fragment>
      {isShowcart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
