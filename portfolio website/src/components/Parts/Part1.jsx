import React, { useEffect } from "react";
import './CSS/Part1.css';
import "./CSS/Responsive.css";
import working from '../../images/Landing page/working.png';
import workinggreen from '../../images/Landing page/workinggreen.png';

import BigDots from '../../Shapes/bigdots.png'
import Smalldots from '../../Shapes/Smalldots.png'








function Part1 () {




    // Downloading the CV
    useEffect(() => {
        const downloadButton = document.getElementById('downloadButton');
    
        const startLoading = () => {
          const loaderSpan = document.createElement('span');
          const reducePadding = document.querySelector('.coffee-button');
          reducePadding.style.padding = '8px';
          loaderSpan.classList.add('loader');
          downloadButton.appendChild(loaderSpan);
          downloadButton.disabled = true;
        };
    
        const handleDownload = async () => {
          const CV = window.confirm("Are you sure you want to download this CV?");
    
          if (CV) {
            downloadButton.innerHTML = " ";
            startLoading();
    
            try {
              const response = await fetch('/CV_Remy.zip');
              const blob = await response.blob();
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.setAttribute('href', url);
              link.setAttribute('download', 'CV_Remy.zip');
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              URL.revokeObjectURL(url);
    
              downloadButton.disabled = true;
              downloadButton.textContent = "Downloaded successfully!";
              downloadButton.classList.add('completed');
              downloadButton.innerHTML = "Success!";
            } catch (error) {
              console.error('Error occurred while downloading:', error);
              downloadButton.textContent = "Download failed. Please try again.";
              downloadButton.disabled = false;
            }
          }
        };
    
        if (downloadButton) {
          downloadButton.addEventListener('click', handleDownload);
        }
    
        return () => {
          if (downloadButton) {
            downloadButton.removeEventListener('click', handleDownload);
          }
        };
      }, []);









    // Smooth transitions for the headings and frontpage words
    useEffect(() => {
        // HEADING (h1, h2) TRANSITIONS
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

 



    // Effect for smoothness in scrolling transitions
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                document.querySelector("header").classList.add('is-scrolling');
            } else {
                document.querySelector("header").classList.remove('is-scrolling');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    // When the burger is clicked, this is called
    const toggleMobileMenu = () => {
        const menu_btn = document.querySelector('.hamburger');
        const mobile_menu = document.querySelector('.mobile-nav');
        const everything_is_here = document.querySelector('body');
        const center_img_elements = document.querySelectorAll('.Two_Parts, .Part2');

        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        everything_is_here.classList.toggle('fixed');

        center_img_elements.forEach((element) => {
            element.classList.toggle('blur');
        });
    };




    // This handles when the mobile nav buttons are clicked, scroll to a certain section
    const handleLinkClick = (sectionClass, event) => {
        event.preventDefault();
        toggleMobileMenu();

        if (sectionClass) {
            const section = document.querySelector(`.${sectionClass}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };




    // This handles when the desktop nav buttons are clicked, scroll to a certain section
    const handleLinkClickDesk = (sectionClass, event) => {
        event.preventDefault();

        if (sectionClass) {
            const section = document.querySelector(`.${sectionClass}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };









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
                        <a className="Ml_1" onClick={(e) => handleLinkClick(null, e)}>Home</a>
                        <a className="Ml_2" onClick={(e) => handleLinkClick('Part3', e)}>Projects</a>
                        <a className="Ml_3" onClick={(e) => handleLinkClick('Part5', e)}>Services</a>
                        <a className="Ml_4" onClick={(e) => handleLinkClick('Starting_Part7', e)}>Contact</a>
                    </div>
                </nav>

                <div className="desk_links">
                    <a className="link1 active" onClick={(e) => handleLinkClickDesk(null, e)}>Home</a>
                    <a className="link2" onClick={(e) => handleLinkClickDesk('Part3', e)}>Projects</a>
                    <a className="link3" onClick={(e) => handleLinkClickDesk('Part5', e)}>Services</a>
                    <a className="link4" onClick={(e) => handleLinkClickDesk('Part7', e)}>Contact</a>
                </div>
            </div>

            <div className="Two_Parts">
                <div className="Left_part">
                    <div className="First_headings">
                        <h2 className="hello_heading heading">Hello, I'm</h2>
                        <h1 className="Remy_heading heading">REMY <span className="shema">SHEMA</span></h1>
                    </div>

                    <div className="small_paragraph">
                        <p id="animated-paragraph" className="paragraph">A MERN Software Engineer, Visual artist & a creative thinker.</p>
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