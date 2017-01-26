class WebCamTexture {
    /**
     * Return a list of available devices.
     */
    static get devices() {}

    /**
     * Return a list of available devices.
     */
    static set devices(value) {}


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
     * Set this to specify the name of the device to use.
     */
    get deviceName() {}

    /**
     * Set this to specify the name of the device to use.
     */
    set deviceName(value) {}

    /**
     * Did the video buffer update this frame?
     */
    get didUpdateThisFrame() {}

    /**
     * Did the video buffer update this frame?
     */
    set didUpdateThisFrame(value) {}

    /**
     * Returns if the camera is currently playing.
     */
    get isPlaying() {}

    /**
     * Returns if the camera is currently playing.
     */
    set isPlaying(value) {}

    /**
     * Set the requested frame rate of the camera device (in frames per second).
     */
    get requestedFPS() {}

    /**
     * Set the requested frame rate of the camera device (in frames per second).
     */
    set requestedFPS(value) {}

    /**
     * Set the requested height of the camera device.
     */
    get requestedHeight() {}

    /**
     * Set the requested height of the camera device.
     */
    set requestedHeight(value) {}

    /**
     * Set the requested width of the camera device.
     */
    get requestedWidth() {}

    /**
     * Set the requested width of the camera device.
     */
    set requestedWidth(value) {}

    /**
     * Returns an clockwise angle (in degrees), which can be used to rotate a polygon so camera contents are shown in correct orientation.
     */
    get videoRotationAngle() {}

    /**
     * Returns an clockwise angle (in degrees), which can be used to rotate a polygon so camera contents are shown in correct orientation.
     */
    set videoRotationAngle(value) {}

    /**
     * Returns if the texture image is vertically flipped.
     */
    get videoVerticallyMirrored() {}

    /**
     * Returns if the texture image is vertically flipped.
     */
    set videoVerticallyMirrored(value) {}

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
     * Returns pixel color at coordinates (x, y).
     */
    GetPixel() {}

    /**
     * Get a block of pixel colors.
     */
    GetPixels() {}

    /**
     * Returns the pixels data in raw format.
     */
    GetPixels32() {}

    /**
     * Pauses the camera.
     */
    Pause() {}

    /**
     * Starts the camera.
     */
    Play() {}

    /**
     * Stops the camera.
     */
    Stop() {}

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