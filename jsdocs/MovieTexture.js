class MovieTexture {

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
     * Returns the AudioClip belonging to the MovieTexture.
     */
    get audioClip() {}

    /**
     * Returns the AudioClip belonging to the MovieTexture.
     */
    set audioClip(value) {}

    /**
     * The time, in seconds, that the movie takes to play back completely.
     */
    get duration() {}

    /**
     * The time, in seconds, that the movie takes to play back completely.
     */
    set duration(value) {}

    /**
     * Returns whether the movie is playing or not.
     */
    get isPlaying() {}

    /**
     * Returns whether the movie is playing or not.
     */
    set isPlaying(value) {}

    /**
     * If the movie is downloading from a web site, this returns if enough data has been downloaded so playback should be able to start without interruptions.
     */
    get isReadyToPlay() {}

    /**
     * If the movie is downloading from a web site, this returns if enough data has been downloaded so playback should be able to start without interruptions.
     */
    set isReadyToPlay(value) {}

    /**
     * Set this to true to make the movie loop.
     */
    get loop() {}

    /**
     * Set this to true to make the movie loop.
     */
    set loop(value) {}

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
     * Pauses playing the movie.
     */
    Pause() {}

    /**
     * Starts playing the movie.
     */
    Play() {}

    /**
     * Stops playing the movie, and rewinds it to the beginning.
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