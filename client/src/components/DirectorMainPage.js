import React from 'react';
import AppMode from "./../AppMode.js"

class DirectorMainPage extends React.Component {

    render() {
        return (
        <div className="padded-page">
            <center>
            <h1 >Director Main Page</h1>
            <h2>This page is under construction.</h2>
            <p>
                <a id="tournamentConfigBtn" class="btn btn-primary" onClick={()=>this.props.changeMode(AppMode.FEED)}>
                <span>Tournament Configuration</span>
                </a>
                <br></br>
                <a class="btn btn-primary" onClick={()=>this.props.changeMode(AppMode.LEADERBOARD)}>
                    <span >Leaderboard</span>
                </a> 
            </p>
            </center>
        </div>
        );
    }   
}

export default DirectorMainPage;