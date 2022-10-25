import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/homepage-style.css";

const apiKey = "RGAPI-9c2f6b68-2a4d-4f1d-8889-bb3d0b7126ed";
var name = 'Monkæ'
var puuid = "FE-AkSKHlt5HekAajyo3q0vgmLtH-64IKMcNk50aWE0XInp4AUVwAfWHSqQZKB3DFOeszLf7O8ReNQ";
var matchId = "NA1_4473673180";

export default function Homepage() {

    const getPUUID = () => {
        axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`)
            .then(response => {
                setPUUID(response.data.puuid)
            }).catch(err => {
                console.log(err)
            })
    }

    const getMatchIds = () => {
        axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${PUUID}/ids?start=0&count=5&api_key=${apiKey}`)
        .then((response) => {
            setMatchIds(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getMatchInfo = (id) => {
            axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}?api_key=${apiKey}`)
            .then((response) => {
                setMatchData(current => [...current, response])
                console.log('g')
                console.log(matchData)
            }).catch(err => {
                console.log(err)
            })

    }


    const [gameHistoryModeSelect, setGameHistoryModeSelect] = useState ('RankedSolo');
    const [PUUID, setPUUID] = useState('');
    const [matchIds, setMatchIds] = useState([]);
    const [matchData, setMatchData] = useState([]);

    
    useEffect(() => {
        getPUUID()
        getMatchIds()
    }, [])


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
                        <div>
                            <h1>Flex 5:5 Rank</h1>
                            <div>Defeat</div>
                            <div>20m 33s</div>
                        </div>
                        <div>
                            <div>
                                <img></img>
                            </div>
                            <div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                            </div>
                            <div>
                                <div>0/4/0</div>
                                <div>0:00:1 KDA</div>
                            </div>
                            <div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                                <div>
                                    <img></img>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>P/Kill 0%</div>
                            <div>Control Ward 0</div>
                            <div>CS 134 (6.5)</div>
                            <div>Diamond 3</div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>Name</div>
                                </div>
                            </div>
                        </div>
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