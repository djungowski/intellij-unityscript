class DynamicGI {
    /**
     * Allows for scaling the contribution coming from realtime &amp; static  lightmaps.
     */
    static get indirectScale() {}

    /**
     * Allows for scaling the contribution coming from realtime &amp; static  lightmaps.
     */
    static set indirectScale(value) {}

    /**
     * When enabled, new dynamic Global Illumination output is shown in each frame.
     */
    static get synchronousMode() {}

    /**
     * When enabled, new dynamic Global Illumination output is shown in each frame.
     */
    static set synchronousMode(value) {}

    /**
     * Threshold for limiting updates of realtime GI. The unit of measurement is &quot;percentage intensity change&quot;.
     */
    static get updateThreshold() {}

    /**
     * Threshold for limiting updates of realtime GI. The unit of measurement is &quot;percentage intensity change&quot;.
     */
    static set updateThreshold(value) {}


    /**
     * Allows to set an emissive color for a given renderer quickly, without the need to render the emissive input for the entire system.
     */
    static SetEmissive() {}

    /**
     * Schedules an update of the environment texture.
     */
    static UpdateEnvironment() {}

    /**
     * Schedules an update of the albedo and emissive textures of a system that contains the renderer or the terrain.
     */
    static UpdateMaterials() {}



}