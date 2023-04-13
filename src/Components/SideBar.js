import React, { useEffect, useState, useContext }  from "react";
import "./components.css";
import { MyContext } from "./MyContext";

export default function SideBar() {
    const {
        filteredData,
        setFilteredData,
        productsData,
        setProductsData
      } = useContext(MyContext);
    const [checkBoxes, setCheckBoxes] = useState([]);
    const [categories, setCategories] = useState([]);
    const [priceIsChecked, setPriceIsChecked] = useState({
      checkbox1: false,
      checkbox2: false
    });

    //Creating Categories for displaying in sidebar

    useEffect(() => {        
        let categoryList = productsData.map((item) => item.category);
        const uniqueCategories = [...new Set(categoryList)];
        setCategories(uniqueCategories);
        console.log(categories);
      }, [productsData]);

      function handleCheckboxChange(e, category) {
        //Making checkboxes as controlled component
        if (e.target.checked) {
          setCheckBoxes([...checkBoxes, category]);
        } else {
          setCheckBoxes(checkBoxes.filter((i) => i !== category));
        }
      }

      useEffect(() => {
        //Filtering data based on selected checkboxes
        const dataFilter = productsData.filter((product) =>
          checkBoxes.includes(product.category)
        );
        if (checkBoxes.length > 0) {
          setFilteredData(dataFilter);
        } else {
          setFilteredData(productsData);
        }
        console.log(checkBoxes);
      }, [checkBoxes]);

      function handlePriceCheckBoxChange(event) {
        const { name, checked } = event.target;
        setPriceIsChecked({
          ...priceIsChecked,
          [name]: checked
        });
      }
      useEffect(() => {
        const dataFilter = priceIsChecked.checkbox1
          ? productsData.filter((product) => product.price < 100)
          : priceIsChecked.checkbox2
          ? productsData.filter(
              (product) => product.price >= 100 && product.price < 500
            )
          : productsData;
    
        setFilteredData(dataFilter);
      }, [priceIsChecked]);
    

    return (
        <>
        <div className="sideBar">
            <div>Search Results</div>
            <div className="sideBarContent">
                <div className="categoryPane">
                <div className="sideTitles">CATEGORY</div>
                {categories.map((ele, idx) => (
            <div className="checks" key={idx}>
              <label>
                <input
                  type="checkbox"
                  checked={checkBoxes.includes(ele)}
                  onChange={(e) => handleCheckboxChange(e, ele)}
                  value={ele}
                />
                {ele}
              </label>
            </div>
          ))}

                </div>
                <hr/>
                <div className="priceRangePane">
                    <div className="sideTitles"> PRICE RANGE</div>
                    <label className="sideBarSubItems">
            <input
              type="checkbox"
              name="checkbox1"
              checked={priceIsChecked.checkbox1}
              onChange={(e) => handlePriceCheckBoxChange(e)}
            />
            under 100
          </label>
          <label className="sideBarSubItems">
            <input
              type="checkbox"
              name="checkbox2"
              checked={priceIsChecked.checkbox2}
              onChange={(e) => handlePriceCheckBoxChange(e)}
            />
            100-500
          </label>
                </div>
                <hr/>
                <div className="ratingsPane">
                    <div className="sideTitles">RATINGS</div>
                </div>
            

            </div>
        </div>
        </>
    )
}