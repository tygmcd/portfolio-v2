import pic1 from '..//images/lulu.jpg';
import pic2 from '..//images/boys.jpg';

import { motion } from "framer-motion";

import { IoLocation } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

const About = () => {
    return (
        <motion.div
            initial={{x: "-100vw"}}
            animate={{x: 0}}
            transition={{duration: 0.5}}
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className="flex flex-col w-10/12 h-full py-20 gap-10">
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-6xl'><b>About Me</b></h1>
                    <h3 className='text-2xl'>A little bit of background on me</h3>
                </div>
                <div className='flex w-full rounded-xl backdrop-blur-lg bg-white/30 h-24 shadow-lg'>
                    <div className='flex justify-evenly w-full items-center'>
                        <div className='flex gap-3 text-2xl h-12 items-center'><IoLocation size={30} />Rochester Hills, MI</div>
                        <div className='flex gap-3 text-2xl h-12 items-center'><IoMdSchool size={30} />Michigan State University</div>
                        <div className='flex gap-3 text-2xl h-12 items-center'><MdWork size={30} />Stellantis</div>

                    </div>
                    

                </div>
            
        </motion.div>
    );
}
 
export default About;