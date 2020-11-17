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
            courseInList: false
        }
        this.addCourse = this.addCourse.bind(this);
    }

    setStateCallback = (stateName, stateVal) => {
        this.setState({[stateName]: stateVal});
    }

    handleChangeCoursesMode = (newMode) => {
        this.setState({coursesMode: newMode})
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

    render() {
        const CoursesModePage = courseModeToPage[this.state.coursesMode];
        return (
            <CoursesModePage 
                courses={this.props.userObj.courses}
                handleChangeCoursesMode={this.handleChangeCoursesMode}
                setStateCallback={this.setStateCallback}
                courseName={this.state.courseName}
                locationName={this.state.locationName}
                courseInList={this.state.courseInList}
                saveCourse={this.addCourse}
            />
        );
    }   
}

export default ConfigCourses;