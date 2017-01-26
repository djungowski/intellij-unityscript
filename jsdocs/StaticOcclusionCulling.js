class StaticOcclusionCulling {
    /**
     * Does the scene contain any occlusion portals that were added manually rather than automatically?
     */
    static get doesSceneHaveManualPortals() {}

    /**
     * Does the scene contain any occlusion portals that were added manually rather than automatically?
     */
    static set doesSceneHaveManualPortals(value) {}

    /**
     * Used to check if asynchronous generation of static occlusion culling data is still running.
     */
    static get isRunning() {}

    /**
     * Used to check if asynchronous generation of static occlusion culling data is still running.
     */
    static set isRunning(value) {}

    /**
     * Returns the size in bytes that the PVS data is currently taking up in this scene on disk.
     */
    static get umbraDataSize() {}

    /**
     * Returns the size in bytes that the PVS data is currently taking up in this scene on disk.
     */
    static set umbraDataSize(value) {}


    /**
     * Used to cancel asynchronous generation of static occlusion culling data.
     */
    static Cancel() {}

    /**
     * Clears the PVS of the opened scene.
     */
    static Clear() {}

    /**
     * Used to generate static occlusion culling data.
     */
    static Compute() {}

    /**
     * Used to compute static occlusion culling data asynchronously.
     */
    static GenerateInBackground() {}



}