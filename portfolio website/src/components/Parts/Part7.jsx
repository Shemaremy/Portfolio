import React from "react";
import "./CSS/Part7.CSS"

function Part7() {
    return(
        <div className="Part7">
            <div className="Two_Parts7">
                <div className="Upper_part_footer ">
                    <h3 className="Get_in_touch">Get in touch</h3>
                </div>

                <div className="Lower_part_footer ">
                    <div className="Everything">
                        <div className="Left_Section">
                            <div className="left_words">
                                <h1 className="heading_text7">Let's talk</h1>
                                <p className="p1">Ask me anything or just say hi ...</p>
                            </div>

                            <div className="Tel_container">
                                <p className="p2"><i className="icon2 fa fa-phone" aria-hidden="true"></i> &nbsp; +250 783 674 289</p>
                                <p className="p3"><i className="icon2 fas fa-envelope"></i> &nbsp; remyshema20@gmail.com</p>
                            </div>         
                        </div>
                        <div className="Right_section">
                        
                            <form className="myForm" action="https://half-tundra-burn.glitch.me/submit" method="POST">
                                <div className="row">
                                    <div className="Name_Email">
                                        <div className="Name">
                                            <h2 className="heading_text7a">Name</h2>
                                            {/* Add name attribute for the name input field */}
                                            <input type="text" className="name" name="name" placeholder="Your name" required />
                                        </div>
                                        <div className="Email">
                                            <h2 className="heading_text7a">Email</h2>
                                            {/* Add name attribute for the email input field */}
                                            <input type="email" className="email" name="email" placeholder="Email address" required />
                                        </div>
                                    </div>
                                    <div className="Message">
                                        <h2 className="heading_text7a">Message</h2>
                                        {/* Add name attribute for the message input field */}
                                        <input className="text_area message" type="text" name="message" placeholder="Message" required />
                                    </div>
                                    <div className="Send">
                                        <button type="submit" className="button_7" onClick={() => startLoadingtwo()}>Send<i className="icon2 fa fa-paper-plane" style={{ marginLeft: 12 }}></i></button>
                                    </div>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part7;