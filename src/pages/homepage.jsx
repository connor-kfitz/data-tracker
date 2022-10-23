import React from "react";
import "../styles/homepage-style.css";

export default function Homepage() {

    return (
        <main>
            <div class="homepage-cont">
                <section class="home-sec-one">
                    <div>
                        <h1>Hello, Monkae!</h1>
                        <p>Some text about something</p> 
                    </div> 
                </section>
                <section class="home-sec-two">
                    <div class="history-slider">
                        <ul>
                            <li class="history-slider-on">Ranked Solo</li>
                            <li>Ranked Flex</li>                     
                        </ul>
                    </div>
                    <div class="twenty-game-history">
                        <h1>20 Game History</h1>
                        <div>Wins: 0 Loses: 0</div>
                        <div class="twenty-game-kda-cont">
                            <div class="twenty-game-stat">
                                <div>10/10/10</div>
                                <div>KDA</div>
                                <div>P/Kill 62%</div>
                            </div>
                            <div class="twenty-game-graph">
                               <div>Chart will go here</div> 
                            </div>
                        </div>
                    </div>
                    <div class="box-two">
                        Box Two
                    </div>
                </section>

            </div>
        </main>
    );
}