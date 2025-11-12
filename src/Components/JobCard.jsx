
import { Link } from 'react-router';
import { motion } from 'motion/react';

const JobCard = ({job}) => {
     const {_id, title, category, postedBy,  summary, coverImage} = job;

    return (
        <div className=''>


    <motion.div  whileHover={{
        scale: 1.1,
      }} className="p-5 bg-base-100 shadow-xl flex flex-col justify-between">
      <div>
        

        <img src={coverImage} alt="" className="w-full " />
        <div className="px-4 pt-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <h3 className='text-lg font-medium'>{category}</h3>
          <p className="text-justify ">{summary.slice(0, 78)}....</p>
          <h4 className='text-end italic font-semibold'>{postedBy}</h4>
    
        </div>
      
      </div>
      <div className=" pb-5 pt-3 mt-auto">
      <Link to={`/viewDetails/${_id}`} className='btn w-full'>View Details</Link>
      </div>
    </motion.div>




        </div>
    );
};

export default JobCard;


