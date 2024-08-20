import React from "react";
import "./CSS/Part5.CSS"
import "./CSS/Responsive.css"
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
                                <p className="proffession_paragraph">I build advanced, responsive and robust web apps that meet client needs, using MERN especially as my favourite combo.</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={MobileApp} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Mobile App Dvt</h3>
                                <p className="proffession_paragraph">My comprehensive mobile app development services cover building high-performance mobile apps for both Android and iOS platforms. React native is my favourite when it comes to this.</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={Database} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Database Architecture</h3>
                                <p className="proffession_paragraph">I also build and maintain scalable database solutions to manage your data efficiently, with a deep focus on security and performance optimization with both MongoDB and MySQL</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={API} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">API Integration</h3>
                                <p className="proffession_paragraph">Gain a competitive edge with my scalable API integrations to ensure smooth communication between different software systems. I aim to enhance functionality the most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part5;