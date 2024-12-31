import QuantityPicker from "./quantityPicker";
import "./styles/product.css"
function Product(){
    return (
        
            <div className="product">
                <img src="https://picsum.photos/200" alt="" />
                <h3>Product 1</h3>

                <label>99.99</label>
                <QuantityPicker></QuantityPicker>
            </div>
            
        
    )
}

export default Product;