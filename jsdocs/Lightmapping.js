class Lightmapping {
    /**
     * Is baked GI enabled?
     */
    static get bakedGI() {}

    /**
     * Is baked GI enabled?
     */
    static set bakedGI(value) {}

    /**
     * Boost the albedo.
     */
    static get bounceBoost() {}

    /**
     * Boost the albedo.
     */
    static set bounceBoost(value) {}

    /**
     * Returns the current lightmapping build progress or 0 if Lightmapping.isRunning is false.
     */
    static get buildProgress() {}

    /**
     * Returns the current lightmapping build progress or 0 if Lightmapping.isRunning is false.
     */
    static set buildProgress(value) {}

    /**
     * Delegate which is called when bake job is completed.
     */
    static get completed() {}

    /**
     * Delegate which is called when bake job is completed.
     */
    static set completed(value) {}

    /**
     * The lightmap baking workflow mode used. Iterative mode is default, but you can switch to on demand mode which bakes only when the user presses the bake button.
     */
    static get giWorkflowMode() {}

    /**
     * The lightmap baking workflow mode used. Iterative mode is default, but you can switch to on demand mode which bakes only when the user presses the bake button.
     */
    static set giWorkflowMode(value) {}

    /**
     * Scale for indirect lighting.
     */
    static get indirectOutputScale() {}

    /**
     * Scale for indirect lighting.
     */
    static set indirectOutputScale(value) {}

    /**
     * Returns true when the bake job is running, false otherwise (Read Only).
     */
    static get isRunning() {}

    /**
     * Returns true when the bake job is running, false otherwise (Read Only).
     */
    static set isRunning(value) {}

    /**
     * The lighting data asset used by the active scene.
     */
    static get lightingDataAsset() {}

    /**
     * The lighting data asset used by the active scene.
     */
    static set lightingDataAsset(value) {}

    /**
     * Is realtime GI enabled?
     */
    static get realtimeGI() {}

    /**
     * Is realtime GI enabled?
     */
    static set realtimeGI(value) {}




}