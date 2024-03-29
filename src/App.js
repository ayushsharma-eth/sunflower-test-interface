import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Merchant from './pages/Merchant'
import Market from './pages/Market'
import Product from './pages/Product'
import Results from './pages/Results'
import Balances from './pages/Balances'
import YourMarkets from './pages/YourMarkets'
import CreateProduct from './pages/CreateProduct'
import Purchase from './pages/Purchase'
import ManageOrders from './pages/ManageOrders';

const App = () => {

  return(
    <div className="App">
        <div className="background-fixed"></div>
        <BrowserRouter>
          <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home} key={Math.random(1,9999)}/>
            <Route exact path='/merchant/' component={YourMarkets} key={Math.random(1,9999)}/>
            <Route exact path='/merchant/:merchantAddress' component={Merchant} key={Math.random(1,9999)}/>
            <Route exact path='/balances' component={Balances} key={Math.random(1,9999)}/>
            <Route exact path="/markets/:marketAddress" component={Market} key={Math.random(1,9999)}/>
            <Route exact path="/markets/:marketAddress/createproducts" component={CreateProduct} key={Math.random(1,9999)}/>
            <Route exact path="/markets/:marketAddress/products/:productId" component={Product} key={Math.random(1,9999)}/>
            <Route exact path="/category/:_category/query/:_query" component={Results} key={Math.random(1,9999)}/>
            <Route exact path="/checkout" component={Purchase} key={Math.random(1, 9999)}/>
            <Route exact path="/orders" component={ManageOrders} key={Math.random(1, 9999)}/>
          </Switch>
        </BrowserRouter>
        <div className="center">
          <h3>Epic Footer</h3>
          <div className="splitscreen">
            <div className="left">
              <h4>Link 1</h4>
              <h4>Link 2</h4>
            </div>
            <div className="right">
              <h4>Link 3</h4>
              <h4>Link 4</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;
