import React from "react";
import Products from "./Products";
import SearchBar from "./SearchBar";
import "./components.css";

export default function Main() {
    return (
        <>
        <div className="mainContent">
            <SearchBar/>
            <Products/>
            
        </div>
        </>
    )
}