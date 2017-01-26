class PluginImporter {

    /**
     * Returns all plugin importers for all platforms.
     */
    static GetAllImporters() {}

    /**
     * Returns all plugin importers for specfied platform.
     */
    static GetImporters() {}

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
     * Is plugin native or managed? Note: C++ libraries with CLR support are treated as native plugins, because Unity cannot load such libraries. You can still access them via P/Invoke.
     */
    get isNativePlugin() {}

    /**
     * Is plugin native or managed? Note: C++ libraries with CLR support are treated as native plugins, because Unity cannot load such libraries. You can still access them via P/Invoke.
     */
    set isNativePlugin(value) {}

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
     * Clear all plugin settings and set the compatability with Any Platform to true.
     */
    ClearSettings() {}

    /**
     * Is plugin comptabile with any platform.
     */
    GetCompatibleWithAnyPlatform() {}

    /**
     * Is plugin compatible with editor.
     */
    GetCompatibleWithEditor() {}

    /**
     * Is plugin compatible with specified platform.
     */
    GetCompatibleWithPlatform() {}

    /**
     * Returns editor specific data for specified key.
     */
    GetEditorData() {}

    /**
     * Is Editor excluded when Any Platform is set to true.
     */
    GetExcludeEditorFromAnyPlatform() {}

    /**
     * Is platform excluded when Any Platform set to true.
     */
    GetExcludeFromAnyPlatform() {}

    /**
     * Identifies whether or not this plugin will be overridden if a plugin of the same name is placed in your project folder.
     */
    GetIsOverridable() {}

    /**
     * Get platform specific data.
     */
    GetPlatformData() {}

    /**
     * Set compatiblity with any platform.
     */
    SetCompatibleWithAnyPlatform() {}

    /**
     * Set compatiblity with any editor.
     */
    SetCompatibleWithEditor() {}

    /**
     * Set compatiblity with specified platform.
     */
    SetCompatibleWithPlatform() {}

    /**
     * Set editor specific data.
     */
    SetEditorData() {}

    /**
     * Exclude Editor from compatible platforms when Any Platform is set to true.
     */
    SetExcludeEditorFromAnyPlatform() {}

    /**
     * Exclude platform from compatible platforms when Any Platform is set to true.
     */
    SetExcludeFromAnyPlatform() {}

    /**
     * Set platform specific data.
     */
    SetPlatformData() {}

    /**
     * Identifies whether or not this plugin should be included in the current build target.
     */
    ShouldIncludeInBuild() {}

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