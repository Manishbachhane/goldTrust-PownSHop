import React, { useEffect, useState } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";

const VerifyItems = () => {
  const [products, setProducts] = useState([]);
  const [reviewInput, setReviewInput] = useState({});

  // FETCH
  const fetchProducts = async () => {
    try {
      const res = await axios.get(__productapiurl + "fetch");
      setProducts(res.data.info);
    } catch (err) {
      console.error(err);
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
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        🏦 Pawn Shop Admin Panel
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left bg-gray-800 rounded-xl overflow-hidden">
          {/* HEADER */}
          <thead className="bg-gray-700 text-yellow-300">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">PDF</th>
              <th className="p-3">Status</th>
              <th className="p-3">Review</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-b border-gray-700">
                {/* TITLE */}
                <td className="p-3">{p.title}</td>

                {/* CATEGORY */}
                <td className="p-3">{p.catnm}</td>

                {/* PRICE */}
                <td className="p-3">₹{p.price}</td>

                {/* PDF ACTIONS */}
                <td className="p-3 flex gap-2">
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
                    className="bg-green-500 px-2 py-1 rounded text-xs"
                  >
                    Download
                  </a>
                </td>

                {/* STATUS */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      p.status === 1 ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {p.status === 1 ? "Approved" : "Pending"}
                  </span>

                  <div className="flex gap-1 mt-2">
                    <button
                      onClick={() => updateStatus(p._id, 1)}
                      className="bg-green-700 px-2 py-1 text-xs rounded"
                    >
                      ✔
                    </button>

                    <button
                      onClick={() => updateStatus(p._id, 0)}
                      className="bg-red-700 px-2 py-1 text-xs rounded"
                    >
                      ✖
                    </button>
                  </div>
                </td>

                {/* REVIEW */}
                <td className="p-3">
                  <textarea
                    placeholder="Write review"
                    className="w-full p-1 text-xs bg-gray-700 rounded"
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
                <td className="p-3">
                  <button
                    onClick={() => addReview(p._id)}
                    className="bg-yellow-500 text-black px-2 py-1 rounded text-xs"
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
