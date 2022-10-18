import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
import projectBG from './assests/images/backgrounds/project-bg.svg';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const divStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${projectBG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };
  return (
    <div className="App overflow-y-scroll" style={divStyle}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

// light bg
// <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#FFFEFE' width='1600' height='800'/><g fill-opacity='0.5'><polygon  fill='#eecee2' points='1600 160 0 460 0 350 1600 50'/><polygon  fill='#dd9fc6' points='1600 260 0 560 0 450 1600 150'/><polygon  fill='#cc6faa' points='1600 360 0 660 0 550 1600 250'/><polygon  fill='#bb408e' points='1600 460 0 760 0 650 1600 350'/><polygon  fill='#AA1072' points='1600 800 0 800 0 750 1600 450'/></g></svg>

// dark bg
//<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#000000' width='1600' height='800'/><g fill-opacity='0.22'><polygon  fill='#220314' points='1600 160 0 460 0 350 1600 50'/><polygon  fill='#440728' points='1600 260 0 560 0 450 1600 150'/><polygon  fill='#660a3c' points='1600 360 0 660 0 550 1600 250'/><polygon  fill='#880e50' points='1600 460 0 760 0 650 1600 350'/><polygon  fill='#AA1164' points='1600 800 0 800 0 750 1600 450'/></g></svg>
