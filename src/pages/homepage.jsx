import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/homepage-style.css";

import SingleGameHistory from "../components/single-game-history";

const apiKey = "RGAPI-08d7d2f3-dcbc-4884-ac36-e9f4cef5f79b";
var name = 'Monkæ'
var puuid = "FE-AkSKHlt5HekAajyo3q0vgmLtH-64IKMcNk50aWE0XInp4AUVwAfWHSqQZKB3DFOeszLf7O8ReNQ";
var matchId = "NA1_4473673180";

export default function Homepage() {

    const [gameHistoryModeSelect, setGameHistoryModeSelect] = useState ('RankedSolo');
    const [PUUID, setPUUID] = useState('');
    const [matchIds, setMatchIds] = useState([]);

    const getData = async() => {

        const getPUUID = await (axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`));
        setPUUID(getPUUID.data.puuid);

        const getMatchIds = await (axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${getPUUID.data.puuid}/ids?start=0&count=5&api_key=${apiKey}`));
        setMatchIds(getMatchIds.data);
        console.log(`These are the match IDS`);

    }

    useEffect(() => {
        getData();
    },[])

    useEffect(() => {
        console.log(`These are the match IDS`);
        console.log(PUUID)
        console.log(matchIds)
    },[matchIds])


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
                        <p>Here is some of your match history...</p> 
                    </div>
                    <div className="match-history">
                        
                    {matchIds.map((game) => (
                            <SingleGameHistory gameData={game}/>        
                    ))}

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