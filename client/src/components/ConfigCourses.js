import React from 'react';
import CourseList from './CourseList.js';
import CourseSearch from './CourseSearch';
import CoursesForm from './CoursesForm.js';
import CoursesAppMode from './../CoursesAppMode.js';
import App from './App.js';

const courseModeToPage = {};
courseModeToPage[CoursesAppMode.COURSELIST] = CourseList;
courseModeToPage[CoursesAppMode.SEARCH] = CourseSearch;
courseModeToPage[CoursesAppMode.COURSESFORM] = CoursesForm;

class ConfigCourses extends React.Component {
    constructor(props) {
        super();
        this.state = {
            coursesMode: CoursesAppMode.COURSELIST,
            courseInList: false
        }
    }

    setStateCallback = (stateName, stateVal) => {
        this.setState({[stateName]: stateVal});
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
                setStateCallback={this.setStateCallback}
                courseName={this.state.courseName}
                locationName={this.state.locationName}
                courseInList={this.state.courseInList}
            />
        );
    }   
}

export default ConfigCourses;