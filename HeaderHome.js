import React from "react";
import { Link } from "react-router-dom";
import HeaderHomes from "./HeaderHomes.css";
window.addEventListener('resize', function() {
    let image = document.querySelector('.image');
    let scaleFactor = window.innerWidth / 1920; // Giả sử kích thước ban đầu là 1920px
    image.style.transform = 'scale(' + scaleFactor + ')';
});


const HeaderHome = ({ image1, image2 }) => {
    return (
        <div>

            <div className="HeroImg"/>

            <div className="item-container">
                <div className="item">
                    <Link className="link" to="/">My tickets</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Music</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Sports</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Stage and art</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Talkshow</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/">Login</Link>
                </div>
            </div>


            <div style={{width: 34.44, height: 34.44, left: 177, top: 25, position: 'absolute'}}>
                <div style={{
                    width: 12.15,
                    height: 4.28,
                    left: 12.52,
                    top: 2.87,
                    position: 'absolute',
                    background: 'white'
                }}></div>
                <div style={{
                    width: 27.38,
                    height: 22.31,
                    left: 3.53,
                    top: 9.25,
                    position: 'absolute',
                    background: 'white'
                }}></div>
            </div>
            <div className="ticket-package">
                SBS MTV The Kpop Show Ticket Package
            </div>

            <div className="ticket-description">
                Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop
                recording.
            </div>

            <div className="ticket-button">
                <div className="button1-background"></div>
                <div className="button1-text">Get Ticket</div>
            </div>

            <div className="learn-more-button">
                <div className="button2-background"></div>
                <div className="button2-text">Learn More</div>
            </div>
            2

            <div className="image-container">
                <div className="blur-overlay"></div>
                <img className="image" src="image1.jpg" alt="Image"/>
            </div>

        </div>



)
}
export default HeaderHome;