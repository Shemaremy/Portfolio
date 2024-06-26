import React from "react";
import "./CSS/Part1.CSS"
import "./CSS/Responsive.css"

function Part1 () {
    return(
        <div className="center_img">
                <div className="navigation_links">
                    <header>
                        <div className="container">
                            <div className="hamburger_container">
                                <button className="hamburger">
                                    <div className="bar"></div>
                                </button>
                            </div>
                            <div className="Mobile_Logo_container">
                                <div className="Portfolio_word_container">
                                    <h1 className="Portfolio_word">Portfolio.</h1>
                                </div>
                            </div>
                        </div>
                    </header>

                    <nav className="mobile-nav">
                        <a className="Ml_1" href="#">Home</a>
                        <a className="Ml_2" href="#">Projects</a>
                        <a className="Ml_3" href="#">Services</a>
                        <a className="Ml_4" href="#">Contact</a>
                    </nav>

                    <div className="desk_links">
                        <a className="link1 active" href="https://remyshema.42web.io/?i=1">Home</a>
                        <a className="link2" href="#">Projects</a>
                        <a className="link3" href="#">Services</a>
                        <a className="link4" href="#">Contact</a>
                    </div>
                </div>

                <div className="Two_Parts">
                    <div className="Left_part">
                        <div className="First_headings">
                            <h2 className="hello_heading">Hello, I'm</h2>
                            <h1 className="Remy_heading">REMY <span className="shema">SHEMA</span></h1>
                        </div>

                        <div className="small_paragraph">
                            <p id="animated-paragraph" className="paragraph">A full-stack Software Engineer & a creative thinker.</p>
                        </div>

                        <div className="Buy_me_coffee">
                            <button className="coffee-button" id="downloadButton">Download my cv</button>
                        </div>

                        <div className="Hire_me_and_Github">
                            <p className="Github_ico">
                                <a href="https://github.com/Shemaremy" className="mob_github_link">
                                    <i className="fab fa-github mob_github_ico" ></i>
                                    <p className="mob_my_github_word">My Github</p>
                                </a>
                            </p>
                        </div>

                        <div className="social_media">
                            <div className="all_icons">
                                <p className="icon Linkedin">
                                    <a href="https://www.linkedin.com">
                                        <i className="ico_1 fab fa-linkedin"></i>
                                    </a>
                                </p>

                                <p className="icon Twitter">
                                    <a href="https://www.twitter.com">
                                        <i className="ico_1 fab fa-twitter"></i>
                                    </a>
                                </p>

                                <p className="icon Instagram">
                                    <a href="https://www.instagram.com">
                                        <i className="ico_1 fab fa-instagram"></i>
                                    </a>
                                </p>

                                <p className="icon Behance">
                                    <a href="https://www.behance.net">
                                        <i className="ico_1 fab fa-behance"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="Right_part">
                        <div className="My_photo"></div>
                    </div>
                </div>
        </div>
    );
}

export default Part1;