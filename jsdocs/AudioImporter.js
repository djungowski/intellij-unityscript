class AudioImporter {

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
     * The default sample settings for the AudioClip importer.
     */
    get defaultSampleSettings() {}

    /**
     * The default sample settings for the AudioClip importer.
     */
    set defaultSampleSettings(value) {}

    /**
     * Force this clip to mono?
     */
    get forceToMono() {}

    /**
     * Force this clip to mono?
     */
    set forceToMono(value) {}

    /**
     * Corresponding to the &quot;Load In Background&quot; flag in the AudioClip inspector, when this flag is set, the loading of the clip will happen delayed without blocking the main thread.
     */
    get loadInBackground() {}

    /**
     * Corresponding to the &quot;Load In Background&quot; flag in the AudioClip inspector, when this flag is set, the loading of the clip will happen delayed without blocking the main thread.
     */
    set loadInBackground(value) {}

    /**
     * Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded.
     */
    get preloadAudioData() {}

    /**
     * Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded.
     */
    set preloadAudioData(value) {}

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
     * Clears the sample settings override for the given platform.
     */
    ClearSampleSettingOverride() {}

    /**
     * Returns whether a given build target has its sample settings currently overridden.
     */
    ContainsSampleSettingsOverride() {}

    /**
     * Return the current override settings for the given platform.
     */
    GetOverrideSampleSettings() {}

    /**
     * Sets the override sample settings for the given platform.
     */
    SetOverrideSampleSettings() {}

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