import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
// import darkBG from './assests/images/backgrounds/dark-bg.svg';
// import lightBG from './assests/images/backgrounds/light-bg.svg';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </Header>
  );
}

export default App;
