import React from "react";
import './CSS/Part3.css';
import Verve from '../../images/Projects/Portrait/Verve1.jpg';
import Todo from '../../images/Projects/Portrait/Todo List.jpg';
import Quote from '../../images/Projects/Portrait/Quote machine.jpg';
import Calculator from '../../images/Projects/Portrait/calculator.jpg';
import Clock from '../../images/Projects/Portrait/Clock.jpg';
import Drum from '../../images/Projects/Portrait/Drum machine.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [

        {
            breakpoint: 1245, // adjust the breakpoint as needed for mobile devices
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },



        {
            breakpoint: 679, // adjust the breakpoint as needed for mobile devices
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }

    ]
};








/*
const ProjectCards = (    // For only large screens. Small screens its weird
    <div className="projects_library" data-aos="zoom-out">
        <Slider {...settings} className="Slider">
            <div className="project_card">
                <img className="proj_img" src={Verve} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Verve</h1>
                        <p className="proj_category">e-commerce website</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://v3rve.netlify.app"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Todo} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Todo list app</h1>
                        <p className="proj_category">React web app</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://remytodolistapp.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Quote} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Random quote machine</h1>
                        <p className="proj_category">Web app</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://remyquotemachine.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Calculator} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Calculator app</h1>
                        <p className="proj_category">web app</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://remycalculator.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Clock} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">25 + 5 clock app</h1>
                        <p className="proj_category">web app</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://remyclock.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Drum} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Drum machine app</h1>
                        <p className="proj_category">web app</p>
                    </div>
                    <div className="lower_proj">
                        <a href="https://remydrummachine.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
);
*/


const ProjectCards = (    // For only large screens. Small screens its weird
    <div className="projects_library" data-aos="zoom-out">
        <div className="project_card">
            <div className="proj-image-container">
                <img className="proj_img" src={Verve} alt="" />
            </div>
            <div className="proj_words">
                <p className="dev-date">Development • July 20, 2020</p>
                <h4 className="project-name">There live the blind texts they live</h4>
                <p className="project-description">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
        </div>
        <div className="project_card">
            <div className="proj-image-container">
                <img className="proj_img" src={Verve} alt="" />
            </div>
            <div className="proj_words">
                <p className="dev-date">Development • July 20, 2020</p>
                <h4 className="project-name">There live the blind texts they live</h4>
                <p className="project-description">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
        </div>
        <div className="project_card">
            <div className="proj-image-container">
                <img className="proj_img" src={Verve} alt="" />
            </div>
            <div className="proj_words">
                <p className="dev-date">Development • July 20, 2020</p>
                <h4 className="project-name">There live the blind texts they live</h4>
                <p className="project-description">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
            </div>
        </div>
    </div>
);

const NormalProjectCards = (// For the small screens
    <div className="small_device_cards" data-aos="fade-up">
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Verve} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">Verve</h1>
                        <p className="proj_category2">e-commerce website</p>
                    </div>
                    <div className="lower_proj2">
                        <a href="https://v3rve.netlify.app"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Todo} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">Todo list app</h1>
                        <p className="proj_category2">React web app</p>
                    </div>
                    <div className="lower_proj2">
                    <a href="https://remytodolistapp.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Quote} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">Random quote machine</h1>
                        <p className="proj_category2">web app</p>
                    </div>
                    <div className="lower_proj2">
                        <a href="https://remyquotemachine.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Calculator} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">Calculator app</h1>
                        <p className="proj_category2">web app</p>
                    </div>
                    <div className="lower_proj2">
                        <a href="https://remycalculator.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Clock} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">25 + 5 clock app</h1>
                        <p className="proj_category2">web app</p>
                    </div>
                    <div className="lower_proj2">
                        <a href="https://remyclock.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">
                <img className="proj_img2" src={Drum} alt="" />
                <div className="proj_words2">
                    <div className="upper_proj2">
                        <h1 className="proj_name2">Drum machine app</h1>
                        <p className="proj_category2">web app</p>
                    </div>
                    <div className="lower_proj2">
                    <a href="https://remydrummachine.netlify.app/"><button className="view_proj">View project</button></a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
);








function Part3() {

    return(
        <div className="Part3">
            <div className="Two_Parts3">
                <div className="Left_part3">
                    <h2 className="My_proj_header">My projects</h2>
                    <p className="my-proj-description">Check out my collection of projects showcasing my technical skills. While many are from Freecodecamp, I’m also working on some exciting new ones that are even bigger and better.</p>
                    <div className="project-chooser">
                        <button>Recents</button>
                        <button>Freecodecamp</button>
                    </div>
                </div>
                <div className="Right_part3">
                    {ProjectCards}
                    {NormalProjectCards}
                </div>
            </div>
        </div>        
    );
}

export default Part3;