import React from 'react';
import Navbar from "./component/common/navbar";
import Paymentdetails from "./component/Checkout/Paymentdetails";
import Footer from "./component/common/footer";
import ProductDetail from "./component/Checkout/ProductDetail"; // Không cần bao bọc lại CartContext.Provider

const Checkout = () => {
    return (
        <div>
            <Navbar />
            <Paymentdetails />
            <Footer />
        </div>
    );
};

export default Checkout;
