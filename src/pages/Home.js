import portrait from '..//images/portrait_long.jpg';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


// TODO : Fix sizing for XL screens
const Home = () => {
    return (
        <motion.div className='flex flex-col md:flex-row items-center md:mx-32 gap-8 md:gap-5'
          initial={{x: "-100vw"}}
          animate={{x: 0}}
          transition={{duration: 0.5}}
          exit={{x: "-100vw", transition: { duration: 0.5 }}}
          >
          <div className='flex flex-col gap-4 justify-center w-10/12 md:w-1/2 items-center md:items-start text-center md:text-left lg:w-2/3'>
            <div className='text-2xl md:text-4xl'>Hi,</div>
            <motion.div className='text-5xl md:text-6xl' 
              initial={{y: '-100vh'}}
              animate={{y: 0}}
              transition={{delay: 0.5, duration: 0.75}}>
                <b>I'm Tyler McDonald</b>
            </motion.div>
            <div className='text-2xl md:text-4xl'>A Senior Computer Science Student</div>
            <Link to="/projects">
              <motion.button className='w-56 h-14 mt-2 text-lg bg-neutral-200 rounded-lg shadow'
                whileHover={{scale: 1.1, originX: 0}}>
                View My Projects
              </motion.button>
            </Link>
          </div>
          <div className='flex justify-center w-1/2 lg:w-1/3'>
            <img className="object-cover aspect-square rounded-full shadow-lg w-10/12 lg:w-full" src={portrait} alt="Tyler's Portrait"></img>
          </div>
        </motion.div>
      
    );
}
 
export default Home;