class Shader {
    /**
     * Shader LOD level for all shaders.
     */
    static get globalMaximumLOD() {}

    /**
     * Shader LOD level for all shaders.
     */
    static set globalMaximumLOD(value) {}


    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * Can this shader run on the end-users graphics card? (Read Only)
     */
    get isSupported() {}

    /**
     * Can this shader run on the end-users graphics card? (Read Only)
     */
    set isSupported(value) {}

    /**
     * Shader LOD level for this shader.
     */
    get maximumLOD() {}

    /**
     * Shader LOD level for this shader.
     */
    set maximumLOD(value) {}

    /**
     * Render queue of this shader. (Read Only)
     */
    get renderQueue() {}

    /**
     * Render queue of this shader. (Read Only)
     */
    set renderQueue(value) {}

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