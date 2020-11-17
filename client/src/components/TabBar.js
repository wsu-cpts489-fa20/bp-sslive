import React from 'react';
import ConfigTab from '../ConfigTab.js';

class TabBar extends React.Component {
    render() {
      return(
        <div className="tabbar">
        <a className={(this.props.mode === ConfigTab.BASIC ? " item-selected" : null)}
            onClick={()=>this.props.changeMode(ConfigTab.BASIC)}>
          <span className="tabbar-text">Basic Info</span>
        </a>
        <a className={(this.props.mode === ConfigTab.LOGO ? " item-selected" : null)}
           onClick={()=>this.props.changeMode(ConfigTab.LOGO)}>
          <span className="tabbar-text">Logo + Colors</span>
        </a>
        <a id="coursesTab" className={(this.props.mode === ConfigTab.COURSES ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.COURSES)}>
          <span className="tabbar-text">Courses</span>
        </a> 
        <a className={(this.props.mode === ConfigTab.ROUNDS ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.ROUNDS)}>
          <span className="tabbar-text">Rounds</span>
        </a> 
        <a className={(this.props.mode === ConfigTab.DIVISIONS ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.DIVISIONS)}>
          <span className="tabbar-text">Divisions</span>
        </a> 
        <a className={(this.props.mode === ConfigTab.PLAYERS ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.PLAYERS)}>
          <span className="tabbar-text">Players</span>
        </a> 
        <a className={(this.props.mode === ConfigTab.SCORERS ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.SCORERS)}>
          <span className="tabbar-text">Scorers</span>
        </a> 
        <a className={(this.props.mode === ConfigTab.PUBLISH ? " item-selected" : null)}
          onClick={()=>this.props.changeMode(ConfigTab.PUBLISH)}>
          <span className="tabbar-text">Publish</span>
        </a> 
        </div>
      );
    }
}

export default TabBar;