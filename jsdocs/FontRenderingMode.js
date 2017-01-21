class FontRenderingMode {


    /**
     * Use Anti-Aliased Font rendering. When using dynamic fonts, this is the mode which is fastest in rendering font textures.
     */
    get Smooth() {}

    /**
     * Use Anti-Aliased Font rendering. When using dynamic fonts, this is the mode which is fastest in rendering font textures.
     */
    set Smooth(value) {}

    /**
     * Use Anti-Aliased Font rendering with hinting. This forces character lines to run along pixel boundaries, and generally produces.
     */
    get HintedSmooth() {}

    /**
     * Use Anti-Aliased Font rendering with hinting. This forces character lines to run along pixel boundaries, and generally produces.
     */
    set HintedSmooth(value) {}

    /**
     * Use hinted font rendering without anti-aliasing. This is the crispest font rendering option, and may be most readable for small.
     */
    get HintedRaster() {}

    /**
     * Use hinted font rendering without anti-aliasing. This is the crispest font rendering option, and may be most readable for small.
     */
    set HintedRaster(value) {}

    /**
     * Use the OS default font rendering mode. This selects either FontRenderingMode.HintedSmooth or.
     */
    get OSDefault() {}

    /**
     * Use the OS default font rendering mode. This selects either FontRenderingMode.HintedSmooth or.
     */
    set OSDefault(value) {}


}