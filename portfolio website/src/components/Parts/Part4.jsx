import React, {useEffect} from "react";
import './CSS/Part4.css';
import "./CSS/Responsive.css";
import EssentialDocs from '../../images/Essential Docs.jpg';
import AlxPhoto from '../../images/Alx Photo.jpg';
import WorkingOnIt from '../../images/freecodecamp.jpg';



import CertShape from '../../Shapes/gatanu.png'


function Part4() {



        // Downloading the Essentials
        useEffect(() => {
            const downloadButton = document.getElementById('essentials');
    
            const startLoading = () => {
                const loaderSpan = document.createElement('span');
                const reducePadding = document.querySelector('.coffee-button');
                reducePadding.style.padding = '8px';
                loaderSpan.classList.add('loader');
                downloadButton.appendChild(loaderSpan);
                downloadButton.disabled = true;
            };


            const handleDownload = async () => {
                const CV = window.confirm("Are you sure you want to download this file ? It contains CV, Resume, Diploma and English assessment results.");
    
                if (CV) {
                    downloadButton.innerHTML = " ";
                    startLoading();
            
                    try {
                      const response = await fetch('/Remy_Essentials.zip');
                      const blob = await response.blob();
                      const url = URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.setAttribute('href', url);
                      link.setAttribute('download', 'Remy_Essentials.zip');
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

        
        // Downloading Freecodecamp certificate
        useEffect(() => {
            const downloadButton = document.getElementById('freecodecamp');
    
            const startLoading = () => {
                const loaderSpan = document.createElement('span');
                const reducePadding = document.querySelector('.coffee-button');
                reducePadding.style.padding = '8px';
                loaderSpan.classList.add('loader');
                downloadButton.appendChild(loaderSpan);
                downloadButton.disabled = true;
            };


            const handleDownload = async () => {
                const CV = window.confirm("Are you sure you want to download this file ? It's my Freecodecamp certificate.");
    
                if (CV) {
                    downloadButton.innerHTML = " ";
                    startLoading();
            
                    try {
                        const response = await fetch('/Freecodecamp.pdf');
                        const blob = await response.blob();
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.setAttribute('href', url);
                        link.setAttribute('download', 'Freecodecamp.pdf');
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
        












    // Content for the certificates section
    const CertificatesSection = (
        <div className="Certifications_panel">
            <div className="left_part_certificates" data-aos="fade-right">
                <h1 className="check_out"><span className="c_out">Check out <br/></span>My Certificates</h1>
                <p className="check_out_par">I've dedicated myself to expanding my programming expertise through a range of courses, each aimed at honing specific skills and broadening my technical knowledge. Among these, I've completed courses in languages like Python, JavaScript, and Java, diving deep into topics such as data structures, algorithms, and web development frameworks such as Bootstrap, Reactjs, JQuery and many more. </p>
                <button className="learn_more_cert">Learn more</button>
            </div>
            <div className="right_part_certificates" data-aos="fade-up">
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
                        <div className="info">
                            <button className="essential_download" id="freecodecamp">Download</button>
                        </div> 
                    </div>
                    <div className="lower_cert">
                        <h4 className="cert_name">Freecodecamp</h4>
                        <h4 className="cert_par">A freeCodeCamp certificate where I learned front-end libraries like ReactJS, Sass, Bootstrap, jQuery, and Redux, and completed five hands-on projects.</h4>
                    </div>
                </div>
                <div className="cert_card">
                    <div className="upper_cert">
                        <img className="cert_img" src={EssentialDocs} alt="" />
                        <div className="info">
                            <button className="essential_download" id="essentials">Download</button>
                        </div>                        
                    </div>
                    <div className="lower_cert">
                        <h4 className="cert_name">Essentials</h4>
                        <h4 className="cert_par">File of my essential docs like CV, Resume, Diploma ...</h4>
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
                    <li className="the_li" data-aos="fade-right">
                        <h5 className="Organisation">FRA</h5>
                        <p className="job_title">Software Engineer - Part time</p>
                        <p className="duration">March 2024 - Present</p>
                    </li>
                    <li className="the_li" data-aos="fade-right">
                        <h5 className="Organisation">SGS</h5>
                        <p className="job_title">Software Engineer - Part time</p>
                        <p className="duration">August 2023 - Present</p>
                    </li>
                    <li className="the_li" data-aos="fade-right">
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
                    <h3 className="cert-exp-header">Certifications and Experience</h3>
                    <div className="main_underline_2-container">
                        <div className="main_underline_2"></div>
                    </div>
                </div>
                <div className="certifications_and_experience_bottom">
                    {CertificatesSection}
                    {ExperienceSection}
                    <div className="certification-shapes">
                        <img src={CertShape} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part4;
