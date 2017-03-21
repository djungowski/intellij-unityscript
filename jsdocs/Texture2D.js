class Texture2D {
    /**
     * Get a small texture with all black pixels.
     */
    static get blackTexture() {}

    /**
     * Get a small texture with all black pixels.
     */
    static set blackTexture(value) {}

    /**
     * Get a small texture with all white pixels.
     */
    static get whiteTexture() {}

    /**
     * Get a small texture with all white pixels.
     */
    static set whiteTexture(value) {}


    /**
     * Creates Unity Texture out of externally created native texture object.
     */
    static CreateExternalTexture() {}

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}

    /**
     * Sets Anisotropic limits.
     */
    static SetGlobalAnisotropicFilteringLimits() {}


    /**
     * The format of the pixel data in the texture (Read Only).
     */
    get format() {}

    /**
     * The format of the pixel data in the texture (Read Only).
     */
    set format(value) {}

    /**
     * How many mipmap levels are in this texture (Read Only).
     */
    get mipmapCount() {}

    /**
     * How many mipmap levels are in this texture (Read Only).
     */
    set mipmapCount(value) {}

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
     * Actually apply all previous SetPixel and SetPixels changes.
     */
    Apply() {}

    /**
     * Compress texture into DXT format.
     */
    Compress() {}

    /**
     * Encodes this texture into JPG format.
     */
    EncodeToJPG() {}

    /**
     * Encodes this texture into PNG format.
     */
    EncodeToPNG() {}

    /**
     * Returns pixel color at coordinates (x, y).
     */
    GetPixel() {}

    /**
     * Returns filtered pixel color at normalized coordinates (u, v).
     */
    GetPixelBilinear() {}

    /**
     * Get the pixel colors from the texture.
     */
    GetPixels() {}

    /**
     * Get a block of pixel colors in Color32 format.
     */
    GetPixels32() {}

    /**
     * Get raw data from a texture.
     */
    GetRawTextureData() {}

    /**
     * Loads PNG/JPG image byte array into a texture.
     */
    LoadImage() {}

    /**
     * Fills texture pixels with raw preformatted data.
     */
    LoadRawTextureData() {}

    /**
     * Packs multiple Textures into a texture atlas.
     */
    PackTextures() {}

    /**
     * Read pixels from screen into the saved texture data.
     */
    ReadPixels() {}

    /**
     * Resizes the texture.
     */
    Resize() {}

    /**
     * Sets pixel color at coordinates (x,y).
     */
    SetPixel() {}

    /**
     * Set a block of pixel colors.
     */
    SetPixels() {}

    /**
     * Set a block of pixel colors.
     */
    SetPixels32() {}

    /**
     * Updates Unity texture to use different native texture object.
     */
    UpdateExternalTexture() {}

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