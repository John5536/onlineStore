import Product from "./product";
import "./styles/catalog.css";
import{useState} from 'react'

const dummyData = [
   {"title": "orange",
    "category":  "fruit",
    "price": 15.99,
    "image": "/images/oranges.png",
    "_id": "45",
   },
   {"title": "strawberry",
    "category":  "fruit",
    "price": 4.90,
    "image": "/images/strawberry.png",
    "_id": "49",
   },
   {"title": "melon",
    "category":  "fruit",
    "price": 10.67,
    "image": "/images/melon.png",
    "_id": "40",
   }
    
];

const dummyCategories = ["fruit", "vegetables","beverages", "meat"]

function Catalog(){
    const [allProducts ,setAllProducts] = useState(dummyData);
    const [categories, setCategories] = useState(dummyCategories);
    return(
        <div className="catalog page">
            <h1>Check out the amazing catalog</h1>
            <div className="filter">
            {categories.map(cat => <button className="btn btn-sm btn-primary">{cat}</button>)}
            </div>
            {
                allProducts.map( prod => <Product data={prod} />)
            }
            
        </div>
    );
}
export default Catalog;
