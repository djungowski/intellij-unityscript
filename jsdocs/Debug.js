class Debug {
    /**
     * Reports whether the development console is visible. The development console cannot be made to appear using:
     */
    static get developerConsoleVisible() {}

    /**
     * Reports whether the development console is visible. The development console cannot be made to appear using:
     */
    static set developerConsoleVisible(value) {}

    /**
     * In the Build Settings dialog there is a check box called &quot;Development Build&quot;.
     */
    static get isDebugBuild() {}

    /**
     * In the Build Settings dialog there is a check box called &quot;Development Build&quot;.
     */
    static set isDebugBuild(value) {}

    /**
     * Get default debug logger.
     */
    static get logger() {}

    /**
     * Get default debug logger.
     */
    static set logger(value) {}


    /**
     * Assert a condition and logs an error message to the Unity console on failure.
     */
    static Assert() {}

    /**
     * Assert a condition and logs a formatted error message to the Unity console on failure.
     */
    static AssertFormat() {}

    /**
     * Pauses the editor.
     */
    static Break() {}

    /**
     * Clears errors from the developer console.
     */
    static ClearDeveloperConsole() {}

    /**
     * Draws a line between specified start and end points.
     */
    static DrawLine() {}

    /**
     * Draws a line from start to start + dir in world coordinates.
     */
    static DrawRay() {}

    /**
     * Logs message to the Unity Console.
     */
    static Log() {}

    /**
     * A variant of Debug.Log that logs an assertion message to the console.
     */
    static LogAssertion() {}

    /**
     * Logs a formatted assertion message to the Unity console.
     */
    static LogAssertionFormat() {}

    /**
     * A variant of Debug.Log that logs an error message to the console.
     */
    static LogError() {}

    /**
     * Logs a formatted error message to the Unity console.
     */
    static LogErrorFormat() {}

    /**
     * A variant of Debug.Log that logs an error message from an exception to the console.
     */
    static LogException() {}

    /**
     * Logs a formatted message to the Unity Console.
     */
    static LogFormat() {}

    /**
     * A variant of Debug.Log that logs a warning message to the console.
     */
    static LogWarning() {}

    /**
     * Logs a formatted warning message to the Unity Console.
     */
    static LogWarningFormat() {}



}