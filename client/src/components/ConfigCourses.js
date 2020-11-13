import React from 'react';
import CourseList from './CourseList.js';
import CourseSearch from './CourseSearch';
import CoursesAppMode from './../CoursesAppMode.js';
import App from './App.js';

const courseModeToPage = {};
courseModeToPage[CoursesAppMode.COURSELIST] = CourseList;
courseModeToPage[CoursesAppMode.SEARCH] = CourseSearch;

class ConfigCourses extends React.Component {
    constructor(props) {
        super();
        this.state = {
            coursesMode: CoursesAppMode.COURSELIST
        }
    }

    handleChangeCoursesMode = (newMode) => {
        this.setState({coursesMode: newMode})
    }

    render() {
        const CoursesModePage = courseModeToPage[this.state.coursesMode];
        return (
            <CoursesModePage 
                courses={this.props.userObj.courses}
                handleChangeCoursesMode={this.handleChangeCoursesMode}
            />
        );
    }   
}

export default ConfigCourses;