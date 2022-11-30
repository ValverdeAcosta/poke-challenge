import { useState, useEffect } from "react";
import { NEXT_ARROW, PREVIOUS_ARROW } from "../../../../common/constants/literals";
import { useFetch } from "../../../../hooks/custom-hooks/useFetch";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import './Card.scss';

const Card = (props: any) => {

    const pokemonSelected = props.data?.results[props.page].name || '';
    const [currentPokemon, setCurrentPokemon] = useState(pokemonSelected)
    const currentPokemonToWatch = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`);
    const pokemonSprite = currentPokemonToWatch?.data?.sprites?.front_default;

    useEffect(() => {
        setCurrentPokemon(pokemonSelected || '')

    }, [props.data, props.page])

    return (
        <div className="card">
            <div className='card__container'>
                <Button img={PREVIOUS_ARROW} page={props.page} setPage={props.setPage} />
                {props.loading ? <Text message={"is Loading"} type={"md"} /> : <div className="sprite__container"><img src={pokemonSprite} /><Text message={currentPokemon} type={"md"} /></div>}
                <Button img={NEXT_ARROW} page={props.page} setPage={props.setPage} />

            </div>
            <div className="types">
                {"Type: "}
                {currentPokemonToWatch?.data?.types?.map((element: any) => {
                    return <div className="types"> <Text message={element.type.name} type={"md"} /></div>
                })}

            </div>
            <div className="sizes">
                {<Text message={'Height: ' + currentPokemonToWatch?.data?.height} type={"md"} />}
                {<Text message={'Weight: ' + currentPokemonToWatch?.data?.weight} type={"md"} />}
            </div>
        </div>
    )
}
export default Card;