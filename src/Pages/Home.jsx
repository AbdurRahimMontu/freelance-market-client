import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import ClientComment from "../Components/ClientComment";
import JobCard from "../Components/JobCard";
import TopCategories from "../Components/TopCategories";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const res = await axios.get(
          "https://freelance-market-server.vercel.app/latestJobs"
        );
        setJobs(res.data);
      } catch (error) {
        console.error("Failed to load latest jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestJobs();
  }, []);

  return (
    <div>
      <Banner />

      <div className="bg-base-300">
        <h2 className="text-2xl text-center font-semibold py-5 pt-10">
          Latest Jobs
        </h2>

        {loading ? (
          <p className="text-center py-10 text-lg">Loading jobs...</p>
        ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5">
  {jobs.slice(0, 8).map((job) => (
    <JobCard key={job._id} job={job} />
  ))}
</div>
        )}
      </div>

      <TopCategories />
      <ClientComment />
    </div>
  );
};

export default Home;

