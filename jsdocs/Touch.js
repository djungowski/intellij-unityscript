class Touch {


    /**
     * Value of 0 radians indicates that the stylus is parallel to the surface, pi/2 indicates that it is perpendicular.
     */
    get altitudeAngle() {}

    /**
     * Value of 0 radians indicates that the stylus is parallel to the surface, pi/2 indicates that it is perpendicular.
     */
    set altitudeAngle(value) {}

    /**
     * Value of 0 radians indicates that the stylus is pointed along the x-axis of the device.
     */
    get azimuthAngle() {}

    /**
     * Value of 0 radians indicates that the stylus is pointed along the x-axis of the device.
     */
    set azimuthAngle(value) {}

    /**
     * The position delta since last change.
     */
    get deltaPosition() {}

    /**
     * The position delta since last change.
     */
    set deltaPosition(value) {}

    /**
     * Amount of time that has passed since the last recorded change in Touch values.
     */
    get deltaTime() {}

    /**
     * Amount of time that has passed since the last recorded change in Touch values.
     */
    set deltaTime(value) {}

    /**
     * The unique index for the touch.
     */
    get fingerId() {}

    /**
     * The unique index for the touch.
     */
    set fingerId(value) {}

    /**
     * The maximum possible pressure value for a platform.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
     */
    get maximumPossiblePressure() {}

    /**
     * The maximum possible pressure value for a platform.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
     */
    set maximumPossiblePressure(value) {}

    /**
     * Describes the phase of the touch.
     */
    get phase() {}

    /**
     * Describes the phase of the touch.
     */
    set phase(value) {}

    /**
     * The position of the touch in pixel coordinates.
     */
    get position() {}

    /**
     * The position of the touch in pixel coordinates.
     */
    set position(value) {}

    /**
     * The current amount of pressure being applied to a touch.  1.0f is considered to be the pressure of an average touch.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
     */
    get pressure() {}

    /**
     * The current amount of pressure being applied to a touch.  1.0f is considered to be the pressure of an average touch.  If Input.touchPressureSupported returns false, the value of this property will always be 1.0f.
     */
    set pressure(value) {}

    /**
     * An estimated value of the radius of a touch.  Add radiusVariance to get the maximum touch size, subtract it to get the minimum touch size.
     */
    get radius() {}

    /**
     * An estimated value of the radius of a touch.  Add radiusVariance to get the maximum touch size, subtract it to get the minimum touch size.
     */
    set radius(value) {}

    /**
     * The amount that the radius varies by for a touch.
     */
    get radiusVariance() {}

    /**
     * The amount that the radius varies by for a touch.
     */
    set radiusVariance(value) {}

    /**
     * The raw position used for the touch.
     */
    get rawPosition() {}

    /**
     * The raw position used for the touch.
     */
    set rawPosition(value) {}

    /**
     * Number of taps.
     */
    get tapCount() {}

    /**
     * Number of taps.
     */
    set tapCount(value) {}

    /**
     * A value that indicates whether a touch was of Direct, Indirect (or remote), or Stylus type.
     */
    get type() {}

    /**
     * A value that indicates whether a touch was of Direct, Indirect (or remote), or Stylus type.
     */
    set type(value) {}


}