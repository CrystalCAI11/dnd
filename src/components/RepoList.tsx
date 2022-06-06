import { useState } from "react"

import { useActions } from "../hooks/useActions"
import { useTypedSelector } from "../hooks/useTypedSelector"

const RepoList: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("")
  const { searchRepo } = useActions()
  const { data, error, loading } = useTypedSelector((state) => state.repo)

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepo(keyword)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>...Loading</h3>}
      {!error &&
        !loading &&
        data.map((name) => {
          return <div key={name}>{name}</div>
        })}
    </div>
  )
}

export default RepoList
