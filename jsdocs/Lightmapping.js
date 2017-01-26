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


    /**
     * Stars a synchronous bake job.
     */
    static Bake() {}

    /**
     * Starts an asynchronous bake job.
     */
    static BakeAsync() {}

    /**
     * Bakes an array of scenes.
     */
    static BakeMultipleScenes() {}

    /**
     * Starts a synchronous bake job for the probe.
     */
    static BakeReflectionProbe() {}

    /**
     * Cancels the currently running asynchronous bake job.
     */
    static Cancel() {}

    /**
     * Deletes all lightmap assets and makes all lights behave as if they weren&#039;t baked yet.
     */
    static Clear() {}

    /**
     * Clears the cache used by lightmaps, reflection probes and default reflection.
     */
    static ClearDiskCache() {}

    /**
     * Remove the lighting data asset used by the current scene.
     */
    static ClearLightingDataAsset() {}

    /**
     * Get how many chunks the terrain is divided into for GI baking.
     */
    static GetTerrainGIChunks() {}

    /**
     * Calculates a Delaunay Tetrahedralization of the &#039;positions&#039; point set - the same way the lightmapper.
     */
    static Tetrahedralize() {}



}