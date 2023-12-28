import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Home from './components/Home';
import Cakes from './components/Cakes';
import BirthdaySurprise from './components/BirthdaySurprise';
import ReviewHome from './components/ReviewHome';
import NotFound from './components/NotFound';
import BakingClasses from './components/BakingClasses';
import CakeDetail from './components/CakeDetail';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App justify-start">
        <Header />
        <Switch>
          <Route path="/cakes/:id">
            <CakeDetail />
          </Route>
          <Route path="/cakes">
            <Cakes />
          </Route>
          <Route path="/shoot">
            <BirthdaySurprise />
          </Route>
          <Route path="/reviews">
            <ReviewHome />
          </Route>
          <Route path="/classes">
            <BakingClasses />
          </Route>
          <Route path="/cart">
            <Cart />
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
