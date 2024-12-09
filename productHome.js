import React from "react";
import './ProductHome.css';
const events = [
    { month: "APR", day: "14", title: "Wonder Girls 2010 Wonder Girls" },
    { month: "MAY", day: "21", title: "Summer Vibes Concert" },
    { month: "JUN", day: "10", title: "Music Festival 2024" },
    { month: "JUN", day: "10", title: "Music Festival 2024" },
    { month: "JUN", day: "10", title: "Music Festival 2024" },
    { month: "JUN", day: "10", title: "Music Festival 2024" },
    // Bạn có thể thêm sự kiện ở đây
];

function EventList() {
    return (
        <div>
            <div className="header">
                <h1 className="header-text">Upcoming Events</h1>
                <div className="box-container">
                    <div className="box">
                        <span className="text">See All</span>
                        <div className="arrow"></div>
                    </div>
                    <div className="box">
                        <span className="text">Upcoming Events</span>
                        <div className="arrow"></div>
                    </div>
                    <div className="box">
                        <span className="text">New Arrivals</span>
                        <div className="arrow"></div>
                    </div>
                </div>

            </div>
            <div className="event-list">
                {events.map((event, index) => (
                    <div className="fixed-container" key={index}>
                        <img className="image3" src="https://via.placeholder.com/343x197" alt="Event"/>
                        <div className="overlay">
                            <div className="content">
                                <div className="date-container">
                                    <div className="month">{event.month}</div>
                                    <div className="day">{event.day}</div>
                                </div>
                                <div className="title">{event.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default EventList;

const ProductHome = () => {
    return (
        <div>
            <div className="box" style={{left: 530}}>
                <div className="text">Weekdays</div>
                <div className="arrow"></div>
            </div>
            <div className="box" style={{left: 730}}>
                <div className="text">Event Type</div>
                <div className="arrow"></div>
            </div>
            <div className="box" style={{left: 918}}>
                <div className="text">Any Category</div>
                <div className="arrow"></div>
            </div>
            <div className="header-text">Upcoming Events</div>

        </div>


    )

};

