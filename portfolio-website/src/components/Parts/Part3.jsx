import React, { useState } from "react";
import './CSS/Part3.css';
//import Verve from '../../images/Projects/Portrait/Verve1.jpg';
import Verve from '../../images/Projects/Verve.png';
import Gitbit from '../../images/Projects/Gitbit.png';
import gakwandi from '../../images/Projects/gakwandi.png';
import Todo from '../../images/Projects/Portrait/Todo List.jpg';
import Quote from '../../images/Projects/Portrait/Quote machine.jpg';
import Calculator from '../../images/Projects/Portrait/calculator.jpg';
import Clock from '../../images/Projects/Portrait/Clock.jpg';
import Drum from '../../images/Projects/Portrait/Drum machine.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';



function Part3() {

    const [ projects, setProjects ] = useState ('Recents');

    const handleProjectsChange = (category) => {
        setProjects(category);
    };    


    const RecentProjects = (
        <div className="projects_library recents-library">
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Verve} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • June 20, 2024</p>
                    <h4 className="project-name">Verve e-commerce website</h4>
                    <p className="project-description">
                        I built this web app with MERN stack from scratch since February. It took me so long,
                        but I learnt much because this was my first big MERN project I've ever built.
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://v3rve.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Gitbit} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • Nov 15, 2024</p>
                    <h4 className="project-name">GitBit, github contribution tracker</h4>
                    <p className="project-description">
                        This came from an idea where I wanted to specialize in backend. At the same time, also wanted
                        to improve my contribution habit. Then gitbit came to my mind. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://gitbit.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={gakwandi} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Gakwandi Zacharie business platform</h4>
                    <p className="project-description">
                        My client wanted a bss platform website. Not only did that, I proposed building him a backend system
                        enabling him to manage his own stock with CRUD operations. So I did that. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://gakwandi.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
        </div>
    );

    const ShortProjects = (
        <div className="projects_library shorts-library">
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Todo} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • July 2, 2024</p>
                    <h4 className="project-name">Simple Todo list web app</h4>
                    <p className="project-description">
                        This is my first React project that I've built. It is only a front end project, not a fullstack
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remytodolistapp.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Quote} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • Nov 15, 2024</p>
                    <h4 className="project-name">Random quote machine</h4>
                    <p className="project-description">
                        This is a Freecodecamp project that generates random quotes whenever a user clicks on a generate
                        button. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remyquotemachine.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Calculator} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Calculator web app</h4>
                    <p className="project-description">
                        This my first hardest small project that I've built. I never knew how hard it 
                        was building a calculator that does all the 4 operations with all numbers including decimals
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remycalculator.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Clock} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">25 + 5 clock app</h4>
                    <p className="project-description">
                        This is more of a stop watch, where you set the starting point and ending point time, same way as a normal 
                        stopwatch does. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remyclock.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <img className="proj_img" src={Drum} alt="" />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Drum machine app</h4>
                    <p className="project-description">
                        Honestly, I dont like this one. It ain't fun at all but It helped me gain some skills involving sounds
                        and how to deal with them using react. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remydrummachine.netlify.app">Web link</a>
                    </p>
                </div>
            </div>
        </div>
    );


    const ProjectCards = (
        projects === 'Recents' ? RecentProjects : ShortProjects
    );




    return(
        <div className="Part3">
            <div className="Two_Parts3">
                <div className="Left_part3">
                    <h2 className="My_proj_header">My projects</h2>
                    <p className="my-proj-description">
                        Check out the collection of my projects showcasing my fullstack skills. I've choosen to categorize them into two parts,
                        because I've got the big ones, and the small ones that may not impress you that much. These small ones are mainly from 
                        courses that I've completed like ALX and Freecodecamp.
                    </p>
                    <div className="project-chooser">
                        <button onClick={() => handleProjectsChange('Recents')} className={`proj_button ${projects === 'Recents' ? 'active' : ''}`}>Recents</button>
                        <button onClick={() => handleProjectsChange('Shorts')} className={`proj_button ${projects === 'Shorts' ? 'active' : ''}`}>Short ones</button>
                    </div>
                </div>
                <div className="Right_part3">
                    {ProjectCards}
                </div>
            </div>
        </div>        
    );
}

export default Part3;