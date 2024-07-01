import React from "react";
import "./CSS/Part2.CSS"
import "./CSS/Responsive.css"
import AOS from 'aos';
import 'aos/dist/aos.css';



import MyFace from '../../images/Profile.jpg';

function Part2 () {
    return(
        <div className="Part2">
            <div className="Two_Parts2">
                <div className="Left_part2">
                    <div className="About_Photo">
                        <img className="meet_remy_photo"  src={MyFace} alt="" />
                    </div>
                    <div className="my_github_desk_contain">
                    <a href="https://github.com/Shemaremy">
                        <button className="my_github_desktop">
                            <i className="fab fa-github" style={{ fontSize: '10px', color: 'rgba(0, 0, 0, 0.623)' }}></i>
                        </button>
                    </a>
                    </div>
                </div>
                <div className="Right_part2">
                    <h2 className="About_me_header">Meet Remy</h2>
                    <div className="About_me_container">
                        <div className="About_me_par_container">
                            <p className="The_par one_par">
                                Greetings, I'm Remy SHEMA, a passionate software engineer based in Rwanda.
                            </p>
                            <p className="The_par two_par">
                                As a full-stack engineer with a deep focus on front-end development, my passion drives 
                                me to constantly push beyond boundaries. Doing projects to showcase my skills and try to innovate.
                                Since I am still taking Software Engineering course 
                                at ALX, I am much more of a self-taught and hungry for some experience through seeking internships 
                                and job opportunities to further enhance my skills.
                            </p>
                            <p className="The_par three_par">
                                This website consists of everything you would need to know more about my 
                                achievements and projects that I've done, and feel free to give me a feedback about what you think about my first website, advice, or some 
                                business inquiries.
                            </p>
                            <p className="The_par last four_par" style={{ color: 'rgb(110, 112, 0)'}}>
                                I would like to hear from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Part2;
