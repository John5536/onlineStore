import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from'./components/catalog';
import Home from './components/home';
import About from './components/about';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
      
       <Footer></Footer>
       </div>
      </BrowserRouter>
       
      
       
       
      
   
    
  );
}

export default App;
