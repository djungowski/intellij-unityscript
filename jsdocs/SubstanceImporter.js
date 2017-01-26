class SubstanceImporter {

    /**
     * Retrieves the asset importer for the asset at path.
     */
    static GetAtPath() {}

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
     * Get or set the AssetBundle name.
     */
    get assetBundleName() {}

    /**
     * Get or set the AssetBundle name.
     */
    set assetBundleName(value) {}

    /**
     * Get or set the AssetBundle variant.
     */
    get assetBundleVariant() {}

    /**
     * Get or set the AssetBundle variant.
     */
    set assetBundleVariant(value) {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    get assetPath() {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    set assetPath(value) {}

    /**
     * Get or set any user data.
     */
    get userData() {}

    /**
     * Get or set any user data.
     */
    set userData(value) {}

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
     * Clone an existing ProceduralMaterial instance.
     */
    CloneMaterial() {}

    /**
     * Destroy an existing ProceduralMaterial instance.
     */
    DestroyMaterial() {}

    /**
     * Export the bitmaps generated by a ProceduralMaterial as TGA files.
     */
    ExportBitmaps() {}

    /**
     * Export a XML preset string with the value of all parameters of a given ProceduralMaterial to the specified folder.
     */
    ExportPreset() {}

    /**
     * Get the ProceduralMaterial animation update rate in millisecond.
     */
    GetAnimationUpdateRate() {}

    /**
     * Check if the ProceduralMaterial needs to force generation of all its outputs.
     */
    GetGenerateAllOutputs() {}

    /**
     * Return true if the mipmaps are generated for this ProceduralMaterial.
     */
    GetGenerateMipMaps() {}

    /**
     * Get the number of ProceduralMaterial instances.
     */
    GetMaterialCount() {}

    /**
     * Get the material offset, which is used for all the textures that are part of this ProceduralMaterial.
     */
    GetMaterialOffset() {}

    /**
     * Get an array with the ProceduralMaterial instances.
     */
    GetMaterials() {}

    /**
     * Get the material scale, which is used for all the textures that are part of this ProceduralMaterial.
     */
    GetMaterialScale() {}

    /**
     * Get the import settings for a given ProceduralMaterial for a given platform (width and height, RAW/Compressed format, loading behavior).
     */
    GetPlatformTextureSettings() {}

    /**
     * Get a list of the names of the ProceduralMaterial prototypes in the package.
     */
    GetPrototypeNames() {}

    /**
     * Get the alpha source of the given texture in the ProceduralMaterial.
     */
    GetTextureAlphaSource() {}

    /**
     * Instantiate a new ProceduralMaterial instance from a prototype.
     */
    InstantiateMaterial() {}

    /**
     * After modifying the shader of a ProceduralMaterial, call this function to apply the changes to the importer.
     */
    OnShaderModified() {}

    /**
     * Rename an existing ProceduralMaterial instance.
     */
    RenameMaterial() {}

    /**
     * Reset the ProceduralMaterial to its default values.
     */
    ResetMaterial() {}

    /**
     * Set the ProceduralMaterial animation update rate in millisecond.
     */
    SetAnimationUpdateRate() {}

    /**
     * Specify if the ProceduralMaterial needs to force generation of all its outputs.
     */
    SetGenerateAllOutputs() {}

    /**
     * Force the generation of mipmaps for this ProceduralMaterial.
     */
    SetGenerateMipMaps() {}

    /**
     * Set the material offset, which is used for all the textures that are part of this ProceduralMaterial.
     */
    SetMaterialOffset() {}

    /**
     * Set the material scale, which is used for all the textures that are part of this ProceduralMaterial.
     */
    SetMaterialScale() {}

    /**
     * Set the import settings for the input ProceduralMaterial for the input platform.
     */
    SetPlatformTextureSettings() {}

    /**
     * Set the alpha source of the given texture in the ProceduralMaterial.
     */
    SetTextureAlphaSource() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    SetAssetBundleNameAndVariant() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}