class AssetBundle {

    /**
     * Synchronously loads an AssetBundle from a file on disk.
     */
    static LoadFromFile() {}

    /**
     * Asynchronously loads an AssetBundle from a file on disk.
     */
    static LoadFromFileAsync() {}

    /**
     * Synchronously create an AssetBundle from a memory region.
     */
    static LoadFromMemory() {}

    /**
     * Asynchronously create an AssetBundle from a memory region.
     */
    static LoadFromMemoryAsync() {}

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
     * Return true if the AssetBundle is a streamed scene AssetBundle.
     */
    get isStreamedSceneAssetBundle() {}

    /**
     * Return true if the AssetBundle is a streamed scene AssetBundle.
     */
    set isStreamedSceneAssetBundle(value) {}

    /**
     * Main asset that was supplied when building the asset bundle (Read Only).
     */
    get mainAsset() {}

    /**
     * Main asset that was supplied when building the asset bundle (Read Only).
     */
    set mainAsset(value) {}

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
     * Check if an AssetBundle contains a specific object.
     */
    Contains() {}

    /**
     * Return all asset names in the AssetBundle.
     */
    GetAllAssetNames() {}

    /**
     * Return all the scene asset paths (paths to *.unity assets) in the AssetBundle.
     */
    GetAllScenePaths() {}

    /**
     * Loads all assets contained in the asset bundle that inherit from type.
     */
    LoadAllAssets() {}

    /**
     * Loads all assets contained in the asset bundle asynchronously.
     */
    LoadAllAssetsAsync() {}

    /**
     * Loads asset with name from the bundle.
     */
    LoadAsset() {}

    /**
     * Asynchronously loads asset with name from the bundle.
     */
    LoadAssetAsync() {}

    /**
     * Loads asset and sub assets with name from the bundle.
     */
    LoadAssetWithSubAssets() {}

    /**
     * Loads asset with sub assets with name from the bundle asynchronously.
     */
    LoadAssetWithSubAssetsAsync() {}

    /**
     * Unloads all assets in the bundle.
     */
    Unload() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}