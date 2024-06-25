import React from "react";
import "./CSS/Part5.CSS"

import Slider from "react-slick";


function Part5() {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 768, // adjust the breakpoint as needed for mobile devices
                settings: {
                    dots: false
                },
            },
        ]
      };
      

      const ServicesCards = (
        <>
            <div className="slider-container-2">
                <Slider {...settings}>
                    <div className="card-2">1</div>
                    <div className="card-2">2</div>
                    <div className="card-2">3</div>
                    <div className="card-2">4</div>
                    <div className="card-2">5</div>
                    <div className="card-2">6</div>
                </Slider>
            </div>
        </>
      ); 

    return(
        <div className="Part5">
            <div className="Two_Parts5">
                <div className="upper_part_services">
                    <h1 className="services_header">Services</h1>
                    <div className="services_underline_container">
                        <div className="main_underline_services"></div>
                    </div>
                </div>
                <div className="lower_part_services">{ServicesCards}</div>
            </div>
        </div>
    );
}

export default Part5;