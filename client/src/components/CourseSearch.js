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
            <div style={{ fontSize: "x-large", fontWeight: "bold", textAlign: "left" }}>
                <span className="fa fa-search" style={{ position: "absolute", float: "left", paddingTop: "41px", marginLeft: "7px" }}></span>
                Find a Course:
                <ul>
                    <input name="search" className="form-control form-center" type="text" value={this.state.search}
                        placeholder="Search for course..." size="50" maxLength="50" style={{ display: "inline-block", width: "80%" }}>
                    </input>
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