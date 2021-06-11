import React, {useState, useEffect} from "react";
import axios from "axios";

function PokemonCard({pokemonName}) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchPokemon( ) {
            const result = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            setPokemon(result.data);
        }
        fetchPokemon()
    }, [pokemonName])

    return(
        <>
            {pokemon ?
                <div className="pokecard">
                    <h1>{pokemon.name}</h1>
                    <div className="abilities">abilities:
                        {pokemon.abilities.map((ability) => {
                            return ( <p>ability : {ability.ability.name}</p>)
                        })}
                    </div>
                    <img className="image" alt={pokemon.id} src={pokemon.sprites.front_default}/>
                </div> : <h3>loading</h3>
            }
        </>
    )
}
export default PokemonCard;