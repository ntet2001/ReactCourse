import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <!-- Developers and Employers --> */}
      <HomeCards></HomeCards>

      {/* <!-- Browse Jobs --> */}
      <JobListings isHome = {true} limit={3}></JobListings>

      {/* view all jobs */}
      <ViewAllJobs></ViewAllJobs>
    </>
  );
};

export default HomePage;
