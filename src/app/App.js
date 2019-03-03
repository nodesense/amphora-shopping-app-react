// App.js
import React, { Component } from 'react';

import Checkout from './components/Checkout';
import Cart from './components/Cart';

import ReduxCart from './components/ReduxCart';

import Home from './components/Home';
import ProductList from './components/ProductList';
import Login from './containers/Login';
import NotFound from './components/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

// import from containers
import FuncCartContainer from './containers/FuncCartContainer';


import {HashRouter as Router,
        Route,
        Switch } from 'react-router-dom';


import AuthRoute from './containers/AuthRouteContainer';
import ThemeContext from './components/ThemeContext';

 
class App extends Component {
  render() {
    return (
      <Router>
        <ThemeContext.Provider value={ {theme: 'white'}  }>
      <div >
         <Header title="Shopping Cart" />

        <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/products" component={ProductList} />
         
         <AuthRoute path="/cart" component={Cart} 
                     
         />

         {/* <Route path="/redux-cart" component={ReduxCart} /> */}

         <AuthRoute path="/redux-cart"
                    exact 
                    component={ReduxCart}
 
                    />

          
         <AuthRoute path="/func-cart"
                    exact 
                    component={FuncCartContainer}
                    
                    />

          {/* 
         <Route path="/checkout" component={Checkout} />
          */}

        <Route path="/checkout" 
               render={ (props) => (<Checkout coupon="50%" {...props} />)} />

         <Route path="/login" component={Login} />

         <Route path="*" component={NotFound} />
        </Switch>


        <Footer year={2019}
                   company="Shopping app"
                   address = { {city: 'Hyd', state: 'TS'} }
                   countries = { ['IN', 'USA'] }
        >
          {/* content area */}
          <p>Contact time IN: 9:00 to 5:00 PM</p>
          <p>Contact time USA: 8:00 to 4:00 PM</p>
        </Footer> 

      </div>
      </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;
