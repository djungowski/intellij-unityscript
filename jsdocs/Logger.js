class Logger {


    /**
     * To selective enable debug log message.
     */
    get filterLogType() {}

    /**
     * To selective enable debug log message.
     */
    set filterLogType(value) {}

    /**
     * To runtime toggle debug logging [ON/OFF].
     */
    get logEnabled() {}

    /**
     * To runtime toggle debug logging [ON/OFF].
     */
    set logEnabled(value) {}

    /**
     * Set  Logger.ILogHandler.
     */
    get logHandler() {}

    /**
     * Set  Logger.ILogHandler.
     */
    set logHandler(value) {}


    /**
     * Check logging is enabled based on the LogType.
     */
    IsLogTypeAllowed() {}

    /**
     * Logs message to the Unity Console using default logger.
     */
    Log() {}

    /**
     * A variant of Logger.Log that logs an error message.
     */
    LogError() {}

    /**
     * A variant of Logger.Log that logs an exception message.
     */
    LogException() {}

    /**
     * Logs a formatted message.
     */
    LogFormat() {}

    /**
     * A variant of Logger.Log that logs an warning message.
     */
    LogWarning() {}

}