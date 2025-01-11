import { useState } from "react";
import "./styles/admin.css";

function Admin(){
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({ code: "", discount: "" });
    const [product, setProduct] = useState({ title: "", price: "", image: "", category: "" });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        let copy = { ...product };
        if (name === "title") {
            copy.title = text;
        } else if (name === "price") {
            copy.price = text;
        } else if (name === "image") {
            copy.image = text;
        } else if (name === "category") {
            copy.category = text;
        }
        setProduct(copy); // No additional slashes needed here
    }

    function saveProduct() {
        console.log(product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
        console.log("text changed", text);

        let copy = { ...coupon };
        if (name === "code") {
            copy.code = text;
        } else if (name === "discount") {
            copy.discount = text;
        }

        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="admin-page">
            <h1>Admin</h1>
            <div className="container">
                <div className="registerProduct">
                    <h3>Register Product</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="title" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="image" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" onBlur={handleProduct} name="price" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input type="text" className="form-control" onBlur={handleProduct} name="category" />
                        </div>
                        <div className="controlform">
                            <button type="button" className="btn btn-outline-primary" onClick={saveProduct} id="btnpress">
                                Register Product
                            </button>
                        </div>
                        <ul>
                            {allProducts.map(prod => <li key={prod.title}>{prod.title} - ${prod.price}</li>)}
                        </ul>
                    </form>
                </div>

                <div className="registerCoupon">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Code</label>
                            <input type="text" className="form-control" onBlur={handleCoupon} name="code" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input type="text" className="form-control" onBlur={handleCoupon} name="discount" />
                        </div>
                        <div className="controlform">
                            <button type="button" className="btn btn-outline-primary" onClick={saveCoupon} id="btnpress">
                                Save Coupon
                            </button>
                        </div>
                        <ul>
                            {allCoupons.map(cp => <li key={cp.code}>{cp.code} - {cp.discount}%</li>)}
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin;
