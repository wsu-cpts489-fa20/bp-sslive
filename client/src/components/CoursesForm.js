import React from 'react';
import CoursesAppMode from './../CoursesAppMode.js';

class CoursesForm extends React.Component {
    constructor(props) {
        super(props);
        if (!this.props.editCourseFlag) {
            this.state = {
                faIcon: "fa fa-save",
                btnLabel: "Save & Add Course to Tournament",
                name: this.props.courseName,
                location: this.props.locationName,
                tees: this.props.tees
            }
        }
        else {
            let thisCourse = {...this.props.startData}
            thisCourse.faIcon = "fa fa-edit";
            thisCourse.btnLabel = "Update Course";
            delete thisCourse.id;
            this.state = thisCourse;
        }
        this.renderTable = this.renderTable.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var sName;
        var tName;
        var iPlus;
        if (!this.props.editCourseFlag) {
            for (var i = 0; i < 18; i++) {
                iPlus = i + 1;
                sName = "s" + iPlus;
                tName = "t" + iPlus;
                this.setState({ [sName]: "3", [tName]: "" });
            }
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    //handleSubmit -- When the user clicks on the button to save/update the
    //course, start the spinner and invoke the parent component's saveCourse
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
        let courseData = this.state;
        delete courseData.btnLabel;
        delete courseData.faIcon;
        //call saveRound on 1 second delay to show spinning icon
        //If the editCourseFlag is false then use a POST request
        //otherwise use a PUT request
        if (!this.props.editCourseFlag) {
            setTimeout(this.props.saveCourse, 1000, courseData);
        }
        else {
            delete courseData._id;
            delete courseData.name;
            delete courseData.location;
            setTimeout(this.props.editCourse, 1000, courseData);
        }
        event.preventDefault();
    }

    handleCancel = (event) => {
        event.preventDefault();
        this.props.setStateCallback("editCourseFlag", false);
        this.props.handleChangeCoursesMode(CoursesAppMode.COURSELIST);
    }

    renderTable = () => {
        var sName;
        var tName;
        var iPlus;
        let table = [];
        for (var i = 0; i < 18; i++) {
            iPlus = i + 1;
            sName = "s" + iPlus;
            tName = "t" + iPlus;
            table.push(
                <tr key={i}>
                    <td>{iPlus}</td>
                    <td>
                        <input id={"s" + iPlus} name={"s" + iPlus} className="form-control form-center" type="number" min="3" max="6" value={this.state[sName]} required={i < 9 ? true : false} style={{ width: "7%", textAlign: "center" }} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                    <td>
                        <input id={"t" + iPlus} name={"t" + iPlus} class="form-control form-center" type="text" pattern="0:[0-9]:[0-5][0-9]" required={i < 9 ? true : false} style={{ width: "15%" }} value={this.state[tName]} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                </tr>
            );
        }
        return table;
    }

    render() {
        return (
            <div style={{ paddingBottom: "20px" }}>
                <h3>{this.props.editCourseFlag ? "Edit Existing Course in Tournament" : "Add Existing Course to Tournament"}</h3>
                <form onSubmit={this.handleSubmit}>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Course Name: &nbsp;
                        </div>
                        <input id="courseInput" name="name" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : this.props.disabled ? true : false} value={this.props.courseInList ? this.props.courseName : this.state.name} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Location: &nbsp;
                        </div>
                        <input id="locationInput" name="location" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : this.props.disabled ? true : false} value={this.props.courseInList ? this.props.locationName : this.state.location} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Tees: &nbsp;
                        </div>
                        <input id="teesInput" name="tees" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : this.props.disabled ? true : false} value={this.props.courseInList ? this.props.tees : this.state.tees} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Number of Holes on Course: &nbsp;
                        </div>
                        <select style={{ display: "inline-block", width: "2.2%", float: "left", textAlign: "center" }} value="18">
                            <option value="18">18</option>
                            <option value="9" disabled="true">9</option>
                        </select>
                    </ul>
                    <div style={{ fontWeight: "bold", fontSize: "large", float: "left" }}>
                        Hole Stroke &amp; Time Pars:
                    </div>
                    <h1></h1>
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Hole #</th>
                                <th>Stroke Par</th>
                                <th>Time Par</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                    <p></p>
                    <p></p>
                    <button id="submitCourseBtn" type="submit" style={{ width: "70%", fontSize: "36px", marginBottom: "10px" }}
                        className="btn btn-primary btn-color-theme">
                        <span className={this.state.faIcon} />&nbsp;{this.state.btnLabel}
                    </button>
                    <button id="cancelCourseBtn" className="btn btn-danger btn-block" style={{ width: "70%" }} onClick={this.props.editCourseFlag ? (event) => this.handleCancel(event)  : (newMode) => this.props.handleChangeCoursesMode(CoursesAppMode.SEARCH)}>
                        Cancel
                    </button>
                </form>
            </div>
        );
    }
}

export default CoursesForm;