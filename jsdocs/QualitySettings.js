class QualitySettings {
    /**
     * Active color space (Read Only).
     */
    static get activeColorSpace() {}

    /**
     * Active color space (Read Only).
     */
    static set activeColorSpace(value) {}

    /**
     * Global anisotropic filtering mode.
     */
    static get anisotropicFiltering() {}

    /**
     * Global anisotropic filtering mode.
     */
    static set anisotropicFiltering(value) {}

    /**
     * Set The AA Filtering option.
     */
    static get antiAliasing() {}

    /**
     * Set The AA Filtering option.
     */
    static set antiAliasing(value) {}

    /**
     * Async texture upload provides timesliced async texture upload on the render thread with tight control over memory and timeslicing. There are no allocations except for the ones which driver has to do. To read data and upload texture data a ringbuffer whose size can be controlled is re-used.Use asyncUploadBufferSize to set the buffer size for asynchronous texture uploads. The size is in megabytes. Minimum value is 2 and maximum is 512. Although the buffer will resize automatically to fit the largest texture currently loading, it is recommended to set the value approximately to the size of biggest texture used in the scene to avoid re-sizing of the buffer which can incur performance cost.
     */
    static get asyncUploadBufferSize() {}

    /**
     * Async texture upload provides timesliced async texture upload on the render thread with tight control over memory and timeslicing. There are no allocations except for the ones which driver has to do. To read data and upload texture data a ringbuffer whose size can be controlled is re-used.Use asyncUploadBufferSize to set the buffer size for asynchronous texture uploads. The size is in megabytes. Minimum value is 2 and maximum is 512. Although the buffer will resize automatically to fit the largest texture currently loading, it is recommended to set the value approximately to the size of biggest texture used in the scene to avoid re-sizing of the buffer which can incur performance cost.
     */
    static set asyncUploadBufferSize(value) {}

    /**
     * Async texture upload provides timesliced async texture upload on the render thread with tight control over memory and timeslicing. There are no allocations except for the ones which driver has to do. To read data and upload texture data a ringbuffer whose size can be controlled is re-used.Use asyncUploadTimeSlice to set the time-slice in milliseconds for asynchronous texture uploads per 
frame. Minimum value is 1 and maximum is 33.
     */
    static get asyncUploadTimeSlice() {}

    /**
     * Async texture upload provides timesliced async texture upload on the render thread with tight control over memory and timeslicing. There are no allocations except for the ones which driver has to do. To read data and upload texture data a ringbuffer whose size can be controlled is re-used.Use asyncUploadTimeSlice to set the time-slice in milliseconds for asynchronous texture uploads per 
frame. Minimum value is 1 and maximum is 33.
     */
    static set asyncUploadTimeSlice(value) {}

    /**
     * If enabled, billboards will face towards camera position rather than camera orientation.
     */
    static get billboardsFaceCameraPosition() {}

    /**
     * If enabled, billboards will face towards camera position rather than camera orientation.
     */
    static set billboardsFaceCameraPosition(value) {}

    /**
     * Blend weights.
     */
    static get blendWeights() {}

    /**
     * Blend weights.
     */
    static set blendWeights(value) {}

    /**
     * Desired color space (Read Only).
     */
    static get desiredColorSpace() {}

    /**
     * Desired color space (Read Only).
     */
    static set desiredColorSpace(value) {}

    /**
     * Global multiplier for the LOD&#039;s switching distance.
     */
    static get lodBias() {}

    /**
     * Global multiplier for the LOD&#039;s switching distance.
     */
    static set lodBias(value) {}

    /**
     * A texture size limit applied to all textures.
     */
    static get masterTextureLimit() {}

    /**
     * A texture size limit applied to all textures.
     */
    static set masterTextureLimit(value) {}

    /**
     * A maximum LOD level. All LOD groups.
     */
    static get maximumLODLevel() {}

    /**
     * A maximum LOD level. All LOD groups.
     */
    static set maximumLODLevel(value) {}

    /**
     * Maximum number of frames queued up by graphics driver.
     */
    static get maxQueuedFrames() {}

    /**
     * Maximum number of frames queued up by graphics driver.
     */
    static set maxQueuedFrames(value) {}

    /**
     * The indexed list of available Quality Settings.
     */
    static get names() {}

    /**
     * The indexed list of available Quality Settings.
     */
    static set names(value) {}

    /**
     * Budget for how many ray casts can be performed per frame for approximate collision testing.
     */
    static get particleRaycastBudget() {}

    /**
     * Budget for how many ray casts can be performed per frame for approximate collision testing.
     */
    static set particleRaycastBudget(value) {}

    /**
     * The maximum number of pixel lights that should affect any object.
     */
    static get pixelLightCount() {}

    /**
     * The maximum number of pixel lights that should affect any object.
     */
    static set pixelLightCount(value) {}

    /**
     * Enables realtime reflection probes.
     */
    static get realtimeReflectionProbes() {}

    /**
     * Enables realtime reflection probes.
     */
    static set realtimeReflectionProbes(value) {}

    /**
     * The normalized cascade distribution for a 2 cascade setup. The value defines the position of the cascade with respect to Zero.
     */
    static get shadowCascade2Split() {}

    /**
     * The normalized cascade distribution for a 2 cascade setup. The value defines the position of the cascade with respect to Zero.
     */
    static set shadowCascade2Split(value) {}

    /**
     * The normalized cascade start position for a 4 cascade setup. Each member of the vector defines the normalized position of the coresponding cascade with respect to Zero.
     */
    static get shadowCascade4Split() {}

    /**
     * The normalized cascade start position for a 4 cascade setup. Each member of the vector defines the normalized position of the coresponding cascade with respect to Zero.
     */
    static set shadowCascade4Split(value) {}

    /**
     * Number of cascades to use for directional light shadows.
     */
    static get shadowCascades() {}

    /**
     * Number of cascades to use for directional light shadows.
     */
    static set shadowCascades(value) {}

    /**
     * Shadow drawing distance.
     */
    static get shadowDistance() {}

    /**
     * Shadow drawing distance.
     */
    static set shadowDistance(value) {}

    /**
     * Offset shadow frustum near plane.
     */
    static get shadowNearPlaneOffset() {}

    /**
     * Offset shadow frustum near plane.
     */
    static set shadowNearPlaneOffset(value) {}

    /**
     * Directional light shadow projection.
     */
    static get shadowProjection() {}

    /**
     * Directional light shadow projection.
     */
    static set shadowProjection(value) {}

    /**
     * The default resolution of the shadow maps.
     */
    static get shadowResolution() {}

    /**
     * The default resolution of the shadow maps.
     */
    static set shadowResolution(value) {}

    /**
     * Realtime Shadows type to be used.
     */
    static get shadows() {}

    /**
     * Realtime Shadows type to be used.
     */
    static set shadows(value) {}

    /**
     * Should soft blending be used for particles?
     */
    static get softParticles() {}

    /**
     * Should soft blending be used for particles?
     */
    static set softParticles(value) {}

    /**
     * Use a two-pass shader for the vegetation in the terrain engine.
     */
    static get softVegetation() {}

    /**
     * Use a two-pass shader for the vegetation in the terrain engine.
     */
    static set softVegetation(value) {}

    /**
     * The VSync Count.
     */
    static get vSyncCount() {}

    /**
     * The VSync Count.
     */
    static set vSyncCount(value) {}


    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


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
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}