import React from 'react';

class Config_Publish extends React.Component {

    handleSubmit = (event) => {
        console.log("Publish");
        // localStorage.setItem("scorers", JSON.stringify(this.state.rounds));
        // let data = JSON.parse(localStorage.getItem("scorers"));
        // console.log(data);

        }
    render() {
        return (
        <div className="padded-page">
            <center>
            <h1 > Tournament Settings</h1>
            
            <button type="submit" style={{width: "70%",fontSize: "36px"}} onClick={this.handleSubmit} 
                className="btn btn-primary btn-color-theme login-btn">
              <span className="fa fa-edit"/>&nbsp;Save Scorers
          </button>
            </center>
        </div>
        );
    }   
}

export default   Config_Publish;