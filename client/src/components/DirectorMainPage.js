import React from 'react';
import AppMode from "./../AppMode.js"

class DirectorMainPage extends React.Component {

    render() {
        return (
        <div className="padded-page" id="directorMainPage" name="directorMainPage">
            <center>
            <h1 >Director Main Page</h1>
            <h2>This page is under construction.</h2>
            <p>
                <button id="tournamentConfigBtn" onClick={()=>this.props.changeMode(AppMode.FEED)} style={{width: "10%", backgroundColor :"#2E8B57", color: "white"}}>
                <span>Tournament Configuration</span>
                </button>
                <br></br>
                <button onClick={()=>this.props.changeMode(AppMode.LEADERBOARD)} style={{width: "10%", backgroundColor :"#2E8B57", color: "white"}}>
                    <span >Leaderboard</span>
                </button> 
            </p>
            </center>
        </div>
        );
    }   
}

export default DirectorMainPage;