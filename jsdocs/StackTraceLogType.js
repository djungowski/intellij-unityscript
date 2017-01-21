class StackTraceLogType {


    /**
     * No stack trace will be outputed to log.
     */
    get None() {}

    /**
     * No stack trace will be outputed to log.
     */
    set None(value) {}

    /**
     * Only managed stack trace will be outputed.
     */
    get ScriptOnly() {}

    /**
     * Only managed stack trace will be outputed.
     */
    set ScriptOnly(value) {}

    /**
     * Native and managed stack trace will be logged.
     */
    get Full() {}

    /**
     * Native and managed stack trace will be logged.
     */
    set Full(value) {}


}