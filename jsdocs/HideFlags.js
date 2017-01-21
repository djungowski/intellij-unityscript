class HideFlags {


    /**
     * A normal, visible object. This is the default.
     */
    get None() {}

    /**
     * A normal, visible object. This is the default.
     */
    set None(value) {}

    /**
     * The object will not appear in the hierarchy.
     */
    get HideInHierarchy() {}

    /**
     * The object will not appear in the hierarchy.
     */
    set HideInHierarchy(value) {}

    /**
     * It is not possible to view it in the inspector.
     */
    get HideInInspector() {}

    /**
     * It is not possible to view it in the inspector.
     */
    set HideInInspector(value) {}

    /**
     * The object will not be saved to the scene in the editor.
     */
    get DontSaveInEditor() {}

    /**
     * The object will not be saved to the scene in the editor.
     */
    set DontSaveInEditor(value) {}

    /**
     * The object is not be editable in the inspector.
     */
    get NotEditable() {}

    /**
     * The object is not be editable in the inspector.
     */
    set NotEditable(value) {}

    /**
     * The object will not be saved when building a player.
     */
    get DontSaveInBuild() {}

    /**
     * The object will not be saved when building a player.
     */
    set DontSaveInBuild(value) {}

    /**
     * The object will not be unloaded by Resources.UnloadUnusedAssets.
     */
    get DontUnloadUnusedAsset() {}

    /**
     * The object will not be unloaded by Resources.UnloadUnusedAssets.
     */
    set DontUnloadUnusedAsset(value) {}

    /**
     * The object will not be saved to the scene. It will not be destroyed when a new scene is loaded. It is a shortcut for HideFlags.DontSaveInBuild | HideFlags.DontSaveInEditor | HideFlags.DontUnloadUnusedAsset.
     */
    get DontSave() {}

    /**
     * The object will not be saved to the scene. It will not be destroyed when a new scene is loaded. It is a shortcut for HideFlags.DontSaveInBuild | HideFlags.DontSaveInEditor | HideFlags.DontUnloadUnusedAsset.
     */
    set DontSave(value) {}

    /**
     * A combination of not shown in the hierarchy, not saved to to scenes and not unloaded by The object will not be unloaded by Resources.UnloadUnusedAssets.
     */
    get HideAndDontSave() {}

    /**
     * A combination of not shown in the hierarchy, not saved to to scenes and not unloaded by The object will not be unloaded by Resources.UnloadUnusedAssets.
     */
    set HideAndDontSave(value) {}


}