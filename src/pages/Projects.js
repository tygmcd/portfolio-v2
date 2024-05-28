import { motion } from  "framer-motion"

import cpp from '..//images/cpp_logo.png';
import c from '..//images/c_logo.png';
import py from '..//images/python_logo.png';
import java from '..//images/java_logo.png';
import html from '..//images/html_logo.png';
import css from '..//images/css_logo.png';
import js from '..//images/js_logo.png';
import react from '..//images/react_logo.png';
import tailwind from '..//images/tailwind_logo.png';
import flutter from '..//images/flutter_logo.png';
import dart from '..//images/dart_logo.png';
import arm from '..//images/arm_logo.png';
import openai from '..//images/openai_logo.png';
import django from '..//images/django_logo.png';
import flask from '..//images/flask_logo.png';
import ProjectCard from "../components/ProjectCard";

import as from '..//images/actionsudoku.png';
import mw from '..//images/musicweather.png';
import p477 from '..//images/portfolio-477.png';
import kb from '..//images/kanban.png';

const containerVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
        }
    }    
};

// More Famer Motion variants 
const childVariants = {
    hidden: {
        y: 50
    },
    visible: {
        y: 0,
    }
};


// Project Card Objects
const actionSudokuContent = {
    title: "Action Sudoku",
    desc: "A halloween-themed twist on the classic logic puzzle",
    github: "https://github.com/tygmcd/action-sudoku-cse335"
}

const musicWeatherContent = {
    title: "AI Music Weather Web App",
    desc: "AI generated music recommendations based on current weather in your area",
    github: "https://github.com/tygmcd/music-weather-full-stack"

}

const kanbanContent = {
    title: "Kanban Board Web App",
    desc: "A sleek project management tool with an added chat feature",
    site: "https://exam-a47htzj2ka-uc.a.run.app/signin"
}


const Projects = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className="flex flex-col w-10/12 justify-center gap-12 my-16">
                <div className='flex flex-col items-center gap-3'>
                    <h1 className='text-6xl'><b>Projects</b></h1>
                    <h3 className='text-2xl'>What I've been working on</h3>
                </div>

                <motion.div 
                    variants={childVariants}
                    className="absolute flex items-center justify-center rounded-t-lg text-lg top-[7rem] left-6 font-semibold w-32 h-10 backdrop-blur-lg bg-white/50">
                    My Stack
                </motion.div>
                <div className='flex justify-center w-full rounded-xl backdrop-blur-lg bg-white/30 py-3 shadow-lg overflow-x-auto'>
                    <div className='flex w-full items-center justify-evenly gap-2 p-5'>
                        <img className="w-12" src={cpp} alt="cpp logo"></img>
                        <img className="w-12" src={c} alt="c logo"></img>
                        <img className="w-12" src={py} alt="py logo"></img>
                        <img className="w-12" src={java} alt="java logo"></img>
                        <img className="w-12" src={html} alt="html logo"></img>
                        <img className="w-12" src={css} alt="css logo"></img>
                        <img className="w-12 mr-1" src={js} alt="js logo"></img>
                        <img className="w-12" src={react} alt="react logo"></img>
                        <img className="w-12" src={tailwind} alt="tailwind logo"></img>
                        <img className="w-12" src={flutter} alt="flutter logo"></img>
                        <img className="w-12" src={dart} alt="dart logo"></img>
                        <img className="w-12" src={arm} alt="arm logo"></img>
                        <img className="w-12" src={openai} alt="openai logo"></img>
                        <img className="w-12" src={django} alt="django logo"></img>
                        <img className="w-12" src={flask} alt="flask logo"></img>
                    </div>
                </div>
                <div className="grid grid-cols-3 h-96 gap-6">
                    <ProjectCard img={as} content={actionSudokuContent}/>
                    <ProjectCard img={mw} content={musicWeatherContent}/>
                    <ProjectCard img={kb} content={kanbanContent} />
                </div>
        </motion.div>
    );
}
 
export default Projects;