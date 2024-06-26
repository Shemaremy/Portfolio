import React from "react";
import "./CSS/Part5.CSS"
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
                    <div className="service_cards_container">
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={WebDvt} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Web Development</h3>
                                <p className="proffession_paragraph">I build advanced, responsive websites that meet your business needs, using the latest technologies and best practices for exceptional user experiences.</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={MobileApp} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Mobile App Dvt</h3>
                                <p className="proffession_paragraph">I build intuitive and high-performance mobile applications for both Android and iOS platforms, ensuring seamless user experiences.</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={Database} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">Database Architecture</h3>
                                <p className="proffession_paragraph">I design robust and scalable database solutions to manage your data efficiently, with a focus on security and performance optimization.</p>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="upper_service_card"><img className="service_svg" src={API} alt="" /></div>
                            <div className="lower_service_card">
                                <h3 className="proffession_title">API Integration</h3>
                                <p className="proffession_paragraph">I integrate and develop APIs to ensure smooth communication between different software systems, enhancing functionality and connectivity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part5;