import { useState, useEffect } from "react";
import { NEXT_ARROW, POKEDEX_ICON, PREVIOUS_ARROW } from "../../../../common/constants/literals";
import { POKEMON_DATA } from "../../../../common/endpoints/literals";
import { cardProps, PokeTypes } from "../../../../common/interfaces/ui-interfaces";
import { useFetch } from "../../../../hooks/custom-hooks/useFetch";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import './Card.scss';

const Card = ({ data, loading, page, setPage }: cardProps) => {

    const pokemonSelected = data?.results[page].name || '';
    const [currentPokemon, setCurrentPokemon] = useState(pokemonSelected)
    const currentPokemonToWatch = useFetch(`${POKEMON_DATA + pokemonSelected}`);
    const pokemonSprite = currentPokemonToWatch?.data?.sprites?.front_default;

    useEffect(() => {
        setCurrentPokemon(pokemonSelected || '')

    }, [data, page])

    return (
        <div className="card">
            <div className="card_logo"><img src={POKEDEX_ICON} width={30} height={30} /></div>
            <div className='card__container'>
                <Button img={PREVIOUS_ARROW} page={page} setPage={setPage} />
                {loading ? <Text message={"is Loading"} type={"md"} />
                    : <div className="sprite__container"><img src={pokemonSprite} /><Text message={currentPokemon.charAt(0).toLocaleUpperCase() + currentPokemon.slice(1)} type={"md"} /></div>}
                <Button img={NEXT_ARROW} page={page} setPage={setPage} />
            </div>

            {<Text message={'Type '} type={"xs"} />}

            <div className="types">
                {currentPokemonToWatch?.data?.types?.map((element: PokeTypes) => {
                    return <Text message={element.type.name} type={"sm"} />
                })}
            </div>
            <div className="sizes">
                {<Text message={'Height: ' + currentPokemonToWatch?.data?.height} type={"sm"} />}
                {<Text message={'Weight: ' + currentPokemonToWatch?.data?.weight} type={"sm"} />}
            </div>
        </div>
    )
}
export default Card;