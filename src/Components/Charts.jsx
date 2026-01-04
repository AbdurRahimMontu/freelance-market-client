import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#ef4444"];

const Charts = ({ barData, pieData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Bar Chart */}
      <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Jobs Posted Per Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jobs" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Application Status</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90}>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;
