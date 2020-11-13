import React from 'react';
import ConfigTabs from '../ConfigTab.js';

class TournamentConfig extends React.Component {
    constructor() {
        super();
        this.state = {mode: ConfigTabs.BASIC,
                      menuOpen: false,
                     };
      }

    handleChangeMode = (newMode) => {
        if (newMode == "LOGIN") {
          window.open(`/auth/logout`,"_self");
        }
        this.setState({mode: newMode});
      }
    render() {
        return (
        <div className="padded-page">
            <center>
            <h1 >Tournament Settings</h1>
            <TabBar 
                 mode={this.state.mode} 
                changeMode={this.handleChangeMode}
                 menuOpen={this.state.menuOpen}/>
            <h2>This page is under construction.</h2>
            <img src="https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png" 
             height="200" width="200"/>
            <p style={{fontStyle: "italic"}}>Version CptS 489 React Demo</p>
            </center>
        </div>
        );
    }   
}

export default TournamentConfig;