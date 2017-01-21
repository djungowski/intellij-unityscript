class ActionOnDotNetUnhandledException {


    /**
     * Silent exit in case of unhandled .NET exception (no Crash Report generated).
     */
    get SilentExit() {}

    /**
     * Silent exit in case of unhandled .NET exception (no Crash Report generated).
     */
    set SilentExit(value) {}

    /**
     * Crash in case of unhandled .NET exception (Crash Report will be generated).
     */
    get Crash() {}

    /**
     * Crash in case of unhandled .NET exception (Crash Report will be generated).
     */
    set Crash(value) {}


}