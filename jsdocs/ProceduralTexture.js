class ProceduralTexture {

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
     * Check whether the ProceduralMaterial that generates this ProceduralTexture is set to an output format with an alpha channel.
     */
    get hasAlpha() {}

    /**
     * Check whether the ProceduralMaterial that generates this ProceduralTexture is set to an output format with an alpha channel.
     */
    set hasAlpha(value) {}

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
     * Grab pixel values from a ProceduralTexture.

     */
    GetPixels32() {}

    /**
     * The output type of this ProceduralTexture.
     */
    GetProceduralOutputType() {}

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