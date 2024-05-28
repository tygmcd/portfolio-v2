import cpp from '..//images/cpp_logo.png';
import { MdWarehouse } from 'react-icons/md';

import { motion } from "framer-motion"

const ProjectCard = ({ img, content }) => {
    return (
        <div className="flex flex-col w-full h-96 rounded-lg backdrop-blur-lg bg-white/30 shadow-md items-center">
          <div className='h-3/5 p-3 pb-0'>
            <img src={img} className='object-cover h-full w-full rounded-md shadow-md'></img>
          </div>
          <div className='flex flex-col w-11/12 h-2/5 justify-evenly'>
            <div className='text-lg lg:text-xl font-bold'>{content.title}</div>
            <div className='text-xs lg:text-sm'>{content.desc}</div>
            <div className='flex w-full gap-2'>
              <motion.button 
                className='w-3/5 h-10 border-2 border-black rounded-lg'
                whileHover={{ backgroundColor: "#000000", color: '#EEEEEE' }}>
                <a href={content.github} target='_blank'>View on Github</a>
              </motion.button>
              {content.site && <motion.button 
                className='w-2/5 h-10 border-2 border-black rounded-lg'
                whileHover={{ backgroundColor: "#000000", color: '#EEEEEE' }}>
                <a href={content.site} target='_blank'>Visit Site</a>
              </motion.button> }
            </div>
          </div>
        </div>
      );
}
 
export default ProjectCard;