import React from "react";
import "./components.css";

export default function SideBar() {
    return (
        <>
        <div className="sideBar">
            <div>Search Results</div>
            <div className="sideBarContent">
                <div className="categoryPane">
                <div>CATEGORY</div>

                </div>
                <div className="priceRangePane">
                    <div> Price Range</div>
                </div>
                <div className="ratingsPane">
                    <div>Ratings</div>
                </div>
            

            </div>
        </div>
        </>
    )
}