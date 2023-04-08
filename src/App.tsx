<<<<<<< Updated upstream
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
=======
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListMark from './ListMark';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/mark-list' Component={ListMark} />
          <Route path='/home' Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> Stashed changes
  );
}

export default App;
