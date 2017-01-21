class RenderTargetSetup {


    /**
     * Color Buffers to set.
     */
    get color() {}

    /**
     * Color Buffers to set.
     */
    set color(value) {}

    /**
     * Load Actions for Color Buffers. It will override any actions set on RenderBuffers themselves.
     */
    get colorLoad() {}

    /**
     * Load Actions for Color Buffers. It will override any actions set on RenderBuffers themselves.
     */
    set colorLoad(value) {}

    /**
     * Store Actions for Color Buffers. It will override any actions set on RenderBuffers themselves.
     */
    get colorStore() {}

    /**
     * Store Actions for Color Buffers. It will override any actions set on RenderBuffers themselves.
     */
    set colorStore(value) {}

    /**
     * Cubemap face to render to.
     */
    get cubemapFace() {}

    /**
     * Cubemap face to render to.
     */
    set cubemapFace(value) {}

    /**
     * Depth Buffer to set.
     */
    get depth() {}

    /**
     * Depth Buffer to set.
     */
    set depth(value) {}

    /**
     * Load Action for Depth Buffer. It will override any actions set on RenderBuffer itself.
     */
    get depthLoad() {}

    /**
     * Load Action for Depth Buffer. It will override any actions set on RenderBuffer itself.
     */
    set depthLoad(value) {}

    /**
     * Slice of a Texture3D or Texture2DArray to set as a render target.
     */
    get depthSlice() {}

    /**
     * Slice of a Texture3D or Texture2DArray to set as a render target.
     */
    set depthSlice(value) {}

    /**
     * Store Actions for Depth Buffer. It will override any actions set on RenderBuffer itself.
     */
    get depthStore() {}

    /**
     * Store Actions for Depth Buffer. It will override any actions set on RenderBuffer itself.
     */
    set depthStore(value) {}

    /**
     * Mip Level to render to.
     */
    get mipLevel() {}

    /**
     * Mip Level to render to.
     */
    set mipLevel(value) {}


}