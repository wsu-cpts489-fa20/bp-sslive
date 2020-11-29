import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import CoursesAppMode from './../CoursesAppMode.js';
import DivisionsAppMode from './../DivisionsAppMode.js';
import FeedPage from './FeedPage.js';
import Rounds from './Rounds.js';
import DirectorMainPage from './DirectorMainPage.js';
import LeaderBoard from './Leaderboard.js'

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to SpeedScore";
modeTitle[AppMode.FEED] = "";
modeTitle[AppMode.ROUNDS] = "My Rounds";
modeTitle[AppMode.ROUNDS_LOGROUND] = "Log New Round";
modeTitle[AppMode.ROUNDS_EDITROUND] = "Edit Round";
modeTitle[AppMode.MAIN] = "Director Main Page"

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.FEED] = FeedPage;
modeToPage[AppMode.ROUNDS] = Rounds;
modeToPage[AppMode.ROUNDS_LOGROUND] = Rounds;
modeToPage[AppMode.ROUNDS_EDITROUND] = Rounds;
modeToPage[AppMode.MAIN] = DirectorMainPage;
modeToPage[AppMode.LEADERBOARD] = LeaderBoard;


class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  authenticated: false,
                  userObj: {displayName: "", profilePicURL: ""},
                  coursesMode: CoursesAppMode.COURSELIST,
                  divisionsMode: DivisionsAppMode.DIVISIONLIST
                 };
  }

  //componentDidMount
  componentDidMount() {
    if (!this.state.authenticated) { 
      //Use /auth/test route to (re)-test authentication and obtain user data
      fetch("/auth/test")
        .then((response) => response.json())
        .then((obj) => {
          if (obj.isAuthenticated) {
            this.setState({
              userObj: obj.user,
              authenticated: true,
              mode: AppMode.FEED //We're authenticated so can get into the app. MAIN
            });
          }
        }
      )
    } 
  }
  handleNewTournament = () => {
    let obj = {
      id: "director@email.com",
      password: "Password1!",
      displayName: "Director",
      authStrategy : "local",
      profile : "https://icon-library.net//images/default-profile-icon/default-profile-icon-24.jpg",
      securityQuestion : "Director?",
      securityAnswer : "Yes",
      courses : []
    }
    this.setState({
      authenticated: true,
      mode: AppMode.MAIN
    });
  }

  //refreshOnUpdate(newMode) -- Called by child components when user data changes in 
  //the database. The function calls the users/:userid (GET) route to update 
  //the userObj state var based on the latest database changes, and sets the 
  //mode state var is set to newMode. After this method is called, the
  //App will re-render itself, forcing the new data to 
  //propagate to the child components when they are re-rendered.
  refreshOnUpdate = async(newMode) => {
    let response = await fetch("/users/" + this.state.userObj.id);
    response = await response.json();
    const obj = JSON.parse(response);
    this.setState({
      userObj: obj,
      mode: newMode
    });
  }

  setCoursesMode = (newMode) => {
    this.setState({coursesMode: newMode});
  }

  setDivisionsMode = (newMode) => {
    this.setState({divisionsMode: newMode});
  }

  handleChangeMode = (newMode) => {
    if (newMode == "LOGIN") {
      window.open(`/auth/logout`,"_self");
    }
    this.setState({mode: newMode});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id,
                   authenticated: true});
  }


  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div className="layout">
        <NavBar 
          title={modeTitle[this.state.mode]} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
          <SideMenu 
            menuOpen = {this.state.menuOpen}
            mode={this.state.mode}
            toggleMenuOpen={this.toggleMenuOpen}
            displayName={this.state.userObj.displayName}
            profilePicURL={this.state.userObj.profilePicURL}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}/>
          <ModePage 
            newTournament={this.handleNewTournament}
            menuOpen={this.state.menuOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userObj={this.state.userObj}
            refreshOnUpdate={this.refreshOnUpdate}
            coursesMode={this.state.coursesMode}
            setCoursesMode={this.setCoursesMode}
            divisionsMode={this.state.divisionsMode}
            setDivisionsMode={this.setDivisionsMode}
            />
      </div>
    );  
  }
}

export default App;