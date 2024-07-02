// TODO : Add Kanban and Portfolio v2 to Github
// TODO : Rework weather app, new screenshot

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
import mw from '..//images/musicweather2.png';
import kb from '..//images/kanban.png';
import p3 from '..//images/v3graphic.png';
import p2 from '..//images/portfolio-477.png'
import p1 from '..//images/portfolio-v1.png'

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
    site: "https://exam-a47htzj2ka-uc.a.run.app/signin",
    github: "https://github.com/tygmcd/kanban-web-477"
}

const p3Content = {
    title: "Portfolio Website v3",
    desc: "What you're viewing right now! Powered by React, Tailwind, and Framer Motion",
    github: "https://github.com/tygmcd/portfolio-v2",
}

const p2Content = {
    title: "Portfolio Website v2 - CSE 477",
    desc: "Written in pure HTML, CSS, and JS with an interactive piano page",
    site: "https://homework-a47htzj2ka-uc.a.run.app/home",
    github: "https://github.com/tygmcd/portfolio-477"
}

const p1Content = {
    title: "Portfolio Website v1",
    desc: "My first ever (unfinished) project! Primarily created with Bootstrap",
    github: "https://github.com/tygmcd/tygmcd.github.io",
    site: "https://tygmcd.github.io/"
}



const Projects = () => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{x: "-100vw", transition: { duration: 0.5 }}}
            className="w-10/12 h-full flex flex-col mx-auto py-16 gap-8 justify-center">
                <div className='flex flex-col items-center gap-3 mb-3'>
                    <h1 className='text-4xl sm:text-6xl'><b>Projects</b></h1>
                    <h3 className='text-xl md:text-2xl'>What I've been working on</h3>
                </div>

                <motion.div 
                    variants={childVariants}
                    className="absolute flex items-center justify-center rounded-t-lg text-lg top-[9.5rem] sm:top-[10.8rem] left-6 font-semibold w-32 h-10 backdrop-blur-lg bg-white/50">
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
                <div className="grid grid-rows-5 md:grid-rows-2 grid-cols-1 md:grid-cols-3 h-full gap-3">
                    <ProjectCard img={as} content={actionSudokuContent}/>
                    <ProjectCard img={mw} content={musicWeatherContent}/>
                    <ProjectCard img={kb} content={kanbanContent} />
                    <ProjectCard img={p1} content={p1Content} />
                    <ProjectCard img={p2} content={p2Content} />
                    <ProjectCard img={p3} content={p3Content} />
                
                </div>
        </motion.div>
    );
}
 
export default Projects;