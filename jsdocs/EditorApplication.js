class EditorApplication {
    /**
     * Path to the Unity editor contents folder. (Read Only)
     */
    static get applicationContentsPath() {}

    /**
     * Path to the Unity editor contents folder. (Read Only)
     */
    static set applicationContentsPath(value) {}

    /**
     * Returns the path to the Unity editor application. (Read Only)
     */
    static get applicationPath() {}

    /**
     * Returns the path to the Unity editor application. (Read Only)
     */
    static set applicationPath(value) {}

    /**
     * Delegate which is called once after all inspectors update.
     */
    static get delayCall() {}

    /**
     * Delegate which is called once after all inspectors update.
     */
    static set delayCall(value) {}

    /**
     * A callback to be raised when an object in the hierarchy changes.Each time an object is (or a group of objects are) created, renamed, parented, unparented or destroyed this callback is raised.
     */
    static get hierarchyWindowChanged() {}

    /**
     * A callback to be raised when an object in the hierarchy changes.Each time an object is (or a group of objects are) created, renamed, parented, unparented or destroyed this callback is raised.
     */
    static set hierarchyWindowChanged(value) {}

    /**
     * Delegate for OnGUI events for every visible list item in the HierarchyWindow.
     */
    static get hierarchyWindowItemOnGUI() {}

    /**
     * Delegate for OnGUI events for every visible list item in the HierarchyWindow.
     */
    static set hierarchyWindowItemOnGUI(value) {}

    /**
     * Is editor currently compiling scripts? (Read Only)
     */
    static get isCompiling() {}

    /**
     * Is editor currently compiling scripts? (Read Only)
     */
    static set isCompiling(value) {}

    /**
     * Is editor currently paused?
     */
    static get isPaused() {}

    /**
     * Is editor currently paused?
     */
    static set isPaused(value) {}

    /**
     * Is editor currently in play mode?
     */
    static get isPlaying() {}

    /**
     * Is editor currently in play mode?
     */
    static set isPlaying(value) {}

    /**
     * Is editor either currently in play mode, or about to switch to it? (Read Only)
     */
    static get isPlayingOrWillChangePlaymode() {}

    /**
     * Is editor either currently in play mode, or about to switch to it? (Read Only)
     */
    static set isPlayingOrWillChangePlaymode(value) {}

    /**
     * Is editor currently connected to Unity Remote 4 client app.
     */
    static get isRemoteConnected() {}

    /**
     * Is editor currently connected to Unity Remote 4 client app.
     */
    static set isRemoteConnected(value) {}

    /**
     * This property is true if the Editor is currently refreshing the AssetDatabase. During this time, the editor checks to see if any files have changed, whether they need to be reimported, and reimports them. (Read Only)
     */
    static get isUpdating() {}

    /**
     * This property is true if the Editor is currently refreshing the AssetDatabase. During this time, the editor checks to see if any files have changed, whether they need to be reimported, and reimports them. (Read Only)
     */
    static set isUpdating(value) {}

    /**
     * Delegate for changed keyboard modifier keys.
     */
    static get modifierKeysChanged() {}

    /**
     * Delegate for changed keyboard modifier keys.
     */
    static set modifierKeysChanged(value) {}

    /**
     * Delegate for play mode state changes.
     */
    static get playmodeStateChanged() {}

    /**
     * Delegate for play mode state changes.
     */
    static set playmodeStateChanged(value) {}

    /**
     * Callback raised whenever the state of the Project window changes.
     */
    static get projectWindowChanged() {}

    /**
     * Callback raised whenever the state of the Project window changes.
     */
    static set projectWindowChanged(value) {}

    /**
     * Delegate for OnGUI events for every visible list item in the ProjectWindow.
     */
    static get projectWindowItemOnGUI() {}

    /**
     * Delegate for OnGUI events for every visible list item in the ProjectWindow.
     */
    static set projectWindowItemOnGUI(value) {}

    /**
     * Callback raised whenever the contents of a window&#039;s search box are changed.
     */
    static get searchChanged() {}

    /**
     * Callback raised whenever the contents of a window&#039;s search box are changed.
     */
    static set searchChanged(value) {}

    /**
     * The time since the editor was started. (Read Only)
     */
    static get timeSinceStartup() {}

    /**
     * The time since the editor was started. (Read Only)
     */
    static set timeSinceStartup(value) {}

    /**
     * Delegate for generic updates.
     */
    static get update() {}

    /**
     * Delegate for generic updates.
     */
    static set update(value) {}


    /**
     * Plays system beep sound.
     */
    static Beep() {}

    /**
     * Set the hierarchy sorting method as dirty.
     */
    static DirtyHierarchyWindowSorting() {}

    /**
     * Invokes the menu item in the specified path.
     */
    static ExecuteMenuItem() {}

    /**
     * Exit the Unity editor application.
     */
    static Exit() {}

    /**
     * Load the given level additively in play mode asynchronously
     */
    static LoadLevelAdditiveAsyncInPlayMode() {}

    /**
     * Load the given level additively in play mode.
     */
    static LoadLevelAdditiveInPlayMode() {}

    /**
     * Load the given level in play mode asynchronously.
     */
    static LoadLevelAsyncInPlayMode() {}

    /**
     * Load the given level in play mode.
     */
    static LoadLevelInPlayMode() {}

    /**
     * Prevents loading of assemblies when it is inconvenient.
     */
    static LockReloadAssemblies() {}

    /**
     * Open another project.
     */
    static OpenProject() {}

    /**
     * Can be used to ensure repaint of the HierarchyWindow.
     */
    static RepaintHierarchyWindow() {}

    /**
     * Can be used to ensure repaint of the ProjectWindow.
     */
    static RepaintProjectWindow() {}

    /**
     * Perform a single frame step.
     */
    static Step() {}

    /**
     * Must be called after LockReloadAssemblies, to reenable loading of assemblies.
     */
    static UnlockReloadAssemblies() {}



}