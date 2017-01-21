class BuildOptions {


    /**
     * Perform the specified build without any special settings or extra tasks.
     */
    get None() {}

    /**
     * Perform the specified build without any special settings or extra tasks.
     */
    set None(value) {}

    /**
     * Build a development version of the player.
     */
    get Development() {}

    /**
     * Build a development version of the player.
     */
    set Development(value) {}

    /**
     * Run the built player.
     */
    get AutoRunPlayer() {}

    /**
     * Run the built player.
     */
    set AutoRunPlayer(value) {}

    /**
     * Show the built player.
     */
    get ShowBuiltPlayer() {}

    /**
     * Show the built player.
     */
    set ShowBuiltPlayer(value) {}

    /**
     * Build a compressed asset bundle that contains streamed scenes loadable with the WWW class.
     */
    get BuildAdditionalStreamedScenes() {}

    /**
     * Build a compressed asset bundle that contains streamed scenes loadable with the WWW class.
     */
    set BuildAdditionalStreamedScenes(value) {}

    /**
     * Used when building Xcode (iOS) or Eclipse (Android) projects.
     */
    get AcceptExternalModificationsToPlayer() {}

    /**
     * Used when building Xcode (iOS) or Eclipse (Android) projects.
     */
    set AcceptExternalModificationsToPlayer(value) {}

    /**
     * Start the player with a connection to the profiler in the editor.
     */
    get ConnectWithProfiler() {}

    /**
     * Start the player with a connection to the profiler in the editor.
     */
    set ConnectWithProfiler(value) {}

    /**
     * Allow script debuggers to attach to the player remotely.
     */
    get AllowDebugging() {}

    /**
     * Allow script debuggers to attach to the player remotely.
     */
    set AllowDebugging(value) {}

    /**
     * Symlink runtime libraries when generating iOS Xcode project. (Faster iteration time).
     */
    get SymlinkLibraries() {}

    /**
     * Symlink runtime libraries when generating iOS Xcode project. (Faster iteration time).
     */
    set SymlinkLibraries(value) {}

    /**
     * Don&#039;t compress the data when creating the asset bundle.
     */
    get UncompressedAssetBundle() {}

    /**
     * Don&#039;t compress the data when creating the asset bundle.
     */
    set UncompressedAssetBundle(value) {}

    /**
     * Build headless Linux standalone.
     */
    get EnableHeadlessMode() {}

    /**
     * Build headless Linux standalone.
     */
    set EnableHeadlessMode(value) {}

    /**
     * Build only the scripts of a project.
     */
    get BuildScriptsOnly() {}

    /**
     * Build only the scripts of a project.
     */
    set BuildScriptsOnly(value) {}

    /**
     * Include assertions in the build. By default, the assertions are only included in development builds.
     */
    get ForceEnableAssertions() {}

    /**
     * Include assertions in the build. By default, the assertions are only included in development builds.
     */
    set ForceEnableAssertions(value) {}

    /**
     * Force full optimizations for script complilation in Development builds.
     */
    get ForceOptimizeScriptCompilation() {}

    /**
     * Force full optimizations for script complilation in Development builds.
     */
    set ForceOptimizeScriptCompilation(value) {}

    /**
     * Do not allow the build to succeed if any errors are reporting during it.
     */
    get StrictMode() {}

    /**
     * Do not allow the build to succeed if any errors are reporting during it.
     */
    set StrictMode(value) {}


}