import React from 'react';

class Config_Divions extends React.Component {

    renderTable = () => {
        let table = [];
        for (const r in this.props.rounds) {
          table.push(
            <tr key={r}>
              <td>{this.props.rounds[r].Name}</td>
              <td>{this.props.rounds[r].Rounds}</td>
              <td>{this.props.rounds[r].Hole}</td>
              <td>{this.props.rounds[r].Course}</td>
            </tr> 
          );
        }
        return table;
        }

    render() {
        return (
        <div className="padded-page">
             <button type="submit" style={{width: "90%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme">
             add division
          </button>
          <div> 
            <h1> Divisions</h1>
            <table className="table table-hover">
        <thead className="thead-light">
        <tr>
          <th>Name</th>
          <th># Rounds</th>
          <th>Hole in each round</th>
          <th>Course in each round</th>
          
        </tr>
        </thead>
        <tbody>
          {Object.keys(this.props.rounds).length === 0 ? 
          <tr>
          <td colSpan="5" style={{fontStyle: "italic"}}>No Divisions Defiend</td>
          </tr> : this.renderTable()
          }
        </tbody>
      </table>


          </div>
          <div> 
          <button type="submit" style={{width: "90%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme">
             Save and Next
          </button>
          </div>
        </div>
        );
    }   
}

export default Config_Divions;