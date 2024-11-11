import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrendingOutfits = () => {
  const [products, setProducts] = useState([]);
  const baseURL = "http://localhost:8080/";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PATH}product/products`
        );
        const latestProducts = response.data.reverse().slice(0, 4); // Get the latest 4 products
        // console.log(baseURL + latestProducts.imgs[0])
        setProducts(latestProducts);
        console.log(latestProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-2xl font-bold mb-6">Trending Outfits</h1>
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="outfit-item border-[1px] border-black border-collapse"
          >
            <Link to={`/product/${product._id}`} state={{ product }} >
              {" "}
              {/* Link to detail page */}
              <img
                src={`${baseURL}${product.imgs[0]}`}
                alt={product.name}
                // onError={(e) => {
                //   e.target.src = "path/to/placeholder.jpg";
                // }}
                className="w-[200px] h-[300px] object-cover mb-4"
              />
              {/* console.log(`${baseURL}${product.imgs[0]}`); */}
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </Link>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingOutfits;
