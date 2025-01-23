import dataservice from "../services/dataservice";
import Product from "./product";
import "./styles/catalog.css";
import{useState} from 'react'
import { useEffect } from "react";





function Catalog(){
    const [allProducts ,setAllProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    function loadData(){
        const prods = dataservice.getProducts();
        setAllProducts(prods);
    }

    function handleCategory(cat){
        console.log("category clicked");
        setSelectedCategory(cat);
    }


    useEffect(function () {
        loadData();
    }, []);

    return(
        <div className="catalog page">
            <h1>Check out the amazing catalog</h1>
            <div className="filter">
                <button onClick={clearFilter} className="btn btn-sm btn-primary">All</button>
            {categories.map(cat => <button onClick={()=> handleCategory(cat)} className="btn btn-sm btn-primary">{cat}</button>)}
            </div>

            {
                allProducts.filter( prod => prod.category == selectedCategory || !selectedCategory ).map( prod => <Product data={prod} />)
            }
            
        </div>
    );
}
export default Catalog;
