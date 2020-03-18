import React, { Component } from 'react'
import {connect} from 'react-redux';
import {searchPokemon} from '../actions/pokeActions';

export class Search extends Component {
    onChange = e =>{
        const text = e.target.value;
        this.props.searchPokemon(text);
    }

    onSubmit = e =>{
        e.preventDefault();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search Pokemon
          </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
            </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.pokemones.textSearch
})

export default connect(mapStateToProps, {searchPokemon})(Search);
