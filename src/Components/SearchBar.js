import { TextField, InputAdornment, } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, {useState, useContext, useEffect} from "react";
import { MyContext } from "./MyContext";

export default function SearchBar() {
  const {
    productsData,
    setProductsData,
    filteredData,
    setFilteredData
  } = useContext(MyContext);
  
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
      setSearchTerm(e.target.value);
    }

    const FilterData = () => {
      const dataFilter = productsData.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(dataFilter);
    };
  
    useEffect(() => {
      FilterData();
    }, [searchTerm]);
  
    return (
        <>
       <div className="searchBar">
       <TextField
        className="search-desktop"
        size="small" value={searchTerm}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        placeholder="Search for items/categories"
        name="search"
        onChange={(e) => handleSearch(e)}
      />
        
      </div>
        </>
    )
}