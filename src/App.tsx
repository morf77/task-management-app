import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/atom/icon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        asd
        <Icon name='star' className='fill-white' />
        asd
        <Icon name='document-filter' className='fill-white stroke-white' />

        <Icon name='task' className='fill-red-500 stroke-red-500' />


        <p className=''>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
