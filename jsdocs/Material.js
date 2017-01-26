class Material {

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
     * The main material&#039;s color.
     */
    get color() {}

    /**
     * The main material&#039;s color.
     */
    set color(value) {}

    /**
     * Defines how the material should interact with lightmaps and lightprobes.
     */
    get globalIlluminationFlags() {}

    /**
     * Defines how the material should interact with lightmaps and lightprobes.
     */
    set globalIlluminationFlags(value) {}

    /**
     * The material&#039;s texture.
     */
    get mainTexture() {}

    /**
     * The material&#039;s texture.
     */
    set mainTexture(value) {}

    /**
     * The texture offset of the main texture.
     */
    get mainTextureOffset() {}

    /**
     * The texture offset of the main texture.
     */
    set mainTextureOffset(value) {}

    /**
     * The texture scale of the main texture.
     */
    get mainTextureScale() {}

    /**
     * The texture scale of the main texture.
     */
    set mainTextureScale(value) {}

    /**
     * How many passes are in this material (Read Only).
     */
    get passCount() {}

    /**
     * How many passes are in this material (Read Only).
     */
    set passCount(value) {}

    /**
     * Render queue of this material.
     */
    get renderQueue() {}

    /**
     * Render queue of this material.
     */
    set renderQueue(value) {}

    /**
     * The shader used by the material.
     */
    get shader() {}

    /**
     * The shader used by the material.
     */
    set shader(value) {}

    /**
     * Additional shader keywords set by this material.
     */
    get shaderKeywords() {}

    /**
     * Additional shader keywords set by this material.
     */
    set shaderKeywords(value) {}

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
     * Copy properties from other material into this material.
     */
    CopyPropertiesFromMaterial() {}

    /**
     * Unset a shader keyword.
     */
    DisableKeyword() {}

    /**
     * Set a shader keyword that is enabled by this material.
     */
    EnableKeyword() {}

    /**
     * Returns the index of the pass passName.
     */
    FindPass() {}

    /**
     * Get a named color value.
     */
    GetColor() {}

    /**
     * Get a named color array.
     */
    GetColorArray() {}

    /**
     * Get a named float value.
     */
    GetFloat() {}

    /**
     * Get a named float array.
     */
    GetFloatArray() {}

    /**
     * Get a named integer value.
     */
    GetInt() {}

    /**
     * Get a named matrix value from the shader.
     */
    GetMatrix() {}

    /**
     * Get a named matrix array.
     */
    GetMatrixArray() {}

    /**
     * Returns the name of the shader pass at index pass.
     */
    GetPassName() {}

    /**
     * Get the value of material&#039;s shader tag.
     */
    GetTag() {}

    /**
     * Get a named texture.
     */
    GetTexture() {}

    /**
     * Gets the placement offset of texture propertyName.
     */
    GetTextureOffset() {}

    /**
     * Gets the placement scale of texture propertyName.
     */
    GetTextureScale() {}

    /**
     * Get a named vector value.
     */
    GetVector() {}

    /**
     * Get a named vector array.
     */
    GetVectorArray() {}

    /**
     * Checks if material&#039;s shader has a property of a given name.
     */
    HasProperty() {}

    /**
     * Is the shader keyword enabled on this material?
     */
    IsKeywordEnabled() {}

    /**
     * Interpolate properties between two materials.
     */
    Lerp() {}

    /**
     * Set a ComputeBuffer value.
     */
    SetBuffer() {}

    /**
     * Set a named color value.
     */
    SetColor() {}

    /**
     * Set a color array property.
     */
    SetColorArray() {}

    /**
     * Set a named float value.
     */
    SetFloat() {}

    /**
     * Set a float array property.
     */
    SetFloatArray() {}

    /**
     * Set a named integer value.
     */
    SetInt() {}

    /**
     * Set a named matrix for the shader.
     */
    SetMatrix() {}

    /**
     * Set a matrix array property.
     */
    SetMatrixArray() {}

    /**
     * Sets an override tag/value on the material.
     */
    SetOverrideTag() {}

    /**
     * Activate the given pass for rendering.
     */
    SetPass() {}

    /**
     * Set a named texture.
     */
    SetTexture() {}

    /**
     * Sets the placement offset of texture propertyName.
     */
    SetTextureOffset() {}

    /**
     * Sets the placement scale of texture propertyName.
     */
    SetTextureScale() {}

    /**
     * Set a named vector value.
     */
    SetVector() {}

    /**
     * Set a vector array property.
     */
    SetVectorArray() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}