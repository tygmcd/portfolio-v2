import logo from '..//images/logo3c.png';
import NavLink from './NavLink';

import { IoHomeOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="hidden shadow-xl sticky top-0 sm:flex flex-col flex-shrink-0 text-gray-500 items-center w-72 gap-10 h-screen bg-neutral-200 overflow-y-auto z-10">
            <div className='flex flex-col items-center gap-10 mt-10'>
                <div className='w-1/3'>
                    <img src={logo} alt="Logo"></img>
                </div>
                <div className='w-3/4 h-1 border-b-2 border-gray-400'></div>
            </div>
            <div className="flex flex-col justify-between h-screen">
                <div className='w-full'>
                    <div className='flex flex-col gap-3 w-full h-[20rem]'>
                        <NavLink content={"Home"} icon={<IoHomeOutline />} route={"/"} />
                        <NavLink content={"About"} icon={<BsPersonCircle />} route={"/about"} />
                        <NavLink content={"Projects"} icon={<FaProjectDiagram />} route={"/projects"} />
                        <NavLink content={"Contact"} icon={<GrContact />} route={"/contact"} />
                    </div>
                </div>
                <div className='flex gap-5 p-10'>
                    <a href="https://www.linkedin.com/in/tyler-g-mcdonald" target="_blank" rel="noreferrer"><CiLinkedin className="transition ease-in-out hover:text-primary hover: cursor-pointer duration-200" size={25} /></a>
                    <a href="https://github.com/tygmcd" target="_blank" rel="noreferrer"><FaGithub className="transition ease-in-out hover:text-primary hover: cursor-pointer duration-200" size={25} /></a>
                </div>

            </div>
           
        </nav>
    );
}
 
export default Navbar;