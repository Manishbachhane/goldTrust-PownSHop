import { useState, useEffect } from "react";
import axios from "axios";
import {
  __productapiurl,
  __categoryapiurl,
  __subcategoryapiurl,
} from "../../API_URL";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [catnm, setCatnm] = useState("");
  const [subcatnm, setSubcatnm] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filename, setFilename] = useState(null);
  const [output, setOutput] = useState("");
  const [cList, setCategoryList] = useState([]);
  const [subcatList, setSubcatList] = useState([]);

  // Category Fetch
  useEffect(() => {
    // console.log(localStorage.getItem("UserId"));
    axios
      .get(__categoryapiurl + "fetch")
      .then(res => {
        setCategoryList(res.data.info);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // SubCategory Fetch
  useEffect(() => {
    if (catnm != "") {
      axios
        .get(__subcategoryapiurl + "fetch", { params: { catnm } })
        .then(res => {
          setSubcatList(res.data.info);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [catnm]);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("catnm", catnm);
    formData.append("subcatnm", subcatnm);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("filename", filename);
    formData.append("userId", localStorage.getItem("UserId"));

    try {
      await axios.post(__productapiurl + "save", formData);
      setOutput("Product added successfully (Waiting for approval)");
      // Clear form fields
      setTimeout(() => {
        setOutput("");
        setTitle("");
        setCatnm("");
        setSubcatnm("");
        setDescription("");
        setPrice("");
        setFilename(null);
      }, 2000);
    } catch (err) {
      setOutput("Product not added", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-5">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-600">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Add Product
        </h2>

        {output && <p className="text-center text-green-400 mb-4">{output}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
          />

          {/* Category */}
          <select
            value={catnm}
            onChange={e => setCatnm(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
          >
            <option value="">Select Category</option>
            {cList.map((row, index) => (
              <option key={index} value={row.catnm}>
                {row.catnm}
              </option>
            ))}
          </select>

          {/* SubCategory */}
          <select
            value={subcatnm}
            onChange={e => setSubcatnm(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
          >
            <option value="">Select SubCategory</option>
            {subcatList.map((row, index) => (
              <option key={index} value={row.subcatnm}>
                {row.subcatnm}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Product Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
          />

          {/* <input
            type="file"
            onChange={e => setFilename(e.target.files[0])}
            className="w-full text-white"
          /> */}
  <div>
            {/* <label className="block text-gray-600 mb-1">SubCategory Icon</label> */}
            <input
              type="file"
                  onChange={e => setFilename(e.target.files[0])}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
