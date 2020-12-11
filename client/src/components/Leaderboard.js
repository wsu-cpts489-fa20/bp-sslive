import React from 'react';

class Config_Divions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    //renderTable -- render an HTML5 table displaying the divisions logged 
    //by the director and updates the options of courses to pick from on the form
    renderDivisionOptions = () => {
        let table = [];
        for (let i = 0; i < this.props.divisions.length; i++) {
            table.push(
                <option value={this.props.divisions[i].name}>{this.props.divisions[i].name}</option>
            );
        }
        return table;
    }

    //renderTable -- render an HTML5 table displaying the divisions logged 
    //by the director and providing a button to edit each divisions
    renderTable = () => {
        let table = [];
        for (let i = 0; i < this.props.players.length; i++) {
            table.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{this.props.players[i].country}</td>
                    <td>{this.props.players[i].firstName + " " + this.props.players[i].lastName}</td>
                    <td></td>
                    <td>{this.props.players[i].teeTime}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            );
        }
        return table;
    }

    render() {
        return (
            <div>
                <center>
                    <img class="img-display" src="https://drive.google.com/uc?export=view&id=1wTrk-WeAiZ2Man33KzKsLpp_tGXw1Cp0" alt="Tournament Logo"></img>
                </center>
                <div id="leaderboardListDiv" className="leaderboardListDiv">
                    <label id="divisionsListLabel" className="divisionsListLabel">
                        Divisions
                </label>
                    <div id="sortFilter" style={{ textAlign: "center" }}>
                        <table>
                            <thead>
                                <th>
                                    <select name="division" className="form-control" style={{ width: "200px" }}>
                                        {
                                            this.props.divisions == undefined || Object.keys(this.props.divisions).length == 0 ?
                                                null
                                                :
                                                this.renderDivisionOptions()
                                        }
                                    </select>
                                </th>
                                <th>
                                    <select name="sortBy" className="form-control" style={{ width: "200px" }}>
                                        <option value="To Par">Sort By: To Par</option>
                                        <option value="Strokes">Sort By: Strokes</option>
                                        <option value="Time">Sort By: Time</option>
                                    </select>
                                </th>
                                <th>
                                    <select name="groupByDivision" className="form-control" style={{ width: "200px" }}>
                                        <option value="No">Group By Division: No</option>
                                        <option value="Yes">Group By Division: Yes</option>
                                    </select>
                                </th>
                                <th>
                                    <select name="showBanner" className="form-control" style={{ width: "200px" }}>
                                        <option value="Yes">Show Banner: Yes</option>
                                        <option value="No">Show Banner: No</option>
                                    </select>
                                </th>
                            </thead>
                        </table>
                    </div>
                    <div id="leaderboardTableDiv" className="leaderboardTableDiv">
                        <h1></h1>
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>POS</th>
                                    <th>CTRY</th>
                                    <th>PLAYER</th>
                                    <th>TO PAR</th>
                                    <th>THRU</th>
                                    <th>SGS</th>
                                    <th>STR</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.divisions == undefined || Object.keys(this.props.divisions).length == 0 ?
                                    <tr>
                                        <td colspan="5" style={{ fontStyle: "italic" }}>No Players Logged</td>
                                    </tr>
                                    :
                                    this.renderTable()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Config_Divions;