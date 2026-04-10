import React, { useEffect, useState } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";

const VerifyItems = () => {
  const [products, setProducts] = useState([]);
  const [reviewInput, setReviewInput] = useState({});
  const [loading, setLoading] = useState(true);

  const statusMap = {
    0: { text: "Pending", bg: "bg-yellow-500" },
    1: { text: "Approved", bg: "bg-green-500" },
    2: { text: "Rejected", bg: "bg-red-500" },
  };

  // FETCH
  const fetchProducts = async () => {
    try {
      const res = await axios.get(__productapiurl + "fetch");
      setProducts(res.data.info || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // STATUS UPDATE
  const updateStatus = async (id, status) => {
    await axios.put(__productapiurl + `status/${id}`, { status });
    fetchProducts();
  };

  // REVIEW UPDATE
  const addReview = async id => {
    await axios.put(__productapiurl + `review/${id}`, {
      adminReview: reviewInput[id] || "",
    });
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-28 px-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400">
          Admin Product Verification
        </h1>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-400 animate-pulse">
          Loading products...
        </p>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-sm">
          {/* HEAD */}
          <thead className="bg-gray-800 text-yellow-400 sticky top-0 z-10">
            <tr>
              <th className="p-3 border border-gray-700 text-center">#</th>
              <th className="p-3 border border-gray-700 text-center">Title</th>
              <th className="p-3 border border-gray-700 text-center">
                Category
              </th>
              <th className="p-3 border border-gray-700 text-center">Price</th>
              <th className="p-3 border border-gray-700 text-center">PDF</th>
              <th className="p-3 border border-gray-700 text-center">Status</th>
              <th className="p-3 border border-gray-700 text-center">Review</th>
              <th className="p-3 border border-gray-700 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {products.map((p, index) => (
              <tr
                key={p._id}
                className="hover:bg-gray-800 transition duration-200"
              >
                <td className="p-3 border border-gray-700 text-center">
                  {index + 1}
                </td>

                <td className="p-3 border border-gray-700 text-center font-semibold">
                  {p.title}
                </td>

                <td className="p-3 border border-gray-700 text-center">
                  {p.catnm}
                </td>

                <td className="p-3 border border-gray-700 text-center text-green-400 font-bold">
                  ₹{p.price}
                </td>

                {/* PDF */}
                <td className="p-3 border border-gray-700 text-center space-x-2">
                  <a
                    href={`http://localhost:3000/assets/uploads/products/${p.filename}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 px-2 py-1 rounded text-xs"
                  >
                    View
                  </a>

                  <a
                    href={`http://localhost:3000/assets/uploads/products/${p.filename}`}
                    download
                    className="bg-yellow-400 text-black px-2 py-1 rounded text-xs"
                  >
                    Download
                  </a>
                </td>

                {/* STATUS */}
                <td className="p-3 border border-gray-700 text-center">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      statusMap[p.status]?.bg || "bg-gray-500"
                    }`}
                  >
                    {statusMap[p.status]?.text}
                  </span>

                  <div className="flex justify-center gap-2 mt-2">
                    <button
                      onClick={() => updateStatus(p._id, 1)}
                      className="bg-green-600 px-2 py-1 text-xs rounded"
                    >
                      ✔
                    </button>
                    <button
                      onClick={() => updateStatus(p._id, 0)}
                      className="bg-yellow-500 px-2 py-1 text-xs rounded"
                    >
                      ?
                    </button>
                    <button
                      onClick={() => updateStatus(p._id, 2)}
                      className="bg-red-600 px-2 py-1 text-xs rounded"
                    >
                      ✖
                    </button>
                  </div>
                </td>

                {/* REVIEW */}
                <td className="p-3 border border-gray-700 text-center">
                  <textarea
                    className="w-full p-1 text-xs bg-gray-700 rounded"
                    placeholder="Write review..."
                    value={reviewInput[p._id] || ""}
                    onChange={e =>
                      setReviewInput({
                        ...reviewInput,
                        [p._id]: e.target.value,
                      })
                    }
                  />

                  {p.adminReview && (
                    <p className="text-yellow-400 text-xs mt-1">
                      {p.adminReview}
                    </p>
                  )}
                </td>

                {/* ACTION */}
                <td className="p-3 border border-gray-700 text-center">
                  <button
                    onClick={() => addReview(p._id)}
                    className="bg-yellow-500 text-black px-3 py-1 rounded text-xs"
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerifyItems;
