import React from 'react';
import Navbar from "./component/common/navbar";
import Cart from "./component/ShoppingCart/Cart";
import Footer from "./component/common/footer";

const Checkout = () => {
    return(
        <div>
            <Navbar />
            <Cart />
            <Footer />
        </div>
    )

}

export default Checkout;