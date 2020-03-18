import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPokemones} from '../actions/pokeActions';
import PokeCard from '../components/PokeCard';
import './styles/PokemonContainer.css';

export class PokemonContainer extends Component {
    
    componentDidMount(){
        this.props.fetchPokemones();
    }

    
    render() {

        const {pokemones} = this.props

        console.log('pokemones', pokemones)

        return (
            <div className='pokedex'>
                {pokemones.map(pokemon =>{
                    return <PokeCard pokemon={pokemon} key={pokemon.name}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemones: state.pokemones.pokemones
})

export default connect(mapStateToProps, {fetchPokemones})(PokemonContainer)
