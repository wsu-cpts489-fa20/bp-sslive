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
      divisionsMode: this.props.divisionsMode
    }
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
          alert("An error occurred when attempting to add new course to database: "
              + msg);
          this.handleChangeCoursesMode(DivisionsAppMode.DIVISIONLIST);
      } else {
          this.handleChangeCoursesMode(DivisionsAppMode.DIVISIONLIST);
          this.props.refreshOnUpdate(AppMode.FEED);
      }
  }

  render() {
    const DivisionsModePage = divisionsModeToPage[this.state.divisionsMode];
    return (
      <DivisionsModePage
        divisions={this.props.userObj.divisions}
        handleChangeDivisionsMode={this.handleChangeDivisionsMode}
      />
    );
  }
}

export default ConfigDivisions;