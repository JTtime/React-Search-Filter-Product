import React, {useState} from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {


    }
    return (
        <>
       <div className="searchBar">
        <div>
          <input
            type="text"
            
          />
        </div>
      </div>
        </>
    )
}