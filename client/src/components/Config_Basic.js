import React from 'react';

class Config_Basic extends React.Component {
    //pretty straight forward
    constructor(props){
        super(props);
        this.state = {
            tournamentName: "New Tournament",
            tournamentShortName: "NT",
            faIcon: "fa fa-save",
            btnLabel: "Save The Basic Info",
            tournamentDirectorsName:"aa b",
            tournamentDirectorCode: "Director"
        }
    }
    //adds basic info to mongodb
    addBasicInfo = async (newData) => {
        const url = '/basicInfo/' + this.props.userObj.id;
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newData)
        });
        const msg = await res.text();
    }
    //handles submit and applies all of the state/adding to mongo db
    handleSubmit = (event) => {
        event.preventDefault();
        //start spinner
        this.setState({
            faIcon: "fa fa-spin fa-spinner",
            btnLabel: "Saving..."
        });
        //Prepare current round data to be saved
        let basicInfoData = this.state;
        delete basicInfoData.btnLabel;
        delete basicInfoData.faIcon;
        setTimeout(this.addBasicInfo, 1000, basicInfoData);
        
        event.preventDefault();
    }
    //updates the value automatically
    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    //borrowed from the speedscore app developed in class thus the email names, I only changed what I had to
    render() {
        return (
        <div id="basicDiv" className="padded-page">
            <center>
            <form onSubmit={this.handleLoginSubmit} onChange={this.handleLoginChange}>
            <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tournament Name:  
                <input
                className="form-control login-text"
                defaultValue="New Tournament"
                id="tournamentName"
                required={true}
                />
            </label>
            <p />
            <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tournament Short Name:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                defaultValue="NT"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tournament Directors Name:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                defaultValue="aa b"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label className="form-inline" htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Tournament Director Code:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                defaultValue="Director"
                id="emailInput"
                //pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <p></p>
            <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                id="submitBasicInfo"
                type="submit"
                className="btn-color-theme btn btn-primary btn-block login-btn">
                <span className="fa fa-sign-in"/> 
                Update Basic Info
            </button>
            <p></p>
            </form>
            </center>
        </div>
        );
    }   
}

export default Config_Basic;