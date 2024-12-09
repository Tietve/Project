import React from "react";
import './SearchingHome.css';
const SearchingHome = () => {
    return (
<div className="search-box-container">
        <div className="custom-box">
            <div className="search-box">
                <div className="input-box">
                    <div className="label">Search Event</div>
                    <div className="divider"></div>

                </div>
                <div className="input-box">
                <div className="label">Place</div>
                    <div className="divider"></div>
                    <div className="editable-box" contentEditable="true"></div>
                </div>
                <div className="input-box">
                    <div className="label">Time</div>
                    <div className="divider"></div>

                </div>
            </div>
        </div>
</div>

    )
}
export default SearchingHome;