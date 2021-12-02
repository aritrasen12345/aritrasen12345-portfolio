import React from 'react';
import Typical from 'react-typical';
import scrollHandler from '../../../utilities/ScrollService';
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href='https://www.linkedin.com/in/aritra-sen-0b8464202/'>
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href='https://github.com/aritrasen12345'>
                                <i className="fa fa-github"></i>
                            </a>
                            <a href='https://www.facebook.com/aritra.sen.5811'>
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href='https://www.instagram.com/truthful_aritra/'>
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href='https://twitter.com/aritras81007757'>
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello I'M <span className="highlighted-text">Aritra Sen</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Ethusiastic Dev🔴",
                                        1000,
                                        "Full Stack Dev💻",
                                        1000,
                                        "MERN Stack Dev😎",
                                        1000,
                                        "Flutter Dev📱",
                                        1000
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                            onClick={() => scrollHandler.scrollHandler.scrollToHireMe()}>Hire Me</button>
                        <a href='Resume.pdf' download='Aritra Resume.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}
