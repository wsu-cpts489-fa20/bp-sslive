import React from 'react';
import Courses from './../Courses.js';
import CoursesAppMode from './../CoursesAppMode.js';

const reservedStrings = [
    "Women's", "Men's", "Sprintgolf", "Yellow", "Blue", "Red", "White", "Womens", "Mens", "Gray", "Men", "Women", "Ladies", "Back"
];

class CourseSearch extends React.Component {
    constructor(props) {
        super();
        this.courseSearchRef = React.createRef();
        this.state = {
            search: "",
            dropdown: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.autoCompleteCourses = this.autoCompleteCourses.bind(this);
        this.splitSearchVal = this.splitSearchVal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.courseSearchRef.current.focus();
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    autoCompleteCourses = (event) => {
        var val = event.target.value;
        let courseDropdown = Courses;
        let dropdown = [];
        for (var i = 0; i < courseDropdown.length; i++) {
            if (((courseDropdown[i].toLocaleLowerCase()).indexOf(val.toLocaleLowerCase())) > - 1) {
                dropdown.push(
                    <option value={courseDropdown[i]}></option>
                );
            }
        }
        this.setState({ dropdown: dropdown });
    }

    splitSearchVal = () => {
        var searchVal = this.state.search;
        var splitSearchVal;
        var location;
        var coursePreSplit;
        var splitCourse;
        var course = "";
        var tees;
        if (searchVal[searchVal.length - 1] == ")") {
            searchVal = searchVal.substring(0, searchVal.length - 1);
        }
        splitSearchVal = searchVal.split('(');
        location = splitSearchVal[1];
        coursePreSplit = splitSearchVal[0];
        splitCourse = coursePreSplit.split(' ');
        for (var i = 0; i < splitCourse.length; i++) {
            if (reservedStrings.includes(splitCourse[i])) {
                tees = splitCourse[i];
                delete splitCourse[i];
                continue;
            }
            course += splitCourse[i] + " ";
        }
        this.props.setStateCallback("courseName", course);
        this.props.setStateCallback("locationName", location);
        this.props.setStateCallback("tees", tees);
    }

    handleSelect = () => {
        var searchVal = this.state.search;
        if (Courses.includes(searchVal)) {
            this.splitSearchVal();
            this.props.setStateCallback("courseInList", true);
        }
        else {
            this.props.setStateCallback("courseInList", false);
            this.props.setStateCallback("courseName", searchVal);
        }
        this.props.handleChangeCoursesMode(CoursesAppMode.COURSESFORM);
    }

    render() {
        return (
            <div style={{ fontSize: "x-large", fontWeight: "bold", textAlign: "left", }}>
                <span className="fa fa-search" style={{ position: "relative", float: "left", paddingTop: "41px", marginLeft: "7px", top: "5px", left: "40px" }}></span>
                Find a Course:
                <ul>

                    <input id="searchInput" ref={this.courseSearchRef} autoComplete="off" list="coursesList" name="search" className="form-control form-center" type="text" value={this.state.search}
                        placeholder="Search for course..." size="50" maxLength="50" style={{ display: "inline-block", width: "80%" }}
                        onChange={this.handleChange} onKeyUp={this.autoCompleteCourses} onClick={this.autoCompleteCourses}>
                    </input>
                    <datalist id="coursesList">
                        {this.state.dropdown}
                    </datalist>
                    &nbsp;
                    <div style={this.state.search <= 0 ? { width: "75px", height: "40px", zIndex: "10", display: "inline-block", cursor: "not-allowed"} : {width: "75px", height: "40px", zIndex: "10", display: "inline-block"}}>
                        <button id="selectCourseBtn" className="btn-color-theme btn btn-primary btn-block" style={this.state.search.length > 0 ?
                            { display: "inline-block", width: "75px" } : { display: "inline-block", width: "75px", pointerEvents: "none" }}
                            onClick={this.handleSelect}>
                            Select
                    </button>
                    </div>
                    &nbsp;
                    <button id="cancelCourseBtn" className="btn btn-danger btn-block" style={{ display: "inline-block", width: "75px", position: "relative" }}
                        onClick={(newMode) => this.props.handleChangeCoursesMode(CoursesAppMode.COURSELIST)}>Cancel</button>
                </ul>
            </div>
        );
    }
}

export default CourseSearch;