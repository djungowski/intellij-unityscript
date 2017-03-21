class Vector4 {
    /**
     * Shorthand for writing Vector4(1,1,1,1).
     */
    static get one() {}

    /**
     * Shorthand for writing Vector4(1,1,1,1).
     */
    static set one(value) {}

    /**
     * Shorthand for writing Vector4(0,0,0,0).
     */
    static get zero() {}

    /**
     * Shorthand for writing Vector4(0,0,0,0).
     */
    static set zero(value) {}


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
     * Moves a point current towards target.
     */
    static MoveTowards() {}

    /**
     * 
     */
    static Normalize() {}

    /**
     * Projects a vector onto another vector.
     */
    static Project() {}

    /**
     * Multiplies two vectors component-wise.
     */
    static Scale() {}


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
     * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
     */
    get this[int]() {}

    /**
     * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
     */
    set this[int](value) {}

    /**
     * W component of the vector.
     */
    get w() {}

    /**
     * W component of the vector.
     */
    set w(value) {}

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
     * Set x, y, z and w components of an existing Vector4.
     */
    Set() {}

    /**
     * Returns a nicely formatted string for this vector.
     */
    ToString() {}

}