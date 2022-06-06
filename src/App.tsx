import { Provider } from "react-redux"

import { store } from "./store"
import "./App.css"
import RepoList from "./components/RepoList"

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepoList />
      </div>
    </Provider>
  )
}

export default App
