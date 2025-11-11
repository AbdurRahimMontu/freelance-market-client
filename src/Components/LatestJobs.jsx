
import { useLoaderData } from 'react-router';


const LatestJobs = () => {
const jobs = useLoaderData()
console.log(jobs);
    return (
        <div>
            <h2 className='text-3xl font-bold py-5'>Latest Job</h2>

        </div>
    );
};

export default LatestJobs;