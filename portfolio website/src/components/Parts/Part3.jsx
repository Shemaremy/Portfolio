import React from "react";
import "./CSS/Part3.CSS"


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
            <div className="project_card">1</div>
            <div className="project_card">2</div>
            <div className="project_card">3</div>
            <div className="project_card">4</div>
            <div className="project_card">5</div>
            <div className="project_card">6</div>
        </Slider>
    </div>
);


const NormalProjectCards = (
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