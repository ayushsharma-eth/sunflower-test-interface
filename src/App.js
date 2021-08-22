import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Merchant from './pages/Merchant'
import Market from './pages/Market'
import Product from './pages/Product'
import Results from './pages/Results'
import Balances from './pages/Balances'
import YourMarkets from './pages/YourMarkets'

export const App = () => {

  return(
    <div className="App">
      <BrowserRouter>
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path='/' component={Home} key={Math.random(1,9999)}/>
          <Route exact path='/merchant/' component={YourMarkets} key={Math.random(1,9999)}/>
          <Route exact path='/merchant/:merchantAddress' component={Merchant} key={Math.random(1,9999)}/>
          <Route exact path='/balances' component={Balances} key={Math.random(1,9999)}/>
          <Route exact path="/markets/:marketAddress" component={Market} key={Math.random(1,9999)}/>
          <Route exact path="/markets/:marketAddress/products/:productId" component={Product} key={Math.random(1,9999)}/>
          <Route exact path="/results/:query" component={Results} key={Math.random(1,9999)}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
