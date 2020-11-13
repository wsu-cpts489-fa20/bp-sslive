(this["webpackJsonpbp-sslive"]=this["webpackJsonpbp-sslive"]||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(11),o=n.n(s),c=(n(17),n(18),n(19),n(20),n(6)),l=n.n(c),i=n(7),u=n(1),m=n(2),p=n(4),d=n(3),h=n(5),f={LOGIN:"LoginMode",FEED:"FeedMode",ROUNDS:"RoundsMode",ROUNDS_LOGROUND:"RoundsMode-LogRound",ROUNDS_EDITROUND:"RoundsMode-EditRound",COURSES:"CoursesMode",MAIN:"DirectorMode",LEADERBOARD:"LeaderboardMode"};Object.freeze(f);var b=f,O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getMenuBtnIcon=function(){return n.props.mode===b.ROUNDS_LOGROUND||n.props.mode===b.ROUNDS_EDITROUND?"fa fa-arrow-left":n.props.menuOpen?"fa fa-times":"fa fa-bars"},n.handleMenuBtnClick=function(){n.props.mode===b.ROUNDS_LOGROUND||n.props.mode===b.ROUNDS_EDITROUND?n.props.changeMode(b.ROUNDS):n.props.mode!=b.LOGIN&&n.props.toggleMenuOpen()},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("span",{className:"navbar-items"},r.a.createElement("button",{className:"sidemenu-btn",onClick:this.handleMenuBtnClick},r.a.createElement("span",{id:"menuBtnIcon",className:"sidemenu-btn-icon "+this.getMenuBtnIcon()})),r.a.createElement("img",{src:"http://tiny.cc/sslogo",alt:"Speed Score Logo",height:"38px",width:"38px"}),r.a.createElement("span",{className:"navbar-title"},"\xa0",this.props.title)))}}]),t}(r.a.Component),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).renderModeMenuItems=function(){switch(n.props.mode){case b.FEED:return r.a.createElement("div",null,r.a.createElement("a",{className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-users"}),"\xa0Main Page"),r.a.createElement("a",{className:"sidemenu-item "},r.a.createElement("span",{className:"fa fa-search"}),"\xa0LeaderBoard"));case b.ROUNDS:return r.a.createElement("div",null,r.a.createElement("a",{className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-plus"}),"\xa0Log New Round"),r.a.createElement("a",{className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-search"}),"\xa0Search Rounds"));case b.COURSES:return r.a.createElement("div",null,r.a.createElement("a",{className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-plus"}),"\xa0Add a Course"),r.a.createElement("a",{className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-search"}),"\xa0Search Courses"));default:return null}},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidemenu "+(this.props.menuOpen?"sidemenu-open":"sidemenu-closed"),onClick:this.props.toggleMenuOpen},r.a.createElement("div",{className:"sidemenu-title"},r.a.createElement("img",{src:this.props.profilePicURL,height:"60",width:"60"}),r.a.createElement("span",{id:"userID",className:"sidemenu-userID"},"\xa0",this.props.displayName)),this.renderModeMenuItems(),r.a.createElement("a",{id:"aboutBtn",className:"sidemenu-item"},r.a.createElement("span",{className:"fa fa-info-circle"}),"\xa0About"),r.a.createElement("a",{id:"logOutBtn",className:"sidemenu-item",onClick:this.props.logOut},r.a.createElement("span",{className:"fa fa-sign-out-alt"}),"\xa0Log Out"))}}]),t}(r.a.Component),g=(r.a.Component,function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"floatbtn",onClick:this.props.handleClick},r.a.createElement("span",{className:"floatbtn-icon fa fa-plus"}))}}]),t}(r.a.Component)),S=n(8),N=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleLoginSubmit=function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setState({loginBtnIcon:"fa fa-spin fa-spinner",loginBtnLabel:"Logging In..."}),a="auth/login?username="+e.emailInputRef.current.value+"@email.com&password=Password1!",t.next=5,fetch(a,{method:"POST"});case 5:if(200!=(r=t.sent).status){t.next=10;break}window.open("/","_self"),t.next=14;break;case 10:return t.next=12,r.text();case 12:s=t.sent,e.setState({loginBtnIcon:"fa fa-sign-in",loginBtnLabel:"Log In",loginMsg:s});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.accountCreateStatus=function(t){e.setState({accountCreateMsg:t,showCreateAccountDialog:!1})},e.cancelCreateAccount=function(){e.setState({showCreateAccountDialog:!1})},e.handleOAuthLogin=function(e){window.open("/auth/".concat(e),"_self")},e.handleOAuthLoginClick=function(t){var n;e.setState((n={},Object(S.a)(n,t+"Icon","fa fa-spin fa-spinner"),Object(S.a)(n,t+"Label","Connecting..."),n)),setTimeout((function(){return e.handleOAuthLogin(t)}),1e3)},e.emailInputRef=r.a.createRef(),e.state={accountCreateMsg:"",loginBtnIcon:"fa fa-sign-in",loginBtnLabel:"Director Login",showCreateAccountDialog:!1,showResetPasswordDialog:!1,githubIcon:"fa fa-github",githubLabel:"Sign in with GitHub",loginMsg:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.emailInputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{id:"login-mode-div",className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null),""!=this.state.accountCreateMsg?r.a.createElement("p",{className:"emphasis"},this.state.accountCreateMsg):null,""!=this.state.loginMsg?r.a.createElement("p",{className:"emphasis"},this.state.loginMsg):null,r.a.createElement("form",{id:"loginInterface",onSubmit:this.handleLoginSubmit},r.a.createElement("label",{htmlFor:"emailInput",style:{padding:0,fontSize:24}},"Name:",r.a.createElement("input",{ref:this.emailInputRef,className:"form-control login-text",placeholder:"Enter Director Name",id:"emailInput",pattern:"[A-Za-z0-9._%+-]{2,}",required:!0})),r.a.createElement("p",null),r.a.createElement("p",{className:"bg-danger",id:"feedback",style:{fontSize:16}}),r.a.createElement("button",{type:"submit",className:"btn-color-theme btn btn-primary btn-block login-btn"},r.a.createElement("span",{id:"login-btn-icon",className:this.state.loginBtnIcon}),"\xa0",this.state.loginBtnLabel),r.a.createElement("p",null),r.a.createElement("p",null,r.a.createElement("i",null,"Version CptS 489")))))}}]),t}(r.a.Component),j={BASIC:"BasicInfoMode",LOGO:"LogoMode",COURSES:"CoursesMode",ROUNDS:"RoundsMode",DIVISIONS:"DivionsMode",PLAYERS:"PlayersMode",SCORERS:"ScorersMode",PUBLISH:"PublishMode"};Object.freeze(j);var v=j,R=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tabbar"},r.a.createElement("a",{className:this.props.mode===v.BASIC?" item-selected":null,onClick:function(){return e.props.changeMode(v.BASIC)}},r.a.createElement("span",{className:"tabbar-text"},"Basic Info")),r.a.createElement("a",{className:this.props.mode===v.LOGO?" item-selected":null,onClick:function(){return e.props.changeMode(v.LOGO)}},r.a.createElement("span",{className:"tabbar-text"},"Logo + Colors")),r.a.createElement("a",{className:this.props.mode===v.COURSES?" item-selected":null,onClick:function(){return e.props.changeMode(v.COURSES)}},r.a.createElement("span",{className:"tabbar-text"},"Courses")),r.a.createElement("a",{className:this.props.mode===v.ROUNDS?" item-selected":null,onClick:function(){return e.props.changeMode(v.ROUNDS)}},r.a.createElement("span",{className:"tabbar-text"},"Rounds")),r.a.createElement("a",{className:this.props.mode===v.DIVISIONS?" item-selected":null,onClick:function(){return e.props.changeMode(v.DIVISIONS)}},r.a.createElement("span",{className:"tabbar-text"},"Divisions")),r.a.createElement("a",{className:this.props.mode===v.PLAYERS?" item-selected":null,onClick:function(){return e.props.changeMode(v.PLAYERS)}},r.a.createElement("span",{className:"tabbar-text"},"Players")),r.a.createElement("a",{className:this.props.mode===v.SCORERS?" item-selected":null,onClick:function(){return e.props.changeMode(v.SCORERS)}},r.a.createElement("span",{className:"tabbar-text"},"Scorers")),r.a.createElement("a",{className:this.props.mode===v.PUBLISH?" item-selected":null,onClick:function(){return e.props.changeMode(v.PUBLISH)}},r.a.createElement("span",{className:"tabbar-text"},"Publish")))}}]),t}(r.a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Basic Info"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),C=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Logo"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Courses"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),I=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null," Rounds"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Divions"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),M=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Player"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null," Scorers"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null," Publish"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),k={};k[v.BASIC]=y,k[v.LOGO]=C,k[v.COURSES]=D,k[v.ROUNDS]=I,k[v.DIVISIONS]=L,k[v.PLAYERS]=M,k[v.SCORERS]=w,k[v.PUBLISH]=U;var x=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).handleChangeMode=function(t){"LOGIN"==t&&window.open("/auth/logout","_self"),e.setState({mode:t})},e.state={mode:v.BASIC,menuOpen:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=k[this.state.mode];return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Tournament Settings"),r.a.createElement(R,{mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen}),r.a.createElement(e,{menuOpen:this.state.menuOpen,mode:this.state.mode,changeMode:this.handleChangeMode})))}}]),t}(r.a.Component),T=n(9),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).editRound=function(e){n.props.setEditId(e),n.props.changeMode(b.ROUNDS_EDITROUND)},n.confirmDelete=function(e){n.props.setDeleteId(e),window.confirm("Are you sure you want to delete?")&&n.props.deleteRound()},n.renderTable=function(){for(var e=[],t=function(t){e.push(r.a.createElement("tr",{key:t},r.a.createElement("td",null,n.props.rounds[t].date.substring(0,10)),r.a.createElement("td",null,n.props.rounds[t].course),r.a.createElement("td",null,Number(n.props.rounds[t].strokes)+Number(n.props.rounds[t].minutes)+":"+(n.props.rounds[t].seconds<10?"0"+n.props.rounds[t].seconds:n.props.rounds[t].seconds)+" ("+n.props.rounds[t].strokes+" in "+n.props.rounds[t].minutes+":"+(n.props.rounds[t].seconds<10?"0"+n.props.rounds[t].seconds:n.props.rounds[t].seconds)+")"),r.a.createElement("td",null,r.a.createElement("button",{onClick:n.props.menuOpen?null:function(){return n.editRound(t)}},r.a.createElement("span",{className:"fa fa-eye"}))),r.a.createElement("td",null,r.a.createElement("button",{onClick:n.props.menuOpen?null:function(){return n.confirmDelete(t)}},r.a.createElement("span",{className:"fa fa-trash"})))))},a=0;a<n.props.rounds.length;++a)t(a);return e},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("h1",null),r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Course"),r.a.createElement("th",null,"Score"),r.a.createElement("th",null,"View/Edit..."),r.a.createElement("th",null,"Delete"))),r.a.createElement("tbody",null,0===Object.keys(this.props.rounds).length?r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"5",style:{fontStyle:"italic"}},"No rounds logged")):this.renderTable())))}}]),t}(r.a.Component),B=function(e){function t(e){var n;Object(u.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name;if("seconds"===t){var a=e.target.value.length<2?"0"+e.target.value:e.target.value,r=n.computeSGS(n.state.strokes,n.state.minutes,a);n.setState({seconds:a,SGS:r})}else if("strokes"===t){var s=e.target.value,o=n.computeSGS(s,n.state.minutes,n.state.seconds);n.setState({strokes:s,SGS:o})}else if("minutes"===t){var c=e.target.value,l=n.computeSGS(n.state.strokes,c,n.state.seconds);n.setState({minutes:c,SGS:l})}else n.setState(Object(S.a)({},t,e.target.value))},n.handleSubmit=function(e){n.setState({faIcon:"fa fa-spin fa-spinner",btnLabel:n.props.mode===b.ROUNDS_LOGROUND?"Saving...":"Updating..."});var t=n.state;delete t.faIcon,delete t.btnLabel,setTimeout(n.props.saveRound,1e3,t),e.preventDefault()},n.computeSGS=function(e,t,n){return Number(e)+Number(t)+":"+n};var a=new Date(Date.now()-6e4*(new Date).getTimezoneOffset());if(n.props.mode===b.ROUNDS_LOGROUND)n.state={date:a.toISOString().substr(0,10),course:"",type:"practice",holes:"18",strokes:80,minutes:50,seconds:"00",notes:"",faIcon:"fa fa-save",btnLabel:"Save Round Data"};else{var r=Object(T.a)({},n.props.startData);delete r.id,r.faIcon="fa fa-edit",r.btnLabel="Update Round Data",n.state=r}return n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"padded-page",onSubmit:this.handleSubmit},r.a.createElement("center",null,r.a.createElement("label",null,"Date:",r.a.createElement("input",{name:"date",className:"form-control form-center",type:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement("p",null),r.a.createElement("label",null,"Course:",r.a.createElement("input",{name:"course",className:"form-control form-center",type:"text",value:this.state.course,onChange:this.handleChange,placeholder:"Course played",size:"50",maxLength:"50"})),r.a.createElement("p",null),r.a.createElement("label",null,"Type:",r.a.createElement("select",{name:"type",value:this.state.type,className:"form-control form-center",onChange:this.handleChange},r.a.createElement("option",{value:"practice"},"Practice"),r.a.createElement("option",{value:"tournament"},"Tournament"))),r.a.createElement("p",null),r.a.createElement("label",null,"# Holes:",r.a.createElement("select",{name:"holes",value:this.state.holes,className:"form-control form-center",onChange:this.handleChange},r.a.createElement("option",{value:"9"},"9"),r.a.createElement("option",{value:"18"},"18"))),r.a.createElement("p",null),r.a.createElement("label",null,"# Strokes:",r.a.createElement("input",{name:"strokes",className:"form-control form-center",type:"number",min:"9",max:"200",value:this.state.strokes,onChange:this.handleChange})),r.a.createElement("p",null),r.a.createElement("label",null,"Time: ",r.a.createElement("br",null),r.a.createElement("input",{name:"minutes",type:"number",size:"3",min:"10",max:"400",value:this.state.minutes,onChange:this.handleChange}),":",r.a.createElement("input",{name:"seconds",type:"number",size:"2",min:"0",max:"60",value:this.state.seconds,onChange:this.handleChange})),r.a.createElement("p",null),r.a.createElement("label",null,"Speedgolf Score: ",r.a.createElement("br",null),r.a.createElement("input",{name:"SGS",className:"form-center",type:"text",size:"6",disabled:!0,value:this.computeSGS(this.state.strokes,this.state.minutes,this.state.seconds)})),r.a.createElement("p",null),r.a.createElement("label",null,"Notes:",r.a.createElement("textarea",{name:"notes",className:"form-control",rows:"6",cols:"75",placeholder:"Enter round notes",value:this.state.notes,onChange:this.handleChange})),r.a.createElement("p",null),r.a.createElement("p",null),r.a.createElement("button",{type:"submit",style:{width:"70%",fontSize:"36px"},className:"btn btn-primary btn-color-theme"},r.a.createElement("span",{className:this.state.faIcon}),"\xa0",this.state.btnLabel)))}}]),t}(r.a.Component),G=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).addRound=function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/rounds/"+e.props.userObj.id,t.next=3,fetch(a,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.text();case 6:s=t.sent,200!=r.status?(alert("An error occurred when attempting to add new round to database: "+s),e.props.changeMode(b.ROUNDS)):e.props.refreshOnUpdate(b.ROUNDS);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editRound=function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="/rounds/"+e.props.userObj.id+"/"+e.props.userObj.rounds[e.state.editId]._id,t.next=3,fetch(a,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:JSON.stringify(n)});case 3:return r=t.sent,t.next=6,r.text();case 6:s=t.sent,200!=r.status?(alert("An error occurred when attempting to add new round to database: "+s),e.props.changeMode(b.ROUNDS)):e.props.refreshOnUpdate(b.ROUNDS);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteRound=Object(i.a)(l.a.mark((function t(){var n,a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/rounds/"+e.props.userObj.id+"/"+e.props.userObj.rounds[e.state.deleteId]._id,t.next=3,fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"DELETE"});case 3:return a=t.sent,t.next=6,a.text();case 6:r=t.sent,200!=a.status?alert("An error occurred when attempting to delete a round from database: "+r):e.props.refreshOnUpdate(b.ROUNDS);case 8:case"end":return t.stop()}}),t)}))),e.setDeleteId=function(t){e.setState({deleteId:t}),e.state.deleteId=t},e.setEditId=function(t){e.setState({editId:t})},e.state={deleteId:"",editId:""},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;switch(this.props.mode){case b.ROUNDS:return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{rounds:this.props.userObj.rounds,setEditId:this.setEditId,setDeleteId:this.setDeleteId,deleteRound:this.deleteRound,changeMode:this.props.changeMode,menuOpen:this.props.menuOpen}),r.a.createElement(g,{handleClick:function(){return e.props.changeMode(b.ROUNDS_LOGROUND)},menuOpen:this.props.menuOpen,icon:"fa fa-plus"}));case b.ROUNDS_LOGROUND:return r.a.createElement(B,{mode:this.props.mode,startData:"",saveRound:this.addRound});case b.ROUNDS_EDITROUND:var t=Object(T.a)({},this.props.userObj.rounds[this.state.editId]);return t.date=t.date.substr(0,10),t.seconds<10&&(t.seconds="0"+t.seconds),delete t.SGS,r.a.createElement(B,{mode:this.props.mode,startData:t,saveRound:this.editRound})}}}]),t}(r.a.Component),P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Director Main Page"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("p",null,r.a.createElement("a",{class:"btn btn-primary",onClick:function(){return e.props.changeMode(b.FEED)}},r.a.createElement("span",null,"Tournament Configuration")),r.a.createElement("br",null),r.a.createElement("a",{class:"btn btn-primary",onClick:function(){return e.props.changeMode(b.LEADERBOARD)}},r.a.createElement("span",null,"Leaderboard")))))}}]),t}(r.a.Component),_=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"padded-page"},r.a.createElement("center",null,r.a.createElement("h1",null,"Leaderboard"),r.a.createElement("h2",null,"This page is under construction."),r.a.createElement("img",{src:"https://dl.dropboxusercontent.com/s/qpjhy9x9gwdxpob/SpeedScoreLogo64Trans.png",height:"200",width:"200"}),r.a.createElement("p",{style:{fontStyle:"italic"}},"Version CptS 489 React Demo")))}}]),t}(r.a.Component),V={};V[b.LOGIN]="Welcome to SpeedScore",V[b.FEED]="",V[b.ROUNDS]="My Rounds",V[b.ROUNDS_LOGROUND]="Log New Round",V[b.ROUNDS_EDITROUND]="Edit Round",V[b.MAIN]="Director Main Page";var z={};z[b.LOGIN]=N,z[b.FEED]=x,z[b.ROUNDS]=G,z[b.ROUNDS_LOGROUND]=G,z[b.ROUNDS_EDITROUND]=G,z[b.MAIN]=P,z[b.LEADERBOARD]=_;var q=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(p.a)(this,Object(d.a)(t).call(this))).refreshOnUpdate=function(){var t=Object(i.a)(l.a.mark((function t(n){var a,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/users/"+e.state.userObj.id);case 2:return a=t.sent,t.next=5,a.json();case 5:a=t.sent,r=JSON.parse(a),e.setState({userObj:r,mode:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChangeMode=function(t){"LOGIN"==t&&window.open("/auth/logout","_self"),e.setState({mode:t})},e.openMenu=function(){e.setState({menuOpen:!0})},e.closeMenu=function(){e.setState({menuOpen:!1})},e.toggleMenuOpen=function(){e.setState((function(e){return{menuOpen:!e.menuOpen}}))},e.setUserId=function(t){e.setState({userId:t,authenticated:!0})},e.state={mode:b.LOGIN,menuOpen:!1,authenticated:!1,userObj:{displayName:"",profilePicURL:""}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.authenticated||fetch("/auth/test").then((function(e){return e.json()})).then((function(t){t.isAuthenticated&&e.setState({userObj:t.user,authenticated:!0,mode:b.MAIN})}))}},{key:"render",value:function(){var e=this,t=z[this.state.mode];return r.a.createElement("div",null,r.a.createElement(O,{title:V[this.state.mode],mode:this.state.mode,changeMode:this.handleChangeMode,menuOpen:this.state.menuOpen,toggleMenuOpen:this.toggleMenuOpen}),r.a.createElement(E,{menuOpen:this.state.menuOpen,mode:this.state.mode,toggleMenuOpen:this.toggleMenuOpen,displayName:this.state.userObj.displayName,profilePicURL:this.state.userObj.profilePicURL,logOut:function(){return e.handleChangeMode(b.LOGIN)}}),r.a.createElement(t,{menuOpen:this.state.menuOpen,mode:this.state.mode,changeMode:this.handleChangeMode,userObj:this.state.userObj,refreshOnUpdate:this.refreshOnUpdate}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.8b7acbde.chunk.js.map