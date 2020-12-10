import React from 'react';
import axios from 'axios';
import AppMode from './../AppMode.js';

class Config_Players extends React.Component {
    constructor(props) {
        super(props);

          this.state = {
            players : [ ],
            url : ""
          };
    }

    OpenTemplate = () => {
        window.open("https://docs.google.com/spreadsheets/d/1bqkKUSjTG4PQ9vPV1aAL-X3i8JJUIIeCmxxP2dGaIqk/edit#gid=0");
    }

    addPlayers = async () => {
        const url = '/players/' + "director@email.com";
        for (var j = 0; j < this.state.players.length; j++) {
            const res = await fetch(url, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(this.state.players[j])
              });
              const msg = await res.text();
              if (res.status != 200) {
                alert("An error occurred when attempting to add new players to database: "
                  + msg);
              } else {
                this.props.refreshOnUpdate(AppMode.FEED);
              }
        }
    }

    getSpreadsheet = async() => {
        // var url = "https://docs.google.com/spreadsheets/d/1S18r4b_WUEFH1_ramu5kPjAPBZrME1Cxrpi_vdhony4/edit?usp=sharing";
        var url = this.state.url;
        console.log(url);
        return axios.get(url)
            .then(res => {
                let chunk = res.data.split("Sheet1")[1];
                let sheet = chunk.split("><meta")[0];
                let rowsChunk = sheet.split("R4 TEE TIME")[1];
                let rows = rowsChunk.split("\n");

                var newPlayers = [];
                for(var i = 1; i < rows.length; i++) {
                    let row = rows[i].split(",");
                    let player = {
                        "firstName" : row[0],
                        "lastName" : row[1],
                        "BIB" : row[2],
                        "division": row[3],
                        "hometown" : row[4],
                        "country": row[5],
                        "teeTime": row[6]
                    }
                    newPlayers.push(player);
                }

                this.setState({players: newPlayers});
                this.state.players = newPlayers;
            })
    }
    handleChange = (event) => {
        const name = event.target.name;
        console.log(name);
        if (name === "url") {
            this.setState({url: event.target.value});
        }
    }

    render() {
        return (
        <div className="padded-page">
            <div className = "player-page">
            <label><b>Player Roster Link:</b></label>
            <button onClick={this.OpenTemplate}>Get Roster Template</button>
            <br/>
            <input name="url" type="text" value={this.state.url} onChange={this.handleChange}></input>
            <button onClick={this.getSpreadsheet}>Update Player Roster</button>
            </div>
            <table className="table table-hover">
                <thead className="thead-light">
                <tr>
                    <th>LAST NAME</th>
                    <th>FIRST NAME</th>
                    <th>BIB#</th>
                    <th>Division</th>
                    <th>HomeTown</th>
                    <th>Country</th>
                    <th>Image URL</th>
                    <th>R1 Tee Time</th>
                </tr>
                </thead>
                <TableList
                    players={this.state.players}/>
            </table>
            <button type="submit" style={{width: "70%",fontSize: "36px"}} onClick={this.addPlayers} 
                className="btn btn-primary btn-color-theme login-btn">
              <span className="fa fa-edit"/>&nbsp;Save Scorers
          </button>
        </div>
        );
    }   
}
class TableList extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
    }
    renderTable = () => {
        let table = [];
        for (let r = 0; r < this.props.players.length; ++r) {
            table.push(
            <TableRow 
                lastName = {this.props.players[r].firstName}
                firstName = {this.props.players[r].lastName}
                BIB = {this.props.players[r].BIB}
                division = {this.props.players[r].division}
                hometown = {this.props.players[r].hometown}
                country = {this.props.players[r].country}
                teeTime = {this.props.players[r].teeTime}
                />
            );
        }
        return table;
    }

    render() {
        return ( 
        <tbody>
            {
                Object.keys(this.props.players).length === 0 ?
                <tr>
                 <td colSpan="5" style={{fontStyle: "italic"}}>No players</td>
                </tr> : this.renderTable()
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
                <td>{this.props.lastName}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.BIB}</td>
                <td>{this.props.division}</td>
                <td>{this.props.hometown}</td>
                <td>{this.props.country}</td>
                <td>N/a</td>
                <td>{this.props.teeTime}</td>
            </tr> 
        );
    }
}
export default  Config_Players;