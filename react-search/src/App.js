import './App.css';
import React from 'react';
import Search from './Components/Search/Search';
import bookData from './Data/bookData';
// import Navbar from './Components/NavBar/Navbar';



function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
      <Search details={bookData} />
    </div>

  );
}

export default App;
