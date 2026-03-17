import { useEffect, useState } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";

export default function ShowProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const statusMap = {
    0: { text: "Pending", bg: "bg-yellow-500" },
    1: { text: "Approved", bg: "bg-green-500" },
    2: { text: "Rejected", bg: "bg-red-500" },
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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-bold text-yellow-400">Your Products</h1>

        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-400 animate-pulse">
          Loading products...
        </p>
      )}

      {/* Empty */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-400">No products found</p>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-sm">
          {/* Head */}
          <thead className="bg-gray-800 text-yellow-400 sticky top-0 z-10">
            <tr>
              <th className="p-3 border border-gray-700 text-center">#</th>
              <th className="p-3 border border-gray-700 text-center">Title</th>
              <th className="p-3 border border-gray-700 text-center">
                Description
              </th>
              <th className="p-3 border border-gray-700 text-center">Price</th>
              <th className="p-3 border border-gray-700 w-32 text-center">
                Status
              </th>
              <th className="p-3 border border-gray-700 w-48 text-center">
                Download Product Details
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800 transition duration-200"
              >
                <td className="p-3 border border-gray-700 text-center">
                  {index + 1}
                </td>

                <td className="p-3 border border-gray-700 text-center font-semibold">
                  {product.title}
                </td>

                <td className="p-3 border border-gray-700 text-center text-gray-400 max-w-[250px] break-words">
                  {product.description}
                </td>

                <td className="p-3 border border-gray-700 text-center text-green-400 font-bold">
                  ₹{product.price || "---"}
                </td>

                <td className="p-3  border border-gray-700">
                  <div className="flex items-center justify-center gap-3">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        statusMap[product.status]?.bg || "bg-gray-500"
                      }`}
                    >
                      {statusMap[product.status]?.text || "---"}
                    </span>
                  </div>
                </td>
                <td className="p-3 mx-0 border border-gray-700 text-center">
                  <button className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold hover:bg-yellow-500 transition text-sm">
                    Download
                  </button>
                  {/* <DownloadButton /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
