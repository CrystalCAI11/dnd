import { createSlice } from "@reduxjs/toolkit"

import { Meal } from "../../types/meal"

interface MealSlice {
  meals: Meal[]
  isLoading: boolean
  error: any
}

const initialState: MealSlice = {
  meals: [],
  isLoading: false,
  error: "",
}

const mealSlice = createSlice({
  name: "meal",
  initialState,
  reducers: {
    getMealsFetch(state) {
      state.isLoading = true
    },
    getMealsSuccess(state, action) {
      state.isLoading = false
      state.meals = action.payload
      state.error = ""
    },
    getMealsFailure(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { getMealsFetch, getMealsSuccess, getMealsFailure } =
  mealSlice.actions

export default mealSlice.reducer
