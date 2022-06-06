import axios from "axios"
import { Dispatch } from "react"
import { ActionType } from "../action-types"
import { Action } from "../actions"

export const searchRepo = (keyword: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    })
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: keyword,
          },
        }
      )
      const names = data.objects.map((result: any) => {
        return result.package.name
      })
      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      })
    } catch (err: any) {
      dispatch({ type: ActionType.SEARCH_REPO_ERROR, payload: err.message })
    }
  }
}
