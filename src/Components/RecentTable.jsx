const RecentTable = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow mt-6">
      <h3 className="mb-4 font-semibold">Recent Applications</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>Candidate</th>
            <th>Job</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b last:border-none">
              <td>{item.name}</td>
              <td>{item.job}</td>
              <td className="capitalize">{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <p className="text-center py-6 text-gray-500">
          No data found
        </p>
      )}
    </div>
  );
};

export default RecentTable;
