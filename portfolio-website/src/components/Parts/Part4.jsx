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



    // Certificates container
    const certificates = [
        {
          img: AlxPhoto,
          pdfLink: '/ALX_Certificate.pdf',
          name: 'ALX',
          description: 'ALX certificate helped me aquire crucial and basic languages like html, css, python, javascript, git & github, ...',
          type: 'view'
        },
        {
          img: WorkingOnIt,
          pdfLink: '/Freecodecamp.pdf',
          name: 'Freecodecamp',
          description: 'A freeCodeCamp certificate where I learned front-end libraries like ReactJS, Sass, Bootstrap, jQuery, and Redux, and completed five hands-on projects.',
          type: 'view'
        },
        {
          img: EssentialDocs,
          name: 'Essentials',
          description: 'File of my essential docs like CV, Resume, Diploma ...',
          type: 'download'
        }
      ];
      







    // Content for the certificates section
    const CertificatesSection = (
        <div className="Certifications_panel">
            <div className="left_part_certificates" data-aos="fade-right">
                <h1 className="check_out"><span className="c_out">Check out <br/></span>My Certificates</h1>
                <p className="check_out_par">I've dedicated myself to expanding my programming expertise through a range of courses, each aimed at honing specific skills and broadening my technical knowledge. Among these, I've completed courses in languages like Python, JavaScript, and Java, diving deep into topics such as data structures, algorithms, and web development frameworks such as Bootstrap, Reactjs, JQuery and many more. </p>
                <button className="learn_more_cert">Learn more</button>
            </div>
            <div className="right_part_certificates" data-aos="fade-up">
            {certificates.map((cert, index) => (
                <div className="cert_card" key={index}>
                    <div className="upper_cert">
                    <img className="cert_img" src={cert.img} alt="" />
                    <div className="info">
                        {cert.type === 'view' ? (
                        <button className="essential_download" onClick={() => window.open(cert.pdfLink, '_blank')}>View pdf</button>
                        ) : (
                        <button className="essential_download" id="essentials">Download</button>
                        )}
                    </div>
                    </div>
                    {/* <div className="lower_cert">
                        <h4 className="cert_name">{cert.name}</h4>
                        <h4 className="cert_par">{cert.description}</h4>
                    </div> */}
                </div>
            ))}

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
