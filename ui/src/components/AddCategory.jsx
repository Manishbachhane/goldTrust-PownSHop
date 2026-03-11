import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { __categoryapiurl } from "../API_URL";

function AddCategory() {
  const navigate = useNavigate();

  const [catName, setCatName] = useState("");
  const [catIcon, setCatIcon] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = e => {
    setCatIcon(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!catName || !catIcon) {
      setMessage("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", catIcon);

    axios
      .post(__categoryapiurl + "save", formData)
      .then(res => {
        setMessage("Category added successfully");
        setCatName("");
        setCatIcon(null);
      })
      .catch(err => {
        setMessage("Category not added");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Add Pawn Shop Category
        </h2>

        {message && <p className="text-center mb-4 text-blue-500">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Category Name</label>
            <input
              type="text"
              value={catName}
              onChange={e => setCatName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter category name"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Category Icon</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
