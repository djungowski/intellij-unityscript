class GL {
    /**
     * Select whether to invert the backface culling (true) or not (false).
     */
    static get invertCulling() {}

    /**
     * Select whether to invert the backface culling (true) or not (false).
     */
    static set invertCulling(value) {}

    /**
     * Mode for Begin: draw lines.
     */
    static get LINES() {}

    /**
     * Mode for Begin: draw lines.
     */
    static set LINES(value) {}

    /**
     * The current modelview matrix.
     */
    static get modelview() {}

    /**
     * The current modelview matrix.
     */
    static set modelview(value) {}

    /**
     * Mode for Begin: draw quads.
     */
    static get QUADS() {}

    /**
     * Mode for Begin: draw quads.
     */
    static set QUADS(value) {}

    /**
     * Controls whether Linear-to-sRGB color conversion is performed while rendering.
     */
    static get sRGBWrite() {}

    /**
     * Controls whether Linear-to-sRGB color conversion is performed while rendering.
     */
    static set sRGBWrite(value) {}

    /**
     * Mode for Begin: draw triangle strip.
     */
    static get TRIANGLE_STRIP() {}

    /**
     * Mode for Begin: draw triangle strip.
     */
    static set TRIANGLE_STRIP(value) {}

    /**
     * Mode for Begin: draw triangles.
     */
    static get TRIANGLES() {}

    /**
     * Mode for Begin: draw triangles.
     */
    static set TRIANGLES(value) {}

    /**
     * Should rendering be done in wireframe?
     */
    static get wireframe() {}

    /**
     * Should rendering be done in wireframe?
     */
    static set wireframe(value) {}


    /**
     * Begin drawing 3D primitives.
     */
    static Begin() {}

    /**
     * Clear the current render buffer.
     */
    static Clear() {}

    /**
     * Clear the current render buffer with camera&#039;s skybox.
     */
    static ClearWithSkybox() {}

    /**
     * Sets current vertex color.
     */
    static Color() {}

    /**
     * End drawing 3D primitives.
     */
    static End() {}

    /**
     * Sends queued-up commands in the driver&#039;s command buffer to the GPU.
     */
    static Flush() {}

    /**
     * Compute GPU projection matrix from camera&#039;s projection matrix.
     */
    static GetGPUProjectionMatrix() {}

    /**
     * Invalidate the internally cached render state.
     */
    static InvalidateState() {}

    /**
     * Send a user-defined event to a native code plugin.
     */
    static IssuePluginEvent() {}

    /**
     * Load the identity matrix to the current modelview matrix.
     */
    static LoadIdentity() {}

    /**
     * Helper function to set up an ortho perspective transform.
     */
    static LoadOrtho() {}

    /**
     * Setup a matrix for pixel-correct rendering.
     */
    static LoadPixelMatrix() {}

    /**
     * Load an arbitrary matrix to the current projection matrix.
     */
    static LoadProjectionMatrix() {}

    /**
     * Sets current texture coordinate (v.x,v.y,v.z) to the actual texture unit.
     */
    static MultiTexCoord() {}

    /**
     * Sets current texture coordinate (x,y) for the actual texture unit.
     */
    static MultiTexCoord2() {}

    /**
     * Sets current texture coordinate (x,y,z) to the actual texture unit.
     */
    static MultiTexCoord3() {}

    /**
     * Multiplies the current modelview matrix with the one specified.
     */
    static MultMatrix() {}

    /**
     * Restores both projection and modelview matrices off the top of the matrix stack.
     */
    static PopMatrix() {}

    /**
     * Saves both projection and modelview matrices to the matrix stack.
     */
    static PushMatrix() {}

    /**
     * Resolves the render target for subsequent operations sampling from it.
     */
    static RenderTargetBarrier() {}

    /**
     * Sets current texture coordinate (v.x,v.y,v.z) for all texture units.
     */
    static TexCoord() {}

    /**
     * Sets current texture coordinate (x,y) for all texture units.
     */
    static TexCoord2() {}

    /**
     * Sets current texture coordinate (x,y,z) for all texture units.
     */
    static TexCoord3() {}

    /**
     * Submit a vertex.
     */
    static Vertex() {}

    /**
     * Submit a vertex.
     */
    static Vertex3() {}

    /**
     * Set the rendering viewport.
     */
    static Viewport() {}



}