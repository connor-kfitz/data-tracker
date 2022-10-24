import React from "react";
import "../styles/navigation-style.css";

export default function Navigation() {

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-logo-cont">
                    <a href="/">Logo</a>
                </div>
                <div className="nav-links-cont">
                    <ul>
                        <li>League of Legends</li>
                        <li>Team Fight Tactics</li>
                    </ul>
                </div>
                <div className="nav-profile-info">
                    <div>Monkae</div>
                    <div className="nav-profile-img-cont">
                        {/* <img src="https://via.placeholder.com/50"></img> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}