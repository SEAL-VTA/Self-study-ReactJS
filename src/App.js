import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import React from 'react';
import AddNewProduct from './components/AddNewProduct';

// function App() {
const App = () => {

  const x = [1, 2, 3, { name: "SEAL" }];

  return (
    <div className="App">
      <header className="App-header content-left">
        <div style={{ textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Hello World React with x = {JSON.stringify(x)}
          {console.log('value x = ', x)}
        </p>
        <Home />
      </header>
      <div className='content-right'>
        <AddNewProduct/>
      </div>
    </div>
  );
}

export default App;
