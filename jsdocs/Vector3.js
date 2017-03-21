class Vector3 {
    /**
     * Shorthand for writing Vector3(0, 0, -1).
     */
    static get back() {}

    /**
     * Shorthand for writing Vector3(0, 0, -1).
     */
    static set back(value) {}

    /**
     * Shorthand for writing Vector3(0, -1, 0).
     */
    static get down() {}

    /**
     * Shorthand for writing Vector3(0, -1, 0).
     */
    static set down(value) {}

    /**
     * Shorthand for writing Vector3(0, 0, 1).
     */
    static get forward() {}

    /**
     * Shorthand for writing Vector3(0, 0, 1).
     */
    static set forward(value) {}

    /**
     * Shorthand for writing Vector3(-1, 0, 0).
     */
    static get left() {}

    /**
     * Shorthand for writing Vector3(-1, 0, 0).
     */
    static set left(value) {}

    /**
     * Shorthand for writing Vector3(1, 1, 1).
     */
    static get one() {}

    /**
     * Shorthand for writing Vector3(1, 1, 1).
     */
    static set one(value) {}

    /**
     * Shorthand for writing Vector3(1, 0, 0).
     */
    static get right() {}

    /**
     * Shorthand for writing Vector3(1, 0, 0).
     */
    static set right(value) {}

    /**
     * Shorthand for writing Vector3(0, 1, 0).
     */
    static get up() {}

    /**
     * Shorthand for writing Vector3(0, 1, 0).
     */
    static set up(value) {}

    /**
     * Shorthand for writing Vector3(0, 0, 0).
     */
    static get zero() {}

    /**
     * Shorthand for writing Vector3(0, 0, 0).
     */
    static set zero(value) {}


    /**
     * Returns the angle in degrees between from and to.
     */
    static Angle() {}

    /**
     * Returns a copy of vector with its magnitude clamped to maxLength.
     */
    static ClampMagnitude() {}

    /**
     * Cross Product of two vectors.
     */
    static Cross() {}

    /**
     * Returns the distance between a and b.
     */
    static Distance() {}

    /**
     * Dot Product of two vectors.
     */
    static Dot() {}

    /**
     * Linearly interpolates between two vectors.
     */
    static Lerp() {}

    /**
     * Linearly interpolates between two vectors.
     */
    static LerpUnclamped() {}

    /**
     * Returns a vector that is made from the largest components of two vectors.
     */
    static Max() {}

    /**
     * Returns a vector that is made from the smallest components of two vectors.
     */
    static Min() {}

    /**
     * Moves a point current in a straight line towards a target point.
     */
    static MoveTowards() {}

    /**
     * 
     */
    static Normalize() {}

    /**
     * Makes vectors normalized and orthogonal to each other.
     */
    static OrthoNormalize() {}

    /**
     * Projects a vector onto another vector.
     */
    static Project() {}

    /**
     * Projects a vector onto a plane defined by a normal orthogonal to the plane.
     */
    static ProjectOnPlane() {}

    /**
     * Reflects a vector off the plane defined by a normal.
     */
    static Reflect() {}

    /**
     * Rotates a vector current towards target.
     */
    static RotateTowards() {}

    /**
     * Multiplies two vectors component-wise.
     */
    static Scale() {}

    /**
     * Spherically interpolates between two vectors.
     */
    static Slerp() {}

    /**
     * Spherically interpolates between two vectors.
     */
    static SlerpUnclamped() {}

    /**
     * Gradually changes a vector towards a desired goal over time.
     */
    static SmoothDamp() {}


    /**
     * Returns the length of this vector (Read Only).
     */
    get magnitude() {}

    /**
     * Returns the length of this vector (Read Only).
     */
    set magnitude(value) {}

    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     */
    get normalized() {}

    /**
     * Returns this vector with a magnitude of 1 (Read Only).
     */
    set normalized(value) {}

    /**
     * Returns the squared length of this vector (Read Only).
     */
    get sqrMagnitude() {}

    /**
     * Returns the squared length of this vector (Read Only).
     */
    set sqrMagnitude(value) {}

    /**
     * Access the x, y, z components using [0], [1], [2] respectively.
     */
    get this[int]() {}

    /**
     * Access the x, y, z components using [0], [1], [2] respectively.
     */
    set this[int](value) {}

    /**
     * X component of the vector.
     */
    get x() {}

    /**
     * X component of the vector.
     */
    set x(value) {}

    /**
     * Y component of the vector.
     */
    get y() {}

    /**
     * Y component of the vector.
     */
    set y(value) {}

    /**
     * Z component of the vector.
     */
    get z() {}

    /**
     * Z component of the vector.
     */
    set z(value) {}


    /**
     * Set x, y and z components of an existing Vector3.
     */
    Set() {}

    /**
     * Returns a nicely formatted string for this vector.
     */
    ToString() {}

}