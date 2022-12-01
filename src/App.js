import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import React from 'react';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import 'react-image-lightbox/style.css';

// function App() {
const App = () => {

  return (
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
        <AddNewProduct/>
        <hr/> 
        <Product/>
      </div>
    </div>
  );
}

export default App;
