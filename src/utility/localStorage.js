
const getStoredJobApplication = () =>{
    const storedJob = localStorage.getItem("job-application");
    if(storedJob){
        return JSON.parse(storedJob)
    }
    return []
}

const savedJobApplication = id =>{
    const storedApplication = getStoredJobApplication();
    const isExist = storedApplication.find(aId => aId === id);
    if(!isExist){
        storedApplication.push(id)
        localStorage.setItem("job-application",JSON.stringify(storedApplication));
        return true;
    }
    return false;
}

export {getStoredJobApplication,savedJobApplication}