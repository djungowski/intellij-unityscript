class Quaternion {
    /**
     * The identity rotation (Read Only).
     */
    static get identity() {}

    /**
     * The identity rotation (Read Only).
     */
    static set identity(value) {}


    /**
     * Returns the angle in degrees between two rotations a and b.
     */
    static Angle() {}

    /**
     * Creates a rotation which rotates angle degrees around axis.
     */
    static AngleAxis() {}

    /**
     * The dot product between two rotations.
     */
    static Dot() {}

    /**
     * Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis (in that order).
     */
    static Euler() {}

    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     */
    static FromToRotation() {}

    /**
     * Returns the Inverse of rotation.
     */
    static Inverse() {}

    /**
     * Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1].
     */
    static Lerp() {}

    /**
     * Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped.
     */
    static LerpUnclamped() {}

    /**
     * Creates a rotation with the specified forward and upwards directions.
     */
    static LookRotation() {}

    /**
     * Rotates a rotation from towards to.
     */
    static RotateTowards() {}

    /**
     * Spherically interpolates between a and b by t. The parameter t is clamped to the range [0, 1].
     */
    static Slerp() {}

    /**
     * Spherically interpolates between a and b by t. The parameter t is not clamped.
     */
    static SlerpUnclamped() {}


    /**
     * Returns the euler angle representation of the rotation.
     */
    get eulerAngles() {}

    /**
     * Returns the euler angle representation of the rotation.
     */
    set eulerAngles(value) {}

    /**
     * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
     */
    get this[int]() {}

    /**
     * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
     */
    set this[int](value) {}

    /**
     * W component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    get w() {}

    /**
     * W component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    set w(value) {}

    /**
     * X component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    get x() {}

    /**
     * X component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    set x(value) {}

    /**
     * Y component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    get y() {}

    /**
     * Y component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    set y(value) {}

    /**
     * Z component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    get z() {}

    /**
     * Z component of the Quaternion. Don&#039;t modify this directly unless you know quaternions inside out.
     */
    set z(value) {}


    /**
     * Set x, y, z and w components of an existing Quaternion.
     */
    Set() {}

    /**
     * Creates a rotation which rotates from fromDirection to toDirection.
     */
    SetFromToRotation() {}

    /**
     * Creates a rotation with the specified forward and upwards directions.
     */
    SetLookRotation() {}

    /**
     * Converts a rotation to angle-axis representation (angles in degrees).
     */
    ToAngleAxis() {}

    /**
     * Returns a nicely formatted string of the Quaternion.
     */
    ToString() {}

}