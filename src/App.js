import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Gym from './components/Gym'
import Coding from './components/Coding'
import Dating from './components/Dating'
import FightingGames from './components/FightingGames'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gym" element={<Gym/>}/>
        <Route path="/coding" element={<Coding/>}/>
        <Route path="/dating" element={<Dating/>}/>
        <Route path="/fighting-games" element={<FightingGames/>}/>
      </Routes>
    </div>
  );
}

export default App;
