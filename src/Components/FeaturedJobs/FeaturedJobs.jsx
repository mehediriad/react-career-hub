import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength]= useState(4);

    useEffect(()=>{
        fetch("jobs.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (

        <div>
            <div className="text-center">
                <h2 className="text-5xl font-blod">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 my-10 gap-4">
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mb-8 ${dataLength === jobs.length && "hidden"}`}>
                <button className="btn btn-primary" onClick={()=>setDataLength(jobs.length)}>See More</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;