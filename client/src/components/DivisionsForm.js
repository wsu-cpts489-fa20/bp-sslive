import React from 'react';
import DivisionsAppMode from './../DivisionsAppMode.js';

class DivisionsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="divisionsFormDiv" className="divisionsFormDiv">
                <form onSubmit={this.handleSubmit}>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Division Name: &nbsp;
                        </div>
                        <input id="courseInput" name="name" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : this.props.disabled ? true : false} value={this.props.courseInList ? this.props.courseName : this.state.name} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Number of Rounds in Division: &nbsp;
                        </div>
                        <select style={{ display: "inline-block", width: "2.2%", float: "left", textAlign: "center" }} value="18">
                            <option value="1">1</option>
                            <option value="2" disabled="true">2</option>
                            <option value="3" disabled="true">3</option>
                            <option value="4" disabled="true">4</option>
                        </select>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Holes in Round 1: &nbsp;
                        </div>
                        <select style={{ display: "inline-block", width: "2.2%", float: "left", textAlign: "center" }} value="18">
                            <option value="18">18</option>
                            <option value="Front 9" disabled="true">Front 9</option>
                            <option value="Back 9" disabled="true">Back 9</option>
                        </select>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Course for Round 1: &nbsp;
                        </div>
                        <select style={{ display: "inline-block", width: "15%", float: "left", textAlign: "center" }} value="18">
                            <option value="Placeholder">Placeholder</option>
                        </select>
                    </ul>
                </form>
            </div>
        ); //NOTE -- Need Rounds Tab to be completed to properly implement the Divisions Tab
    }
}

export default DivisionsForm;