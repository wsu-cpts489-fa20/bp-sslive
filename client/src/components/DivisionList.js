import React from 'react';
import DivisionsAppMode from './../DivisionsAppMode.js';

class DivisionList extends React.Component {
    constructor(props) {
        super(props);

    }

    //editDivision -- Triggered when the user clicks the edit button for a given course. The id param
    //is the unique property that identifies the round. Set the state variable representing the id 
    //of the round to be edited and then switch the flag editDivision to true so the PUT route will be
    //used rather than the POST route.
    editDivision = (id) => {
        this.props.setStateCallback("editId", id);
        this.props.setStateCallback("editDivisionFlag", true);
        this.props.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONSFORM);
    }

    //renderTable -- render an HTML5 table displaying the divisions logged 
    //by the director and providing a button to edit each divisions
    renderTable = () => {
        let table = [];
        for (let i = 0; i < this.props.divisions.length; i++) {
            table.push(
                <tr key={i}>
                    <td>{this.props.divisions[i].name}</td>
                    <td>{this.props.divisions[i].numRounds}</td>
                    <td>{this.props.divisions[i].numHoles}</td>
                    <td>{this.props.divisions[i].course}</td>
                    <td>
                        <button id="editDivisionBtn" class="btn btn-default" style={{ border: "2px solid rgba(156, 156, 156, 0.4)" }} onClick={() => this.editDivision(i)}>
                            <span className="fa fa-edit">&nbsp;</span>
                            Edit...
                        </button>
                    </td>
                </tr>
            );
        }
        return table;
    }

    //render -- renders the entire courses table along with a header for the table
    //displaying a "No Courses Logged" message in case the table is empty
    render() {
        return (
            <div id="divisionsListDiv" className="divisionsListDiv">
                <button id="addDivisionBtn" className="btn-color-theme btn btn-primary btn-block" //CHANGE LATER from DIVISIONSLIST
                    onClick={(newMode) => this.props.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONSFORM)}>
                    <span className="fa fa-plus">&nbsp;</span>
                Add Division...
            </button>
                <label id="divisionsListLabel" className="divisionsListLabel">
                    Divisions
                </label>
                <div id="divisionsTableDiv" className="divisionsTableDiv">
                    <h1></h1>
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th># Rounds</th>
                                <th>Holes in Each Round</th>
                                <th>Course in Each Round</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.divisions == undefined || Object.keys(this.props.divisions).length == 0 ?
                                <tr>
                                    <td colspan="5" style={{ fontStyle: "italic" }}>No Divisions Logged</td>
                                </tr>
                                :
                                this.renderTable()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DivisionList;