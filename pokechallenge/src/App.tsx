import { useEffect, useState } from 'react'
import './App.scss'
import { HELLO_WORLD, NEXT_ARROW, PREVIOUS_ARROW } from './common/constants/literals'
import Button from './components/UI/atoms/Button/Button'
import Text from './components/UI/atoms/Text/Text'
import List from './components/UI/molecules/List/List'
import { useFetch } from './hooks/custom-hooks/useFetch'

function App() {
  const { data, loading } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151offset=0",);
  const [page, setPage] = useState(0);
  const pokemonSelected = data?.results[page].name || '';
  const [currentPokemon, setCurrentPokemon] = useState(pokemonSelected)
  const currentPokemonToWatch = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);
  const pokemonSprite = currentPokemonToWatch?.data?.sprites?.front_default;

  useEffect(() => {
    setCurrentPokemon(pokemonSelected || '')

  }, [data, page])

  return (
    <>
      <Text message={HELLO_WORLD} type={"lg"} />
      {loading ? <Text message={"is Loading"} type={"md"} /> : <List elements={data} page={page} setPage={setPage} />}

      <div className='card__container'>
        <Button img={PREVIOUS_ARROW} page={page} setPage={setPage} />
        {loading ? <Text message={"is Loading"} type={"md"} /> : <div className="sprite__container"><img src={pokemonSprite} /><Text message={currentPokemon} type={"md"} /></div>}
        <Button img={NEXT_ARROW} page={page} setPage={setPage} />
      </div>

      {currentPokemonToWatch?.data?.types?.map((element: any) => {
        return <div className="types"><Text message={element.type.name} type={"md"} /></div>
      })}

      {<Text message={'Height: ' + currentPokemonToWatch?.data?.height} type={"md"} />}
      {<Text message={'Weight: ' + currentPokemonToWatch?.data?.weight} type={"md"} />}
    </>
  )
}

export default App
