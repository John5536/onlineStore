import { useContext } from 'react';
import './styles/navbar.css'

import{Link} from 'react-router-dom';
import GlobalContext from '../state/globalContext';

function Navbar() {

        const user = useContext(GlobalContext).user;
        const cart = useContext(GlobalContext).cart;
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Fruit store</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        
                    </ul>
                    <div className="d-flex" role="search">

                        <Link className ='btn btn-outline-light' to="/user">{user.name}</Link>




                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <Link className="btn btn-outline-light" to="/cart">
                        {cart.length}
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;

