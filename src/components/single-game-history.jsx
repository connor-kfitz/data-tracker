import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../styles/single-game-history-style.css";

var name = 'Monkæ'
const apiKey = "RGAPI-d2fb1e37-ddcb-4f9f-85a2-0f6949f3b81b";


export default function SingleGameHistory(props) {

    const [matchData, setMatchData] = useState();
    const [mapData, setMapData] = useState();
    const [gameTypeData, setGameTypeData] = useState();

    const [gameType, setGameType] = useState('');
    const [matchResult, setMatchResult] = useState(false);

    const [blueTeam, setBlueTeam] = useState();
    const [redTeam, setRedTeam] = useState();

    const [blueNames, setBlueNames] = useState();
    const [redNames, setRedNames] = useState();

    const getGameData = async() => {

        const getMatchData = await (axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${props.gameData}?api_key=${apiKey}`));
        setMatchData(getMatchData.data);

        const getMapInfo = await (axios.get(`https://static.developer.riotgames.com/docs/lol/maps.json`));
        setMapData(getMapInfo);

        const getGameTypeData = await (axios.get(`https://static.developer.riotgames.com/docs/lol/queues.json`));
        setGameTypeData(getGameTypeData);

    }

    function getGameMode() {
        for(var i=0; i < gameTypeData.data.length; i++){
            if(gameTypeData.data[i].queueId == matchData.info.queueId){
                setGameType(gameTypeData.data[i].description)
            }
        }
    }

    function getTeams() {
        var blueTeam = []
        var redTeam =[]
        for(var i=0; i < 5; i++){
            blueTeam.push(matchData.info.participants[i])
        }
        for(var i=5; i < 10; i++){
            redTeam.push(matchData.info.participants[i])
        }
        setBlueTeam(blueTeam);
        setRedTeam(redTeam);
    }

    function getWinningTeam() {
        if(matchData.info.teams[0].win == true){
            return(true);
        }
    }

    function checkPlayerWin() {
        if(blueNames.includes(props.summonerName)) {
            if(getWinningTeam()) {
                setMatchResult(true)
            }
        }
        if(redNames.includes(props.summonerName)) {
            if(!getWinningTeam()) {
                setMatchResult(true)
            }
        }
    }

    function getNames() {
        var blueName = [];
        var redName = [];
        blueTeam.map((player) => {
            blueName.push(player.summonerName);
        })
        redTeam.map((player) => {
            redName.push(player.summonerName);
        })
        setBlueNames(blueName);
        setRedNames(redName);
    }

    useEffect(() => {
        getGameData()
    },[])

    useEffect(() => {
        if((matchData) && (gameTypeData)){
            getGameMode();
            getTeams();
            getWinningTeam();
        }

    },[matchData, gameTypeData])

    useEffect(() => {
        if((blueTeam) && (redTeam)){
            getNames();

        }

    },[blueTeam, redTeam])

    useEffect(() => {
        if((blueNames) && (redNames)){
            checkPlayerWin();
        }

    },[blueNames, redNames])


    return (
        (matchData ? (
        <div className="history-container">
            <div className="history-cont-one">
                <h1>{gameType}</h1>
                <div>{matchResult ? (<div>Victory</div>) : (<div>Defeat</div>)}</div>
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
                    
                    {(blueNames) ? (
                            blueNames.map((player) => (
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>{player}</div>
                                </div>

                            ))
                    ) : ( <div/>)}
                    

                </div>
                <div className="red-team-cont">
                {(redNames) ? (
                            redNames.map((player) => (
                                <div>
                                    <div>
                                        <img></img>
                                    </div>
                                    <div>{player}</div>
                                </div>

                            ))
                    ) : ( <div/>)}
                </div>
            </div>
        </div>
        ) : (<div>Loading</div>))
        
    );
}