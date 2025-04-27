import React from "react";
import Part1 from "./Parts/Part1";
import Part2 from "./Parts/Part2";
import Part3 from "./Parts/Part3";
import Part4 from "./Parts/Part4";
import Part5 from "./Parts/Part5";
import Part6 from "./Parts/Part6";
import Part7 from "./Parts/Part7";
import Part8 from "./Parts/Part8";
import "../App.css";


function Wrapper() {

    return (
        <div className="Everything_is_here">
            <Part1/> {/* Hero */}
            <div className="Mobile_Divisor"></div>
            <Part2/> {/* Meet Remy */}
            <div className="Mobile_Divisor"></div>
            <Part3/> {/* Projects */}
            <Part4/> {/* Certificates */}
            <Part5/> {/* Services */}
            <Part6/> {/* Skillset */}
            <div className="Starting_Part7"></div>
            <Part7/> {/* Form footer */}
            <Part8/> {/* All rights reserved */}
        </div>
    );
}

export default Wrapper;
