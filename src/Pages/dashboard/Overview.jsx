import { Briefcase, Users, CheckCircle, Clock } from "lucide-react";
import OverviewCard from "../../Components/OverviewCard"
import Charts from "../../Components/Charts"
import RecentTable from "../../Components/RecentTable"
const Overview = () => {
  // 🔹 Normally these will come from backend API
  const stats = {
    jobs: 12,
    applicants: 86,
    shortlisted: 18,
    pending: 22,
  };

  const barData = [
    { month: "Jan", jobs: 2 },
    { month: "Feb", jobs: 4 },
    { month: "Mar", jobs: 6 },
  ];

  const pieData = [
    { name: "Pending", value: 22 },
    { name: "Shortlisted", value: 18 },
    { name: "Rejected", value: 46 },
  ];

  const tableData = [
    { name: "Rahim", job: "Frontend Dev", status: "pending", date: "12 Aug" },
    { name: "Karim", job: "Backend Dev", status: "shortlisted", date: "10 Aug" },
  ];

  return (
    <div className="space-y-6">

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard title="Total Jobs" value={stats.jobs} icon={<Briefcase />} />
        <OverviewCard title="Applicants" value={stats.applicants} icon={<Users />} />
        <OverviewCard title="Shortlisted" value={stats.shortlisted} icon={<CheckCircle />} />
        <OverviewCard title="Pending" value={stats.pending} icon={<Clock />} />
      </div>

      {/* Charts */}
      <Charts barData={barData} pieData={pieData} />

      {/* Recent Table */}
      <RecentTable data={tableData} />

    </div>
  );
};

export default Overview;


