class LightmappingMode {


    /**
     * The light affects only dynamic objects, not direct or indirect baking.
     */
    get Realtime() {}

    /**
     * The light affects only dynamic objects, not direct or indirect baking.
     */
    set Realtime(value) {}

    /**
     * The light only affects lightmap baking, not dynamic objects.
     */
    get Baked() {}

    /**
     * The light only affects lightmap baking, not dynamic objects.
     */
    set Baked(value) {}

    /**
     * The light affects both lightmap baking and dynamic objects.
     */
    get Mixed() {}

    /**
     * The light affects both lightmap baking and dynamic objects.
     */
    set Mixed(value) {}


}