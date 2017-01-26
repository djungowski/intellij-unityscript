class Color {
    /**
     * Solid black. RGBA is (0, 0, 0, 1).
     */
    static get black() {}

    /**
     * Solid black. RGBA is (0, 0, 0, 1).
     */
    static set black(value) {}

    /**
     * Solid blue. RGBA is (0, 0, 1, 1).
     */
    static get blue() {}

    /**
     * Solid blue. RGBA is (0, 0, 1, 1).
     */
    static set blue(value) {}

    /**
     * Completely transparent. RGBA is (0, 0, 0, 0).
     */
    static get clear() {}

    /**
     * Completely transparent. RGBA is (0, 0, 0, 0).
     */
    static set clear(value) {}

    /**
     * Cyan. RGBA is (0, 1, 1, 1).
     */
    static get cyan() {}

    /**
     * Cyan. RGBA is (0, 1, 1, 1).
     */
    static set cyan(value) {}

    /**
     * Gray. RGBA is (0.5, 0.5, 0.5, 1).
     */
    static get gray() {}

    /**
     * Gray. RGBA is (0.5, 0.5, 0.5, 1).
     */
    static set gray(value) {}

    /**
     * Solid green. RGBA is (0, 1, 0, 1).
     */
    static get green() {}

    /**
     * Solid green. RGBA is (0, 1, 0, 1).
     */
    static set green(value) {}

    /**
     * English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1).
     */
    static get grey() {}

    /**
     * English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1).
     */
    static set grey(value) {}

    /**
     * Magenta. RGBA is (1, 0, 1, 1).
     */
    static get magenta() {}

    /**
     * Magenta. RGBA is (1, 0, 1, 1).
     */
    static set magenta(value) {}

    /**
     * Solid red. RGBA is (1, 0, 0, 1).
     */
    static get red() {}

    /**
     * Solid red. RGBA is (1, 0, 0, 1).
     */
    static set red(value) {}

    /**
     * Solid white. RGBA is (1, 1, 1, 1).
     */
    static get white() {}

    /**
     * Solid white. RGBA is (1, 1, 1, 1).
     */
    static set white(value) {}

    /**
     * Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at!
     */
    static get yellow() {}

    /**
     * Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at!
     */
    static set yellow(value) {}


    /**
     * Creates an RGB colour from HSV input.
     */
    static HSVToRGB() {}

    /**
     * Linearly interpolates between colors a and b by t.
     */
    static Lerp() {}

    /**
     * Linearly interpolates between colors a and b by t.
     */
    static LerpUnclamped() {}

    /**
     * Calculates the hue, saturation and value of an RGB input color.
     */
    static RGBToHSV() {}


    /**
     * Alpha component of the color.
     */
    get a() {}

    /**
     * Alpha component of the color.
     */
    set a(value) {}

    /**
     * Blue component of the color.
     */
    get b() {}

    /**
     * Blue component of the color.
     */
    set b(value) {}

    /**
     * Green component of the color.
     */
    get g() {}

    /**
     * Green component of the color.
     */
    set g(value) {}

    /**
     * A version of the color that has had the gamma curve applied.
     */
    get gamma() {}

    /**
     * A version of the color that has had the gamma curve applied.
     */
    set gamma(value) {}

    /**
     * The grayscale value of the color. (Read Only)
     */
    get grayscale() {}

    /**
     * The grayscale value of the color. (Read Only)
     */
    set grayscale(value) {}

    /**
     * A linear value of an sRGB color.
     */
    get linear() {}

    /**
     * A linear value of an sRGB color.
     */
    set linear(value) {}

    /**
     * Returns the maximum color component value: Max(r,g,b).
     */
    get maxColorComponent() {}

    /**
     * Returns the maximum color component value: Max(r,g,b).
     */
    set maxColorComponent(value) {}

    /**
     * Red component of the color.
     */
    get r() {}

    /**
     * Red component of the color.
     */
    set r(value) {}

    /**
     * Access the r, g, b,a components using [0], [1], [2], [3] respectively.
     */
    get this[int]() {}

    /**
     * Access the r, g, b,a components using [0], [1], [2], [3] respectively.
     */
    set this[int](value) {}


    /**
     * Returns a nicely formatted string of this color.
     */
    ToString() {}

}