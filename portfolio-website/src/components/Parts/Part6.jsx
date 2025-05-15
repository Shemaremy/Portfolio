import React from "react";
import './CSS/Part6.css';
import "./CSS/Responsive.css";

function Part6() { 
    return(
        <div className="Part6">
            <div className="upper_part_skills">
                <h1 className="skills_header">Skillset :</h1>
                <div className="skills_underline_container">
                    <div className="skills_underline_itself"></div>
                </div>
            </div>
            <div className="lower_part_skills" data-aos="fade-right">
                <div className="skill_card Front_and_design">
                    <div className="Frontend">
                        <h4 className="set_name">Front - end</h4>
                        <div className="mainset">
                            <i className="devicon devicon-html5-plain-wordmark colored" title="Html"></i>
                            <i className="devicon devicon-css3-plain-wordmark colored" title="Css"></i>
                            <i className="devicon devicon-bootstrap-plain-wordmark colored" title="Bootsrap"></i>
                            <i className="devicon devicon-javascript-plain colored" title="Javascript"></i>
                            <i className="devicon devicon-jquery-plain-wordmark colored" title="JQuery"></i>
                            <i className="devicon devicon-react-original-wordmark colored" title="React"></i>
                            <i className="devicon devicon-typescript-plain colored" title="Typescript"></i>
                            <i className="devicon devicon-redux-original colored" title="Redux"></i>
                        </div>
                    </div>
                    <div className="Design">
                        <h4 className="set_name">Designer tools</h4>
                        <div className="mainset">
                            <i className="devicon devicon-figma-plain colored" title="Figma"></i>
                            <i className="devicon devicon-photoshop-plain colored" title="Photoshop"></i>
                            <i className="devicon devicon-illustrator-plain colored" title="Illustrator"></i>
                        </div>
                    </div>
                </div>

                <div className="skill_card Back_Datb_collab">
                    <div className="Backend">
                        <h4 className="set_name">Back - end</h4>
                        <div className="mainset">
                            <i className="devicon devicon-cplusplus-plain colored" title="C++"></i>
                            {/* <i className="devicon devicon-csharp-plain colored"></i> */}
                            <i className="devicon devicon-java-plain-wordmark colored" title="Java"></i>
                            <i className="devicon devicon-python-plain-wordmark colored" title="Python"></i>
                            <i className="devicon devicon-nodejs-plain-wordmark colored" title="Nodejs"></i>
                            <i className="devicon devicon-flask-original-wordmark colored" title="Flask"></i>
                            <i className="devicon devicon-express-original-wordmark" title="Express"></i>
                        </div>
                    </div>
                    <div className="Database">
                        <h4 className="set_name">Database</h4>
                        <div className="mainset">
                            <i className="devicon devicon-mongodb-plain-wordmark colored" title="Mongodb"></i>
                            {/* <i className="devicon devicon-sqlite-plain-wordmark colored"></i> */}
                            <i className="devicon devicon-mysql-plain-wordmark colored" title="MySql"></i>
                        </div>
                    </div>
                    <div className="Collaboration">
                        <h4 className="set_name">Collaboration tools</h4>
                        <div className="mainset">
                            <i className="devicon devicon-git-plain-wordmark colored" title="Git"></i>
                            <i className="devicon devicon-github-original-wordmark colored" title="Github"></i>
                        </div>
                    </div>
                </div>

                <div className="skill_card workflow"></div>
            </div>
        </div>
    );
}

export default Part6; 