import React from "react";
import "../styles/navigation-style.css";

export default function Navigation() {

    return (
        <nav>
            <div class="nav-logo-cont">
                <a href="/">Logo</a>
            </div>
            <div class="nav-links-cont">
                <ul>
                    <li>League of Legends</li>
                    <li>Team Fight Tactics</li>
                </ul>
            </div>
            <div class="nav-profile-info">
                <div>Monkae</div>
                <div class="nav-profile-img-cont">
                    {/* <img src="https://via.placeholder.com/50"></img> */}
                </div>
            </div>
        </nav>
    );
}