import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import LandingPage from '../src/Components/LandingPage'
import Search from './Components/Search/Search';


function App() {
  return (
    <>
    <div className='App'>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
    <LandingPage />
    <Search />
    </div>
    </>
  );
}

export default App;


