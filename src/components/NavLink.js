import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export default function NavLink({content, icon, route}) {
    return (
        <Link to={route}>
            <motion.button className='flex items-center w-11/12 h-12 gap-5 p-3 rounded' 
                whileHover={{ scale: 1.1, originX: 0, backgroundColor: "#FFD700" }}>
                <p className="text-2xl">{icon}</p>
                <p className="text-2xl">{content}</p>
            </motion.button>
        </Link>
      );
}