import React from 'react';
import ConfigTab from '../ConfigTab.js';
import TabBar from './TabBar.js';
import Config_Basic from './Config_Basic.js';
import Config_Logo from './Config_Logo.js';
import ConfigCourses from './ConfigCourses.js';
import Config_Rounds from './Config_Rounds.js';
import Config_Divions from './Config_Divisions.js';
import Config_Players from './Config_Players.js';
import Config_Scorers from './Config_Scorers.js';
import Config_Publish from './Config_Publish.js';

const modeToPage = {};
modeToPage[ConfigTab.BASIC] = Config_Basic;
modeToPage[ConfigTab.LOGO] = Config_Logo;
modeToPage[ConfigTab.COURSES] = ConfigCourses;
modeToPage[ConfigTab.ROUNDS] = Config_Rounds;
modeToPage[ConfigTab.DIVISIONS] = Config_Divions;
modeToPage[ConfigTab.PLAYERS] = Config_Players;
modeToPage[ConfigTab.SCORERS] = Config_Scorers;
modeToPage[ConfigTab.PUBLISH] = Config_Publish;

class FeedPage extends React.Component {
    constructor() {
        super();
        this.state = {mode: ConfigTab.COURSES, //Used for Courses testing. RESET to ConfigTab.COURSES when done
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
        const ModePage = modeToPage[this.state.mode];
        return (
        <div className="padded-page">
            <center>
            <h1 >Tournament Settings</h1>
            <TabBar 
                 mode={this.state.mode} 
                 changeMode={this.handleChangeMode}
                 menuOpen={this.state.menuOpen}/>
            <ModePage 
                userObj={this.props.userObj}
                menuOpen={this.state.menuOpen}
                mode={this.state.mode}
                changeMode={this.handleChangeMode}
                refreshOnUpdate={this.props.refreshOnUpdate}
                coursesMode={this.props.coursesMode}
                setCoursesMode={this.props.setCoursesMode}
                />
            </center>
        </div>
        );
    }   
}

export default FeedPage;