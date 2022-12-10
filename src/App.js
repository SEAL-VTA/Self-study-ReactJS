import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import React from 'react';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';
import Nav from './components/Navigation/nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';

// function App() {
const App = () => {

  return (
    <Router>
      <Nav />

      <Switch>
        
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <p>
                <span>Hello World React</span> with SEAL
              </p>
              <Home />
            </header>
            <div className='content-right'>
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>

        <Route path="/product">
          <Product />
        </Route>

        <Route path="/weather">
          <Weather />
        </Route>

        <Route path="/otp">
          <OTP />
        </Route>

        <Route path="/about">
          <div>I'm SEAL</div>
        </Route>

        <Route path="*">
          <div>404 NOT FOUND</div>
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
