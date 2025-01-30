import { useState } from "react";
import GlobalContext from "../globalContext";

function GlobalProvider(props){
    const [cart, setCart] = useState ([]);
    const [user, setUSer] = useState ({});

    function addProductToCart(prod){
        console.log("Global Add", prod);
        let copy = [...cart];
        copy.push(prod);
        
    }
    function clearCart(){}
    function removeProductFromCart() {}

    return (
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart

        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;