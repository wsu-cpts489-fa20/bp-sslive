import React from 'react';

class Config_Rounds extends React.Component {

    render() {
        return (
          <div className="coursesListDiv">
          <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
                            Number of Rounds in Tournamnet: &nbsp;
                        </div>       
                              <select id="numOfRounds" name="type" 
          className="form-control" style={{ display: "inline-block", width: "5%", height:" 60%",float: "left", textAlign: "center" }} >
          <option value="1">1</option>
          <option value="2">2</option>
         </select> 
       
        

         <left>
         <label className="coursesListLabel">
           Date:&nbsp;
           <input name="date" className="form-control form-center" 
             type="date" />
         </label>
         <p></p>
         <label className="coursesListLabel">Time: &nbsp;<br></br>
       <input name="minutes" type="number" size="3"
         min="10" max="400"  />:  
       <input name="seconds" type="number" size="2"
         min="0" max="60" />
         <input name="miliseconds" type="number" size="3S"
         min="0" max="100" />
       </label>
       <p></p>
       <label className="coursesListLabel">Format:
       <select name="type"  
         className="form-control form-center" >
         <option value="practice">speedgolf</option>
         <option value="tournament">Tournament</option>
       </select> 
       </label>
       <p></p>
       <label className="coursesListLabel">Live Scoring method:
       <select name="type"  
         className="form-control form-center" >
         <option value="practice">player</option>
         <option value="tournament">Tournament</option>
       </select> 
       </label>
       <p></p>
       <label className="coursesListLabel">Scoring data:
       <select name="type"
         className="form-control form-center" >
         <option value="practice">strockes and time</option>
         <option value="tournament">Tournament</option>
       </select> 
       </label>
       <p></p>
       <button type="submit" style={{width: "90%",fontSize: "36px"}} 
         className="btn btn-primary btn-color-theme">
          Save And next
       </button>
         </left>
     </div>
        );
    }   
}

export default  Config_Rounds;