import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"

import cartReducer from "./slices/cart-slice"
import mealReducer from "./slices/meal-slice"
import rootSaga from "./saga/root-saga"

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    cart: cartReducer,
    meal: mealReducer,
  },
  middleware: [saga],
})

saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
