class ScriptableWizard {
    /**
     * The EditorWindow which currently has keyboard focus. (Read Only)
     */
    static get focusedWindow() {}

    /**
     * The EditorWindow which currently has keyboard focus. (Read Only)
     */
    static set focusedWindow(value) {}

    /**
     * The EditorWindow currently under the mouse cursor. (Read Only)
     */
    static get mouseOverWindow() {}

    /**
     * The EditorWindow currently under the mouse cursor. (Read Only)
     */
    static set mouseOverWindow(value) {}


    /**
     * Creates a wizard.
     */
    static DisplayWizard() {}

    /**
     * Focuses the first found EditorWindow of specified type if it is open.
     */
    static FocusWindowIfItsOpen() {}

    /**
     * Returns the first EditorWindow of type t which is currently on the screen.
     */
    static GetWindow() {}

    /**
     * Returns the first EditorWindow of type t which is currently on the screen.
     */
    static GetWindowWithRect() {}

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}

    /**
     * Creates an instance of a scriptable object.
     */
    static CreateInstance() {}


    /**
     * Allows you to set the text shown on the create button of the wizard.
     */
    get createButtonName() {}

    /**
     * Allows you to set the text shown on the create button of the wizard.
     */
    set createButtonName(value) {}

    /**
     * Allows you to set the error text of the wizard.
     */
    get errorString() {}

    /**
     * Allows you to set the error text of the wizard.
     */
    set errorString(value) {}

    /**
     * Allows you to set the help text of the wizard.
     */
    get helpString() {}

    /**
     * Allows you to set the help text of the wizard.
     */
    set helpString(value) {}

    /**
     * Allows you to enable and disable the wizard create button, so that the user can not click it.
     */
    get isValid() {}

    /**
     * Allows you to enable and disable the wizard create button, so that the user can not click it.
     */
    set isValid(value) {}

    /**
     * Allows you to set the text shown on the optional other button of the wizard. Leave this parameter out to leave the button out.
     */
    get otherButtonName() {}

    /**
     * Allows you to set the text shown on the optional other button of the wizard. Leave this parameter out to leave the button out.
     */
    set otherButtonName(value) {}

    /**
     * Does the window automatically repaint whenever the scene has changed?
     */
    get autoRepaintOnSceneChange() {}

    /**
     * Does the window automatically repaint whenever the scene has changed?
     */
    set autoRepaintOnSceneChange(value) {}

    /**
     * Is this window maximized.
     */
    get maximized() {}

    /**
     * Is this window maximized.
     */
    set maximized(value) {}

    /**
     * The maximum size of this window.
     */
    get maxSize() {}

    /**
     * The maximum size of this window.
     */
    set maxSize(value) {}

    /**
     * The minimum size of this window.
     */
    get minSize() {}

    /**
     * The minimum size of this window.
     */
    set minSize(value) {}

    /**
     * The position of the window in screen space.
     */
    get position() {}

    /**
     * The position of the window in screen space.
     */
    set position(value) {}

    /**
     * The GUIContent used for drawing the title of EditorWindows.
     */
    get titleContent() {}

    /**
     * The GUIContent used for drawing the title of EditorWindows.
     */
    set titleContent(value) {}

    /**
     * Does the GUI in this editor window want MouseMove events?
     */
    get wantsMouseMove() {}

    /**
     * Does the GUI in this editor window want MouseMove events?
     */
    set wantsMouseMove(value) {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    get hideFlags() {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    set hideFlags(value) {}

    /**
     * The name of the object.
     */
    get name() {}

    /**
     * The name of the object.
     */
    set name(value) {}


    /**
     * Mark the beginning area of all popup windows.
     */
    BeginWindows() {}

    /**
     * Close the editor window.
     */
    Close() {}

    /**
     * Close a window group started with EditorWindow.BeginWindows.
     */
    EndWindows() {}

    /**
     * Moves keyboard focus to this EditorWindow.
     */
    Focus() {}

    /**
     * Stop showing notification message.
     */
    RemoveNotification() {}

    /**
     * Make the window repaint.
     */
    Repaint() {}

    /**
     * Sends an Event to a window.
     */
    SendEvent() {}

    /**
     * Show the EditorWindow.
     */
    Show() {}

    /**
     * Shows a window with dropdown behaviour and styling.
     */
    ShowAsDropDown() {}

    /**
     * Show the editor window in the auxiliary window.
     */
    ShowAuxWindow() {}

    /**
     * Show a notification message.
     */
    ShowNotification() {}

    /**
     * Shows an Editor window using popup-style framing.
     */
    ShowPopup() {}

    /**
     * Show the EditorWindow as a floating utility window.
     */
    ShowUtility() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}