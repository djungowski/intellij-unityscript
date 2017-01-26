class Graphics {
    /**
     * Currently active color buffer (Read Only).
     */
    static get activeColorBuffer() {}

    /**
     * Currently active color buffer (Read Only).
     */
    static set activeColorBuffer(value) {}

    /**
     * Currently active depth/stencil buffer (Read Only).
     */
    static get activeDepthBuffer() {}

    /**
     * Currently active depth/stencil buffer (Read Only).
     */
    static set activeDepthBuffer(value) {}

    /**
     * Graphics Tier classification for current device.
Changing this value affects any subsequently loaded shaders. Initially this value is auto-detected from the hardware in use.
     */
    static get activeTier() {}

    /**
     * Graphics Tier classification for current device.
Changing this value affects any subsequently loaded shaders. Initially this value is auto-detected from the hardware in use.
     */
    static set activeTier(value) {}


    /**
     * Copies source texture into destination render texture with a shader.
     */
    static Blit() {}

    /**
     * Copies source texture into destination, for multi-tap shader.
     */
    static BlitMultiTap() {}

    /**
     * Clear random write targets for Shader Model 5.0 level pixel shaders.
     */
    static ClearRandomWriteTargets() {}

    /**
     * Copy texture contents.
     */
    static CopyTexture() {}

    /**
     * Draw a mesh.
     */
    static DrawMesh() {}

    /**
     * Draw the same mesh multiple times using GPU instancing.
     */
    static DrawMeshInstanced() {}

    /**
     * Draw a mesh immediately.
     */
    static DrawMeshNow() {}

    /**
     * Draws a fully procedural geometry on the GPU.
     */
    static DrawProcedural() {}

    /**
     * Draws a fully procedural geometry on the GPU.
     */
    static DrawProceduralIndirect() {}

    /**
     * Draw a texture in screen coordinates.
     */
    static DrawTexture() {}

    /**
     * Execute a command buffer.
     */
    static ExecuteCommandBuffer() {}

    /**
     * Set random write target for Shader Model 5.0 level pixel shaders.
     */
    static SetRandomWriteTarget() {}

    /**
     * Sets current render target.
     */
    static SetRenderTarget() {}



}