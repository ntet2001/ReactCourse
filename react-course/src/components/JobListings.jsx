import { useState, useEffect } from "react";
import React from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome, limit }) => {
  const [listJobs, setListJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs?_limit="+limit);
        const data = await res.json();
        setListJobs(data);
      } catch (error) {
        console.log("Error fetching jobs data : " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [limit]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "All Recents Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading}></Spinner>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Job Listing  --> */}
            {listJobs.map((job) => (
              <JobListing key={job.id} job={job}></JobListing>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
