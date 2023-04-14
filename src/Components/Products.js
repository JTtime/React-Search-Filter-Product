import React, {useState, useEffect, useContext} from "react";
import {MyContext} from "./MyContext";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default function Products() {
    const {
        productsData,
        setProductsData,
        filteredData,
        setFilteredData
      } = useContext(MyContext);
      const [favorite, setFavorite] = useState([]);

      function handleHeartClick(id) {
        if (favorite.includes(id)) {
          setFavorite(favorite.filter((i) => i !== id));
        }
        else {
          setFavorite([...favorite, id]);
        }

      }

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
                       <div className="image-container" >
                        <img
                          src={ele.image}
                          alt={ele.title}
                          className="thumbnail"
                          data-title="Hello, world!"
                          />
                          <div className="viewProductBanner">VIEW PRODUCT</div>
                          <div className="heart" onClick={()=> handleHeartClick(ele.id)}>                      
                      {
                        favorite.includes(ele.id) ? <AiFillHeart className="clickred"/> : <AiOutlineHeart/>
                        
                      }
                          </div>

                          
                        </div>
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