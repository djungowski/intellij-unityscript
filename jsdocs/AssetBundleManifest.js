class AssetBundleManifest {

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
     * Get all the AssetBundles in the manifest.
     */
    GetAllAssetBundles() {}

    /**
     * Get all the AssetBundles with variant in the manifest.
     */
    GetAllAssetBundlesWithVariant() {}

    /**
     * Get all the dependent AssetBundles for the given AssetBundle.
     */
    GetAllDependencies() {}

    /**
     * Get the hash for the given AssetBundle.
     */
    GetAssetBundleHash() {}

    /**
     * Get the direct dependent AssetBundles for the given AssetBundle.
     */
    GetDirectDependencies() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}