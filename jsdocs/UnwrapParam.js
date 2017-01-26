class UnwrapParam {

    /**
     * Will set default values for params.
     */
    static SetDefaults() {}


    /**
     * Maximum allowed angle distortion (0..1).
     */
    get angleError() {}

    /**
     * Maximum allowed angle distortion (0..1).
     */
    set angleError(value) {}

    /**
     * Maximum allowed area distortion (0..1).
     */
    get areaError() {}

    /**
     * Maximum allowed area distortion (0..1).
     */
    set areaError(value) {}

    /**
     * This angle (in degrees) or greater between triangles will cause seam to be created.
     */
    get hardAngle() {}

    /**
     * This angle (in degrees) or greater between triangles will cause seam to be created.
     */
    set hardAngle(value) {}

    /**
     * How much uv-islands will be padded.
     */
    get packMargin() {}

    /**
     * How much uv-islands will be padded.
     */
    set packMargin(value) {}


}