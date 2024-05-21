import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const MobileNavLink = ({content, route, vars}) => {
    return (
        <Link to={route}>
            <motion.button className="text-4xl"
                variants={{vars}}
            >
                {content}
            </motion.button>

        </Link>

    );
}
 
export default MobileNavLink;