import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";


const JobPage = () => {
  const [job, setJob] = useState();
  const {id} = useParams();
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch("/api/jobs/"+ id);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error fetching job data : " + error);
      } finally {
        //setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  return <div>JobPage {id}</div>;
};

export default JobPage;
