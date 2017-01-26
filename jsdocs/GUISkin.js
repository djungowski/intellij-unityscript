class GUISkin {

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
     * Style used by default for GUI.Box controls.
     */
    get box() {}

    /**
     * Style used by default for GUI.Box controls.
     */
    set box(value) {}

    /**
     * Style used by default for GUI.Button controls.
     */
    get button() {}

    /**
     * Style used by default for GUI.Button controls.
     */
    set button(value) {}

    /**
     * Array of GUI styles for specific needs.
     */
    get customStyles() {}

    /**
     * Array of GUI styles for specific needs.
     */
    set customStyles(value) {}

    /**
     * The default font to use for all styles.
     */
    get font() {}

    /**
     * The default font to use for all styles.
     */
    set font(value) {}

    /**
     * Style used by default for the background part of GUI.HorizontalScrollbar controls.
     */
    get horizontalScrollbar() {}

    /**
     * Style used by default for the background part of GUI.HorizontalScrollbar controls.
     */
    set horizontalScrollbar(value) {}

    /**
     * Style used by default for the left button on GUI.HorizontalScrollbar controls.
     */
    get horizontalScrollbarLeftButton() {}

    /**
     * Style used by default for the left button on GUI.HorizontalScrollbar controls.
     */
    set horizontalScrollbarLeftButton(value) {}

    /**
     * Style used by default for the right button on GUI.HorizontalScrollbar controls.
     */
    get horizontalScrollbarRightButton() {}

    /**
     * Style used by default for the right button on GUI.HorizontalScrollbar controls.
     */
    set horizontalScrollbarRightButton(value) {}

    /**
     * Style used by default for the thumb that is dragged in GUI.HorizontalScrollbar controls.
     */
    get horizontalScrollbarThumb() {}

    /**
     * Style used by default for the thumb that is dragged in GUI.HorizontalScrollbar controls.
     */
    set horizontalScrollbarThumb(value) {}

    /**
     * Style used by default for the background part of GUI.HorizontalSlider controls.
     */
    get horizontalSlider() {}

    /**
     * Style used by default for the background part of GUI.HorizontalSlider controls.
     */
    set horizontalSlider(value) {}

    /**
     * Style used by default for the thumb that is dragged in GUI.HorizontalSlider controls.
     */
    get horizontalSliderThumb() {}

    /**
     * Style used by default for the thumb that is dragged in GUI.HorizontalSlider controls.
     */
    set horizontalSliderThumb(value) {}

    /**
     * Style used by default for GUI.Label controls.
     */
    get label() {}

    /**
     * Style used by default for GUI.Label controls.
     */
    set label(value) {}

    /**
     * Style used by default for the background of ScrollView controls (see GUI.BeginScrollView).
     */
    get scrollView() {}

    /**
     * Style used by default for the background of ScrollView controls (see GUI.BeginScrollView).
     */
    set scrollView(value) {}

    /**
     * Generic settings for how controls should behave with this skin.
     */
    get settings() {}

    /**
     * Generic settings for how controls should behave with this skin.
     */
    set settings(value) {}

    /**
     * Style used by default for GUI.TextArea controls.
     */
    get textArea() {}

    /**
     * Style used by default for GUI.TextArea controls.
     */
    set textArea(value) {}

    /**
     * Style used by default for GUI.TextField controls.
     */
    get textField() {}

    /**
     * Style used by default for GUI.TextField controls.
     */
    set textField(value) {}

    /**
     * Style used by default for GUI.Toggle controls.
     */
    get toggle() {}

    /**
     * Style used by default for GUI.Toggle controls.
     */
    set toggle(value) {}

    /**
     * Style used by default for the background part of GUI.VerticalScrollbar controls.
     */
    get verticalScrollbar() {}

    /**
     * Style used by default for the background part of GUI.VerticalScrollbar controls.
     */
    set verticalScrollbar(value) {}

    /**
     * Style used by default for the down button on GUI.VerticalScrollbar controls.
     */
    get verticalScrollbarDownButton() {}

    /**
     * Style used by default for the down button on GUI.VerticalScrollbar controls.
     */
    set verticalScrollbarDownButton(value) {}

    /**
     * Style used by default for the thumb that is dragged in GUI.VerticalScrollbar controls.
     */
    get verticalScrollbarThumb() {}

    /**
     * Style used by default for the thumb that is dragged in GUI.VerticalScrollbar controls.
     */
    set verticalScrollbarThumb(value) {}

    /**
     * Style used by default for the up button on GUI.VerticalScrollbar controls.
     */
    get verticalScrollbarUpButton() {}

    /**
     * Style used by default for the up button on GUI.VerticalScrollbar controls.
     */
    set verticalScrollbarUpButton(value) {}

    /**
     * Style used by default for the background part of GUI.VerticalSlider controls.
     */
    get verticalSlider() {}

    /**
     * Style used by default for the background part of GUI.VerticalSlider controls.
     */
    set verticalSlider(value) {}

    /**
     * Style used by default for the thumb that is dragged in GUI.VerticalSlider controls.
     */
    get verticalSliderThumb() {}

    /**
     * Style used by default for the thumb that is dragged in GUI.VerticalSlider controls.
     */
    set verticalSliderThumb(value) {}

    /**
     * Style used by default for Window controls (SA GUI.Window).
     */
    get window() {}

    /**
     * Style used by default for Window controls (SA GUI.Window).
     */
    set window(value) {}

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
     * Try to search for a GUIStyle. This functions returns NULL and does not give an error.
     */
    FindStyle() {}

    /**
     * Get a named GUIStyle.
     */
    GetStyle() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}