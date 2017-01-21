class LightmapParameters {

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * The maximum number of times to supersample a texel to reduce aliasing.
     */
    get antiAliasingSamples() {}

    /**
     * The maximum number of times to supersample a texel to reduce aliasing.
     */
    set antiAliasingSamples(value) {}

    /**
     * The maximum number of times to supersample a texel to reduce aliasing in AO.
     */
    get AOAntiAliasingSamples() {}

    /**
     * The maximum number of times to supersample a texel to reduce aliasing in AO.
     */
    set AOAntiAliasingSamples(value) {}

    /**
     * The number of rays to cast for computing ambient occlusion.
     */
    get AOQuality() {}

    /**
     * The number of rays to cast for computing ambient occlusion.
     */
    set AOQuality(value) {}

    /**
     * The percentage of rays shot from a ray origin that must hit front faces to be considered usable.
     */
    get backFaceTolerance() {}

    /**
     * The percentage of rays shot from a ray origin that must hit front faces to be considered usable.
     */
    set backFaceTolerance(value) {}

    /**
     * BakedLightmapTag is an integer that affects the assignment to baked lightmaps. Objects with different values for bakedLightmapTag are guaranteed to not be assigned to the same lightmap even if the other baking parameters are the same.
     */
    get bakedLightmapTag() {}

    /**
     * BakedLightmapTag is an integer that affects the assignment to baked lightmaps. Objects with different values for bakedLightmapTag are guaranteed to not be assigned to the same lightmap even if the other baking parameters are the same.
     */
    set bakedLightmapTag(value) {}

    /**
     * The radius (in texels) of the post-processing filter that blurs baked direct lighting.
     */
    get blurRadius() {}

    /**
     * The radius (in texels) of the post-processing filter that blurs baked direct lighting.
     */
    set blurRadius(value) {}

    /**
     * Controls the resolution at which Enlighten stores and can transfer input light.
     */
    get clusterResolution() {}

    /**
     * Controls the resolution at which Enlighten stores and can transfer input light.
     */
    set clusterResolution(value) {}

    /**
     * The number of rays used for lights with an area. Allows for accurate soft shadowing.
     */
    get directLightQuality() {}

    /**
     * The number of rays used for lights with an area. Allows for accurate soft shadowing.
     */
    set directLightQuality(value) {}

    /**
     * The amount of data used for realtime GI texels. Specifies how detailed view of the scene a texel has. Small values mean more averaged out lighting.
     */
    get irradianceBudget() {}

    /**
     * The amount of data used for realtime GI texels. Specifies how detailed view of the scene a texel has. Small values mean more averaged out lighting.
     */
    set irradianceBudget(value) {}

    /**
     * The number of rays to cast for computing irradiance form factors.
     */
    get irradianceQuality() {}

    /**
     * The number of rays to cast for computing irradiance form factors.
     */
    set irradianceQuality(value) {}

    /**
     * If enabled, the object appears transparent during GlobalIllumination lighting calculations.
     */
    get isTransparent() {}

    /**
     * If enabled, the object appears transparent during GlobalIllumination lighting calculations.
     */
    set isTransparent(value) {}

    /**
     * Maximum size of gaps that can be ignored for GI (multiplier on pixel size).
     */
    get modellingTolerance() {}

    /**
     * Maximum size of gaps that can be ignored for GI (multiplier on pixel size).
     */
    set modellingTolerance(value) {}

    /**
     * The texel resolution per meter used for realtime lightmaps. This value is multiplied by LightmapEditorSettings.resolution.
     */
    get resolution() {}

    /**
     * The texel resolution per meter used for realtime lightmaps. This value is multiplied by LightmapEditorSettings.resolution.
     */
    set resolution(value) {}

    /**
     * Whether pairs of edges should be stitched together.
     */
    get stitchEdges() {}

    /**
     * Whether pairs of edges should be stitched together.
     */
    set stitchEdges(value) {}

    /**
     * System tag is an integer identifier. It lets you force an object into a different Enlighten system even though all the other parameters are the same.
     */
    get systemTag() {}

    /**
     * System tag is an integer identifier. It lets you force an object into a different Enlighten system even though all the other parameters are the same.
     */
    set systemTag(value) {}

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