import { useEffect, useState } from 'react'
import './App.scss'
import { HELLO_WORLD, NEXT_ARROW, PREVIOUS_ARROW } from './common/constants/literals'
import Button from './components/UI/atoms/Button/Button'
import Text from './components/UI/atoms/Text/Text'
import List from './components/UI/molecules/List/List'
import Card from './components/UI/organisms/Card/Card'
import { useFetch } from './hooks/custom-hooks/useFetch'

function App() {
  const { data, loading } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151offset=0",);
  const [page, setPage] = useState(0);

  return (
    <>
      <div>
        <Text message={HELLO_WORLD} type={"lg"} />
        {loading ? <Text message={"is Loading"} type={"md"} /> : <List elements={data} page={page} setPage={setPage} />}
      </div>
      <div>
        <Card data={data} loading={loading} page={page} setPage={setPage} />
      </div>
    </>
  )
}

export default App
