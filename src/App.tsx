import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import { Pokemon } from './interfaces/Pokemon';
import { transform } from 'typescript';
import { DisplayPokemon } from './components/DisplayPokemon';


function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isFetched, setFetched] = useState(false);
  const POKEDEX_BASE_URL = "http://localhost:8080/api/pokedex"
  useEffect(()=> {
    const fetchPokemon = async () => {
      try {
        const response = await fetch (`${POKEDEX_BASE_URL}/all`)
        const data = await response.json();
        setPokemons(data)
        setFetched(true)
      } catch (error){
        console.log(error)
        setFetched(false);
      }
    };
    fetchPokemon();
  }, [])
  return (
    <Container className='text-center '>
      <Row className='mt-3'>
        <h5>
          <span style={{textTransform : "uppercase"}}>Pokemon Registry</span>
          </h5>
      </Row>
      <Row>
        {pokemons.map((pokemon, key) => {
          return (<DisplayPokemon name={pokemon.name} types={pokemon.types} num={pokemon.num} atk={pokemon.atk} def={pokemon.def} sp_atk={pokemon.sp_atk} sp_def={pokemon.sp_def} spd={pokemon.spd} hp={pokemon.hp}/>)
        })}
      </Row>
    </Container>
  );
}

export default App;
