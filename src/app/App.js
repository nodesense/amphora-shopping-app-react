// App.js
import React, { Component } from 'react';

import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Login from './components/Login';
import NotFound from './components/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import {HashRouter as Router,
        Route,
        Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div >
         <Header title="Shopping Cart" />

        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/products" component={ProductList} />
         <Route path="/cart" component={Cart} />
         <Route path="/checkout" component={Checkout} />
         <Route path="/login" component={Login} />
         <Route path="*" component={NotFound} />
        </Switch>


        <Footer year={2019}
                   company="Shopping app"
                   address = { {city: 'Hyd', state: 'TS'} }
                   countries = { ['IN', 'USA'] }
           /> 

      </div>
      </Router>
    );
  }
}

export default App;
