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
     * Unset a global shader keyword.
     */
    static DisableKeyword() {}

    /**
     * Set a global shader keyword.
     */
    static EnableKeyword() {}

    /**
     * Finds a shader with the given name.
     */
    static Find() {}

    /**
     * Gets a global color property for all shaders previously set using SetGlobalColor.
     */
    static GetGlobalColor() {}

    /**
     * Gets a global float property for all shaders previously set using SetGlobalFloat.
     */
    static GetGlobalFloat() {}

    /**
     * Gets a global float array for all shaders previously set using SetGlobalFloatArray.
     */
    static GetGlobalFloatArray() {}

    /**
     * Gets a global int property for all shaders previously set using SetGlobalInt.
     */
    static GetGlobalInt() {}

    /**
     * Gets a global matrix property for all shaders previously set using SetGlobalMatrix.
     */
    static GetGlobalMatrix() {}

    /**
     * Gets a global matrix array for all shaders previously set using SetGlobalMatrixArray.
     */
    static GetGlobalMatrixArray() {}

    /**
     * Gets a global texture property for all shaders previously set using SetGlobalTexture.
     */
    static GetGlobalTexture() {}

    /**
     * Gets a global vector property for all shaders previously set using SetGlobalVector.
     */
    static GetGlobalVector() {}

    /**
     * Gets a global vector array for all shaders previously set using SetGlobalVectorArray.
     */
    static GetGlobalVectorArray() {}

    /**
     * Is global shader keyword enabled?
     */
    static IsKeywordEnabled() {}

    /**
     * Gets unique identifier for a shader property name.
     */
    static PropertyToID() {}

    /**
     * Sets a global compute buffer property for all shaders.
     */
    static SetGlobalBuffer() {}

    /**
     * Sets a global color property for all shaders.
     */
    static SetGlobalColor() {}

    /**
     * Sets a global float property for all shaders.
     */
    static SetGlobalFloat() {}

    /**
     * Sets a global float array property for all shaders.
     */
    static SetGlobalFloatArray() {}

    /**
     * Sets a global int property for all shaders.
     */
    static SetGlobalInt() {}

    /**
     * Sets a global matrix property for all shaders.
     */
    static SetGlobalMatrix() {}

    /**
     * Sets a global matrix array property for all shaders.
     */
    static SetGlobalMatrixArray() {}

    /**
     * Sets a global texture property for all shaders.
     */
    static SetGlobalTexture() {}

    /**
     * Sets a global vector property for all shaders.
     */
    static SetGlobalVector() {}

    /**
     * Sets a global vector array property for all shaders.
     */
    static SetGlobalVectorArray() {}

    /**
     * Fully load all shaders to prevent future performance hiccups.
     */
    static WarmupAllShaders() {}

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