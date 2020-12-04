//////////////////////////////////////////////////////////////////////////
//IMPORTS AND VARIABLE INITIALIZATIONS
//The following code imports necessary dependencies and initializes
//variables used in the server middleware.
//////////////////////////////////////////////////////////////////////////
import passport from 'passport';
import passportGithub from 'passport-github'; 
import passportLocal from 'passport-local';
import session from 'express-session';
import regeneratorRuntime from "regenerator-runtime";
import path from 'path';
import express from 'express';

const LOCAL_PORT = 8081;
const DEPLOY_URL = "http://localhost:8081";
const PORT = process.env.HTTP_PORT || LOCAL_PORT;
const GithubStrategy = passportGithub.Strategy;
const LocalStrategy = passportLocal.Strategy;
const app = express();

//////////////////////////////////////////////////////////////////////////
//MONGOOSE SET-UP
//The following code sets up the app to connect to a MongoDB database
//using the mongoose library.
//////////////////////////////////////////////////////////////////////////
import mongoose from 'mongoose';
import { profileEnd } from 'console';
//const connectStr = 'mongodb://localhost:27017/appdb';
const connectStr = 'mongodb+srv://dbAdmin:T4lyaFLcAOk3kPt7@clusterwazzu.mpvis.mongodb.net/appdb?retryWrites=true&w=majority'
mongoose.connect(connectStr, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(
    () =>  {console.log(`Connected to ${connectStr}.`)},
    err => {console.error(`Error connecting to ${connectStr}: ${err}`)}
  );

const Schema = mongoose.Schema;
//New Schema that defines how courses are stored in the DB
const courseSchema = new Schema({
  name: {type: String, required: true},
  location: {type: String, required: true},
  tees: {type: String, required: true, enum: ['practice','tournament']},
  s1: {type: Number, required: true},
  s2: {type: Number, required: true},
  s3: {type: Number, required: true},
  s4: {type: Number, required: true},
  s5: {type: Number, required: true},
  s6: {type: Number, required: true},
  s7: {type: Number, required: true},
  s8: {type: Number, required: true},
  s9: {type: Number, required: true},
  s10: {type: Number, required: false},
  s11: {type: Number, required: false},
  s12: {type: Number, required: false},
  s13: {type: Number, required: false},
  s14: {type: Number, required: false},
  s15: {type: Number, required: false},
  s16: {type: Number, required: false},
  s17: {type: Number, required: false},
  s18: {type: Number, required: false},
  t1: {type: String, required: true},
  t2: {type: String, required: true},
  t3: {type: String, required: true},
  t4: {type: String, required: true},
  t5: {type: String, required: true},
  t6: {type: String, required: true},
  t7: {type: String, required: true},
  t8: {type: String, required: true},
  t9: {type: String, required: true},
  t10: {type: String, required: false},
  t11: {type: String, required: false},
  t12: {type: String, required: false},
  t13: {type: String, required: false},
  t14: {type: String, required: false},
  t15: {type: String, required: false},
  t16: {type: String, required: false},
  t17: {type: String, required: false},
  t18: {type: String, required: false}
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});

//New Schema that defines how divisions are stored in the DB
const divisionsSchema = new Schema({
  name: {type: String, required: true},
  numRounds: {type: Number, required: true, enum: [1, 2, 3, 4]},
  numHoles: {type: String, required: true, enum: ["18","Front 9", "Back 9"]},
  course: {type: String, required: true}
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});

//Define schema that maps to a document in the Users collection in the appdb
//database.
const userSchema = new Schema({
  id: String, //unique identifier for user
  password: String,
  displayName: String, //Name to be displayed within app
  authStrategy: String, //strategy used to authenticate, e.g., github, local
  profilePicURL: String, //link to profile image
  securityQuestion: String,
  securityAnswer: {type: String, required: function() 
    {return this.securityQuestion ? true: false}},
  courses: [courseSchema],
  divisions: [divisionsSchema]
});
const User = mongoose.model("User",userSchema); 

//////////////////////////////////////////////////////////////////////////
//PASSPORT SET-UP
//The following code sets up the app with OAuth authentication using
//the 'github' strategy in passport.js.
//////////////////////////////////////////////////////////////////////////
passport.use(new GithubStrategy({
    clientID: "a075012c4b08543f42a8",
    clientSecret: "8dde6978090028aee37c72df9ea7ce268678b6d3",
    callbackURL: DEPLOY_URL + "/auth/github/callback"
  },
  //The following function is called after user authenticates with github
  async (accessToken, refreshToken, profile, done) => {
    console.log("User authenticated through GitHub! In passport callback.");
    //Our convention is to build userId from displayName and provider
    const userId = `${profile.username}@${profile.provider}`;
    //See if document with this unique userId exists in database 
    let currentUser = await User.findOne({id: userId});
    if (!currentUser) { //Add this user to the database
        currentUser = await new User({
        id: userId,
        displayName: profile.displayName,
        authStrategy: profile.provider,
        profilePicURL: profile.photos[0].value,
        rounds: []
      }).save();
  }
  return done(null,currentUser);
}));

passport.use(new LocalStrategy({passReqToCallback: true},
  //Called when user is attempting to log in with local username and password. 
  //userId contains the email address entered into the form and password
  //contains the password entered into the form.
  async (req, userId, password, done) => {
    let thisUser;
    try {
      thisUser = await User.findOne({id: userId});
      if (thisUser) {
        if (thisUser.password === password) {
          return done(null, thisUser);
        } else {
          req.authError = "The password is incorrect. Please try again" + 
                           " or reset your password.";
          return done(null, false)
        }
      } else { //userId not found in DB
        req.authError = "There is no account with email " + userId + 
                        ". Please try again.";
        return done(null, false);
      }
    } catch (err) {
      return done(err);
    }
  }
));

//Serialize the current user to the session
passport.serializeUser((user, done) => {
    console.log("In serializeUser.");
    console.log("Contents of user param: " + JSON.stringify(user));
    done(null,user.id);
});
  
//Deserialize the current user from the session
//to persistent storage.
passport.deserializeUser(async (userId, done) => {
  console.log("In deserializeUser.");
  console.log("Contents of userId param: " + userId);
  let thisUser;
  try {
    thisUser = await User.findOne({id: userId});
    console.log("User with id " + userId + 
      " found in DB. User object will be available in server routes as req.user.")
    done(null,thisUser);
  } catch (err) {
    done(err);
  }
});

//////////////////////////////////////////////////////////////////////////
//INITIALIZE EXPRESS APP
// The following code uses express.static to serve the React app defined 
//in the client/ directory at PORT. It also writes an express session
//to a cookie, and initializes a passport object to support OAuth.
/////////////////////////////////////////////////////////////////////////
app
  .use(session({secret: "speedgolf", 
                resave: false,
                saveUninitialized: false,
                cookie: {maxAge: 1000 * 60}}))
  .use(express.static(path.join(__dirname,"client/build")))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.json({limit: '20mb'}))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

