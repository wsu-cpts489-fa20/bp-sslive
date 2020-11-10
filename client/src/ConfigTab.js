/* ConfigTab: The enumerated type for  ConfigTab. */

const  ConfigTab = {
    BASIC: "BasicInfoMode",
    LOGO: "LogoMode",
    COURSES: "CoursesMode",
    ROUNDS: "RoundsMode",
    DIVISIONS: "DivionsMode",
    PLAYERS: "PlayersMode",
    SCORERS: "ScorersMode",
    PUBLISH: "PublishMode"
};

Object.freeze(ConfigTab); //This ensures that the object is immutable.

export default  ConfigTab;