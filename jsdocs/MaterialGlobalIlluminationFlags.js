class MaterialGlobalIlluminationFlags {


    /**
     * The emissive lighting does not affect Global Illumination at all.
     */
    get None() {}

    /**
     * The emissive lighting does not affect Global Illumination at all.
     */
    set None(value) {}

    /**
     * The emissive lighting will affect realtime Global Illumination. It emits lighting into realtime lightmaps and realtime lightprobes.
     */
    get RealtimeEmissive() {}

    /**
     * The emissive lighting will affect realtime Global Illumination. It emits lighting into realtime lightmaps and realtime lightprobes.
     */
    set RealtimeEmissive(value) {}

    /**
     * The emissive lighting affects baked Global Illumination. It emits lighting into baked lightmaps and baked lightprobes.
     */
    get BakedEmissive() {}

    /**
     * The emissive lighting affects baked Global Illumination. It emits lighting into baked lightmaps and baked lightprobes.
     */
    set BakedEmissive(value) {}

    /**
     * The emissive lighting is guaranteed to be black. This lets the lightmapping system know that it doesn&#039;t have to extract emissive lighting information from the material and can simply assume it is completely black.
     */
    get EmissiveIsBlack() {}

    /**
     * The emissive lighting is guaranteed to be black. This lets the lightmapping system know that it doesn&#039;t have to extract emissive lighting information from the material and can simply assume it is completely black.
     */
    set EmissiveIsBlack(value) {}


}