class NPOTSupport {


    /**
     * NPOT textures are not supported. Will be upscaled/padded at loading time.
     */
    get None() {}

    /**
     * NPOT textures are not supported. Will be upscaled/padded at loading time.
     */
    set None(value) {}

    /**
     * Limited NPOT support: no mip-maps and clamp wrap mode will be forced.
     */
    get Restricted() {}

    /**
     * Limited NPOT support: no mip-maps and clamp wrap mode will be forced.
     */
    set Restricted(value) {}

    /**
     * Full NPOT support.
     */
    get Full() {}

    /**
     * Full NPOT support.
     */
    set Full(value) {}


}