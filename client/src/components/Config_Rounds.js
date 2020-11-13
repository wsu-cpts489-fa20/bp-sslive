import React from 'react';

class Config_Rounds extends React.Component {

    render() {
        return (
           
        <div className="padded-page">
             <div> 
                <h1>Number of Rounds in Tournamnet</h1>                
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select> 
            </div>

            <center>
            <label>
              Date:
              <input name="date" className="form-control form-center" 
                type="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <p></p>
            <label>Time: <br></br>
          <input name="minutes" type="number" size="3"
            min="10" max="400" value={this.state.minutes}
            onChange={this.handleChange} />:  
          <input name="seconds" type="number" size="2"
            min="0" max="60" value={this.state.seconds} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Format:
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="practice">speedgolf</option>
            <option value="tournament">Tournament</option>
          </select> 
          </label>
          <p></p>
          <label>Live Scoring method:
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="practice">player</option>
            <option value="tournament">Tournament</option>
          </select> 
          </label>
          <p></p>
          <label>Scoring data:
          <select name="type" value={this.state.type} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value="practice">strockes and time</option>
            <option value="tournament">Tournament</option>
          </select> 
          </label>
          <p></p>
          <button type="submit" style={{width: "90%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme">
             Save And next
          </button>
            </center>
        </div>
        );
    }   
}

export default  Config_Rounds;