class ProceduralMaterial {
    /**
     * Check if ProceduralMaterials are supported on the current platform.
     */
    static get isSupported() {}

    /**
     * Check if ProceduralMaterials are supported on the current platform.
     */
    static set isSupported(value) {}

    /**
     * Used to specify the Substance engine CPU usage.
     */
    static get substanceProcessorUsage() {}

    /**
     * Used to specify the Substance engine CPU usage.
     */
    static set substanceProcessorUsage(value) {}


    /**
     * Discard all the queued ProceduralMaterial rendering operations that have not started yet.
     */
    static StopRebuilds() {}

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
     * Set or get the update rate in millisecond of the animated substance.
     */
    get animationUpdateRate() {}

    /**
     * Set or get the update rate in millisecond of the animated substance.
     */
    set animationUpdateRate(value) {}

    /**
     * Set or get the Procedural cache budget.
     */
    get cacheSize() {}

    /**
     * Set or get the Procedural cache budget.
     */
    set cacheSize(value) {}

    /**
     * Indicates whether cached data is available for this ProceduralMaterial&#039;s textures (only relevant for Cache and DoNothingAndCache loading behaviors).
     */
    get isCachedDataAvailable() {}

    /**
     * Indicates whether cached data is available for this ProceduralMaterial&#039;s textures (only relevant for Cache and DoNothingAndCache loading behaviors).
     */
    set isCachedDataAvailable(value) {}

    /**
     * Returns true if FreezeAndReleaseSourceData was called on this ProceduralMaterial.
     */
    get isFrozen() {}

    /**
     * Returns true if FreezeAndReleaseSourceData was called on this ProceduralMaterial.
     */
    set isFrozen(value) {}

    /**
     * Should the ProceduralMaterial be generated at load time?
     */
    get isLoadTimeGenerated() {}

    /**
     * Should the ProceduralMaterial be generated at load time?
     */
    set isLoadTimeGenerated(value) {}

    /**
     * Check if the ProceduralTextures from this ProceduralMaterial are currently being rebuilt.
     */
    get isProcessing() {}

    /**
     * Check if the ProceduralTextures from this ProceduralMaterial are currently being rebuilt.
     */
    set isProcessing(value) {}

    /**
     * Set or get the &quot;Readable&quot; flag for a ProceduralMaterial.
     */
    get isReadable() {}

    /**
     * Set or get the &quot;Readable&quot; flag for a ProceduralMaterial.
     */
    set isReadable(value) {}

    /**
     * Get ProceduralMaterial loading behavior.
     */
    get loadingBehavior() {}

    /**
     * Get ProceduralMaterial loading behavior.
     */
    set loadingBehavior(value) {}

    /**
     * Set or get an XML string of &quot;input/value&quot; pairs (setting the preset rebuilds the textures).
     */
    get preset() {}

    /**
     * Set or get an XML string of &quot;input/value&quot; pairs (setting the preset rebuilds the textures).
     */
    set preset(value) {}

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
     * Specifies if a named ProceduralProperty should be cached for efficient runtime tweaking.
     */
    CacheProceduralProperty() {}

    /**
     * Clear the Procedural cache.
     */
    ClearCache() {}

    /**
     * Render a ProceduralMaterial immutable and release the underlying data to decrease the memory footprint.
     */
    FreezeAndReleaseSourceData() {}

    /**
     * This allows to get a reference to a ProceduralTexture generated by a ProceduralMaterial using its name.
     */
    GetGeneratedTexture() {}

    /**
     * Get generated textures.
     */
    GetGeneratedTextures() {}

    /**
     * Get a named Procedural boolean property.
     */
    GetProceduralBoolean() {}

    /**
     * Get a named Procedural color property.
     */
    GetProceduralColor() {}

    /**
     * Get a named Procedural enum property.
     */
    GetProceduralEnum() {}

    /**
     * Get a named Procedural float property.
     */
    GetProceduralFloat() {}

    /**
     * Get an array of descriptions of all the ProceduralProperties this ProceduralMaterial has.
     */
    GetProceduralPropertyDescriptions() {}

    /**
     * Get a named Procedural texture property.
     */
    GetProceduralTexture() {}

    /**
     * Get a named Procedural vector property.
     */
    GetProceduralVector() {}

    /**
     * Checks if the ProceduralMaterial has a ProceduralProperty of a given name.
     */
    HasProceduralProperty() {}

    /**
     * Checks if a named ProceduralProperty is cached for efficient runtime tweaking.
     */
    IsProceduralPropertyCached() {}

    /**
     * Checks if a given ProceduralProperty is visible according to the values of this ProceduralMaterial&#039;s other ProceduralProperties and to the ProceduralProperty&#039;s visibleIf expression.
     */
    IsProceduralPropertyVisible() {}

    /**
     * Triggers an asynchronous rebuild of this ProceduralMaterial&#039;s dirty textures.
     */
    RebuildTextures() {}

    /**
     * Triggers an immediate (synchronous) rebuild of this ProceduralMaterial&#039;s dirty textures.
     */
    RebuildTexturesImmediately() {}

    /**
     * Set a named Procedural boolean property.
     */
    SetProceduralBoolean() {}

    /**
     * Set a named Procedural color property.
     */
    SetProceduralColor() {}

    /**
     * Set a named Procedural enum property.
     */
    SetProceduralEnum() {}

    /**
     * Set a named Procedural float property.
     */
    SetProceduralFloat() {}

    /**
     * Set a named Procedural texture property.
     */
    SetProceduralTexture() {}

    /**
     * Set a named Procedural vector property.
     */
    SetProceduralVector() {}

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
     * Set a named ComputeBuffer value.
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