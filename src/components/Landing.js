import React, { Component } from 'react'
import Search from './Search';
import PokemonContainer from './PokemonContainer'

export class Landing extends Component {
    render() {
        return (
            <div>
                <Search />
                <PokemonContainer />
            </div>
        )
    }
}

export default Landing
