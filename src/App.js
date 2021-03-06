import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Homepage from './Pages/homepage/Homepage'
import ShopPage from './Pages/shop/Shop'
import Header from './Components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
