class Keyframe {


    /**
     * Describes the tangent when approaching this point from the previous point in the curve.
     */
    get inTangent() {}

    /**
     * Describes the tangent when approaching this point from the previous point in the curve.
     */
    set inTangent(value) {}

    /**
     * Describes the tangent when leaving this point towards the next point in the curve.
     */
    get outTangent() {}

    /**
     * Describes the tangent when leaving this point towards the next point in the curve.
     */
    set outTangent(value) {}

    /**
     * TangentMode is deprecated.  Use AnimationUtility.SetKeyLeftTangentMode or AnimationUtility.SetKeyRightTangentMode instead.
     */
    get tangentMode() {}

    /**
     * TangentMode is deprecated.  Use AnimationUtility.SetKeyLeftTangentMode or AnimationUtility.SetKeyRightTangentMode instead.
     */
    set tangentMode(value) {}

    /**
     * The time of the keyframe.
     */
    get time() {}

    /**
     * The time of the keyframe.
     */
    set time(value) {}

    /**
     * The value of the curve at keyframe.
     */
    get value() {}

    /**
     * The value of the curve at keyframe.
     */
    set value(value) {}


}