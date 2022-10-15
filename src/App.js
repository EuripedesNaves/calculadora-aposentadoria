import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Result } from './pages/Result';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;
