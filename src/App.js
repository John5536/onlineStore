import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       <h1>Hello world from react</h1>
       <Catalog></Catalog>
       <Product></Product>
       <Product></Product>
       <Product></Product>
       <Product></Product>
       <Footer></Footer>
       
       
      
    </div>
    
  );
}

export default App;
