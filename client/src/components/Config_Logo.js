import React from 'react';

class Config_Logo extends React.Component {

    constructor(props){
        super(props);
        this.loginBackgroundColorRef = React.createRef();
        this.loginBtnTextColorRef = React.createRef();
        this.titleTextColorRef = React.createRef();
        this.headerRowBackgroundColorRef = React.createRef();
        this.headerRowTextColorRef = React.createRef();
        this.updateBtnBackgroundColorRef = React.createRef();
        this.updateBtnTextColorRef = React.createRef();
        this.tournamentNameBannerBackgroundColorRef = React.createRef();
        this.tournamentNameBannerTextColorRef = React.createRef();
        this.strokeParColumnBackgroundColorRef = React.createRef();
        this.strokeParColumnTextColorRef = React.createRef();
        this.timeParColumnBackgroundColorRef = React.createRef();
        this.timeParColumnTextColorRef = React.createRef();
        this.sgParColumnBackgroundColorRef = React.createRef();
        this.sgParColumnTextColorRef = React.createRef();
        this.state = {
            loginBackgroundColor:"#13294e",
            loginBtnTextColor: "#ffffff",
            titleTextColor:"#000000",
            headerRowBackgroundColor:"#cc2127",
            headerRowTextColor:"#ffffff",
            updateBtnBackgroundColor:"#13294e",
            updateBtnTextColor:"#ffffff",
            tournamentNameBannerBackgroundColor:"#13294e",
            tournamentNameBannerTextColor:"#ffffff",
            strokeParColumnBackgroundColor:"#13294e",
            strokeParColumnTextColor:"#ffffff",
            timeParColumnBackgroundColor:"#13294e",
            timeParColumnTextColor:"#ffffff",
            sgParColumnBackgroundColor:"#000000",
            sgParColumnTextColor:"#ffffff"
        };

    }

    handleLoginSubmit = () => {
        //pass for now
    }

    handleLoginChange = () => {
        this.setState({loginBackgroundColor:this.loginBackgroundColorRef.current.value});
        this.setState({loginBtnTextColor:this.loginBtnTextColorRef.current.value});
        this.setState({titleTextColor:this.titleTextColorRef.current.value});
        this.setState({headerRowBackgroundColor:this.headerRowBackgroundColorRef.current.value});
        this.setState({headerRowTextColor:this.headerRowTextColorRef.current.value});
        this.setState({updateBtnBackgroundColor:this.updateBtnBackgroundColorRef.current.value});
        this.setState({updateBtnTextColor:this.updateBtnTextColorRef.current.value});
        this.setState({tournamentNameBannerBackgroundColor:this.tournamentNameBannerBackgroundColorRef.current.value});
        this.setState({tournamentNameBannerTextColor:this.tournamentNameBannerTextColorRef.current.value});
        this.setState({strokeParColumnBackgroundColor:this.strokeParColumnBackgroundColorRef.current.value});
        this.setState({strokeParColumnTextColor:this.strokeParColumnTextColorRef.current.value});
        this.setState({timeParColumnBackgroundColor:this.timeParColumnBackgroundColorRef.current.value});
        this.setState({timeParColumnTextColor:this.timeParColumnTextColorRef.current.value});
        this.setState({sgParColumnBackgroundColor:this.sgParColumnBackgroundColorRef.current.value});
        this.setState({sgParColumnTextColor:this.sgParColumnTextColorRef.current.value});
    }

    render() {
        return (
        <div id="logoColorDiv" className="padded-page">
            <center>
            <form id="loginInterface" onSubmit={this.handleLoginSubmit} onChange={this.handleLoginChange}>
                <div>
                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tornament Logo URL:  
                    <input
                    ref={this.emailInputRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="https://drive.google.com/uc?export=view&id=1wTrk-WeAiZ2Man33KzKsLpp_tGXw1Cp0"
                    id="emailInput"
                    required={true}
                    />
                    </label>
                </div>
                <div style={{fontSize: 36, textAlign: "left", border: "solid rgba(156, 156, 156, 0.4)", borderWidth: "thin"}}>
                    Login Screen Coloring
                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Login Button Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.loginBackgroundColor}}></div>
                    <input
                    ref={this.loginBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#13294e"
                    id="emailInput"
                    required={true}
                    />
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Login Button Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.loginBtnTextColor}}></div>
                    <input
                    ref={this.loginBtnTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>
                </div>


                <div style={{fontSize: 36, textAlign: "left", border: "solid rgba(156, 156, 156, 0.4)", borderWidth: "thin"}}>
                    Leaderboard Coloring
                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Tile Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.titleTextColor}}></div>
                    <input
                    ref={this.titleTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#000000"
                    id="emailInput"
                    required={true}
                    />
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Header Row Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.headerRowBackgroundColor}}></div>
                    <input
                    ref={this.headerRowBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#cc2127"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Header Row Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.headerRowTextColor}}></div>
                    <input
                    ref={this.headerRowTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Update Button Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.updateBtnBackgroundColor}}></div>
                    <input
                    ref={this.updateBtnBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#13294e"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Update Button Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.updateBtnTextColor}}></div>
                    <input
                    ref={this.updateBtnTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>
                </div>

                <div style={{fontSize: 36, textAlign: "left", border: "solid rgba(156, 156, 156, 0.4)", borderWidth: "thin"}}>
                    Scorecard Coloring
                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Tournament Name Banner Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.tournamentNameBannerBackgroundColor}}></div>
                    <input
                    ref={this.tournamentNameBannerBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#13294e"
                    id="emailInput"
                    required={true}
                    />
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Tournament Name Banner Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.tournamentNameBannerTextColor}}></div>
                    <input
                    ref={this.tournamentNameBannerTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Stroke Par Column Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.strokeParColumnBackgroundColor}}></div>
                    <input
                    ref={this.strokeParColumnBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#13294e"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Stroke Par Column Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.strokeParColumnTextColor}}></div>
                    <input
                    ref={this.strokeParColumnTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Time Par Column Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.timeParColumnBackgroundColor}}></div>
                    <input
                    ref={this.timeParColumnBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#13294e"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    Time Par Column Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.timeParColumnTextColor}}></div>
                    <input
                    ref={this.timeParColumnTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    SG Par Column Background Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.sgParColumnBackgroundColor}}></div>
                    <input
                    ref={this.sgParColumnBackgroundColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#000000"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                    <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                    SG Par Column Text Color:  
                    <div className="BoxContainer" style={{backgroundColor:this.state.sgParColumnTextColor}}></div>
                    <input
                    ref={this.sgParColumnTextColorRef}
                    className="form-control login-text"
                    type="email"
                    defaultValue="#ffffff"
                    id="emailInput"
                    required={true}
                    />                    
                    </label>

                </div>
                <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                type="submit"
                className="btn-color-theme btn btn-primary btn-block login-btn">
                <span id="login-btn-icon" className="fa fa-sign-in"/>
                Update Logo and Colors
            </button>
            <p></p>
            </form>
            </center>
        </div>
        );
    }   
}

export default  Config_Logo;