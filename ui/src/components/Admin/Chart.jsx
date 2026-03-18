// report analytics for admin dashboard

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const earningsData = [
  { day: "Mon", amount: 5000 },
  { day: "Tue", amount: 7000 },
  { day: "Wed", amount: 4000 },
  { day: "Thu", amount: 9000 },
];

const categoryData = [
  { name: "Gold", value: 60 },
  { name: "Electronics", value: 25 },
  { name: "Others", value: 15 },
];

const statusData = [
  { name: "Pawned", value: 40 },
  { name: "Sold", value: 30 },
  { name: "Active", value: 20 },
];

function AdminDashboard() {
  return (
    <div className="p-6 pt-20 grid gap-6 md:grid-cols-2">
      {/* Earnings */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-sm font-semibold mb-3">Daily Earnings</h2>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={earningsData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Category */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-sm font-semibold mb-3">Items Category</h2>

        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={categoryData} dataKey="value" outerRadius={80}>
              {categoryData.map((_, i) => (
                <Cell key={i} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Status */}
      <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-2">
        <h2 className="text-sm font-semibold mb-3">Item Status</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={statusData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;
