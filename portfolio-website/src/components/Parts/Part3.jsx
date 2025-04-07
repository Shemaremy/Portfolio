import React, { useState } from "react";
import './CSS/Part3.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Verve from '../../images/Projects/Verve.png';
import Gitbit from '../../images/Projects/Gitbit.png';
import Kpuppies from '../../images/Projects/kpuppies.png';
import gakwandi from '../../images/Projects/gakwandi.png';
import Remio from '../../images/Projects/Remio.png';
import Todo from '../../images/Projects/Todo List.jpg';
import Dropbox from '../../images/Projects/dropbox.png';
import Clock from '../../images/Projects/Clock.jpg';
import Drum from '../../images/Projects/Drum machine.jpg';


//import Quote from '../../images/Projects/Quote machine.jpg';
//import Calculator from '../../images/Projects/calculator.jpg';



function Part3() {

    const [ projects, setProjects ] = useState ('Recents');
    const [loading, setLoading] = useState(false);


    const recentProjectsData = [
        {
          image: Verve,
          alt: "Verve",
          date: "June 20, 2024",
          title: "Verve e-commerce website",
          description: "I built this web app with MERN stack from scratch since February. It took me so long, but I learnt much because this was my first big MERN project I've ever built.",
          link: "https://v3rve.netlify.app"
        },
        {
          image: Gitbit,
          alt: "Gitbit",
          date: "Nov 15, 2024",
          title: "GitBit, github contribution tracker",
          description: "This came from an idea where I wanted to specialize in backend. At the same time, also wanted to improve my contribution habit. Then gitbit came to my mind. ",
          link: "https://gitbit.netlify.app"
        },
        {
          image: Kpuppies,
          alt: "kpuppies",
          date: "March 11, 2024",
          title: "Kigali Puppies",
          description: "Meet Kigali Puppies, a pet e-commerce store built with both passion and MERN stack. We built this website me and my partner where he worked on the front end and I assisted on the backend.",
          link: "https://kigalipuppies.com"
        }
    ];
      
    const shortProjectsData = [
        {
            image: gakwandi,
            alt: "gakwandi",
            date: "October 10, 2024",
            title: "Gakwandi Zacharie business platform",
            description: "My client wanted a bss platform website. Not only did that, I built him a backend system to manage his own stock with CRUD operations.",
            link: "https://gakwandi.netlify.app"
        },
        {
            image: Remio,
            alt: "Remio",
            date: "April 5, 2025",
            title: "Remio Short courses",
            description: "Remio is a website that equips learners with the knowledge and tools to excel in the digital age such as Fullstack and graphic design.",
            link: "https://remio.netlify.app"
        },
        {
            image: Dropbox,
            alt: "Remydp",
            date: "October 10, 2024",
            title: "Dropbox uploader",
            description: "This tool enables you to upload an image on dropbox automatically, and generate a raw url link for use immediately with no need for logs in",
            link: "https://remydp.netlify.app"
        },
        {
            image: Todo,
            alt: "Todo",
            date: "July 2, 2024",
            title: "Simple Todo list",
            description: "Meet my first React project that I've built. I've choosen to leave it as it is, so that I can come back here and see where I came from.",
            link: "https://remytodolistapp.netlify.app"
        },
        {
            image: Clock,
            alt: "Clock",
            date: "October 10, 2024",
            title: "25 + 5 clock app",
            description: "This is more of a stop watch, where you set the starting point and ending point time, same way as a normal stopwatch does.",
            link: "https://remyclock.netlify.app"
        },
        {
            image: Drum,
            alt: "Drum",
            date: "October 10, 2024",
            title: "Drum machine app",
            description: "Honestly, I dont like this one. It ain't fun at all but It helped me gain some skills involving sounds and how to deal with them using react.",
            link: "https://remydrummachine.netlify.app"
        }
    ];
    
      


    // Handling switching of projects section ----------------
    const handleProjectsChange = (category) => {
        setLoading(true);
        setTimeout(() => {
            setProjects(category);
            setLoading(false);
        }, 1000);
    };   


    const renderProjects = (projects) => (
        <div className="projects_library">
          {projects.map((proj, index) => (
            <div className="project_card" key={index}>
              <div className="proj-image-container">
                <LazyLoadImage
                  className="proj_img"
                  alt={proj.alt}
                  effect="blur"
                  wrapperProps={{ style: { transitionDelay: "1s" } }}
                  src={proj.image}
                />
              </div>
              <div className="proj_words">
                <p className="dev-date">Development • {proj.date}</p>
                <h4 className="project-name">{proj.title}</h4>
                <p className="project-description">{proj.description}</p>
                <p className="project_link">
                  <i className="fa-solid fa-link"></i> : <a href={proj.link} target="_blank">Web link</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
      



    // Project cards area --------------------------
    const ProjectCards = loading ? (
        <div className="project-loader"><div className="spinner"></div></div>
      ) : (
        projects === 'Recents' ? renderProjects(recentProjectsData) : renderProjects(shortProjectsData)
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