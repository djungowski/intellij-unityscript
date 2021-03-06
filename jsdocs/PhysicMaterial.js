class PhysicMaterial {

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
     * Determines how the bounciness is combined.
     */
    get bounceCombine() {}

    /**
     * Determines how the bounciness is combined.
     */
    set bounceCombine(value) {}

    /**
     * How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
     */
    get bounciness() {}

    /**
     * How bouncy is the surface? A value of 0 will not bounce. A value of 1 will bounce without any loss of energy.
     */
    set bounciness(value) {}

    /**
     * The friction used when already moving.  This value has to be between 0 and 1.
     */
    get dynamicFriction() {}

    /**
     * The friction used when already moving.  This value has to be between 0 and 1.
     */
    set dynamicFriction(value) {}

    /**
     * Determines how the friction is combined.
     */
    get frictionCombine() {}

    /**
     * Determines how the friction is combined.
     */
    set frictionCombine(value) {}

    /**
     * The friction coefficient used when an object is lying on a surface.
     */
    get staticFriction() {}

    /**
     * The friction coefficient used when an object is lying on a surface.
     */
    set staticFriction(value) {}

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