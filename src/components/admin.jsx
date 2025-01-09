import "./styles/admin.css";

function Admin(){
    return(
        <div className="admin-page">

            <h1>Admin</h1>
            <div className="container">
                <div className="registerProduct">
                    <h3>Register Product</h3>
                <form>
                    <div class="mb-3">
                        <label  class="form-label">Title</label>
                        <input type="text" class="form-control" />
                       
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Image</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Price</label>
                        <input type="number" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">category</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="controlform">
                    <button type="submit" class="btn btn-outline-primary" id="btnpress" >Register product</button>
                    </div>
                    </form>
                </div>

                <div className="registerCoupon">
                <form>
                    <div class="mb-3">
                        <label  class="form-label">code</label>
                        <input type="text" class="form-control" />
                       
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Discount</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div className="controlform">
                    <button type="submit" class="btn btn-outline-primary" id="btnpress" >Save Coupon</button>
                    </div>
                    </form>
                </div>
            </div>

        </div>

      

    )
}

export default Admin;