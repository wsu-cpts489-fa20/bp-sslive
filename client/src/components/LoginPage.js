import React from 'react';
import AppMode from "./../AppMode.js";

class LoginPage extends React.Component {

constructor() {
    super();
    //Create a ref for the email input DOM element
    this.emailInputRef = React.createRef();
    this.state = {accountCreateMsg: "",
                  loginBtnIcon: "fa fa-sign-in",
                  loginBtnLabel: "Director Login",
                  showCreateAccountDialog: false,
                  showResetPasswordDialog: false,
                  githubIcon: "fa fa-github",
                  githubLabel: "Sign in with GitHub",
                  loginMsg: "",
                  checkbox: false,
                  newTournament: false,
                  tournamentAccessCode: false,
                  scorerAccessCode: false
                  };
} 
    
//Focus cursor in email input field when mounted
componentDidMount() {
    //this.emailInputRef.current.focus();
}  

//handleLogin -- Callback function that sets up initial app state upon login.
//handleLogin = () => {
    //Stop spinner
//    this.setState({loginBtnIcon: "fa fa-sign-in",
 //                  loginBtnLabel: "Log In"});
    //Set current user
    //this.props.setUserId(this.emailInputRef.current.value);
    //Trigger switch to FEED mode (default app landing page)
    //this.props.changeMode(AppMode.FEED);
//}


//handleLoginSubmit -- Called when user clicks on login button.
handleLoginSubmit = async (event) => {

    event.preventDefault();
    this.setState({loginBtnIcon: "fa fa-spin fa-spinner",
                   loginBtnLabel: "Logging In..."});
    const url = "auth/login?username=" + this.emailInputRef.current.value + "@email.com" +
                "&password=" + "Password1!"; // always sets password
    const res = await fetch(url, {method: 'POST'}); 
    if (res.status == 200) { //successful login!
        window.open("/","_self");
    } else { //Unsuccessful login
      const resText = await res.text();
      this.setState({loginBtnIcon: "fa fa-sign-in",
                     loginBtnLabel: "Log In",
                     loginMsg: resText});
    }
}

  //accountCreateStatus -- Called by child CreateAccountDialog component when 
  //user attempted to create new account. Hide the dialog and display 
  //a message indicating result of the attempt.
  accountCreateStatus = (msg) => {
      this.setState({accountCreateMsg: msg,
                     showCreateAccountDialog: false});
  }

  //cancelCreateAccount -- Called by child CreateAccountDialog componenet when user decides
  //to cancel creation of new account by clicking the "X" in top-right of dialog.
  cancelCreateAccount = () => {
      this.setState({showCreateAccountDialog: false});
  }

//handleOAuthLogin -- Callback function that initiates contact with OAuth
//provider
handleOAuthLogin = (provider) => {
    window.open(`/auth/${provider}`,"_self");
}

//handleOAuthLoginClick -- Called whent the user clicks on button to
//authenticate via a third-party OAuth service. The name of the provider is
//passed in as a parameter.
handleOAuthLoginClick = (provider) => {
   this.setState({[provider + "Icon"] : "fa fa-spin fa-spinner",
                  [provider + "Label"] : "Connecting..."});
   setTimeout(() => this.handleOAuthLogin(provider),1000);
}
handleCheckboxChange = (value) => {
    this.setState({checkbox: !this.state.checkbox});
}
handleSelect = (event) => {
    let name = event.target.name;
    if (name === "newTournament") {
        console.log("new tournament.")
        this.props.newTournament();
        this.setState({newTournament: !this.state.newTournament});
        this.setState({tournamentAccessCode: false});
        this.setState({scorerAccessCode: false});
    } 
    else if (name === "tournamentAccessCode") {
        this.setState({newTournament: false});
        this.setState({tournamentAccessCode: !this.state.tournamentAccessCode});
        this.setState({scorerAccessCode: false});
    }
    else if (name === "scorerAccessCode") {
        this.setState({newTournament: false});
        this.setState({tournamentAccessCode: false});
        this.setState({scorerAccessCode: !this.state.scorerAccessCode});
    }
}
// newTournament: false,
// tournamentAccessCode: false,
// scorerAccessCode: false
  render() {
    return(
        <div id="login-mode-div" className="padded-page">
        <center>
            <h1 />
            {this.state.accountCreateMsg != "" ? <p className="emphasis">{this.state.accountCreateMsg}</p> : null}
            {this.state.loginMsg != "" ? <p className="emphasis">{this.state.loginMsg}</p> : null}
            <div className="loginContainer">
                <button id="newTournament" name="newTournament" onClick={this.handleSelect.bind(this)} className="btn-color-theme btn btn-block login-btn"  style={{width : "21%"}}>
                <span id="login-btn-icon"/>
                    &nbsp;Create Tournament:
                </button>
                <br></br>
                <p/>
                <button id="tournamentAccessCode" name="tournamentAccessCode" onClick={this.handleSelect.bind(this)} className="btn-color-theme btn btn-block login-btn"  style={{width : "21%"}}>
                <span id="login-btn-icon"/>
                    &nbsp;Director Access Code:
                </button>
                <p/>
                {this.state.tournamentAccessCode ?                 
                    <form id="loginInterface" onSubmit={this.handleLoginSubmit}>
                        <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                            <input name='emailInput' ref={this.emailInputRef} className="form-control login-text"
                            placeholder="Enter Director Name"id="emailInput" pattern="[A-Za-z0-9._%+-]{2,}" required={true} />
                        </label>
                        <button name="loginBtn" id="loginBtn" type="submit" style={{width : "5%"}}>
                            <span id="login-btn-icon" className={this.state.loginBtnIcon}/>
                                &nbsp;{"Submit"}
                        </button>
                        
                    </form>
                    : null}
                <br></br>
                <button id="scorerAccessCode" name="scorerAccessCode" onClick={this.handleSelect.bind(this)} className="btn-color-theme btn btn-block login-btn" style={{width : "21%"}}>
                <span id="login-btn-icon"/>
                    &nbsp;Scorer Access Code:
                </button>
                <p/>
                {this.state.scorerAccessCode ?                 
                    <form id="loginInterface" onSubmit={this.handleLoginSubmit}>
                        <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                            <input name='emailInput' ref={this.emailInputRef} className="form-control login-text"
                            placeholder="Enter Scorer Name"id="emailInput" pattern="[A-Za-z0-9._%+-]{2,}" required={true} />
                        </label>
                        <button name="loginBtn" id="loginBtn" type="submit" style={{width : "5%"}}>
                            <span id="login-btn-icon" className={this.state.loginBtnIcon}/>
                                &nbsp;{"Submit"}
                        </button>
                        <p/>
                    </form>
                    : null}
            </div>
        </center>
        </div>
        )
    }
} 

export default LoginPage;