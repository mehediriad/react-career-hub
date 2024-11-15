import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
    
    return (
        <div>
            <div className="p-6 card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                src={logo}
                alt={job_title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p className="my-6">{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] text-[#7E90FE] rounded mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border border-[#7E90FE] text-[#7E90FE] rounded mr-4">{job_type}</button>
                </div>
                <div className="flex my-6">
                    <p>{location}</p>
                    <p>Salary:{salary}</p>
                </div>
                <div className="card-actions">
                <Link to={`/jobs/${id}`}>
                <button className="btn btn-primary">View Details</button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Job;