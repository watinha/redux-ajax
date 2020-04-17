import React from 'react';
import CatFinder from './features/cat/CatFinder';
import CatFavorite from './features/cat/CatFavorite';
import CatLoader from './features/cat/CatLoader';


function App() {
  return (
    <div className="App">
      <CatFavorite />
      <CatFinder />
      <CatLoader />
    </div>
  );
}

export default App;
