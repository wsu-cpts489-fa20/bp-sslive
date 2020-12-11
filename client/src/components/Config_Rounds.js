import React from 'react';
import AppMode from './../AppMode.js';
import App from './App.js';

class Config_Rounds extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={numofrounds:"1",
    one:false,
    int:0, 
    faIcon: "fa fa-save",
    btnLabel: "Save & Add Rounds to Tournament"

  }
}
//handeles the change on number of rounds, 
  handleChange = (e) => {
    if (e.target.value=="1"){
      this.setState({numofrounds:"1"});
      this.setState({one:false});
    }
    if (e.target.value=="2"){
      this.setState({numofrounds:"2"});
      this.setState({one:true});
      this.setState({int:2});
      
    }
    if (e.target.value=="3"){
      this.setState({numofrounds:"3"});
      this.setState({one:true});
      this.setState({int:3});
    }
    if (e.target.value=="4"){
      this.setState({numofrounds:"4"});
      this.setState({one:true});
      this.setState({int:4});
    }
  }
  
  

  addRound = async (newData) => {
    const url = '/rounds/' + this.props.userObj.id;
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
        alert("An error occurred when attempting to add new round to database: "
            + msg);
        
    } else {
        this.props.refreshOnUpdate(AppMode.FEED);
    }
}
  // handles backend saving
