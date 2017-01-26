class Selection {
    /**
     * Returns the active game object. (The one shown in the inspector).
     */
    static get activeGameObject() {}

    /**
     * Returns the active game object. (The one shown in the inspector).
     */
    static set activeGameObject(value) {}

    /**
     * Returns the instanceID of the actual object selection. Includes prefabs, non-modifyable objects.
     */
    static get activeInstanceID() {}

    /**
     * Returns the instanceID of the actual object selection. Includes prefabs, non-modifyable objects.
     */
    static set activeInstanceID(value) {}

    /**
     * Returns the actual object selection. Includes prefabs, non-modifyable objects.
     */
    static get activeObject() {}

    /**
     * Returns the actual object selection. Includes prefabs, non-modifyable objects.
     */
    static set activeObject(value) {}

    /**
     * Returns the active transform. (The one shown in the inspector).
     */
    static get activeTransform() {}

    /**
     * Returns the active transform. (The one shown in the inspector).
     */
    static set activeTransform(value) {}

    /**
     * Returns the guids of the selected assets.
     */
    static get assetGUIDs() {}

    /**
     * Returns the guids of the selected assets.
     */
    static set assetGUIDs(value) {}

    /**
     * Returns the actual game object selection. Includes prefabs, non-modifyable objects.
     */
    static get gameObjects() {}

    /**
     * Returns the actual game object selection. Includes prefabs, non-modifyable objects.
     */
    static set gameObjects(value) {}

    /**
     * The actual unfiltered selection from the Scene returned as instance ids instead of objects.
     */
    static get instanceIDs() {}

    /**
     * The actual unfiltered selection from the Scene returned as instance ids instead of objects.
     */
    static set instanceIDs(value) {}

    /**
     * The actual unfiltered selection from the Scene.
     */
    static get objects() {}

    /**
     * The actual unfiltered selection from the Scene.
     */
    static set objects(value) {}

    /**
     * Delegate callback triggered when currently active/selected item has changed.
     */
    static get selectionChanged() {}

    /**
     * Delegate callback triggered when currently active/selected item has changed.
     */
    static set selectionChanged(value) {}

    /**
     * Returns the top level selection, excluding prefabs.
     */
    static get transforms() {}

    /**
     * Returns the top level selection, excluding prefabs.
     */
    static set transforms(value) {}


    /**
     * Returns whether an object is contained in the current selection.
     */
    static Contains() {}

    /**
     * Returns the current selection filtered by type and mode.
     */
    static GetFiltered() {}

    /**
     * Allows for fine grained control of the selection type using the SelectionMode bitmask.
     */
    static GetTransforms() {}



}