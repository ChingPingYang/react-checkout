import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Landing from './components/Landing';
import Cart from './components/Cart';
import { CartContext } from './util/CartContext';
import { init, cartReducer } from './reducer/cartReducer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, init);
  return (
    <CartContext.Provider value={{state, dispatch}}>
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Landing}/>
              <Route path="/cart" component={Cart}/>
          </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
