import React from 'react';
import DivisionsAppMode from './../DivisionsAppMode.js';
import DivisionList from './DivisionList.js';

const divisionsModeToPage = {};
divisionsModeToPage[DivisionsAppMode.DIVISIONLIST] = DivisionList;

class ConfigDivions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionsMode: this.props.divisionsMode
    }
  }

  handleChangeDivisionsMode = (newMode) => {
    this.setState({ divisionsMode: newMode })
}

  render() {
    const DivisionsModePage = divisionsModeToPage[this.state.divisionsMode];
    return (
      <DivisionsModePage
        divisions={this.props.userObj.divisions}
      />
    );
  }
}

export default ConfigDivions;