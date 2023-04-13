import React, {useState, useEffect, useContext} from "react";
import MyContext from "./MyContext";

export default function Products() {
    const [productsData, setProductsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    async function fetchData() {
        const data = await fetch("https://fakestoreapi.com/products").then((res) =>
          res.json()
        );
    
        setProductsData(data);
      }
      useEffect(() => {
        fetchData();
      }, []);

      useEffect(() => {
        setFilteredData(productsData);
        console.log(filteredData);
      }, [productsData]);


    return (
        <>
        <div>
        <div className="productsList">
          {filteredData.map((ele) => (
            <div className="productCard" key={ele.id}>
               <div class="card">
                    <img
                      src={ele.image}
                      alt={ele.title}
                      className="thumbnail"
                    />
                    <div className="card_caption">
                      <div>{ele.title}</div>
                      <div>Price: $ {ele.price}</div>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </div>
        </>
    )
}