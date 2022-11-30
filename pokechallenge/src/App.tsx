import { useState } from 'react'
import './App.scss'
import { HELLO_WORLD } from './common/constants/literals'
import { ALL_POKEMONS } from './common/endpoints/literals'
import Text from './components/UI/atoms/Text/Text'
import List from './components/UI/molecules/List/List'
import Card from './components/UI/organisms/Card/Card'
import { useFetch } from './hooks/custom-hooks/useFetch'

function App() {
  const { data, loading } = useFetch(ALL_POKEMONS);
  const [page, setPage] = useState(0);

  return (
    <>
      <Text message={HELLO_WORLD} type={"lg"} />
      <div className="pokedex_container">
        <div>

          {loading ? <Text message={"is Loading"} type={"md"} /> : <List elements={data} page={page} setPage={setPage} />}
        </div>
        <div>
          <Card data={data} loading={loading} page={page} setPage={setPage} />
        </div>
      </div>
    </>
  )
}

export default App
