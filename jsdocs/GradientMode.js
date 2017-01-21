class GradientMode {


    /**
     * Find the 2 keys adjacent to the requested evaluation time, and linearly interpolate between them to obtain a blended color.
     */
    get Blend() {}

    /**
     * Find the 2 keys adjacent to the requested evaluation time, and linearly interpolate between them to obtain a blended color.
     */
    set Blend(value) {}

    /**
     * Return a fixed color, by finding the first key whose time value is greater than the requested evaluation time.
     */
    get Fixed() {}

    /**
     * Return a fixed color, by finding the first key whose time value is greater than the requested evaluation time.
     */
    set Fixed(value) {}


}