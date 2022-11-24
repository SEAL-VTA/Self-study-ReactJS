import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import React from 'react';

// function App() {
const App = () => {

  const x = [1, 2, 3, { name: "SEAL" }];

  return (
    <div className="App" style={{border: '1px solid red'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World React with x = {JSON.stringify(x)}
          {console.log('value x = ', x)}
        </p>
        <TodoList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
