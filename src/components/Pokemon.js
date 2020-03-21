import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/pokeActions';
import { Link } from 'react-router-dom';
import './styles/Pokemon.css';


export class Pokemon extends Component {

    componentDidMount() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    render() {
        const { pokemon } = this.props

        return (
            <div className="pokemonDetail">
                <div className="titlePokemon"><h2>{pokemon.name}</h2></div>

                <div className="wrap-pokemon">
                    <div className="pokeCard">
                        <div className="wrap-image">
                            <img className="sizeImage" src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt="pokemon Cover" />
                            <h1 className="numberPokemon">#{pokemon.id}</h1>
                        </div>

                    </div>
                    <div className="textPokemon">
                        <div className="wrapDescription">
                            <span className="mainSpan">Habilities:</span>
                            {/* {pokemon.abilities.map(poke => {
                                return <div><span>{poke.ability.name}</span></div>
                            })} */}
                        </div>
                        <div className="wrapDescription">
                            <span className="mainSpan">Experience:</span><span>{pokemon.base_experience}{" "}<i className="fas fa-bolt fa-1x"></i></span>
                        </div>
                        <div className="wrapDescription">
                            <span className="mainSpan">Height:</span><span>{pokemon.height}{" "}<i className="fas fa-dumbbell"></i></span>
                        </div>
                        <div className="wrapDescription">
                            <span className="mainSpan">Weight:</span><span>{pokemon.weight}{" "}<i className="fas fa-weight-hanging"></i></span>
                        </div>
                        <div className="wrapDescription">
                            <span className="mainSpan">Types:</span>
                            {/* {pokemon.types.map(poke => <div><span>{poke.type.name}</span></div>)} */}
                        </div>
                        <Link className="btn btn-primary" to="/">
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemones.pokemon
});

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);

