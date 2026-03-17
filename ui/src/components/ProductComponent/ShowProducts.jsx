import { useEffect } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";
import { useState } from "react";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  // const [status, setStatus] = useState("");

  const setStatus = {
    0: {
      text: "Pending",
      bg: "bg-yellow-500",
    },
    1: {
      text: "Approved",
      bg: "bg-green-500",
    },
    2: {
      text: "Rejected",
      bg: "bg-red-500",
    },
  };
  useEffect(() => {
    axios
      .get(__productapiurl + "fetch", {
        params: { userId: localStorage.getItem("UserId") },
      })
      .then(res => {
        setProducts(res.data.info || []);

        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-yellow-400">Your Products</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-400">Loading products...</p>
      )}

      {/* Empty */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-400">No products found</p>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 hover:scale-105 transition duration-300 "
          >
            {/* Image */}
            {/* <div className="h-40 bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-400">
              No Image
            </div> */}

            {/* Title and download button */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
              <span className="text-2xs cursor-pointer bg-blue-500 px-2 py-1 rounded">
                &#8595;
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-3">{product.description}</p>

            {/* Price + Button */}
            <div className="flex justify-between items-center">
              <span className="text-green-400 font-bold">
                ₹{product.price || "---"}
              </span>

              <div
                className={`px-3 py-1 rounded  ${setStatus[product.status]?.bg || "bg-gray-500"}`}
              >
                {setStatus[product.status]?.text || "---"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