handleSubmite = (event) => {
  event.preventDefault();
  //start spinner
  this.setState({
      faIcon: "fa fa-spin fa-spinner",
      btnLabel: "Saving..."
  });

  //Prepare current round data to be saved
  let RoundData = this.state;
  delete RoundData.btnLabel;
  delete RoundData.faIcon;
  delete RoundData.int;
  delete RoundData.one;

  setTimeout(this.addRound, 1000, RoundData);

  
  event.preventDefault();
}
 
    render() {
      let numofrounds=null;
      let round3=null;
      let round4=null;
      if(this.state.one && this.state.int==2){
        numofrounds=(  
        <div id="RoundsListDiv" className="RoundsListDiv">
         
         <label className="coursesListLabel"> Round 2 </label>
       

        <label className="roundsListLabel" >Date:&nbsp;   </label>
        <input name="date" className="form-control" required={true}
            type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
        <p></p>

        <label className="roundsListLabel">Time: &nbsp;<br></br>
      <input name="minutes" type="number" size="3"
        min="10" max="400" required={true} />:  
      <input name="seconds" type="number" size="2"
        min="0" max="60" required={true}/>
        <input name="miliseconds" type="number" size="3"
        min="0" max="100" />
      </label>

      <label className="roundsListLabel">Format: </label>

      <select name="type"  
        className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
        <option value="practice">speedgolf</option>
        <option value="tournament">Tournament</option>
      </select> 

      <p></p>
      <label className="roundsListLabel">Live Scoring method:            </label>

      <select name="type"  
        className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
        <option value="practice">Player</option>
        <option value="hole">Hole</option>
        <option value="central">Central</option>
        <option value="sprint">Sprint</option>
        <option value="none">None</option>

      </select> 

      <p></p>
      <label className="roundsListLabel">Scoring data:       </label>

      <select name="type"
        className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
        <option value="practice">strockes and time</option>
        <option value="tournament">Tournament</option>
      </select> 
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <div className="page"></div>
      </div>
      )

      }
      if(this.state.one && this.state.int==3){
        numofrounds=(  <div id="RoundsListDiv" className="RoundsListDiv">
         
        <label className="coursesListLabel"> Round 2 </label>
      

       <label className="roundsListLabel" >Date:&nbsp;   </label>
       <input name="date" className="form-control" required={true}
           type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
       <p></p>

       <label className="roundsListLabel">Time: &nbsp;<br></br>
     <input name="minutes" type="number" size="3"
       min="10" max="400" required={true} />:  
     <input name="seconds" type="number" size="2"
       min="0" max="60" required={true}/>
       <input name="miliseconds" type="number" size="3"
       min="0" max="100" />
     </label>

     <label className="roundsListLabel">Format: </label>

     <select name="type"  
       className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
       <option value="practice">speedgolf</option>
       <option value="tournament">Tournament</option>
     </select> 

     <p></p>
     <label className="roundsListLabel">Live Scoring method:            </label>

     <select name="type"  
       className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
       <option value="practice">Player</option>
       <option value="hole">Hole</option>
       <option value="central">Central</option>
       <option value="sprint">Sprint</option>
       <option value="none">None</option>

     </select> 

     <p></p>
     <label className="roundsListLabel">Scoring data:       </label>

     <select name="type"
       className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
       <option value="practice">strockes and time</option>
       <option value="tournament">Tournament</option>
     </select> 
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <div className="page"></div>
     </div>
  )
  round3=(<div id="RoundsListDiv" className="RoundsListDiv">
         
  <label className="coursesListLabel"> Round 3 </label>


 <label className="roundsListLabel" >Date:&nbsp;   </label>
 <input name="date" className="form-control" required={true}
     type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
 <p></p>

 <label className="roundsListLabel">Time: &nbsp;<br></br>
<input name="minutes" type="number" size="3"
 min="10" max="400" required={true} />:  
<input name="seconds" type="number" size="2"
 min="0" max="60" required={true}/>
 <input name="miliseconds" type="number" size="3"
 min="0" max="100" />
</label>

<label className="roundsListLabel">Format: </label>

<select name="type"  
 className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
 <option value="practice">speedgolf</option>
 <option value="tournament">Tournament</option>
</select> 

<p></p>
<label className="roundsListLabel">Live Scoring method:            </label>

<select name="type"  
 className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
 <option value="practice">Player</option>
 <option value="hole">Hole</option>
 <option value="central">Central</option>
 <option value="sprint">Sprint</option>
 <option value="none">None</option>

</select> 

<p></p>
<label className="roundsListLabel">Scoring data:       </label>

<select name="type"
 className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
 <option value="practice">strockes and time</option>
 <option value="tournament">Tournament</option>
</select> 
<p></p>
<p></p>
<p></p>
<p></p>
<div className="page"></div>
</div>)
      }
      if(this.state.one && this.state.int==4){
        numofrounds=(  <div id="RoundsListDiv" className="RoundsListDiv">
         
        <label className="coursesListLabel"> Round 2 </label>
      

       <label className="roundsListLabel" >Date:&nbsp;   </label>
       <input name="date" className="form-control" required={true}
           type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
       <p></p>

       <label className="roundsListLabel">Time: &nbsp;<br></br>
     <input name="minutes" type="number" size="3"
       min="10" max="400" required={true} />:  
     <input name="seconds" type="number" size="2"
       min="0" max="60" required={true}/>
       <input name="miliseconds" type="number" size="3"
       min="0" max="100" />
     </label>

     <label className="roundsListLabel">Format: </label>

     <select name="type"  
       className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
       <option value="practice">speedgolf</option>
       <option value="tournament">Tournament</option>
     </select> 

     <p></p>
     <label className="roundsListLabel">Live Scoring method:            </label>

     <select name="type"  
       className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
       <option value="practice">Player</option>
       <option value="hole">Hole</option>
       <option value="central">Central</option>
       <option value="sprint">Sprint</option>
       <option value="none">None</option>

     </select> 

     <p></p>
     <label className="roundsListLabel">Scoring data:       </label>

     <select name="type"
       className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
       <option value="practice">strockes and time</option>
       <option value="tournament">Tournament</option>
     </select> 
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <div className="page"></div>
     </div>
  )
  round3=(<div id="RoundsListDiv" className="RoundsListDiv">
         
  <label className="coursesListLabel"> Round 3 </label>


 <label className="roundsListLabel" >Date:&nbsp;   </label>
 <input name="date" className="form-control" required={true}
     type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
 <p></p>

 <label className="roundsListLabel">Time: &nbsp;<br></br>
<input name="minutes" type="number" size="3"
 min="10" max="400" required={true} />:  
<input name="seconds" type="number" size="2"
 min="0" max="60" required={true}/>
 <input name="miliseconds" type="number" size="3"
 min="0" max="100" />
</label>

<label className="roundsListLabel">Format: </label>

<select name="type"  
 className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
 <option value="practice">speedgolf</option>
 <option value="tournament">Tournament</option>
</select> 

<p></p>
<label className="roundsListLabel">Live Scoring method:            </label>

<select name="type"  
 className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
 <option value="practice">Player</option>
 <option value="hole">Hole</option>
 <option value="central">Central</option>
 <option value="sprint">Sprint</option>
 <option value="none">None</option>

</select> 

<p></p>
<label className="roundsListLabel">Scoring data:       </label>

<select name="type"
 className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
 <option value="practice">strockes and time</option>
 <option value="tournament">Tournament</option>
</select> 
<p></p>
<p></p>
<p></p>
<p></p>
<div className="page"></div>
</div>)
    round4=( <div id="RoundsListDiv" className="RoundsListDiv">
         
    <label className="coursesListLabel"> Round 4 </label>
  

   <label className="roundsListLabel" >Date:&nbsp;   </label>
   <input name="date" className="form-control" required={true}
       type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
   <p></p>

   <label className="roundsListLabel">Time: &nbsp;<br></br>
 <input name="minutes" type="number" size="3"
   min="10" max="400" required={true} />:  
 <input name="seconds" type="number" size="2"
   min="0" max="60" required={true}/>
   <input name="miliseconds" type="number" size="3"
   min="0" max="100" />
 </label>

 <label className="roundsListLabel">Format: </label>

 <select name="type"  
   className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
   <option value="practice">speedgolf</option>
   <option value="tournament">Tournament</option>
 </select> 

 <p></p>
 <label className="roundsListLabel">Live Scoring method:            </label>

 <select name="type"  
   className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
   <option value="practice">Player</option>
   <option value="hole">Hole</option>
   <option value="central">Central</option>
   <option value="sprint">Sprint</option>
   <option value="none">None</option>

 </select> 

 <p></p>
 <label className="roundsListLabel">Scoring data:       </label>

 <select name="type"
   className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
   <option value="practice">strockes and time</option>
   <option value="tournament">Tournament</option>
 </select> 
 <p></p>
 <p></p>
 <p></p>
 <p></p>
 <div className="page"></div>
 </div>)
      }
        return (
         
          <div className="page">
            <form onSubmit={this.handleSubmite}> 
            <div style={{ display: "inline-block", fontWeight: "bold", fontSize: "large", float: "left" }}>
          Number of Rounds in Tournamnet: &nbsp;</div> 
          <select id="numOfRounds" name="type" 
          className="form-control" style={{ display: "inline-block", width: "5%",float: "left", textAlign: "center" }} onChange={this.handleChange}>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         </select> 

            <div className="padded-page">
         <div id="RoundsListDiv" className="RoundsListDiv">
          
          <label className="coursesListLabel"> Round 1 </label>
        

         <label className="roundsListLabel" >Date:&nbsp;   </label>
         <input name="date" className="form-control" required={true}
             type="date" style={{ width: "15%",float: "left", textAlign: "center" }} />
         <p></p>

         <label className="roundsListLabel">Time: &nbsp;<br></br>
       <input name="minutes" type="number" size="3"
         min="10" max="400" required={true} />:  
       <input name="seconds" type="number" size="2"
         min="0" max="60" required={true}/>
         <input name="miliseconds" type="number" size="3"
         min="0" max="100" />
       </label>

       <label className="roundsListLabel">Format: </label>

       <select name="type"  
         className="form-control form-center" style={{ width: "15%", float: "left", textAlign: "center" }}>
         <option value="practice">speedgolf</option>
         <option value="tournament">Tournament</option>
       </select> 

       <p></p>
       <label className="roundsListLabel">Live Scoring method:            </label>

       <select name="type"  
         className="form-control form-center"  style={{ width: "15%", height:"30%",float: "left", textAlign: "center" }}>
         <option value="practice">Player</option>
         <option value="hole">Hole</option>
         <option value="central">Central</option>
         <option value="sprint">Sprint</option>
         <option value="none">None</option>

       </select> 

       <p></p>
       <label className="roundsListLabel">Scoring data:       </label>

       <select name="type"
         className="form-control form-center" style={{ width: "15%",float: "left", textAlign: "center" }}>
         <option value="practice">strockes and time</option>
         <option value="tournament">Tournament</option>
       </select> 
       <p></p>
       <p></p>
       <p></p>
       <p></p>
       <div className="page"></div>
       </div>
       {numofrounds}
       {round3}
       {round4}
       <p></p>

     </div> 
    
     <button type="submit" style={{width: "90%",fontSize: "36px"}} 
         className="btn btn-primary btn-color-theme">
         <span className={this.state.faIcon} />&nbsp;{this.state.btnLabel}
       </button>
       </form>
     </div>
        );
    }   
}

export default  Config_Rounds;