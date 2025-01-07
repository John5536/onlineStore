import Product from "./product";
import "./styles/catalog.css";
import Product from "./product";

function Catalog(){
    return(
        <div className="catalog page">
            <h1>Check out the amazing catalog</h1>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    )
}
export default Catalog;
