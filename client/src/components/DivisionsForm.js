import React from 'react';
import DivisionsAppMode from './../DivisionsAppMode.js';

class DivisionsForm extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.editDivisionFlag) {
            this.state = {
                faIcon: "fa fa-save",
                btnLabel: "Save & Add Course to Tournament",
                numRounds: "1",
                numHoles: "18",
                course: "Placeholder"
            }
        }
        else {
            let thisDivision = {...this.props.startData}
            thisDivision.faIcon = "fa fa-edit";
            thisDivision.btnLabel = "Update Division"
            delete thisDivision.id;
            this.state = thisDivision;
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    //handleSubmit -- When the user clicks on the button to save/update the
    //division, start the spinner and invoke the parent component's saveDivision
    //method to do the actual work. Note that saveCourse is set to the correct
    //parent method based on whether the user is logging a new course or editing
    //an existing round.
    handleSubmit = (event) => {
        event.preventDefault();
        //start spinner
        this.setState({
            faIcon: "fa fa-spin fa-spinner",
            btnLabel: "Saving..."
        });
        //Prepare current round data to be saved
        let divisionData = this.state;
        delete divisionData.btnLabel;
        delete divisionData.faIcon;
        //call saveCourse on 1 second delay to show spinning icon
        setTimeout(this.props.saveDivision, 1000, divisionData);
        event.preventDefault();
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.props.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONLIST);
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
                        <select name="numRounds" style={{ display: "inline-block", width: "2.2%", float: "left", textAlign: "center" }} value="18" onChange={(event) => this.handleChange(event)}>
                            <option value="1">1</option>
                            <option value="2" disabled="false">2</option>
                            <option value="3" disabled="true">3</option>
                            <option value="4" disabled="true">4</option>
                        </select>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Holes in Round 1: &nbsp;
                        </div>
                        <select name="numHoles" style={{ display: "inline-block", width: "2.2%", float: "left", textAlign: "center" }} value="18" onChange={(event) => this.handleChange(event)}>
                            <option value="18">18</option>
                            <option value="Front 9" disabled="true">Front 9</option>
                            <option value="Back 9" disabled="true">Back 9</option>
                        </select>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Course for Round 1: &nbsp;
                        </div>
                        <select name="course" style={{ display: "inline-block", width: "15%", float: "left", textAlign: "center" }} value="18" onChange={(event) => this.handleChange(event)}>
                            <option value="Placeholder">Placeholder</option>
                        </select>
                    </ul>
                    <button id="submitDivisionBtn" type="submit" style={{ width: "70%", fontSize: "36px", marginBottom: "10px" }}
                        className="btn btn-primary btn-color-theme">
                        <span className={this.state.faIcon} />&nbsp;{this.state.btnLabel}
                    </button>
                    <button id="cancelCourseBtn" className="btn btn-danger btn-block" style={{ width: "70%" }} onClick={(event) => this.handleCancel(event)}>
                        Cancel
                    </button>
                </form>
            </div>
        ); //NOTE -- Need Rounds Tab to be completed to properly implement the Divisions Tab
    }
}

export default DivisionsForm;