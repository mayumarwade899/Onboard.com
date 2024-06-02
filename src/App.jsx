import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "./firebase.config";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState();

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    const tempJobs = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });

    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {jobs?.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
