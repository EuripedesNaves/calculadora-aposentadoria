import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Results } from './components/Results';
import { Print } from './components/Print';
import { Charts } from './components/Charts';
import { Home } from './components/Home';

const App = () => {
  return (
    <div className="App">
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/result' element={<Results/>} />
        <Route path='/result/charts' element={<Charts/>} />
        <Route path='/result/print' element={<Print/>} />
      </Routes>
    </div>
  );
}

export default App;
