import React, {useEffect, useState,}from 'react';
import './App.css';
import PokemonCard from "./pages/PokemonCard";
import axios from "axios";

function App() {
const [pokemonNames, setPokemonNames] = useState(null);
const [offset, setOffset] = useState(null)

    useEffect(() => {
        async function fetchNames() {
            const result = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
            );
            setPokemonNames(result.data.results);
        }
        fetchNames();
    }, [offset])


    return (
        <>
            {pokemonNames?
                <div className="pokeCard">
                    { pokemonNames.map((pokemon) => {
                        return (<PokemonCard pokemonName={pokemon.name}/>);
                    })}
                </div> : <h3>loading</h3>}
            {offset > 0  && <button className="back" onClick={() => {
                setOffset(offset - 20)
            }}>Back</button>
            }
            {offset < 1100 &&<button className="next" onClick={()=> {
                setOffset(offset+20)
            }}>Next</button>
            }
        </>
    );
};

export default App;
