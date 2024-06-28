import React from "react";
import "./CSS/Part8.CSS"
import "./CSS/Responsive.css"

function Part8() {
    return(
        <div className="Part8">
            <div className="Two_Parts_Mobile_ending">
                <div className="Upper_Mobile_ending">
                    <div className="Mobile_tel">
                        <p className="phone_container" style={{ marginBottom: 0 }}>
                            <i className="phone_icon fa fa-phone" aria-hidden="true" style={{ color: "rgba(240, 248, 255, 0.534)", fontSize: "9px" }}></i> &nbsp; +250 783 674 289
                        </p>
                        <p className="email_container" style={{ marginTop: 0 }}>
                            <i className="email_icon fas fa-envelope" style={{ color: "rgba(240, 248, 255, 0.514)", fontSize: "9px" }}></i> &nbsp; remyshema20@gmail.com
                        </p>
                    </div>
                    <div className="Bottom_links_container">
                        <a className="bottom_a" href="#"><i className="socials fab fa-linkedin" style={{ marginLeft: "3px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                        <a className="bottom_a" href="#"><i className="socials fab fa-twitter" style={{ marginLeft: "2px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                        <a className="bottom_a" href="#"><i className="socials fab fa-instagram" style={{ marginLeft: "0px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                        <a className="bottom_a" href="#"><i className="socials fab fa-behance" style={{ marginLeft: "2px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                    </div>
                </div>
                <div className="Lower_Mobile_ending">
                    <p className="copyright">Copyright © 2024. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Part8;