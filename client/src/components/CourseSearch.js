import React from 'react';

class CourseSearch extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    render() {
        return (
            <div style={{fontSize: "x-large", fontWeight: "bold", textAlign: "left"}}>
                <span className="fa fa-search" style={{position: "absolute", float: "left", paddingTop: "41px", marginLeft: "7px"}}></span>
                Find a Course:
                <input name="search" className="form-control form-center" type="text" value={this.state.search}
                    placeholder="Search for course..." size="50" maxLength="50">
                </input>
            </div>
        );
    }
}

export default CourseSearch;