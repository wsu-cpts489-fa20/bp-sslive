import React from 'react';

class CoursesForm extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.renderTable = this.renderTable.bind(this);
    }

    componentDidMount() {
        var sName;
        var tName;
        for (var i = 0; i < 18; i++) {
            sName = "s" + i;
            tName = "t" + i;
            this.setState({[sName]: "3", [tName]: ""});
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value });
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
                    <td>1</td>
                    <td>
                        <input name={"s" + i} className="form-control form-center" type="number" min="3" max="6" value={this.state[sName]} required="true" style={{ width: "7%", textAlign: "center" }} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                    <td>
                        <input name={"t" + i} class="form-control form-center" type="text" pattern="0:[0-9]:[0-5][0-9]" required="true" style={{ width: "15%" }} value={this.state[tName]} onChange={(event) => this.handleChange(event)}></input>
                    </td>
                </tr>
            );
        }
        return table;
    }

    render() {
        return (
            <div>
                <h3>Add Existing Course to Tournament</h3>
                <form>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Course Name: &nbsp;
                        </div>
                        <input class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.courseName}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Location: &nbsp;
                        </div>
                        <input class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.locationName}></input>
                    </ul>
                    <ul style={{ paddingBottom: "50px" }}>
                        <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Tees: &nbsp;
                        </div>
                        <input class="form-control form-center" style={{ display: "inline-block", width: "30%", float: "left" }} size="30" disabled={this.props.courseInList ? true : false} value={this.props.tees}></input>
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
                </form>
            </div>
        );
    }
}

export default CoursesForm;