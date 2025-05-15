import React, { useState, useEffect } from "react";
import './CSS/Part1.css';
import "./CSS/Responsive.css";
import working from '../../images/Landing page/working.png';
import workinggreen from '../../images/Landing page/workinggreen.png';

import BigDots from '../../Shapes/bigdots.png'
import Smalldots from '../../Shapes/Smalldots.png'








function Part1 () {


    const [activeLink, setActiveLink] = useState("link1");







    // Smooth transitions for the headings and frontpage words
    useEffect(() => {
        const headings = document.querySelectorAll('.heading');
        headings.forEach((heading, index) => {
            setTimeout(() => {
                heading.classList.add('show-heading');
            }, index * 1300);
        });

        // THE PARAGRAPH TRANSITIONS (but from left to right)
        const paragraph = document.getElementById("animated-paragraph");
        const text = paragraph.textContent;
        paragraph.textContent = "";

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            paragraph.appendChild(span);
        }

        // THE SOCIAL MEDIA SMOOTH TRANSITIONS
        const socialWrapper = document.querySelector('.all_icons');
        socialWrapper.style.opacity = '0';
        socialWrapper.style.visibility = 'hidden';
        setTimeout(() => {
            socialWrapper.style.transition = 'opacity 1s ease, visibility 1s';
            socialWrapper.style.opacity = '1';
            socialWrapper.style.visibility = 'visible';
        }, 3000);

        // SMOOTH TRANSITION FOR THE BUTTON
        const buttonWrapper = document.querySelector('.coffee-button');
        buttonWrapper.style.opacity = '0';
        buttonWrapper.style.visibility = 'hidden';
        setTimeout(() => {
            buttonWrapper.style.transition = 'opacity 1s ease, visibility 1s';
            buttonWrapper.style.opacity = '1';
            buttonWrapper.style.visibility = 'visible';
        }, 3500);

        // SMOOTH TRANSITION FOR THE RIGHT ME PHOTO
        const photoWrapper = document.querySelector('.My_photo');
        photoWrapper.style.opacity = '0';
        photoWrapper.style.visibility = 'hidden';
        setTimeout(() => {
            photoWrapper.style.transition = 'opacity 1s ease, visibility 1s';
            photoWrapper.style.opacity = '1';
            photoWrapper.style.visibility = 'visible';
        }, 3500);

        // SMOOTH TRANSITION FOR THE NAVIGATION LINKS
        const navLinksWrapper = document.querySelector('.desk_links');
        navLinksWrapper.style.opacity = '0';
        navLinksWrapper.style.visibility = 'hidden';
        setTimeout(() => {
            navLinksWrapper.style.transition = 'opacity 1s ease, visibility 1s';
            navLinksWrapper.style.opacity = '1';
            navLinksWrapper.style.visibility = 'visible';
        }, 2000);

    }, []);






    // Called on burger click
    const toggleMobileMenu = () => {
        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile-nav');
        const everything_is_here = document.querySelector('body');
        const center_img_elements = document.querySelectorAll('.Two_Parts, .Part2, .Part3, .Part4, .Part5, .Part6, .Part7, .Part8');

        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        everything_is_here.classList.toggle('fixed');

        center_img_elements.forEach((element) => {
            element.classList.toggle('blur');
        });
    };




    // Onclick of mobile nav links & scroll to section
    const handleLinkClick = (sectionClass, event) => {
        event.preventDefault();
        toggleMobileMenu();

        if (sectionClass) {
            const section = document.querySelector(`.${sectionClass}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };




    // Desktop nav links onclick, scroll to section
    const handleLinkClickDesk = (sectionClass, linkClass, event) => {
        event.preventDefault();
        setActiveLink(linkClass);

        if (sectionClass) {
            const section = document.querySelector(`.${sectionClass}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };



    // Make a link active on scroll view
    useEffect(() => {
        const sections = [
            { className: "center_img", linkClass: "link1" },
            { className: "Part3", linkClass: "link2" },
            { className: "Part4", linkClass: "link3" },
            { className: "Part7", linkClass: "link4" },
        ];

        const observers = [];

        sections.forEach(({ className, linkClass }) => {
            const section = document.querySelector(`.${className}`);
            if (section) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveLink(linkClass);
                        }
                    },
                    { threshold: 0.5 }
                );
                observer.observe(section);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);








    return(
        <div className="center_img">
            <div className="triangle1"></div>
            <div className="navigation_links">
                <header>
                    <div className="container">
                        <div className="hamburger_container">
                            <button className="hamburger" onClick={toggleMobileMenu}>
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
                    <div className="mobile_nav_contains">
                        <a className="Ml_1" onClick={(e) => handleLinkClick('center_img', e)}>Home <i className="fa-solid fa-house"></i></a>
                        <a className="Ml_2" onClick={(e) => handleLinkClick('Part3', e)}>Projects <i className="fa-solid fa-list-check"></i></a>
                        <a className="Ml_3" onClick={(e) => handleLinkClick('Part4', e)}>Certificates <i className="fa-solid fa-file-invoice"></i></a>
                        <a className="Ml_4" onClick={(e) => handleLinkClick('Starting_Part7', e)}>Contact <i className="fa-solid fa-id-badge"></i></a>
                    </div>
                </nav>

                <div className="desk_links">
                <div className="desk_links">
                    <a className={`link1 ${activeLink === "link1" ? "active" : ""}`} onClick={(e) => handleLinkClickDesk("center_img", "link1", e)}>
                        Home
                    </a>
                    <a className={`link2 ${activeLink === "link2" ? "active" : ""}`} onClick={(e) => handleLinkClickDesk("Part3", "link2", e)}>
                        Projects
                    </a>
                    <a className={`link3 ${activeLink === "link3" ? "active" : ""}`} onClick={(e) => handleLinkClickDesk("Part4", "link3", e)}>
                        Certificates
                    </a>
                    <a className={`link4 ${activeLink === "link4" ? "active" : ""}`} onClick={(e) => handleLinkClickDesk("Part7", "link4", e)}>
                        Contact
                    </a>
                    </div>
                </div>
            </div>

            <div className="Two_Parts">
                <div className="Left_part">
                    <div className="left-part-wrapper">
                        <div className="First_headings">
                            <h2 className="hello_heading heading">Hello, I'm</h2>
                            <h1 className="Remy_heading heading">REMY <span className="shema">SHEMA</span></h1>
                        </div>

                        <div className="small_paragraph">
                            <p id="animated-paragraph" className="paragraph">A MERN stack Engineer & a creative thinker.</p>
                        </div>

                        <div className="Buy_me_coffee">
                            <button className="coffee-button" onClick={() => window.open('/CV_Remy.pdf', '_blank')}>View my cv</button>
                        </div>

                        <div className="Hire_me_and_Github">
                            <p className="Github_ico">
                                <a href="https://github.com/Shemaremy" className="mob_github_link">
                                    <i className="fab fa-github mob_github_ico" ></i>
                                    <span className="mob_my_github_word">My Github</span>
                                </a>
                            </p>
                        </div>

                        <div className="social_media">
                            <div className="all_icons">
                                <p className="icon Linkedin">
                                    <a href="https://linkedin.com/in/shema-remy-ba3229288">
                                        <i className="ico_1 fab fa-linkedin"></i>
                                    </a>
                                </p>

                                <p className="icon Twitter">
                                    <a href="https://x.com/Shemaremi/">
                                        <i className="ico_1 fa-brands fa-x-twitter"></i>
                                    </a>
                                </p>

                                <p className="icon Instagram">
                                    <a href="https://www.instagram.com/shema.remy">
                                        <i className="ico_1 fab fa-instagram"></i>
                                    </a>
                                </p>

                                <p className="icon Behance">
                                    <a href="https://github.com/Shemaremy">
                                        <i className="ico_1 fab fa-github"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Right_part">
                    <div className="My_photo">
                        <img className="working_img" src={working} alt="" />
                    </div>
                </div>
                
                <div className="frontpage-shapes-container">
                    <img src={Smalldots} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Part1;