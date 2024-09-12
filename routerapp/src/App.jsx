import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Jeans from './components/Jeans';
import Shirts from './components/Shirts';
import Users from './components/Users';
import Usersdetails from './components/Usersdetails';
import Admin from './components/Admin';
import Teacher from './components/Teacher';
import Search from './components/Search';


// root configrate
function App() {

  return (

    <div className="App">
      <BrowserRouter>
        {/* ye Static Routes hn */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />

          {/* ye product ek parents h or ye do oske child hn */}
           <Route path='/products' element={<Products />}>
            {/* mujy apne product k page mai ye index wala component open mily ga */}
            <Route index element={<Shirts />} ></Route>
           {/* isko bolty hn relative path */}
            <Route path='shirts' element={<Shirts />} />
            <Route path='jeans' element={<Jeans />} />
          </Route> 
          {/* isko kety hn dynamic Routing  colum id all numbers hn multiple users k liye ye kam kre ga */}
          <Route path='/users' element={<Users />} >
            <Route path=':id' element={<Usersdetails />} />
            <Route path='admin' element={<Admin />} />
            <Route path='teacher' element={<Teacher/>}/>
          </Route>
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
