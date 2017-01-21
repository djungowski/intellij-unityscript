class Tool {


    /**
     * The view tool is active - Use Tools.viewTool to find out which view tool we&#039;re talking about.
     */
    get View() {}

    /**
     * The view tool is active - Use Tools.viewTool to find out which view tool we&#039;re talking about.
     */
    set View(value) {}

    /**
     * The move tool is active.
     */
    get Move() {}

    /**
     * The move tool is active.
     */
    set Move(value) {}

    /**
     * The rotate tool is active.
     */
    get Rotate() {}

    /**
     * The rotate tool is active.
     */
    set Rotate(value) {}

    /**
     * The scale tool is active.
     */
    get Scale() {}

    /**
     * The scale tool is active.
     */
    set Scale(value) {}

    /**
     * The rect tool is active.
     */
    get Rect() {}

    /**
     * The rect tool is active.
     */
    set Rect(value) {}

    /**
     * No tool is active. Set this to implement your own in-inspector toolbar (like the terrain editor does).
     */
    get None() {}

    /**
     * No tool is active. Set this to implement your own in-inspector toolbar (like the terrain editor does).
     */
    set None(value) {}


}