/* AppMode: The enumerated type for AppMode. */

const AppMode = {
    LOGIN: "LoginMode",
    FEED: "FeedMode",
    ROUNDS: "RoundsMode",
    ROUNDS_LOGROUND: "RoundsMode-LogRound",
    ROUNDS_EDITROUND: "RoundsMode-EditRound",
    COURSES: "CoursesMode",
    MAIN: "DirectorMode",
    LEADERBOARD: "LeaderboardMode"
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;