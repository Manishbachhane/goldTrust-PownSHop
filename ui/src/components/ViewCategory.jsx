import { useState, useEffect } from "react";
import axios from "axios";
import { __categoryapiurl } from "../API_URL";
import { Link } from "react-router-dom";

function ViewCategory() {
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

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
        Pawn Shop Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cList.map((row, index) => (
          <Link
            key={index}
            to={`/viewsubcategory/${row.catnm}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 text-center"
          >
            <img
              src={`assets/uploads/caticons/${row.caticonnm}`}
              className="h-24 mx-auto object-contain"
            />

            <p className="mt-4 text-lg font-semibold text-gray-700">
              {row.catnm}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ViewCategory;
