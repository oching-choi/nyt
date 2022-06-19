import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './pages/Header'
import Home from './pages/Home'
import Clip from './pages/Clip'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/clip' element={<Clip/>}/>
      </Routes>
    </>
  );
}

export default App;
