import QuantityPicker from "./quantityPicker";
import "./styles/product.css"
function Product(props){

    function onAdd() {
        console.log("test");
    }
    return (
        
            <div className="product">
                <img src={props.data.image} alt="" />
                <h3>{props.data.title}</h3>


                <div className="parent">
                <label></label>
                <label>${props.data.price}</label>
                </div>

                <div className="parent">
                <QuantityPicker></QuantityPicker>
                <button className='btn btn-primary' onClick={onAdd}>Add</button>
                </div>
            </div>
            
        
    )
}

export default Product;