import React, { useState, useEffect } from "react";
import axios from 'axios';
import process from 'react-dotenv';

import "../styles/single-game-history-style.css";

var name = 'Monkæ'
const apiKey = process.env.REACT_APP_riotApiKey;



export default function SingleGameHistory(props) {

    const [matchData, setMatchData] = useState();
    const [mapData, setMapData] = useState();
    const [gameTypeData, setGameTypeData] = useState();

    const [gameType, setGameType] = useState('');
    const [matchResult, setMatchResult] = useState(false);
    const [gameTime, setGameTime] = useState();

    const [playerMatchData, setPlayerMatchdata] = useState();

    const [blueTeam, setBlueTeam] = useState();
    const [redTeam, setRedTeam] = useState();
    const [blueNames, setBlueNames] = useState();
    const [redNames, setRedNames] = useState();

    const [info, setInfo] = useState();

    const getGameData = async() => {

        const getMatchData = await (axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${props.gameData}?api_key=${apiKey}`));
        setMatchData(getMatchData.data);

        const getMapInfo = await (axios.get(`https://static.developer.riotgames.com/docs/lol/maps.json`));
        setMapData(getMapInfo);

        const getGameTypeData = await (axios.get(`https://static.developer.riotgames.com/docs/lol/queues.json`));
        setGameTypeData(getGameTypeData);

        const getInfo = await (axios.get(`http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/profileicon.json`));
        setInfo(getInfo);

        const getSummonerSpells = await (axios.get(`http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/profileicon.json`));

    }

    function getGameMode() {
        for(var i=0; i < gameTypeData.data.length; i++){
            if(gameTypeData.data[i].queueId == matchData.info.queueId){
                setGameType(gameTypeData.data[i].description)
            }
        }
    }

    function getGameTime() {
        setGameTime((Math.trunc(matchData.info.gameDuration / 60)));
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

    function getPlayerMatchData() {
        blueNames.map((player, index) => {
            if(player == props.summonerName){
                setPlayerMatchdata(blueTeam[index])
            }   
        })

        redNames.map((player, index) => {
            if(player == props.summonerName){
                setPlayerMatchdata(redTeam[index])
                console.log(playerMatchData)
            }   
        })
    }

    useEffect(() => {
        getGameData()
    },[])

    useEffect(() => {
        console.log(info)
    },[info])

    useEffect(() => {
        if((matchData) && (gameTypeData)){
            getGameMode();
            getTeams();
            getWinningTeam();
            getGameTime();
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
            getPlayerMatchData();
        }

    },[blueNames, redNames])


    return (
        
        (playerMatchData ? (
        <div className="history-container">
            <div className="history-cont-one">
                <h1>{gameType}</h1>
                <div>{matchResult ? (<div>Victory</div>) : (<div>Defeat</div>)}</div>
                <div>{gameTime} Minutes</div>
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
                    <div>{playerMatchData.kills}/{playerMatchData.deaths}/{playerMatchData.assists}</div>
                    <div>{Math.trunc(playerMatchData.kills + playerMatchData.assists / playerMatchData.deaths)}:1 KDA</div>
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
                <div>P/Kill {}%</div>
                <div>Control Wards {playerMatchData.challenges.controlWardsPlaced}</div>
                <div>{playerMatchData.totalMinionsKilled} ({Math.trunc(playerMatchData.totalMinionsKilled / gameTime)})</div>
            </div>
            
            <div className="history-cont-four">
                <div className="blue-team-cont">
                    
                    {(blueNames) ? (
                            blueNames.map((player, index) => (
                                <div key={index}>
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
                            redNames.map((player, index) => (
                                <div key={index}>
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