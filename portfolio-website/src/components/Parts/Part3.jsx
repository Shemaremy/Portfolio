import React, { useState } from "react";
import './CSS/Part3.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Verve from '../../images/Projects/Verve.png';
import Gitbit from '../../images/Projects/Gitbit.png';
import Kpuppies from '../../images/Projects/kpuppies.png';
import gakwandi from '../../images/Projects/gakwandi.png';
import Todo from '../../images/Projects/Portrait/Todo List.jpg';
import Quote from '../../images/Projects/Portrait/Quote machine.jpg';
import Calculator from '../../images/Projects/Portrait/calculator.jpg';
import Clock from '../../images/Projects/Portrait/Clock.jpg';
import Drum from '../../images/Projects/Portrait/Drum machine.jpg';



function Part3() {

    const [ projects, setProjects ] = useState ('Recents');
    const [loading, setLoading] = useState(false);

    const handleProjectsChange = (category) => {
        setLoading(true);
        setTimeout(() => {
            setProjects(category);
            setLoading(false);
        }, 1000);
    };   


    const RecentProjects = (
        <div className="projects_library recents-library">
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Verve"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Verve} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • June 20, 2024</p>
                    <h4 className="project-name">Verve e-commerce website</h4>
                    <p className="project-description">
                        I built this web app with MERN stack from scratch since February. It took me so long,
                        but I learnt much because this was my first big MERN project I've ever built.
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://v3rve.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Gitbit"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Gitbit} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • Nov 15, 2024</p>
                    <h4 className="project-name">GitBit, github contribution tracker</h4>
                    <p className="project-description">
                        This came from an idea where I wanted to specialize in backend. At the same time, also wanted
                        to improve my contribution habit. Then gitbit came to my mind. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://gitbit.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"kpuppies"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Kpuppies} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • March 11, 2024</p>
                    <h4 className="project-name">Kigali Puppies</h4>
                    <p className="project-description">
                        Meet Kigali Puppies, a pet e-commerce store built with both passion and MERN stack. We built this website 
                        me and my partner where he worked on the front end and I assisted on the backend.
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://kigalipuppies.com" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
        </div>
    );

    const ShortProjects = (
        <div className="projects_library shorts-library">
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"gakwandi"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={gakwandi} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Gakwandi Zacharie business platform</h4>
                    <p className="project-description">
                        My client wanted a bss platform website. Not only did that, I built him a backend system
                        to manage his own stock with CRUD operations.
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://gakwandi.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Todo"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Todo} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • July 2, 2024</p>
                    <h4 className="project-name">Simple Todo list web app</h4>
                    <p className="project-description">
                        Meet my first React project that I've built. I've choosen to leave
                        it as it is, so that I can come back here and see where I came from.
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remytodolistapp.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Quote"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Quote} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • Nov 15, 2024</p>
                    <h4 className="project-name">Random quote machine</h4>
                    <p className="project-description">
                        This is a Freecodecamp project that generates random quotes whenever a user clicks on a generate
                        button. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remyquotemachine.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Calculator"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Calculator} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Calculator web app</h4>
                    <p className="project-description">
                        This my first hardest small project that I've built. I never knew how hard it 
                        was building a calculator that does all the 4 operations with all numbers including decimals
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remycalculator.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Clock"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Clock} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">25 + 5 clock app</h4>
                    <p className="project-description">
                        This is more of a stop watch, where you set the starting point and ending point time, same way as a normal 
                        stopwatch does. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remyclock.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
            <div className="project_card">
                <div className="proj-image-container">
                    <LazyLoadImage
                        className="proj_img"
                        alt={"Drum"}
                        effect="blur"
                        wrapperProps={{
                            style: {transitionDelay: "1s"},
                        }}
                        src={Drum} 
                    />
                </div>
                <div className="proj_words">
                    <p className="dev-date">Development • October 10, 2024</p>
                    <h4 className="project-name">Drum machine app</h4>
                    <p className="project-description">
                        Honestly, I dont like this one. It ain't fun at all but It helped me gain some skills involving sounds
                        and how to deal with them using react. 
                    </p>
                    <p className="project_link">
                        <i className="fa-solid fa-link"></i> : <a href="https://remydrummachine.netlify.app" target="_blank">Web link</a>
                    </p>
                </div>
            </div>
        </div>
    );


    const ProjectCards = (
        loading ? <div className="project-loader"><div className="spinner"></div></div> : 
        (projects === 'Recents' ? RecentProjects : ShortProjects)
    );





    return(
        <div className="Part3">
            <div className="Two_Parts3">
                <div className="Left_part3">
                    <h2 className="My_proj_header">My projects</h2>
                    <p className="my-proj-description">
                        Check out the collection of my projects showcasing my fullstack skills. I've choosen to categorize them into two parts,
                        because I've got my favourites, and other ones whose purpose of building them was to improve my coding skills. These others are mainly from 
                        courses that I've completed like ALX and Freecodecamp. Fell free to explore them and provide a feedback
                    </p>
                    <div className="project-chooser">
                        <button onClick={() => handleProjectsChange('Recents')} className={`proj_button ${projects === 'Recents' ? 'active' : ''}`}>Favourites</button>
                        <button onClick={() => handleProjectsChange('Shorts')} className={`proj_button ${projects === 'Shorts' ? 'active' : ''}`}>Others</button>
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