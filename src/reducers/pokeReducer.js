import { SEARCH_POKEMON, FETCH_POKEMON, FETCH_POKEMONES } from '../actions/types';

const initialState = {
    textSearch: '',
    pokemones: [],
    pokemon: {}
}

const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POKEMON:
            const statePokemones = action.payload;
            const filteredPokemones = statePokemones.filter(pokemon => {
                return pokemon.name.toLowerCase().indexOf(action.text.toLowerCase()) !== -1;
              });
            return {
                ...state,
                textSearch: action.text,
                pokemones: filteredPokemones
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