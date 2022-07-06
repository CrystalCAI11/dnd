import { all } from "redux-saga/effects"
import mealSaga from "./meal-saga"

export default function* rootSaga() {
  yield all([mealSaga()])
}
