import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPokemon } from '../actions/pokeActions';

export class Pokemon extends Component {

    componentDidMount() {

        console.log(this.props.match.params.id);
        this.props.fetchPokemon(this.props.match.params.id)
    }

    render() {
        const { pokemon } = this.props
        return (
            <div>
                <div>
                    {pokemon.name}
                </div>
                <div>
                    {pokemon.order}
                </div>
                <div>
                    {pokemon.weight}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemones.pokemon
});

export default connect(mapStateToProps, { fetchPokemon })(Pokemon);

