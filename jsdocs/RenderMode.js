class RenderMode {


    /**
     * Render at the end of the scene using a 2D Canvas.
     */
    get ScreenSpaceOverlay() {}

    /**
     * Render at the end of the scene using a 2D Canvas.
     */
    set ScreenSpaceOverlay(value) {}

    /**
     * Render using the Camera configured on the Canvas.
     */
    get ScreenSpaceCamera() {}

    /**
     * Render using the Camera configured on the Canvas.
     */
    set ScreenSpaceCamera(value) {}

    /**
     * Render using any Camera in the scene that can render the layer.
     */
    get WorldSpace() {}

    /**
     * Render using any Camera in the scene that can render the layer.
     */
    set WorldSpace(value) {}


}