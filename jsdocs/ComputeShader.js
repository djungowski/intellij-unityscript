class ComputeShader {

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
     * Execute a compute shader.
     */
    Dispatch() {}

    /**
     * Execute a compute shader.
     */
    DispatchIndirect() {}

    /**
     * Find ComputeShader kernel index.
     */
    FindKernel() {}

    /**
     * Get kernel thread group sizes.
     */
    GetKernelThreadGroupSizes() {}

    /**
     * Checks whether a shader contains a given kernel.
     */
    HasKernel() {}

    /**
     * Set a bool parameter.
     */
    SetBool() {}

    /**
     * Sets an input or output compute buffer.
     */
    SetBuffer() {}

    /**
     * Set a float parameter.
     */
    SetFloat() {}

    /**
     * Set multiple consecutive float parameters at once.
     */
    SetFloats() {}

    /**
     * Set an integer parameter.
     */
    SetInt() {}

    /**
     * Set multiple consecutive integer parameters at once.
     */
    SetInts() {}

    /**
     * Set a texture parameter.
     */
    SetTexture() {}

    /**
     * Set a texture parameter from a global texture property.
     */
    SetTextureFromGlobal() {}

    /**
     * Set a vector parameter.
     */
    SetVector() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}