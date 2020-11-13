import React from 'react';

class Config_Players extends React.Component {

    OpenTemplate = () => {
        window.open("https://docs.google.com/spreadsheets/d/1bqkKUSjTG4PQ9vPV1aAL-X3i8JJUIIeCmxxP2dGaIqk/edit#gid=0", '_black');
    }

    updateplayer = () => {
        
    };

    render() {
        return (
        <div className="padded-page">
            <div className = "player-page">
            <label><b>Player Roster Link:</b></label>
            <button onclick={this.OpenTemplate}>Get Roster Template</button>
            <br/>
            <form className = "player-link-form">
                <br/>
                <input type="text" valeu = "" name="sharelink" size="100"/>
                <button onclick={this.updateplayer}>Update Player Roster</button>
            </form>
            </div>
            <div className = "tabbar">
            <a>
                <span className="tabbar-text">Current Player Roster</span>
            </a>
            </div>
        </div>

        
        
        );
    }   
}

export default  Config_Players;