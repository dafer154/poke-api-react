import { SEARCH_POKEMON, FETCH_POKEMON, FETCH_POKEMONES } from '../actions/types';

const initialState = {
    textSearch: '',
    pokemones: [],
    pokemon: {}
}

const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POKEMON:
            console.log(state.pokemones);
            return {
                ...state,
                textSearch: action.payload,
                pokemones: state.pokemones.filter(pokemon => pokemon.name === action.payload)
            }
        case FETCH_POKEMONES:
            return {
                ...state,
                pokemones: action.payload
            }
        case FETCH_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state;
    }
}

export default pokeReducer