import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import store from './store';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export class App extends Component {
  render() {
    return (<Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/pokemon/:id" component={Pokemon} />
          <Footer />
        </div>
      </Router>
    </Provider>

    )
  }
}

export default App

