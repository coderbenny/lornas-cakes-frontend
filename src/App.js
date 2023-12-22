import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Home from './components/Home';
import Cakes from './components/Cakes';
import Shop from './components/Shop';
import BirthdaySurprise from './components/BirthdaySurprise';
import Reviews from './components/Reviews';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cakes">
            <Cakes />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/shoot">
            <BirthdaySurprise />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
