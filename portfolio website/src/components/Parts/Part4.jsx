import React from "react";
import "./CSS/Part4.CSS"
import EssentialDocs from '../../images/Essential Docs.jpg';
import AlxPhoto from '../../images/Alx Photo.jpg';
import WorkingOnIt from '../../images/freecodecamp.jpg';


function Part4() {



    // Content for the certificates section
    const CertificatesSection = (
        <div className="Certifications_panel">
            <div className="left_part_certificates">
                <h1 className="check_out"><span className="c_out">Check out <br/></span>My Certificates</h1>
                <p className="check_out_par">I have done various programming courses to increase my programming skills so I'm sharing a few of them.</p>
                <button className="learn_more_cert">Learn more</button>
            </div>
            <div className="right_part_certificates">
                <div className="cert_card">
                    <div className="upper_cert">
                        <img className="cert_img" src={AlxPhoto} alt="" />
                    </div>
                    <div className="lower_cert">
                        <h4 className="cert_name">ALX</h4>
                        <h4 className="cert_par">Not yet acquired ...</h4>
                    </div>
                </div>
                <div className="cert_card">
                    <div className="upper_cert">
                        <img className="cert_img" src={WorkingOnIt} alt="" />
                    </div>
                    <div className="lower_cert">
                        <h4 className="cert_name">Freecodecamp</h4>
                        <h4 className="cert_par">Not yet acquired ...</h4>
                    </div>
                </div>
                <div className="cert_card">
                    <div className="upper_cert">
                        <img className="cert_img" src={EssentialDocs} alt="" />
                    </div>
                    <div className="lower_cert">
                        <h4 className="cert_name">Essentials</h4>
                        <h4 className="cert_par">File containing my essential documents like CV, Resume, Diploma ...</h4>
                    </div>
                </div>
            </div>
        </div>
    );


    //Content for experience section
    const ExperienceSection = (
        <div className="Experience_panel">
            <h1 className="work_experience">Work Experience</h1>
            <div className="experience_list">
                <ul className="main_experience_list">
                    <li className="the_li">
                        <h5 className="Organisation">FRA</h5>
                        <p className="job_title">Software Engineer - Part time</p>
                        <p className="duration">March 2024 - Present</p>
                    </li>
                    <li className="the_li">
                        <h5 className="Organisation">SGS</h5>
                        <p className="job_title">Software Engineer - Part time</p>
                        <p className="duration">August 2023 - Present</p>
                    </li>
                    <li className="the_li">
                        <h5 className="Organisation">IREMBO services</h5>
                        <p className="job_title">Junior Software Engineer - Full time</p>
                        <p className="duration">March 2020 - July 2020</p>
                    </li>
                </ul>
            </div>
        </div>
    );








    return(
        <div className="Part4">
            <div className="Certifications_and_experience_panel">
                <div className="certifications_and_experience_top">
                    <h3 className="cert-exp-header">Certifications and Experiences</h3>
                    <div className="main_underline_2-container">
                        <div className="main_underline_2"></div>
                    </div>
                </div>
                <div className="certifications_and_experience_bottom">
                    <div className="nav_panel">
                        <p className="onCertificate OnEm">Certificates</p>
                        <p className="onExperience OnEm">Experience</p>
                    </div>
                    {CertificatesSection}
                    {ExperienceSection}
                </div>
            </div>
        </div>
    );
}

export default Part4;