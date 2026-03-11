import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { __categoryapiurl, __subcategoryapiurl } from "../API_URL";

function AddSubCategory() {
  const navigate = useNavigate();

  const [output, setOutput] = useState("");
  const [catnm, setcatnm] = useState("");
  const [subcatnm, setsubcatnm] = useState("");
  const [File, setFile] = useState(null);
  const [cList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get(__categoryapiurl + "fetch")
      .then(response => {
        setCategoryList(response.data.info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!catnm || !subcatnm || !File) {
      setOutput("All fields are required");
      return;
    }

    const formdata = new FormData();
    formdata.append("catnm", catnm);
    formdata.append("subcatnm", subcatnm);
    formdata.append("caticon", File);

    axios
      .post(__subcategoryapiurl + "save", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(response => {
        setOutput("SubCategory added successfully");
        setcatnm("");
        setsubcatnm("");
        setFile(null);
      })
      .catch(error => {
        setOutput("SubCategory not added successfully");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[420px]">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Add Pawn Shop SubCategory
        </h2>

        {output && <p className="text-center text-blue-500 mb-4">{output}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Category Name</label>
            <select
              onChange={e => setcatnm(e.target.value)}
              value={catnm}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Category</option>
              {cList.map((row, index) => (
                <option key={index} value={row.catnm}>
                  {row.catnm}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-1">SubCategory Name</label>
            <input
              type="text"
              value={subcatnm}
              onChange={e => setsubcatnm(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
              placeholder="Enter subcategory name"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">SubCategory Icon</label>
            <input
              type="file"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
          >
            Add SubCategory
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubCategory;
