import './App.css';

import React from 'react';
import Search from './Components/Search/Search';
import bookData from './Data/bookData';

function App() {
  return (
  
    <div className="App">
      <Search details={bookData} />
    </div>

  );
}

export default App;
