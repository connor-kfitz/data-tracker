import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/single-game-history-style.css";

const apiKey = "RGAPI-08d7d2f3-dcbc-4884-ac36-e9f4cef5f79b";


export default function SingleGameHistory(props) {

    const [matchData, setMatchData] = useState([]);
    const [mapData, setMapData] = useState([]);
    const [gameTypeData, setGameTypeData] = useState([]);

    const getGameData = async() => {

        const getMatchData = await (axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${props.gameData}?api_key=${apiKey}`));
        setMatchData(getMatchData);

        const getMapInfo = await (axios.get(`https://static.developer.riotgames.com/docs/lol/maps.json`));
        setMapData(getMapInfo);

        const getGameTypeData = await (axios.get(`https://static.developer.riotgames.com/docs/lol/queues.json`));
        setGameTypeData(getGameTypeData);

    }

    useEffect(() => {
        getGameData();
    },[])

    useEffect(() => {
        console.log(`This is the match data`);
        console.log()
    },[matchData])

    return (
        <div className="history-container">
            <div className="history-cont-one">
                <h1>Flex 5:5 Rank</h1>
                <div>Defeat</div>
                <div>20m 33s</div>
            </div>
            <div className="history-cont-two">
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
            <div className="history-cont-three">
                <div>P/Kill 0%</div>
                <div>Control Ward 0</div>
                <div>CS 134 (6.5)</div>
                <div>Diamond 3</div>
            </div>
            
            <div className="history-cont-four">
                <div className="blue-team-cont">
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
                <div className="red-team-cont">
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
    );
}