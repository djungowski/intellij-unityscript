class PrefabUtility {
    /**
     * Called after prefab instances in the scene have been updated.
     */
    static get prefabInstanceUpdated() {}

    /**
     * Called after prefab instances in the scene have been updated.
     */
    static set prefabInstanceUpdated(value) {}


    /**
     * Connects the source prefab to the game object.
     */
    static ConnectGameObjectToPrefab() {}

    /**
     * Creates an empty prefab at given path.
     */
    static CreateEmptyPrefab() {}

    /**
     * Creates a prefab from a game object hierarchy.
     */
    static CreatePrefab() {}

    /**
     * Disconnects the prefab instance from its parent prefab.
     */
    static DisconnectPrefabInstance() {}

    /**
     * Helper function to find the prefab root of an object (used for picking niceness).
     */
    static FindPrefabRoot() {}

    /**
     * Returns the topmost game object that has the same prefab parent as target.
     */
    static FindRootGameObjectWithSameParentPrefab() {}

    /**
     * Returns root game object of the prefab instance if that root prefab instance is a parent of the prefab.
     */
    static FindValidUploadPrefabInstanceRoot() {}

    /**
     * Retrieves the enclosing prefab for any object contained within.
     */
    static GetPrefabObject() {}

    /**
     * Returns the parent asset object of source, or null if it can&#039;t be found.
     */
    static GetPrefabParent() {}

    /**
     * Given an object, returns its prefab type (None, if it&#039;s not a prefab).
     */
    static GetPrefabType() {}

    /**
     * Extract all modifications that are applied to the prefab instance compared to the parent prefab.
     */
    static GetPropertyModifications() {}

    /**
     * Instantiate an asset that is referenced by a prefab and use it on the prefab instance.
     */
    static InstantiateAttachedAsset() {}

    /**
     * Instantiates the given prefab in a given scene.
     */
    static InstantiatePrefab() {}

    /**
     * Force re-merging all prefab instances of this prefab.
     */
    static MergeAllPrefabInstances() {}

    /**
     * Connects the game object to the prefab that it was last connected to.
     */
    static ReconnectToLastPrefab() {}

    /**
     * Force record property modifications by comparing against the parent prefab.
     */
    static RecordPrefabInstancePropertyModifications() {}

    /**
     * Replaces the targetPrefab with a copy of the game object hierarchy go.
     */
    static ReplacePrefab() {}

    /**
     * Resets the properties of the component or game object to the parent prefab state.
     */
    static ResetToPrefabState() {}

    /**
     * Resets the properties of all objects in the prefab, including child game objects and components that were added to the prefab instance.
     */
    static RevertPrefabInstance() {}

    /**
     * Assigns all modifications that are applied to the prefab instance compared to the parent prefab.
     */
    static SetPropertyModifications() {}



}