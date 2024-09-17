import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/atom/icon';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/template/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' element={<HomePage />} />
        <Route path='/update/:id' element={<HomePage />} />
        <Route path='/create' element={<HomePage />} />
      </BrowserRouter >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        asd
        <Icon name='star' className='fill-white' />
        asd
        <Icon name='document-filter' className='fill-white stroke-white' />

        <Icon name='task' className='fill-red-500 stroke-red-500' />


        
      </header>
    </div>
  );
}

export default App;
