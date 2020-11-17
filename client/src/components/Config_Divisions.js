import React from 'react';

class Config_Divions extends React.Component {
  renderTable = () => {
    let table = [];
    
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