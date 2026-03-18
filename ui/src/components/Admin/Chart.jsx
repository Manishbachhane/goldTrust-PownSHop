import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DashboardGraphs = () => {
  // 🔥 Dummy Data (later API se replace karna)
  const revenueData = [
    { month: "Jan", revenue: 20000 },
    { month: "Feb", revenue: 35000 },
    { month: "Mar", revenue: 50000 },
  ];

  const productStatus = [
    { name: "Pending", value: 40 },
    { name: "Approved", value: 80 },
    { name: "Rejected", value: 20 },
  ];

  const ordersData = [
    { day: "Mon", orders: 10 },
    { day: "Tue", orders: 20 },
    { day: "Wed", orders: 15 },
  ];

  const categoryData = [
    { name: "Gold", value: 50 },
    { name: "Electronics", value: 30 },
    { name: "Vehicle", value: 20 },
  ];

  const userGrowth = [
    { day: "Mon", users: 5 },
    { day: "Tue", users: 10 },
    { day: "Wed", users: 15 },
    { day: "Thu", users: 20 },
    { day: "Fri", users: 25 },
    { day: "Sat", users: 20 },
    { day: "Sun", users: 30 },
  ];

  const COLORS = ["#facc15", "#22c55e", "#ef4444"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* 💰 Revenue Graph */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-bold mb-2">Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 📦 Product Status */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-bold mb-2">Product Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={productStatus}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {productStatus.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 📊 Orders */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-bold mb-2">Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ordersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🛍️ Category Sales */}
      <div className="bg-white p-4 rounded-2xl shadow">
        <h2 className="font-bold mb-2">Category Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 👤 User Growth */}
      <div className="bg-white p-4 rounded-2xl shadow col-span-1 md:col-span-2">
        <h2 className="font-bold mb-2">User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardGraphs;
