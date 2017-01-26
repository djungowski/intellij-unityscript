class Social {
    /**
     * This is the currently active social platform. 
     */
    static get Active() {}

    /**
     * This is the currently active social platform. 
     */
    static set Active(value) {}

    /**
     * The local user (potentially not logged in).
     */
    static get localUser() {}

    /**
     * The local user (potentially not logged in).
     */
    static set localUser(value) {}


    /**
     * Create an IAchievement instance.
     */
    static CreateAchievement() {}

    /**
     * Create an ILeaderboard instance.
     */
    static CreateLeaderboard() {}

    /**
     * Loads the achievement descriptions accociated with this application.
     */
    static LoadAchievementDescriptions() {}

    /**
     * Load the achievements the logged in user has already achieved or reported progress on.
     */
    static LoadAchievements() {}

    /**
     * Load a default set of scores from the given leaderboard.
     */
    static LoadScores() {}

    /**
     * Load the user profiles accociated with the given array of user IDs.
     */
    static LoadUsers() {}

    /**
     * Reports the progress of an achievement.
     */
    static ReportProgress() {}

    /**
     * Report a score to a specific leaderboard.
     */
    static ReportScore() {}

    /**
     * Show a default/system view of the games achievements.
     */
    static ShowAchievementsUI() {}

    /**
     * Show a default/system view of the games leaderboards.
     */
    static ShowLeaderboardUI() {}



}