//////////////////////////////////////////////////////////////////////////
//DEFINE EXPRESS APP ROUTES
//////////////////////////////////////////////////////////////////////////

/////////////////////////
//AUTHENTICATION ROUTES
/////////////////////////

//AUTHENTICATE route: Uses passport to authenticate with GitHub.
//Should be accessed when user clicks on 'Login with GitHub' button on 
//Log In page.
app.get('/auth/github', passport.authenticate('github'));

//CALLBACK route:  GitHub will call this route after the
//OAuth authentication process is complete.
//req.isAuthenticated() tells us whether authentication was successful.
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    console.log("auth/github/callback reached.")
    res.redirect('/'); //sends user back to login screen; 
                       //req.isAuthenticated() indicates status
  }
);

//LOGOUT route: Use passport's req.logout() method to log the user out and
//redirect the user to the main app page. req.isAuthenticated() is toggled to false.
app.get('/auth/logout', (req, res) => {
    console.log('/auth/logout reached. Logging out');
    req.logout();
    res.redirect('/');
});

//TEST route: Tests whether user was successfully authenticated.
//Should be called from the React.js client to set up app state.
app.get('/auth/test', (req, res) => {
    console.log("auth/test reached.");
    const isAuth = req.isAuthenticated();
    if (isAuth) {
        console.log("User is authenticated");
        console.log("User record tied to session: " + JSON.stringify(req.user));
    } else {
        //User is not authenticated
        console.log("User is not authenticated");
    }
    //Return JSON object to client with results.
    res.json({isAuthenticated: isAuth, user: req.user});
});

