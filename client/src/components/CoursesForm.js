import React from 'react';

class CoursesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faIcon: "fa fa-save",
            btnLabel: "Save Course Data",
            name: this.props.courseName,
            location: this.props.locationName,
            tees: this.props.tees
        }
        this.renderTable = this.renderTable.bind(this);
    }

    componentDidMount() {
        var sName;
        var tName;
        for (var i = 0; i < 18; i++) {
            sName = "s" + i;
            tName = "t" + i;
            this.setState({ [sName]: "3", [tName]: "" });
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
        setTimeout(this.props.saveCourse, 1000, courseData);
        event.preventDefault();
    }

    renderTable = () => {
        var sName;
        var tName;
        let table = [];
        for (let i = 0; i < 18; i++) {
            sName = "s" + i;
            tName = "t" + i;
            table.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                        <input name={"s" + i} className="form-control form-center" type="number" min="3" max="6" value={this.state[sName]} required={i < 9 ? true : false} style={{ width: "7%", textAlign: "center" }} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                    <td>
                        <input name={"t" + i} class="form-control form-center" type="text" pattern="0:[0-9]:[0-5][0-9]" required={i < 9 ? true : false} style={{ width: "15%" }} value={this.state[tName]} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                </tr>
            );
        }
        return table;
    }

    render() {
        return (
            <div style={{paddingBottom: "20px"}}>
                <h3>Add Existing Course to Tournament</h3>
                <form onSubmit={this.handleSubmit}>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Course Name: &nbsp;
                        </div>
                        <input name="name" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.courseInList ? this.props.courseName : this.state.name} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Location: &nbsp;
                        </div>
                        <input name="location" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.courseInList ? this.props.locationName : this.state.location} onChange={this.handleChange}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Tees: &nbsp;
                        </div>
                        <input name="tees" class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.courseInList ? this.props.tees : this.state.tees} onChange={this.handleChange}></input>
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
                    <button type="submit" style={{ width: "70%", fontSize: "36px" }}
                        className="btn btn-primary btn-color-theme">
                        <span className={this.state.faIcon} />&nbsp;{this.state.btnLabel}
                    </button>
                </form>
            </div>
        );
    }
}

export default CoursesForm;