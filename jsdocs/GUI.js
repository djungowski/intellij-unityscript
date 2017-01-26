class GUI {
    /**
     * Global tinting color for all background elements rendered by the GUI.
     */
    static get backgroundColor() {}

    /**
     * Global tinting color for all background elements rendered by the GUI.
     */
    static set backgroundColor(value) {}

    /**
     * Returns true if any controls changed the value of the input data.
     */
    static get changed() {}

    /**
     * Returns true if any controls changed the value of the input data.
     */
    static set changed(value) {}

    /**
     * Global tinting color for the GUI.
     */
    static get color() {}

    /**
     * Global tinting color for the GUI.
     */
    static set color(value) {}

    /**
     * Tinting color for all text rendered by the GUI.
     */
    static get contentColor() {}

    /**
     * Tinting color for all text rendered by the GUI.
     */
    static set contentColor(value) {}

    /**
     * The sorting depth of the currently executing GUI behaviour.
     */
    static get depth() {}

    /**
     * The sorting depth of the currently executing GUI behaviour.
     */
    static set depth(value) {}

    /**
     * Is the GUI enabled?
     */
    static get enabled() {}

    /**
     * Is the GUI enabled?
     */
    static set enabled(value) {}

    /**
     * The GUI transform matrix.
     */
    static get matrix() {}

    /**
     * The GUI transform matrix.
     */
    static set matrix(value) {}

    /**
     * The global skin to use.
     */
    static get skin() {}

    /**
     * The global skin to use.
     */
    static set skin(value) {}

    /**
     * The tooltip of the control the mouse is currently over, or which has keyboard focus. (Read Only).
     */
    static get tooltip() {}

    /**
     * The tooltip of the control the mouse is currently over, or which has keyboard focus. (Read Only).
     */
    static set tooltip(value) {}


    /**
     * Begin a group. Must be matched with a call to EndGroup.
     */
    static BeginGroup() {}

    /**
     * Begin a scrolling view inside your GUI.
     */
    static BeginScrollView() {}

    /**
     * Create a Box on the GUI Layer. A Box can contain text, an image, or a combination of these along with an optional tooltip, through using a GUIContent parameter. You may also use a GUIStyle to adjust the layout of items in a box, text colour and other properties.
     */
    static Box() {}

    /**
     * Bring a specific window to back of the floating windows.
     */
    static BringWindowToBack() {}

    /**
     * Bring a specific window to front of the floating windows.
     */
    static BringWindowToFront() {}

    /**
     * Make a single press button. The user clicks them and something happens immediately.
     */
    static Button() {}

    /**
     * Make a window draggable.
     */
    static DragWindow() {}

    /**
     * Draw a texture within a rectangle.
     */
    static DrawTexture() {}

    /**
     * Draw a texture within a rectangle with the given texture coordinates. Use this function for clipping or tiling the image within the given rectangle.
     */
    static DrawTextureWithTexCoords() {}

    /**
     * End a group.
     */
    static EndGroup() {}

    /**
     * Ends a scrollview started with a call to BeginScrollView.
     */
    static EndScrollView() {}

    /**
     * Move keyboard focus to a named control.
     */
    static FocusControl() {}

    /**
     * Make a window become the active window.
     */
    static FocusWindow() {}

    /**
     * Get the name of named control that has focus.
     */
    static GetNameOfFocusedControl() {}

    /**
     * Make a horizontal scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
     */
    static HorizontalScrollbar() {}

    /**
     * A horizontal slider the user can drag to change a value between a min and a max.
     */
    static HorizontalSlider() {}

    /**
     * Make a text or texture label on screen.
     */
    static Label() {}

    /**
     * Show a Modal Window.
     */
    static ModalWindow() {}

    /**
     * Make a text field where the user can enter a password.
     */
    static PasswordField() {}

    /**
     * Make a button that is active as long as the user holds it down.
     */
    static RepeatButton() {}

    /**
     * Scrolls all enclosing scrollviews so they try to make position visible.
     */
    static ScrollTo() {}

    /**
     * Make a grid of buttons.
     */
    static SelectionGrid() {}

    /**
     * Set the name of the next control.
     */
    static SetNextControlName() {}

    /**
     * Make a Multi-line text area where the user can edit a string.
     */
    static TextArea() {}

    /**
     * Make a single-line text field where the user can edit a string.
     */
    static TextField() {}

    /**
     * Make an on/off toggle button.
     */
    static Toggle() {}

    /**
     * Make a toolbar.
     */
    static Toolbar() {}

    /**
     * Remove focus from all windows.
     */
    static UnfocusWindow() {}

    /**
     * Make a vertical scrollbar. Scrollbars are what you use to scroll through a document. Most likely, you want to use scrollViews instead.
     */
    static VerticalScrollbar() {}

    /**
     * A vertical slider the user can drag to change a value between a min and a max.
     */
    static VerticalSlider() {}

    /**
     * Make a popup window.
     */
    static Window() {}



}