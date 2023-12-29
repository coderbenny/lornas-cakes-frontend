import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import './App.css';
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

  const [cart, setCart] = useState([
    {
      id: 1,
      image_url: "/delicious-cake.jpg",
      type: "Vanilla cake",
      price: "$10.00",
      description: "Whispers of pure vanilla magic, a symphony of sweetness in every heavenly bite.",
      quantity: "1",
    },
    {
      id: 2,
      image_url: "/delicious-cake.jpg",
      type: "chocolate cake",
      price: "$30.00",
      description: "Whispers of chocolate magic, a symphony of sweetness in every bite.",
      quantity: "3",
    }
  ]);

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
            <Cart shoppingCart={cart} />
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
