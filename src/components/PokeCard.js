import React from 'react'
import './styles/PokeCard.css';
import {Link} from 'react-router-dom';

const PokeCard = ({pokemon}) => {


    const urlImagePokemon = url =>{
        let urlImagePokemon = 'https://pokeres.bastionbot.org/images/pokemon/'
        let deleteURL = url.replace('https://pokeapi.co/api/v2/pokemon/', '');
        let id = deleteURL.replace('/','');
        return `${urlImagePokemon}${id}.png`;
    }

    const idpokemon = url =>{
        let deleteURL = url.replace('https://pokeapi.co/api/v2/pokemon/', '');
        let id = deleteURL.replace('/','');
        return id
    }

    return (
        <div className="pokeCard">
            <p>{pokemon.name}</p>
            <div className="wrap-image">
              <img className="sizeImage" src={urlImagePokemon(pokemon.url)} alt="pokemon Cover" />  
            </div>
            <Link className="btn btn-primary" to={`/pokemon/${idpokemon(pokemon.url)}`}>
                    Pokemon Details
            <i className="fas fa-chevron-right" />
                </Link>
            
        </div>
    )
}

export default PokeCard
