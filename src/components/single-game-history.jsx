import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/single-game-history-style.css";

const apiKey = "RGAPI-08d7d2f3-dcbc-4884-ac36-e9f4cef5f79b";


export default function SingleGameHistory(props) {

    const [matchData, setMatchData] = useState();
    const [mapData, setMapData] = useState();
    const [gameTypeData, setGameTypeData] = useState();

    const [gameType, setGameType] = useState('')

    const getGameData = async() => {

        const getMatchData = await (axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${props.gameData}?api_key=${apiKey}`));
        setMatchData(getMatchData.data);

        const getMapInfo = await (axios.get(`https://static.developer.riotgames.com/docs/lol/maps.json`));
        setMapData(getMapInfo);

        const getGameTypeData = await (axios.get(`https://static.developer.riotgames.com/docs/lol/queues.json`));
        setGameTypeData(getGameTypeData);
    }

    function getGameMode() {
        // console.log(gameTypeData)
        // console.log(matchData.info.queueId)
        for(var i=0; i < gameTypeData.data.length; i++){
            // console.log(gameTypeData.data[i].queueId)
            if(gameTypeData.data[i].queueId == matchData.info.queueId){
                // console.log('true')
                // console.log(gameTypeData.data[i].description)
                // return(gameTypeData.data[i].description)
                setGameType(gameTypeData.data[i].description)
            }
        }
    }

    useEffect(() => {
        getGameData()
    },[])

    useEffect(() => {
        if((matchData) && (gameTypeData)){
            // console.log(gameTypeData)
            getGameMode();
        }

    },[matchData, gameTypeData])

    return (

        (matchData ? (
        <div className="history-container">
            <div className="history-cont-one">
                <h1>{gameType}</h1>
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
        ) : (<div>Loading</div>))
        
    );
}