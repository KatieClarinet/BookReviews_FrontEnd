import './App.css';
import React from 'react';
import LandingPage from '../src/Components/LandingPage'
import Search from './Components/Search/Search';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
    <div className='App'>
    <NavBar />
    <LandingPage />
    <Search />
    </div>
    </>
  );
}

export default App;


