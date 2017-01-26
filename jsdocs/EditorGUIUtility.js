class EditorGUIUtility {
    /**
     * The width of the GUI area for the current EditorWindow or other view.
     */
    static get currentViewWidth() {}

    /**
     * The width of the GUI area for the current EditorWindow or other view.
     */
    static set currentViewWidth(value) {}

    /**
     * Is a text field currently editing text?
     */
    static get editingTextField() {}

    /**
     * Is a text field currently editing text?
     */
    static set editingTextField(value) {}

    /**
     * The minimum width in pixels reserved for the fields of Editor GUI controls.
     */
    static get fieldWidth() {}

    /**
     * The minimum width in pixels reserved for the fields of Editor GUI controls.
     */
    static set fieldWidth(value) {}

    /**
     * Is the Editor GUI is hierarchy mode?
     */
    static get hierarchyMode() {}

    /**
     * Is the Editor GUI is hierarchy mode?
     */
    static set hierarchyMode(value) {}

    /**
     * Is the user currently using the pro skin? (Read Only)
     */
    static get isProSkin() {}

    /**
     * Is the user currently using the pro skin? (Read Only)
     */
    static set isProSkin(value) {}

    /**
     * The width in pixels reserved for labels of Editor GUI controls.
     */
    static get labelWidth() {}

    /**
     * The width in pixels reserved for labels of Editor GUI controls.
     */
    static set labelWidth(value) {}

    /**
     * The scale of GUI points relative to screen pixels for the current viewThis value is the number of screen pixels per point of interface space. For instance, 2.0 on retina displays. Note that the value may differ from one view to the next if the views are on monitors with different UI scales.
     */
    static get pixelsPerPoint() {}

    /**
     * The scale of GUI points relative to screen pixels for the current viewThis value is the number of screen pixels per point of interface space. For instance, 2.0 on retina displays. Note that the value may differ from one view to the next if the views are on monitors with different UI scales.
     */
    static set pixelsPerPoint(value) {}

    /**
     * Get the height used for a single Editor control such as a one-line EditorGUI.TextField or EditorGUI.Popup.
     */
    static get singleLineHeight() {}

    /**
     * Get the height used for a single Editor control such as a one-line EditorGUI.TextField or EditorGUI.Popup.
     */
    static set singleLineHeight(value) {}

    /**
     * Get the height used by default for vertical spacing between controls.
     */
    static get standardVerticalSpacing() {}

    /**
     * Get the height used by default for vertical spacing between controls.
     */
    static set standardVerticalSpacing(value) {}

    /**
     * The system copy buffer.
     */
    static get systemCopyBuffer() {}

    /**
     * The system copy buffer.
     */
    static set systemCopyBuffer(value) {}

    /**
     * Get a white texture.
     */
    static get whiteTexture() {}

    /**
     * Get a white texture.
     */
    static set whiteTexture(value) {}

    /**
     * Is the Editor GUI currently in wide mode?
     */
    static get wideMode() {}

    /**
     * Is the Editor GUI currently in wide mode?
     */
    static set wideMode(value) {}

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
     * Add a custom mouse pointer to a control.
     */
    static AddCursorRect() {}

    /**
     * Creates an event that can be sent to another window.
     */
    static CommandEvent() {}

    /**
     * Draw a color swatch.
     */
    static DrawColorSwatch() {}

    /**
     * Draw a curve swatch.
     */
    static DrawCurveSwatch() {}

    /**
     * Draw swatch with a filled region between two SerializedProperty curves.
     */
    static DrawRegionSwatch() {}

    /**
     * Get a texture from its source filename.
     */
    static FindTexture() {}

    /**
     * Get one of the built-in GUI skins, which can be the game view, inspector or scene view skin as chosen by the parameter.
     */
    static GetBuiltinSkin() {}

    /**
     * Layout list of string items left to right, top to bottom in the given area.
     */
    static GetFlowLayoutedRects() {}

    /**
     * Get the size that has been set using SetIconSize.
     */
    static GetIconSize() {}

    /**
     * The controlID of the currently showing object picker.
     */
    static GetObjectPickerControlID() {}

    /**
     * The object currently selected in the object picker.
     */
    static GetObjectPickerObject() {}

    /**
     * Does a given class have per-object thumbnails?
     */
    static HasObjectThumbnail() {}

    /**
     * Fetch the GUIContent from the Unity builtin resources with the given name.
     */
    static IconContent() {}

    /**
     * Check if any enabled camera can render to a particular display.
     */
    static IsDisplayReferencedByCameras() {}

    /**
     * Load a built-in resource.
     */
    static Load() {}

    /**
     * Load a required built-in resource.
     */
    static LoadRequired() {}

    /**
     * Return a GUIContent object with the name and icon of an Object.
     */
    static ObjectContent() {}

    /**
     * Ping an object in the Scene like clicking it in an inspector.
     */
    static PingObject() {}

    /**
     * Convert from pixel space to point space.
     */
    static PixelsToPoints() {}

    /**
     * Convert from point space to pixel space.
     */
    static PointsToPixels() {}

    /**
     * Send an input event into the game.
     */
    static QueueGameViewInputEvent() {}

    /**
     * Set icons rendered as part of GUIContent to be rendered at a specific size.
     */
    static SetIconSize() {}

    /**
     * Show the object picker from code.
     */
    static ShowObjectPicker() {}

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