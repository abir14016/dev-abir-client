import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home/Home';
// import darkBG from './assests/images/backgrounds/dark-bg.svg';
// import lightBG from './assests/images/backgrounds/light-bg.svg';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Resume from './Pages/Home/Resume/Resume';
import Works from './Pages/Home/Works/Works';
import Blogs from './Pages/Home/Blogs/Blogs';
import Contact from './Pages/Home/Contact/Contact';
import AllBlogs from './Pages/Home/Blogs/AllBlogs/AllBlogs';
import WebBlogs from './Pages/Home/Blogs/WebBlogs/WebBlogs';
import ProgrammingBlogs from './Pages/Home/Blogs/ProgrammingBlogs/ProgrammingBlogs';
import GithubBlogs from './Pages/Home/Blogs/GithubBlogs/GithubBlogs';

function App() {
  return (
    <Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/works' element={<Works></Works>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>
          <Route index element={<AllBlogs></AllBlogs>}></Route>
          <Route path='web-blogs' element={<WebBlogs></WebBlogs>}></Route>
          <Route path='programming-blogs' element={<ProgrammingBlogs></ProgrammingBlogs>}></Route>
          <Route path='github-blogs' element={<GithubBlogs></GithubBlogs>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </Header>
  );
}

export default App;
