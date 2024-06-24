import React from "react";
import "./CSS/Part8.CSS"

function Part8() {
    return(
        <div className="Part8">
            <div className="Two_Parts8">
                <div className="Left_part8">
                    <div className="Mobile_tel">
                        <p className="Mob_p" style={{ marginBottom: 0 }}>
                            <i className="icon2 fa fa-phone" aria-hidden="true" style={{ color: "rgba(240, 248, 255, 0.534)", fontSize: "9px" }}></i> &nbsp; +250 783 674 289
                        </p>
                        <p className="Mob_p" style={{ marginTop: 0 }}>
                            <i className="icon2 fas fa-envelope" style={{ color: "rgba(240, 248, 255, 0.514)", fontSize: "9px" }}></i> &nbsp; remyshema20@gmail.com
                        </p>
                    </div>
                    <p className="Copyright">Copyright © 2024. All Rights Reserved</p>
                </div>
                <div className="Right_part8">
                    <a href="#"><i className="ml fab fa-linkedin" style={{ marginLeft: "3px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                    <a href="#"><i className="ml fab fa-twitter" style={{ marginLeft: "2px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                    <a href="#"><i className="ml fab fa-instagram" style={{ marginLeft: "0px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                    <a href="#"><i className="ml fab fa-behance" style={{ marginLeft: "2px", color: "rgba(255, 247, 231, 0.514)" }}></i></a>
                </div>
            </div>
        </div>
    );
}

export default Part8;