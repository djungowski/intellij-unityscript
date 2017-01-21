class RenderTexture {
    /**
     * Currently active render texture.
     */
    static get active() {}

    /**
     * Currently active render texture.
     */
    static set active(value) {}


    /**
     * Actually creates the RenderTexture.
     */
    static Create() {}

    /**
     * Discards the contents of the RenderTexture.
     */
    static DiscardContents() {}

    /**
     * Generate mipmap levels of a render texture.
     */
    static GenerateMips() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the depth buffer resource.
     */
    static GetNativeDepthBufferPtr() {}

    /**
     * Is the render texture actually created?
     */
    static IsCreated() {}

    /**
     * Indicate that there&#039;s a RenderTexture restore operation expected.
     */
    static MarkRestoreExpected() {}

    /**
     * Releases the RenderTexture.
     */
    static Release() {}

    /**
     * Assigns this RenderTexture as a global shader property named propertyName.
     */
    static SetGlobalShaderProperty() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the texture resource.
     */
    static GetNativeTexturePtr() {}

    /**
     * Actually creates the RenderTexture.
     */
    static Create() {}

    /**
     * Discards the contents of the RenderTexture.
     */
    static DiscardContents() {}

    /**
     * Generate mipmap levels of a render texture.
     */
    static GenerateMips() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the depth buffer resource.
     */
    static GetNativeDepthBufferPtr() {}

    /**
     * Is the render texture actually created?
     */
    static IsCreated() {}

    /**
     * Indicate that there&#039;s a RenderTexture restore operation expected.
     */
    static MarkRestoreExpected() {}

    /**
     * Releases the RenderTexture.
     */
    static Release() {}

    /**
     * Assigns this RenderTexture as a global shader property named propertyName.
     */
    static SetGlobalShaderProperty() {}


    /**
     * The antialiasing level for the RenderTexture.
     */
    get antiAliasing() {}

    /**
     * The antialiasing level for the RenderTexture.
     */
    set antiAliasing(value) {}

    /**
     * Mipmap levels are generated automatically when this flag is set.
     */
    get autoGenerateMips() {}

    /**
     * Mipmap levels are generated automatically when this flag is set.
     */
    set autoGenerateMips(value) {}

    /**
     * Color buffer of the render texture (Read Only).
     */
    get colorBuffer() {}

    /**
     * Color buffer of the render texture (Read Only).
     */
    set colorBuffer(value) {}

    /**
     * The precision of the render texture&#039;s depth buffer in bits (0, 16, 24/32 are supported).
     */
    get depth() {}

    /**
     * The precision of the render texture&#039;s depth buffer in bits (0, 16, 24/32 are supported).
     */
    set depth(value) {}

    /**
     * Depth/stencil buffer of the render texture (Read Only).
     */
    get depthBuffer() {}

    /**
     * Depth/stencil buffer of the render texture (Read Only).
     */
    set depthBuffer(value) {}

    /**
     * Dimensionality (type) of the render texture.
     */
    get dimension() {}

    /**
     * Dimensionality (type) of the render texture.
     */
    set dimension(value) {}

    /**
     * Enable random access write into this render texture on Shader Model 5.0 level shaders.
     */
    get enableRandomWrite() {}

    /**
     * Enable random access write into this render texture on Shader Model 5.0 level shaders.
     */
    set enableRandomWrite(value) {}

    /**
     * The color format of the render texture.
     */
    get format() {}

    /**
     * The color format of the render texture.
     */
    set format(value) {}

    /**
     * The height of the render texture in pixels.
     */
    get height() {}

    /**
     * The height of the render texture in pixels.
     */
    set height(value) {}

    /**
     * Does this render texture use sRGB read/write conversions (Read Only).
     */
    get sRGB() {}

    /**
     * Does this render texture use sRGB read/write conversions (Read Only).
     */
    set sRGB(value) {}

    /**
     * Render texture has mipmaps when this flag is set.
     */
    get useMipMap() {}

    /**
     * Render texture has mipmaps when this flag is set.
     */
    set useMipMap(value) {}

    /**
     * Volume extent of a 3D render texture.
     */
    get volumeDepth() {}

    /**
     * Volume extent of a 3D render texture.
     */
    set volumeDepth(value) {}

    /**
     * The width of the render texture in pixels.
     */
    get width() {}

    /**
     * The width of the render texture in pixels.
     */
    set width(value) {}

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
     * Anisotropic filtering level of the texture.
     */
    get anisoLevel() {}

    /**
     * Anisotropic filtering level of the texture.
     */
    set anisoLevel(value) {}

    /**
     * Dimensionality (type) of the texture (Read Only).
     */
    get dimension() {}

    /**
     * Dimensionality (type) of the texture (Read Only).
     */
    set dimension(value) {}

    /**
     * Filtering mode of the texture.
     */
    get filterMode() {}

    /**
     * Filtering mode of the texture.
     */
    set filterMode(value) {}

    /**
     * Height of the texture in pixels. (Read Only)
     */
    get height() {}

    /**
     * Height of the texture in pixels. (Read Only)
     */
    set height(value) {}

    /**
     * Mip map bias of the texture.
     */
    get mipMapBias() {}

    /**
     * Mip map bias of the texture.
     */
    set mipMapBias(value) {}

    /**
     * Width of the texture in pixels. (Read Only)
     */
    get width() {}

    /**
     * Width of the texture in pixels. (Read Only)
     */
    set width(value) {}

    /**
     * Wrap mode (Repeat or Clamp) of the texture.
     */
    get wrapMode() {}

    /**
     * Wrap mode (Repeat or Clamp) of the texture.
     */
    set wrapMode(value) {}


    /**
     * Actually creates the RenderTexture.
     */
    Create() {}

    /**
     * Discards the contents of the RenderTexture.
     */
    DiscardContents() {}

    /**
     * Generate mipmap levels of a render texture.
     */
    GenerateMips() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the depth buffer resource.
     */
    GetNativeDepthBufferPtr() {}

    /**
     * Is the render texture actually created?
     */
    IsCreated() {}

    /**
     * Indicate that there&#039;s a RenderTexture restore operation expected.
     */
    MarkRestoreExpected() {}

    /**
     * Releases the RenderTexture.
     */
    Release() {}

    /**
     * Assigns this RenderTexture as a global shader property named propertyName.
     */
    SetGlobalShaderProperty() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

    /**
     * Retrieve a native (underlying graphics API) pointer to the texture resource.
     */
    GetNativeTexturePtr() {}

}