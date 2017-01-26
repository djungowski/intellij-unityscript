class Display {
    /**
     * The list of currently connected Displays. Contains at least one (main) display.
     */
    static get displays() {}

    /**
     * The list of currently connected Displays. Contains at least one (main) display.
     */
    static set displays(value) {}

    /**
     * Main Display.
     */
    static get main() {}

    /**
     * Main Display.
     */
    static set main(value) {}


    /**
     * Query relative mouse coordinates.
     */
    static RelativeMouseAt() {}


    /**
     * Color RenderBuffer.
     */
    get colorBuffer() {}

    /**
     * Color RenderBuffer.
     */
    set colorBuffer(value) {}

    /**
     * Depth RenderBuffer.
     */
    get depthBuffer() {}

    /**
     * Depth RenderBuffer.
     */
    set depthBuffer(value) {}

    /**
     * Vertical resolution that the display is rendering at.
     */
    get renderingHeight() {}

    /**
     * Vertical resolution that the display is rendering at.
     */
    set renderingHeight(value) {}

    /**
     * Horizontal resolution that the display is rendering at.
     */
    get renderingWidth() {}

    /**
     * Horizontal resolution that the display is rendering at.
     */
    set renderingWidth(value) {}

    /**
     * Vertical native display resolution.
     */
    get systemHeight() {}

    /**
     * Vertical native display resolution.
     */
    set systemHeight(value) {}

    /**
     * Horizontal native display resolution.
     */
    get systemWidth() {}

    /**
     * Horizontal native display resolution.
     */
    set systemWidth(value) {}


    /**
     * Activate an external display. Eg. Secondary Monitors connected to the System.
     */
    Activate() {}

    /**
     * Set rendering size and position on screen (Windows only).
     */
    SetParams() {}

    /**
     * Sets rendering resolution for the display.
     */
    SetRenderingResolution() {}

}