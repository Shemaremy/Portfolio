import {React, useEffect} from "react";
import './CSS/Part2.css';
import "./CSS/Responsive.css";

import AOS from 'aos';
import 'aos/dist/aos.css';

import MyFace from '../../images/Profile.jpg';


function Part2 () {

    AOS.init();
    useEffect(() => {
        AOS.init({
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
          offset: 120,
          delay: 0,
          duration: 2000,
          easing: 'ease',
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
      }, []); // Empty dependency array ensures this runs only once
    


    return(
        <div className="Part2">
            <div className="Two_Parts2" data-aos="fade-left">
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
                                me to constantly push beyond boundaries, by doing projects to showcase my skills.
                                I have taken various Software Engineering courses from ALX, Freecodecamp, and I'm planning to move on with
                                Coursera. Although I take all these courses, I am much more of a self-taught. Most of my skills are gained form
                                continous projects. Some projects experience are gained from community of created by Levi Okoye from Nigeria.
                            </p>
                            <p className="The_par three_par">
                                This website consists of everything you would need to know more about my 
                                achievements and projects that I've done. Feel free to give me a feedback about what you think about my first website, advice, 
                                business inquiries, and more.
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
