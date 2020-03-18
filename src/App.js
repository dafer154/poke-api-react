import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Search from './components/Search';
import PokemonContainer from './components/PokemonContainer';
import store from './store';

export class App extends Component {
  render() {
    return (<Provider store={store}>
      <Router>
        <div>
          <Search />
          <PokemonContainer />
          <Route exact path="/pokemon/:id" component={Pokemon} />
        </div>
      </Router>
    </Provider>

    )
  }
}

export default App

