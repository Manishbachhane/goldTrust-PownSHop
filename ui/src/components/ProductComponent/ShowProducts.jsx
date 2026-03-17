import React, { use, useEffect } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";
import { useState } from "react";
export default function ShowProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(__productapiurl + "fetch",{params:{userId:localStorage.getItem("UserId")}})
      .then(res => {
        console.log(res.data.info.discription);
        setProducts(res.data.info);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="text-center py-16 pt-20 bg-gray-900 text-white min-h-screen">
      ShowProducts
      {products.map((product, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-300">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
