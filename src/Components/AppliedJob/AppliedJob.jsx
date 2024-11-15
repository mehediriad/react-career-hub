import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";


const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([]);

    useEffect(()=>{
        const savedJobs = getStoredJobApplication();
        if(jobs.length){
            const newAppliedJobs = jobs.filter(job=> savedJobs.includes(job.id))
            setAppliedJobs(newAppliedJobs);
            
        }
        console.log(jobs,savedJobs,appliedJobs);
        
    },[jobs])


    return (
        <div>
            <div className='p-20'>
                <h2 className='text-3xl text-center'>Applied Jobs</h2>
            </div>
            {
                appliedJobs.map(aJob=><SingleAppliedJob key={aJob.id} aJob={aJob} ></SingleAppliedJob>)
            }
        </div>
    );
};

export default AppliedJob;