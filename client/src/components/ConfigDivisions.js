import React from 'react';
import DivisionsAppMode from './../DivisionsAppMode.js';
import DivisionList from './DivisionList.js';
import DivisionsForm from './DivisionsForm.js';
import AppMode from './../AppMode.js';

const divisionsModeToPage = {};
divisionsModeToPage[DivisionsAppMode.DIVISIONLIST] = DivisionList;
divisionsModeToPage[DivisionsAppMode.DIVISIONSFORM] = DivisionsForm;

class ConfigDivisions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionsMode: this.props.divisionsMode,
      editDivisionFlag: false
    }
    this.addDivision = this.addDivision.bind(this);
  }

  setStateCallback = (stateName, stateVal) => {
    this.setState({ [stateName]: stateVal });
  }

  handleChangeDivisionsMode = (newMode) => {
    this.setState({ divisionsMode: newMode })
  }

  //addDivision -- Given an object newData containing a new division, use the 
  //server POST route to add the new division to the database. If the add is
  //successful, call on the refreshOnUpdate() method to force the parent
  //App component to refresh its state from the database and re-render itself,
  //allowing the change to be propagated to the Divisions table. Then switch
  //the mode back to AppMode.FEED since the user is done adding a division.
  addDivision = async (newData) => {
    const url = '/divisions/' + this.props.userObj.id;
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
      alert("An error occurred when attempting to add new division to database: "
        + msg);
      this.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONLIST);
    } else {
      this.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONLIST);
      this.props.refreshOnUpdate(AppMode.FEED);
    }
  }

  //editCourse -- Given an object newData containing updated data on an
  //existing course, update the current tournament's course in the database. 
  //toggle the mode back to AppMode.FEED since the user is done editing the
  //round. 
  editDivision = async (newData) => {
    const url = '/divisions/' + this.props.userObj.id + '/' +
      this.props.userObj.divisions[this.state.editId]._id;
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
      alert("An error occurred when attempting to update the division in the database: "
        + msg);
      this.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONLIST);
    } else {
      this.handleChangeDivisionsMode(DivisionsAppMode.DIVISIONLIST);
      this.props.refreshOnUpdate(AppMode.FEED);
    }
  }

  render() {
    const DivisionsModePage = divisionsModeToPage[this.state.divisionsMode];
    let thisDivision;
    if (this.state.editDivisionFlag) {
      thisDivision = {...this.props.userObj.divisions[this.state.editId]}
    }
    return (
      <DivisionsModePage
        divisions={this.props.userObj.divisions}
        handleChangeDivisionsMode={this.handleChangeDivisionsMode}
        setStateCallback={this.setStateCallback}
        saveDivision={this.addDivision}
        editDivision={this.editDivision}
        editDivisionFlag={this.state.editDivisionFlag}
        startData={thisDivision}
        courses={this.props.userObj.courses}
      />
    );
  }
}

export default ConfigDivisions;