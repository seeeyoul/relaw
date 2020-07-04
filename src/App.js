import React from 'react';
import './App.css';
import Routers from './route';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routers/>
    </div>
  );
}

export default App;
