class EventType {


    /**
     * Mouse button was pressed.
     */
    get MouseDown() {}

    /**
     * Mouse button was pressed.
     */
    set MouseDown(value) {}

    /**
     * Mouse button was released.
     */
    get MouseUp() {}

    /**
     * Mouse button was released.
     */
    set MouseUp(value) {}

    /**
     * Mouse was moved (editor views only).
     */
    get MouseMove() {}

    /**
     * Mouse was moved (editor views only).
     */
    set MouseMove(value) {}

    /**
     * Mouse was dragged.
     */
    get MouseDrag() {}

    /**
     * Mouse was dragged.
     */
    set MouseDrag(value) {}

    /**
     * A keyboard key was pressed.
     */
    get KeyDown() {}

    /**
     * A keyboard key was pressed.
     */
    set KeyDown(value) {}

    /**
     * A keyboard key was released.
     */
    get KeyUp() {}

    /**
     * A keyboard key was released.
     */
    set KeyUp(value) {}

    /**
     * The scroll wheel was moved.
     */
    get ScrollWheel() {}

    /**
     * The scroll wheel was moved.
     */
    set ScrollWheel(value) {}

    /**
     * A repaint event. One is sent every frame.
     */
    get Repaint() {}

    /**
     * A repaint event. One is sent every frame.
     */
    set Repaint(value) {}

    /**
     * A layout event.
     */
    get Layout() {}

    /**
     * A layout event.
     */
    set Layout(value) {}

    /**
     * Editor only: drag &amp; drop operation updated.
     */
    get DragUpdated() {}

    /**
     * Editor only: drag &amp; drop operation updated.
     */
    set DragUpdated(value) {}

    /**
     * Editor only: drag &amp; drop operation performed.
     */
    get DragPerform() {}

    /**
     * Editor only: drag &amp; drop operation performed.
     */
    set DragPerform(value) {}

    /**
     * Editor only: drag &amp; drop operation exited.
     */
    get DragExited() {}

    /**
     * Editor only: drag &amp; drop operation exited.
     */
    set DragExited(value) {}

    /**
     * 
          Event should be ignored.
     */
    get Ignore() {}

    /**
     * 
          Event should be ignored.
     */
    set Ignore(value) {}

    /**
     * Already processed event.
     */
    get Used() {}

    /**
     * Already processed event.
     */
    set Used(value) {}

    /**
     * Validates a special command (e.g. copy &amp; paste).
     */
    get ValidateCommand() {}

    /**
     * Validates a special command (e.g. copy &amp; paste).
     */
    set ValidateCommand(value) {}

    /**
     * Execute a special command (eg. copy &amp; paste).
     */
    get ExecuteCommand() {}

    /**
     * Execute a special command (eg. copy &amp; paste).
     */
    set ExecuteCommand(value) {}

    /**
     * User has right-clicked (or control-clicked on the mac).
     */
    get ContextClick() {}

    /**
     * User has right-clicked (or control-clicked on the mac).
     */
    set ContextClick(value) {}


}