import React from "react";

function Part3() {

    return(
        <div className="Part3">
            <div className="Two_Parts3">
                <div className="Left_part3">
                    <h2 className="My_proj_header">My Projects</h2>
                    <p className="My_proj_Paragraph">Below, find my projects that I’ve been working on</p>
                </div>
                <div className="Right_part3">
                    <div className="main-card-3">
                    <div className="left-part-3">
                        <button id="prev-slide-3" className="slide-button-3"><i className="chev-icon-3 fa fa-angle-left" aria-hidden="true"></i></button>
                        <ul className="cards-library-3">
                        <div className="card-3">
                            <div className="card-content-3 rimwe">1</div>
                        </div>
                        <div className="card-3">
                            <div className="card-content-3 kabiri">2</div>
                        </div>
                        <div className="card-3">
                            <div className="card-content-3 gatatu">3</div>
                        </div>
                        <div className="card-3">
                            <div className="card-content-3 kane">4</div>
                        </div>
                        <div className="card-3">
                            <div className="card-content-3 gatanu">5</div>
                        </div>
                        <div className="card-3">
                            <div className="card-content-3 gatandatu">6</div>
                        </div>
                        </ul>
                        <button id="next-slide-3" className="slide-button-3"><i className="chev-icon-3 fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>
                    <div className="right-part-3">
                        <div className="scrollbar-container-3">
                        <div className="scrollbar-3"></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Part3;