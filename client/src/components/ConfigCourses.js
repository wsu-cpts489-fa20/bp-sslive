import React from 'react';
import CourseList from './CourseList.js';
import CourseSearch from './CourseSearch';
import CoursesForm from './CoursesForm.js';
import CoursesAppMode from './../CoursesAppMode.js';
import AppMode from './../AppMode.js';
import App from './App.js';
import { async } from 'regenerator-runtime';

const courseModeToPage = {};
courseModeToPage[CoursesAppMode.COURSELIST] = CourseList;
courseModeToPage[CoursesAppMode.SEARCH] = CourseSearch;
courseModeToPage[CoursesAppMode.COURSESFORM] = CoursesForm;

class ConfigCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coursesMode: this.props.coursesMode,
            courseInList: false,
            editCourseFlag: false
        }
        this.addCourse = this.addCourse.bind(this);
    }

    setStateCallback = (stateName, stateVal) => {
        this.setState({ [stateName]: stateVal });
    }

    handleChangeCoursesMode = (newMode) => {
        this.setState({ coursesMode: newMode })
    }

    //addCourse -- Given an object newData containing a new course, use the 
    //server POST route to add the new round to the database. If the add is
    //successful, call on the refreshOnUpdate() method to force the parent
    //App component to refresh its state from the database and re-render itself,
    //allowing the change to be propagated to the Rounds table. Then switch
    //the mode back to AppMode.FEED since the user is done adding a round.
    addCourse = async (newData) => {
        const url = '/courses/' + this.props.userObj.id;
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newData)
        });
        const msg = await res.text();
        if (res.status != 200) {
            alert("An error occurred when attempting to add new course to database: "
                + msg);
            this.handleChangeCoursesMode(CoursesAppMode.COURSELIST);
        } else {
            this.handleChangeCoursesMode(CoursesAppMode.COURSELIST);
            this.props.refreshOnUpdate(AppMode.FEED);
        }
    }

    //editCourse -- Given an object newData containing updated data on an
    //existing course, update the current tournament's course in the database. 
    //toggle the mode back to AppMode.FEED since the user is done editing the
    //round. 
    editCourse = async (newData) => {
        const url = '/courses/' + this.props.userObj.id + '/' +
            this.props.userObj.courses[this.state.editId]._id;
        const res = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(newData)
        });
        const msg = await res.text();
        if (res.status != 200) {
            alert("An error occurred when attempting to add new round to database: "
                + msg);
            this.handleChangeCoursesMode(CoursesAppMode.COURSELIST);
        } else {
            this.handleChangeCoursesMode(CoursesAppMode.COURSELIST);
            this.props.refreshOnUpdate(AppMode.FEED);
        }
    }

    render() {
        const CoursesModePage = courseModeToPage[this.state.coursesMode];
        let thisCourse;
        if (this.state.editCourseFlag) {
            thisCourse = {...this.props.userObj.courses[this.state.editId]}
        }
        return (
            <CoursesModePage
                courses={this.props.userObj.courses}
                handleChangeCoursesMode={this.handleChangeCoursesMode}
                setStateCallback={this.setStateCallback}
                courseName={this.state.courseName}
                locationName={this.state.locationName}
                courseInList={this.state.courseInList}
                saveCourse={this.addCourse}
                editCourse={this.editCourse}
                editCourseFlag={this.state.editCourseFlag}
                startData={thisCourse}
                tees={this.state.tees}
                disabled={this.state.disabled}
            />
        );
    }
}

export default ConfigCourses;