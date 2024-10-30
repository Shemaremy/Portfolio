import React from "react";
import './CSS/Part5.css';
import "./CSS/Responsive.css";
import WebDvt from "../../illustrations/WebDvt.png"
import MobileApp from "../../illustrations/MobileApp.png"
import Database from "../../illustrations/Database.png"
import API from "../../illustrations/API.png"

function Part5() {

    return(
        <div className="Part5">
            <div className="Two_Parts5">
                <div className="upper_part_services">
                    <h1 className="services_header">Services</h1>
                </div>
                <div className="lower_part_services">
                    <div className="service_cards_container" data-aos="fade-left">
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={WebDvt} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Web Development</h3>
                                <p className="proffession_paragraph">
                                    I build advanced, responsive and robust web apps that meet client needs, using MERN especially as my favourite combo.
                                </p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={MobileApp} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Mobile App Dvt</h3>
                                <p className="proffession_paragraph">
                                    Well, I am still evolving with this service so I got no big experience for this. But I'm planning to 
                                    go with React Native since I am more of a MERN stack
                                </p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={Database} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Database Architecture</h3>
                                <p className="proffession_paragraph">
                                    Since I'm more of a MERN stack, I am more likely to use MongoDB. I like it for its flexibility,
                                    robust performance and its a json format. All of my fullstack projects I use this one.
                                </p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={API} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">API Integration</h3>
                                <p className="proffession_paragraph">
                                    I build API's for especially MERN projects or any other javascript projects. I use Express and Nodejs
                                    to integrate your front end with the back end. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part5;