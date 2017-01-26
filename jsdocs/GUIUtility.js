class GUIUtility {
    /**
     * A global property, which is true if a ModalWindow is being displayed, false otherwise.
     */
    static get hasModalWindow() {}

    /**
     * A global property, which is true if a ModalWindow is being displayed, false otherwise.
     */
    static set hasModalWindow(value) {}

    /**
     * The controlID of the current hot control.
     */
    static get hotControl() {}

    /**
     * The controlID of the current hot control.
     */
    static set hotControl(value) {}

    /**
     * The controlID of the control that has keyboard focus.
     */
    static get keyboardControl() {}

    /**
     * The controlID of the control that has keyboard focus.
     */
    static set keyboardControl(value) {}

    /**
     * Get access to the system-wide pasteboard.
     */
    static get systemCopyBuffer() {}

    /**
     * Get access to the system-wide pasteboard.
     */
    static set systemCopyBuffer(value) {}


    /**
     * Get a unique ID for a control.
     */
    static GetControlID() {}

    /**
     * Get a state object from a controlID.
     */
    static GetStateObject() {}

    /**
     * Convert a point from GUI position to screen space.
     */
    static GUIToScreenPoint() {}

    /**
     * Get an existing state object from a controlID.
     */
    static QueryStateObject() {}

    /**
     * Helper function to rotate the GUI around a point.
     */
    static RotateAroundPivot() {}

    /**
     * Helper function to scale the GUI around a point.
     */
    static ScaleAroundPivot() {}

    /**
     * Convert a point from screen space to GUI position.
     */
    static ScreenToGUIPoint() {}



}