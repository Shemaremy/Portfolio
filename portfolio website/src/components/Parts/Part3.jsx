import React from "react";
import "./CSS/Part3.CSS"
import Verve from '../../images/Projects/Portrait/Verve1.jpg';
import Todo from '../../images/Projects/Portrait/Todo List.jpg';
import Quote from '../../images/Projects/Portrait/Quote machine.jpg';
import Calculator from '../../images/Projects/Portrait/calculator.jpg';
import Clock from '../../images/Projects/Portrait/Clock.jpg';
import Drum from '../../images/Projects/Portrait/Drum machine.jpg';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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









const ProjectCards = (    // For only large screens. Small screens its weird
    <div className="projects_library">
        <Slider {...settings} className="Slider">
            <div className="project_card">
                <img className="proj_img" src={Verve} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Verve</h1>
                        <p className="proj_category">e-commerce website</p>
                    </div>
                    <div className="lower_proj">
                        <button className="view_proj">View project</button>
                    </div>
                </div>
            </div>
            <div className="project_card">
                <img className="proj_img" src={Todo} alt="" />
                <div className="proj_words">
                    <div className="upper_proj">
                        <h1 className="proj_name">Todo list</h1>
                        <p className="proj_category">React web app</p>
                    </div>
                    <div className="lower_proj">
                        <button className="view_proj">View project</button>
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
                        <button className="view_proj">View project</button>
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
                        <button className="view_proj">View project</button>
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
                        <button className="view_proj">View project</button>
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
                        <button className="view_proj">View project</button>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
);




const NormalProjectCards = (// For the small screens
    <div className="small_device_cards">
        <div className="project_card_2">
            <div className="main_card_2">1</div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">2</div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">3</div>
        </div>
        <div className="project_card_2">
            <div className="main_card_2">4</div>
        </div>
    </div>
);



function Part3() {

    return(
        <div className="Part3">
            <div className="Two_Parts3">
                <div className="Left_part3">
                    <h2 className="My_proj_header">My Projects</h2>
                    <div className="my_projects_heading_underline">
                        <div className="main_underline"></div>
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