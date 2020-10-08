import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Landing from './components/Landing';


function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" component={Landing}/>
            
        </Switch>
    </Router>
  );
}

export default App;
