import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const job = jobs.find(job=> job.id == jobId);

    const {contact_information,job_description,job_responsibility,educational_requirements,experiences,logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    
    return (
        <div className='mb-10'>
            <div className='p-20'>
                <h2 className='text-3xl text-center'>Job Details</h2>
            </div>
            <div className='grid md:grid-cols-4 gap-4'>
                <div className='md:col-span-3'>
                    <div className='mb-6'>
                        <h2 className='text-2xl'>Job Description:</h2>
                        <p>{job_description}</p>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-2xl'>Job Responsibility:</h2>
                        <p>{job_responsibility}</p>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-2xl'>Educational Requirements:</h2>
                        <p>{educational_requirements}</p>
                    </div>
                    <div className='mb-6'>
                        <h2 className='text-2xl'>Experiences:</h2>
                        <p>{experiences}</p>
                    </div>
                </div>
                <div className='bg-[#7E90FE] rounded p-6 text-black'>
                    <div className='m-4'>
                        <h2 className='pb-4 font-bold mb-2 border-2 border-x-0 border-t-0 border-b-[#9873FF]'>Job Details</h2>
                        <p className='mb-2'>Salary: {salary}</p>
                        <p className='mb-2'>Job Title: {job_title}</p>
                    </div>
                    <div className='m-4'>
                        <h2 className='pb-4 font-bold mb-2 border-2 border-x-0 border-t-0 border-b-[#9873FF]'>Contact Information</h2>
                        <p className='mb-2'>Phone: {contact_information.phone}</p>
                        <p className='mb-2'>Email: {contact_information.email}</p>
                        <p className='mb-2'>Address: {contact_information.address}</p>
                    </div>
                    <div className='m-4'>
                    <button className="btn btn-primary">Apply Now</button>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;