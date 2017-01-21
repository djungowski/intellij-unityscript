class GUIStyleState {


    /**
     * The background image used by GUI elements in this given state.
     */
    get background() {}

    /**
     * The background image used by GUI elements in this given state.
     */
    set background(value) {}

    /**
     * Background images used by this state when on a high-resolution screen. It should either be left empty, or contain a single image that is exactly twice the resolution of background. This is only used by the editor. The field is not copied to player data, and is not accessible from player code.
     */
    get scaledBackgrounds() {}

    /**
     * Background images used by this state when on a high-resolution screen. It should either be left empty, or contain a single image that is exactly twice the resolution of background. This is only used by the editor. The field is not copied to player data, and is not accessible from player code.
     */
    set scaledBackgrounds(value) {}

    /**
     * The text color used by GUI elements in this state.
     */
    get textColor() {}

    /**
     * The text color used by GUI elements in this state.
     */
    set textColor(value) {}


}