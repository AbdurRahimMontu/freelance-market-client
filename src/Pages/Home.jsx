import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import ClientComment from "../Components/ClientComment";
import JobCard from "../Components/JobCard";
import TopCategories from "../Components/TopCategories";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("https://freelance-market-server.vercel.app/latestJobs").then((data) => {
      setJobs(data.data);
      console.log(data.data);
    });
  }, []);
  console.log(jobs);
  return (
    <div>
      <Banner></Banner>
      <div className="bg-base-300">
        <h2 className="text-2xl text-center font-semibold py-5 pt-15  ">
          Latest Jobs
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto py-5">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
      </div>
      <TopCategories></TopCategories>
      <ClientComment></ClientComment>
    </div>
  );
};

export default Home;
