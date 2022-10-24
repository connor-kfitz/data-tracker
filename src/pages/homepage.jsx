import React, { useState } from "react";
import "../styles/homepage-style.css";

export default function Homepage() {

    const [gameHistoryModeSelect, setGameHistoryModeSelect] = useState ('RankedSolo');

    function setRankedSolo() {
        setGameHistoryModeSelect('RankedSolo')
    }

    function setRankedFlex(){
        setGameHistoryModeSelect('RankedFlex')
    }

    return (
        <main>
            <div className="homepage-cont">
                <section className="home-sec-one">
                    <div>
                        <h1>Hello, Monkae!</h1>
                        <p>Some text about something</p> 
                    </div>
                    <div className="match-history">
                        <div>Test</div>
                    </div> 
                </section>
                <section className="home-sec-two">
                    <div className="history-slider">
                        <ul>
                            <li className= {gameHistoryModeSelect === "RankedSolo" ? "history-slider-on" : "history-slider-off"} onClick={setRankedSolo}>Ranked Solo</li>
                            <li className={gameHistoryModeSelect === "RankedFlex" ? "history-slider-on" : "history-slider-off"} onClick={setRankedFlex}>Ranked Flex</li>                     
                        </ul>
                    </div>
                    <div className="twenty-game-history">
                        <h1>20 Game History</h1>
                        <div>Wins: 0 Loses: 0</div>
                        <div className="twenty-game-kda-cont">
                            <div className="twenty-game-stat">
                                <div>10/10/10</div>
                                <div>KDA</div>
                                <div>P/Kill 62%</div>
                            </div>
                            <div className="twenty-game-graph">
                               <div>Chart will go here</div> 
                            </div>
                        </div>
                    </div>
                    <div className="preferred-position">
                        <h1>Preferred Position</h1>
                        <div className="preferred-position-chart-cont">

                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}