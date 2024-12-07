// App.js
import React from 'react';
import HeroImage from "./component/Eventdetail/HeroImage";
import footer from "./component/common/footer";
import navbar from "./component/common/navbar";
import Footer from "./component/common/footer";
import Navbar from "./component/common/navbar";
import Ticketinfo from "./component/Checkout/Ticketinfo";


const EventDetail = () => {
    return(
        <div >
            <Navbar />
            <Ticketinfo />

            <Footer />
        </div>
    )

}

export default EventDetail;
