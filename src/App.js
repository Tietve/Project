import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import Footerheader from "./footerheader";
import EventDetail from "./EventDetail";
import Cart from "./Cart"
import Checkout from "./Checkout"

const App = () => {
    return (
        <Router>
            <nav>
                {/* Link điều hướng giữa các trang */}
                <Link to="/HomePage">Home</Link>
                <Link to="/footerheader">navfoot</Link>
                <Link to="/EventDetail">eventdetail</Link>
                <Link to="/Cart">cart </Link>
            </nav>
            <Routes>
                {/* Định tuyến các trang */}
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/footerheader" element={<Footerheader />} />
                <Route path="/eventdetail" element={<EventDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
