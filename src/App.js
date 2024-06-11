import './App.css';
import Home from './components/Pages/Home';
import Yatri from './components/Pages/Yatri';
import Tablechart from './components/SubPage/Tablechart';
import Journey from './components/SubPage/Journey';
import ChooseWay from './components/SubPage/ChooseWay';
import Details from './components/Pages/Details';
import Footer from './components/SubPage/Footer';
function App() {
  return (
    <>
    <Home/>
    {/* <Yatri/> */}
    <Tablechart/>
    <Journey/>
      <ChooseWay/>
      <Details/>
      <Footer/>
    </>
  );
}

export default App;
