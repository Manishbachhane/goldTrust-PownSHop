import { useState, useEffect } from "react";
import axios from "axios";
import { __subcategoryapiurl } from "../API_URL";
import { Link, useParams } from "react-router-dom";

function ViewSubCategory() {
  const params = useParams();
  const [scList, setSubCategoryList] = useState([]);
 
  useEffect(() => {
    axios
      .get(__subcategoryapiurl + "fetch", {
        params: { catnm: params.cnm },
      })
      .then(response => {
        setSubCategoryList(response.data.info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
        SubCategories → {params.cnm}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {scList.map((row, index) => (
          <Link
            key={index}
            to=""
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 text-center"
          >
            <img
              src={`../assets/uploads/subcaticons/${row.subcaticonnm}`}
              className="h-24 mx-auto object-contain"
            />

            <p className="mt-4 text-lg font-semibold text-gray-700">
              {row.subcatnm}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ViewSubCategory;
