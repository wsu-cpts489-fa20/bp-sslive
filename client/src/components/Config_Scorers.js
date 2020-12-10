import React from 'react';
import AppMode from './../AppMode.js';

class Config_Scorers extends React.Component {
    constructor(props) {
        super(props);

          this.state = {
            customize: false,
            scorers : [                 {
                "scorerFirstName" : "Tiger",
                "scorerLastName" : "Woods",
                "scorerLoginCode" : "Starter",
                "scoringAssignment" : "Starter for Round 1"
            }]
          };
        
    }
    
    
    handleChange = (event) => {
        const name = event.target.name;
        console.log(name);
        if (name === "scorerFirstName") {
            this.setState({[this.state.scorers[0].scorerFirstName]: event.target.value});
            this.state.scorers[0].scorerFirstName = event.target.value;
        } else if (name === "scorerLastName") {
            this.setState({[this.state.scorers[0].scorerLastName]: event.target.value});
            this.state.scorers[0].scorerLastName = event.target.value;
        } else if (name === "scorerLoginCode") {
            this.setState({[this.state.scorers[0].scorerLoginCode]: event.target.value});
            this.state.scorers[0].scorerLoginCode = event.target.value;
        } else if (name === "scoringAssignment") {
            this.setState({[this.state.scorers[0].scoringAssignment]: event.target.value});
            this.state.scorers[0].scoringAssignment = event.target.value;
        }
        else if(name === "customize") {
            this.setState({[name]: event.target.value});
        }
        else 
        {
            this.setState({[event.target.name]: event.target.value});
        }
    }

    handleSubmit = async () => {
        if (this.state.scorers.length === 0) {
            window.alert("No scorers are available to add.");
        }
        else {
            const url = '/scorers/' + "director@email.com";
            for (var j = 0; j < this.state.scorers.length; j++) {
                const res = await fetch(url, {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(this.state.scorers[j])
                  });
                  const msg = await res.text();
                  if (res.status != 200) {
                    alert("An error occurred when attempting to add new scorers to database: "
                      + msg);
                  } else {
                    this.props.refreshOnUpdate(AppMode.FEED);
                  }
            }
        }
    }

    render() {
        return (
        <div className="padded-page">
            <center>
            <h1 > Scorers</h1>
            <p></p>
          <label>Would you like to customize scorer names and login codes?
          <select name="customize" value={this.state.customize} 
            className="form-control form-center" onChange={this.handleChange}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select> 
          </label>
          <p></p>
          <table className="table table-hover">
            <thead className="thead-light">
            <tr>
                <th>SCORER LAST NAME</th>
                <th>SCORER FIRST NAME</th>
                <th>SCORER LOGIN CODE</th>
                <th>SCORING ASSIGNMENT</th>
            </tr>
            </thead>
             <TableList
                rounds={this.state.scorers}
                custom={this.state.customize}
                handleChange={this.handleChange}
                />
            </table>
            <button type="submit" style={{width: "70%",fontSize: "36px"}} onClick={this.handleSubmit} 
                className="btn btn-primary btn-color-theme login-btn">
              <span className="fa fa-edit"/>&nbsp;Save Scorers
          </button>
            </center>
        </div>
        );
    }   
}
class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.renderTableCustom = this.renderTableCustom.bind(this);
    }
    renderTableCustom = () => {
        let table = [];
        for (let r = 0; r < this.props.rounds.length; ++r) {
            table.push(
            <TableRowCustom
                handleChange= {this.props.handleChange}
                scorerFirstName = {this.props.rounds[r].scorerFirstName}
                scorerLastName = {this.props.rounds[r].scorerLastName}
                scorerLoginCode = {this.props.rounds[r].scorerLoginCode}
                scoringAssignment = {this.props.rounds[r].scoringAssignment}
            />
            );
        }  
        return table;
    }
    renderTable = () => {
        let table = [];
        for (let r = 0; r < this.props.rounds.length; ++r) {
            table.push(
            <TableRow 
                scorerFirstName = {this.props.rounds[r].scorerFirstName}
                scorerLastName = {this.props.rounds[r].scorerLastName}
                scorerLoginCode = {this.props.rounds[r].scorerLoginCode}
                scoringAssignment = {this.props.rounds[r].scoringAssignment}/>
            );
        }
        return table;
    }

    render() {
        return ( 
        <tbody>
            {
                Object.keys(this.props.rounds).length === 0 ?
                <tr>
                 <td colSpan="5" style={{fontStyle: "italic"}}>No rounds logged</td>
                </tr> :  this.props.custom ? this.renderTableCustom() : this.renderTable()
            }
        </tbody>
        );
    }
}
class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <tr>
                <td>{this.props.scorerFirstName}</td>
                <td>{this.props.scorerLastName}</td>
                <td>{this.props.scorerLoginCode}</td>
                <td>{this.props.scoringAssignment}</td>
            </tr> 
        );
    }
}
class TableRowCustom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <tr>
                <td><input name="scorerFirstName" size="25" type="text"
                    value={this.props.scorerFirstName} onChange={this.props.handleChange}/></td>
                <td><input name="scorerLastName" size="25" type="text"
                    value={this.props.scorerLastName} onChange={this.props.handleChange}/></td>
                <td><input name="scorerLoginCode" size="25" type="text"
                    value={this.props.scorerLoginCode} onChange={this.props.handleChange}/></td>
                <td><input name="scoringAssignment" size="25" type="text"
                    value={this.props.scoringAssignment} onChange={this.props.handleChange}/></td>
            </tr> 
        );
    }
}

export default  Config_Scorers;