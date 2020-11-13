import React from 'react';

class Config_Scorers extends React.Component {
    constructor(props) {
        super(props);

          this.state = {
            customize: false,
            rounds : [ 
                {
                    "scorerFirstName" : "Dallas",
                    "scorerLastName" : "Padilla",
                    "scorerLoginCode" : "password",
                    "scoringAssignment" : "Starter for Round 1"
                }]
          };
    }
    
    handleChange = (event) => {
        const name = event.target.name;
        if (name === "scorerFirstName") {
            this.setState({[this.state.rounds[0].scorerFirstName]: event.target.value});
            this.state.rounds[0].scorerFirstName = event.target.value;
        } else if(name === "customize") {
            this.setState({[name]: event.target.value});
        }
        else 
        {
            this.setState({[event.target.name]: event.target.value});
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
                rounds={this.state.rounds}
                custom={this.state.customize}
                handleChange={this.handleChange}
                />
            </table>
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