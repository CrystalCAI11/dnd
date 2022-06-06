import { combineReducers } from "redux"
import repoReducer from "./repoReducer"

const reducers = combineReducers({
  repo: repoReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
