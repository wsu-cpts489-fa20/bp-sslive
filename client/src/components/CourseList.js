import React from 'react';
import CoursesAppMode from './../CoursesAppMode';

//NOTE -- Should add a Delete button for the courses even though the original website doesn't
//have any
class CourseList extends React.Component {
    constructor(props) {
        super();
    }

    //editRound -- Triggered when the user clicks the edit button for a given course. The id param
    //is the unique property that identifies the round. Set the state variable representing the id 
    //of the round to be edited and then switch the flag editCourse to true so the PUT route will be
    //used rather than the POST route.
    editCourse = (id) => {
        this.props.setStateCallback("editId", id);
        this.props.setStateCallback("editCourseFlag", true);
        this.props.handleChangeCoursesMode(CoursesAppMode.COURSESFORM);
    }

    //renderTable -- render an HTML5 table displaying the courses logged 
    //by the director and providing a button to edit each course
    renderTable = () => {
        let table = [];
        for (let i = 0; i < this.props.courses.length; i++) {
            table.push(
                <tr key={i}>
                    <td>{this.props.courses[i].name}</td>
                    <td>{this.props.courses[i].location}</td>
                    <td>{this.props.courses[i].tees}</td>
                    <td>
                        <button id="editCourseBtn" onClick={() => this.editCourse(i)}>
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
            <div id="coursesListDiv" className="coursesListDiv">
                <button id="addCourseBtn" className="btn-color-theme btn btn-primary btn-block" 
                    onClick={(newMode) => this.props.handleChangeCoursesMode(CoursesAppMode.SEARCH)}>
                    <span className="fa fa-plus">&nbsp;</span>
                Add Course...
            </button>
                <label id="coursesListLabel" className="coursesListLabel">
                    Courses
                </label>
                <div id="coursesTableDiv" className="coursesTableDiv">
                    <h1></h1>
                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Tees</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.courses == undefined || Object.keys(this.props.courses).length == 0 ?
                                <tr>
                                    <td colspan="4" style={{ fontStyle: "italic" }}>No Courses Logged</td>
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

export default CourseList;