//LOGIN route: Attempts to log in user using local strategy
app.post('/auth/login', 
  passport.authenticate('local', { failWithError: true }),
  (req, res) => {
    console.log("/login route reached: successful authentication.");
    //Redirect to app's main page; the /auth/test route should return true
    res.status(200).send("Login successful");
  },
  (err, req, res, next) => {
    console.log("/login route reached: unsuccessful authentication");
    if (req.authError) {
      console.log("req.authError: " + req.authError);
      res.status(401).send(req.authError);
    } else {
      res.status(401).send("Unexpected error occurred when attempting to authenticate. Please try again.");
    }
    //Note: Do NOT redirect! Client will take over.
  });

/////////////////////////////////
//USER ACCOUNT MANAGEMENT ROUTES
////////////////////////////////


//READ user route: Retrieves the user with the specified userId from users collection (GET)
app.get('/users/:userId', async(req, res, next) => {
  console.log("in /users route (GET) with userId = " + 
    JSON.stringify(req.params.userId));
  try {
    let thisUser = await User.findOne({id: req.params.userId});
    if (!thisUser) {
      return res.status(404).send("No user account with id " +
        req.params.userId + " was found in database.");
    } else {
      return res.status(200).json(JSON.stringify(thisUser));
    }
  } catch (err) {
    console.log()
    return res.status(400).send("Unexpected error occurred when looking up user with id " +
      req.params.userId + " in database: " + err);
  }
});

//CREATE user route: Adds a new user account to the users collection (POST)
app.post('/users/:userId',  async (req, res, next) => {
  console.log("in /users route (POST) with params = " + JSON.stringify(req.params) +
    " and body = " + JSON.stringify(req.body));  
  if (req.body === undefined ||
      !req.body.hasOwnProperty("password") || 
      !req.body.hasOwnProperty("displayName") ||
      !req.body.hasOwnProperty("profilePicURL") ||
      !req.body.hasOwnProperty("securityQuestion") ||
      !req.body.hasOwnProperty("securityAnswer")) {
    //Body does not contain correct properties
    return res.status(400).send("/users POST request formulated incorrectly. " + 
      "It must contain 'password','displayName','profilePicURL','securityQuestion' and 'securityAnswer fields in message body.")
  }
  try {
    let thisUser = await User.findOne({id: req.params.userId});
    if (thisUser) { //account already exists
      res.status(400).send("There is already an account with email '" + 
        req.params.userId + "'.");
    } else { //account available -- add to database
      thisUser = await new User({
        id: req.params.userId,
        password: req.body.password,
        displayName: req.body.displayName,
        authStrategy: 'local',
        profilePicURL: req.body.profilePicURL,
        securityQuestion: req.body.securityQuestion,
        securityAnswer: req.body.securityAnswer,
        rounds: []
      }).save();
      return res.status(201).send("New account for '" + 
        req.params.userId + "' successfully created.");
    }
  } catch (err) {
    return res.status(400).send("Unexpected error occurred when adding or looking up user in database. " + err);
  }
});

//UPDATE user route: Updates a new user account in the users collection (POST)
app.put('/users/:userId',  async (req, res, next) => {
  console.log("in /users update route (PUT) with userId = " + JSON.stringify(req.params) + 
    " and body = " + JSON.stringify(req.body));
  if (!req.params.hasOwnProperty("userId"))  {
    return res.status(400).send("users/ PUT request formulated incorrectly." +
        "It must contain 'userId' as parameter.");
  }
  const validProps = ['password', 'displayName', 'profilePicURL', 
    'securityQuestion', 'securityAnswer'];
  for (const bodyProp in req.body) {
    if (!validProps.includes(bodyProp)) {
      return res.status(400).send("users/ PUT request formulated incorrectly." +
        "Only the following props are allowed in body: " +
        "'password', 'displayname', 'profilePicURL', 'securityQuestion', 'securityAnswer'");
    } 
  }
  try {
        let status = await User.updateOne({id: req.params.userId}, 
          {$set: req.body});
        if (status.nModified != 1) { //account could not be found
          res.status(404).send("No user account " + req.params.userId + " exists. Account could not be updated.");
        } else {
          res.status(200).send("User account " + req.params.userId + " successfully updated.")
        }
      } catch (err) {
        res.status(400).send("Unexpected error occurred when updating user data in database: " + err);
      }
});

