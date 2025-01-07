import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from '.components/footer';
import Catalog from'.components/catalog';
import Home from '.components/home';
import About from '.components/about';

import { browserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/disy/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.mion.js";

function App() {
  return (
    
      <browserRouter>
      <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
      
       <Footer></Footer>
       </div>
      </browserRouter>
       
      
       
       
      
   
    
  );
}

export default App;
