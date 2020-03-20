import { SEARCH_POKEMON, FETCH_POKEMON, FETCH_POKEMONES } from './types';
import axios from 'axios';

export const searchPokemon = text => dispatch =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=806';
    
    axios.get(`${url}`)
        .then(resp => {
            dispatch({
                type: SEARCH_POKEMON,
                text: text,
                payload: resp.data.results
            })
        }).catch(err => console.log(err))
}

export const fetchPokemones = () => dispatch =>{
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=806';

    axios.get(`${url}`)
        .then(resp => {
            dispatch({
                type: FETCH_POKEMONES,
                payload: resp.data.results
            })
        }).catch(err => console.log(err))
}

export const fetchPokemon = id => dispatch =>{
    const url = 'https://pokeapi.co/api/v2/pokemon';

    axios.get(`${url}/${id}`)
        .then(resp => {
            console.log("test", resp);
            dispatch({
                type: FETCH_POKEMON,
                payload: resp.data
            })
        }).catch(err => console.log(err))
}