//DELETE user route: Deletes the document with the specified userId from users collection (DELETE)
app.delete('/users/:userId', async(req, res, next) => {
  console.log("in /users route (DELETE) with userId = " + 
    JSON.stringify(req.params.userId));
  try {
    let status = await User.deleteOne({id: req.params.userId});
    if (status.deletedCount != 1) {
      return res.status(404).send("No user account " +
        req.params.userId + " was found. Account could not be deleted.");
    } else {
      return res.status(200).send("User account " +
      req.params.userId + " was successfully deleted.");
    }
  } catch (err) {
    console.log()
    return res.status(400).send("Unexpected error occurred when attempting to delete user account with id " +
      req.params.userId + ": " + err);
  }
});

/////////////////////////////////
//COURSES ROUTES
////////////////////////////////

//CREATE course route: Adds a new course as a subdocument to 
//a document in the users collection (POST)
app.post('/courses/:userId', async (req, res, next) => {
  console.log("in /courses (POST) route with params = " + 
              JSON.stringify(req.params) + " and body = " + 
              JSON.stringify(req.body));
  if (!req.body.hasOwnProperty("name") || 
      !req.body.hasOwnProperty("location") || 
      !req.body.hasOwnProperty("s1") || 
      !req.body.hasOwnProperty("s2") ||
      !req.body.hasOwnProperty("s3") || 
      !req.body.hasOwnProperty("s4") ||
      !req.body.hasOwnProperty("s5") ||
      !req.body.hasOwnProperty("s6") || 
      !req.body.hasOwnProperty("s7") ||
      !req.body.hasOwnProperty("s8") ||
      !req.body.hasOwnProperty("s9") ||
      !req.body.hasOwnProperty("s10") ||
      !req.body.hasOwnProperty("s11") ||
      !req.body.hasOwnProperty("s12") ||
      !req.body.hasOwnProperty("s13") ||
      !req.body.hasOwnProperty("s14") ||
      !req.body.hasOwnProperty("s15") ||
      !req.body.hasOwnProperty("s16") ||
      !req.body.hasOwnProperty("s17") ||
      !req.body.hasOwnProperty("s18") || 
      !req.body.hasOwnProperty("t1") || 
      !req.body.hasOwnProperty("t2") ||
      !req.body.hasOwnProperty("t3") || 
      !req.body.hasOwnProperty("t4") ||
      !req.body.hasOwnProperty("t5") ||
      !req.body.hasOwnProperty("t6") || 
      !req.body.hasOwnProperty("t7") ||
      !req.body.hasOwnProperty("t8") ||
      !req.body.hasOwnProperty("t9") ||
      !req.body.hasOwnProperty("t10") ||
      !req.body.hasOwnProperty("t11") ||
      !req.body.hasOwnProperty("t12") ||
      !req.body.hasOwnProperty("t13") ||
      !req.body.hasOwnProperty("t14") ||
      !req.body.hasOwnProperty("t15") ||
      !req.body.hasOwnProperty("t16") ||
      !req.body.hasOwnProperty("t17") ||
      !req.body.hasOwnProperty("t18")
      ) {
    //Body does not contain correct properties
    return res.status(400).send("POST request on /courses formulated incorrectly." +
      "Body must contain all 36 required fields");
  }
  try {
    let status = await User.updateOne(
    {id: req.params.userId},
    {$push: {courses: req.body}});
    if (status.nModified != 1) { //Should never happen!
      res.status(400).send("Unexpected error occurred when adding course to"+
        " database. Course was not added.");
    } else {
      res.status(200).send("Course successfully added to database.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unexpected error occurred when adding course" +
     " to database: " + err);
  } 
});

//READ course route: Returns all courses associated 
//with a given user in the users collection (GET)
app.get('/rounds/:userId', async(req, res) => {
  console.log("in /rounds route (GET) with userId = " + 
    JSON.stringify(req.params.userId));
  try {
    let thisUser = await User.findOne({id: req.params.userId});
    if (!thisUser) {
      return res.status(400).message("No user account with specified userId was found in database.");
    } else {
      return res.status(200).json(JSON.stringify(thisUser.rounds));
    }
  } catch (err) {
    console.log()
    return res.status(400).message("Unexpected error occurred when looking up user in database: " + err);
  }
});

//UPDATE course route: Updates a specific course 
//for a given user in the users collection (PUT)
app.put('/courses/:userId/:courseId', async (req, res, next) => {
  console.log("in /rounds (PUT) route with params = " + 
              JSON.stringify(req.params) + " and body = " + 
              JSON.stringify(req.body));
  const validProps = ['s1', 's2',
    's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 't1',
     't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13', 't14', 't15', 't16', 't17', 't18' ];
  let bodyObj = {...req.body};
  delete bodyObj._id; //Not needed for update
  for (const bodyProp in bodyObj) {
    if (!validProps.includes(bodyProp)) {
      return res.status(400).send("courses/ PUT request formulated incorrectly." +
        "It includes " + bodyProp + ". However, only the following props are allowed: " +
        "'name', 'location', 's0', 's1', 's2'," + 
        " 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 't0', 't1'," + 
         " 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13', 't14', 't15', 't16', 't17'");
    } else {
      bodyObj["courses.$." + bodyProp] = bodyObj[bodyProp];
      delete bodyObj[bodyProp];
    }
  }
  try {
    let status = await User.updateOne(
      {"id": req.params.userId,
       "courses._id": mongoose.Types.ObjectId(req.params.courseId)}
      ,{"$set" : bodyObj}
    );
    if (status.nModified != 1) {
      res.status(400).send("Unexpected error occurred when updating round in database. Round was not updated.");
    } else {
      res.status(200).send("Round successfully updated in database.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unexpected error occurred when updating round in database: " + err);
  } 
});

//DELETE round route: Deletes a specific round 
//for a given user in the users collection (DELETE)
app.delete('/rounds/:userId/:roundId', async (req, res, next) => {
  console.log("in /rounds (DELETE) route with params = " + 
              JSON.stringify(req.params)); 
  try {
    let status = await User.updateOne(
      {id: req.params.userId},
      {$pull: {rounds: {_id: mongoose.Types.ObjectId(req.params.roundId)}}});
    if (status.nModified != 1) { //Should never happen!
      res.status(400).send("Unexpected error occurred when deleting round from database. Round was not deleted.");
    } else {
      res.status(200).send("Round successfully deleted from database.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unexpected error occurred when deleting round from database: " + err);
  } 
});

///////////////////////
////DIVISIONS ROUTES///
///////////////////////
//CREATE course route: Adds a new course as a subdocument to 
//a document in the users collection (POST)
app.post('/divisions/:userId', async (req, res, next) => {
  console.log("in /divisions (POST) route with params = " + 
              JSON.stringify(req.params) + " and body = " + 
              JSON.stringify(req.body));
  if (!req.body.hasOwnProperty("name") || 
      !req.body.hasOwnProperty("numRounds") || 
      !req.body.hasOwnProperty("numHoles") || 
      !req.body.hasOwnProperty("course")
      ) {
    //Body does not contain correct properties
    return res.status(400).send("POST request on /divisions formulated incorrectly." +
      "Body must contain all 4 required fields (name, numRounds, numHoles, course)");
  }
  try {
    let status = await User.updateOne(
    {id: req.params.userId},
    {$push: {divisions: req.body}});
    if (status.nModified != 1) { //Should never happen!
      res.status(400).send("Unexpected error occurred when adding division to"+
        " database. Division was not added.");
    } else {
      res.status(200).send("Division successfully added to database.");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unexpected error occurred when adding division" +
     " to database: " + err);
  } 
});

