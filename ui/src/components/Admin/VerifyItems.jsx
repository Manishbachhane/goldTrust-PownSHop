// import React, { useState } from "react";

// const VerifyItems = () => {

//   const [products, setProducts] = useState([
//     {
//       _id: "1",
//       title: "Gold Ring",
//       price: 15000,
//       userName: "Manish",
//       image: "https://via.placeholder.com/300",
//       status: 0,
//     },
//     {
//       _id: "2",
//       title: "iPhone 13",
//       price: 40000,
//       userName: "Rahul",
//       image: "https://via.placeholder.com/300",
//       status: 1,
//     },
//     {
//       _id: "3",
//       title: "Bike",
//       price: 60000,
//       userName: "Amit",
//       image: "https://via.placeholder.com/300",
//       status: 2,
//     },
//   ]);

//   const [filter, setFilter] = useState("all");

//   //  Status Update (frontend only)
//   const updateStatus = (id, status) => {
//     setProducts(prev => prev.map(p => (p._id === id ? { ...p, status } : p)));
//   };

//   //  Filter
//   const filteredProducts = products.filter(p => {
//     if (filter === "all") return true;
//     if (filter === "pending") return p.status === 0;
//     if (filter === "approved") return p.status === 1;
//     if (filter === "rejected") return p.status === 2;
//   });

//   //  Status UI
//   const getStatus = status => {
//     if (status === 0) return { text: "Pending", color: "bg-yellow-400" };
//     if (status === 1) return { text: "Approved", color: "bg-green-500" };
//     return { text: "Rejected", color: "bg-red-500" };
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/*  Heading */}
//       <h1 className="text-2xl font-bold mb-4">Product Verification</h1>

//       {/* Filters */}
//       <div className="flex gap-3 mb-6">
//         {["all", "pending", "approved", "rejected"].map(f => (
//           <button
//             key={f}
//             onClick={() => setFilter(f)}
//             className={`px-4 py-2 rounded-xl ${
//               filter === f ? "bg-black text-white" : "bg-white"
//             }`}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/*  Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredProducts.map(product => {
//           const status = getStatus(product.status);

//           return (
//             <div
//               key={product._id}
//               className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
//             >
//               {/*  Image */}
//               <img
//                 src={product.image}
//                 alt=""
//                 className="h-40 w-full object-cover rounded-xl"
//               />

//               {/*  Info */}
//               <h2 className="font-bold mt-3">{product.title}</h2>
//               <p className="text-gray-500">₹{product.price}</p>
//               <p className="text-sm text-gray-400">By: {product.userName}</p>

//               {/*  Status */}
//               <div
//                 className={`mt-2 text-white px-2 py-1 rounded w-fit ${status.color}`}
//               >
//                 {status.text}
//               </div>

//               {/*  Buttons */}
//               <div className="flex gap-2 mt-4">
//                 <button
//                   onClick={() => updateStatus(product._id, 1)}
//                   className="flex-1 bg-green-500 hover:bg-green-600 text-white py-1 rounded"
//                 >
//                   Approve
//                 </button>

//                 <button
//                   onClick={() => updateStatus(product._id, 2)}
//                   className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default VerifyItems;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { __productapiurl } from "../../API_URL";

const VerifyItems = () => {
  const [products, setProducts] = useState([]);

  // ✅ FETCH DATA
  const fetchProducts = async () => {
    try {
      const res = await axios.get(__productapiurl + "fetch");
      setProducts(res.data.info);
      console.log(res.data.info);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white rounded-2xl shadow p-4">
            <img
              src={product.image}
              alt=""
              className="h-40 w-full object-cover rounded-xl"
            />

            <h2 className="font-bold mt-3">{product.title}</h2>
            <p className="text-gray-500">₹{product.price}</p>
            <p className="text-sm text-gray-400">By: {product.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerifyItems;
