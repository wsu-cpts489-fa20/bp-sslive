import React from 'react';
import Courses from './../Courses.js';

class CourseSearch extends React.Component {
    constructor(props) {
        super();
        this.courseSearchRef = React.createRef();
        this.state = {
            search: "",
            dropdown: undefined
        }
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
        this.setState({dropdown: dropdown});
    }

    render() {
        return (
            <div style={{ fontSize: "x-large", fontWeight: "bold", textAlign: "left" }}>
                <span className="fa fa-search" style={{ position: "absolute", float: "left", paddingTop: "41px", marginLeft: "7px" }}></span>
                Find a Course:
                <ul>

                    <input ref={this.courseSearchRef} autoComplete="off" list="coursesList" name="search" className="form-control form-center" type="text" value={this.state.search}
                        placeholder="Search for course..." size="50" maxLength="50" style={{ display: "inline-block", width: "80%" }}
                        onChange={this.handleChange} onKeyUp={this.autoCompleteCourses} onClick={this.autoCompleteCourses}>
                    </input>
                    <datalist id="coursesList">
                        {this.state.dropdown}
                    </datalist>
                    &nbsp;
                    <button className="btn-color-theme btn btn-primary btn-block" style={{ display: "inline-block", width: "75px" }}>Select</button>
                    &nbsp;
                    <button className="btn btn-danger btn-block" style={{ display: "inline-block", width: "75px", position: "relative", bottom: "4px" }}>Cancel</button>
                </ul>
            </div>
        );
    }
}

export default CourseSearch;