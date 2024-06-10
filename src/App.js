import './App.css';
import {Routes,Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Yatri from './components/Pages/Yatri';
import Tablechart from './components/SubPage/Tablechart';
import Journey from './components/SubPage/Journey';
import ChooseWay from './components/SubPage/ChooseWay';
import Details from './components/Pages/Details';
function App() {
  return (
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //     <Route path='/yatri' element={<Home />} />

    // </Routes>
    <>
    <Home/>
    <Yatri/>
    <Tablechart/>
    <Journey/>
      <ChooseWay/>
      <Details/>
    </>
  );
}

export default App;
