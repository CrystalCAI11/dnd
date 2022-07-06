// call: call url, put: take actions, takeEvery:trigger function when action being called
import { call, put, takeEvery } from "redux-saga/effects"

import { getMealsFailure, getMealsSuccess } from "../slices/meal-slice"

function* workGetMealsFetch() {
  try {
    const meals = yield call(() => fetch("http://localhost:3001/meals"))
    const formattedMeals = yield meals.json()
    yield put(getMealsSuccess(formattedMeals))
  } catch (err) {
    yield put(getMealsFailure(err))
  }
}

function* mealSaga() {
  yield takeEvery("meal/getMealsFetch", workGetMealsFetch) // ('reducer/action')
}

export default mealSaga
