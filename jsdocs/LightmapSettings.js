class LightmapSettings {
    /**
     * Lightmap array.
     */
    static get lightmaps() {}

    /**
     * Lightmap array.
     */
    static set lightmaps(value) {}

    /**
     * Non-directional, Directional or Directional Specular lightmaps rendering mode.
     */
    static get lightmapsMode() {}

    /**
     * Non-directional, Directional or Directional Specular lightmaps rendering mode.
     */
    static set lightmapsMode(value) {}

    /**
     * Holds all data needed by the light probes.
     */
    static get lightProbes() {}

    /**
     * Holds all data needed by the light probes.
     */
    static set lightProbes(value) {}


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
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}