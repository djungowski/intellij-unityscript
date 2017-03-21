class Vector2 {
    /**
     * Shorthand for writing Vector2(0, -1).
     */
    static get down() {}

    /**
     * Shorthand for writing Vector2(0, -1).
     */
    static set down(value) {}

    /**
     * Shorthand for writing Vector2(-1, 0).
     */
    static get left() {}

    /**
     * Shorthand for writing Vector2(-1, 0).
     */
    static set left(value) {}

    /**
     * Shorthand for writing Vector2(1, 1).
     */
    static get one() {}

    /**
     * Shorthand for writing Vector2(1, 1).
     */
    static set one(value) {}

    /**
     * Shorthand for writing Vector2(1, 0).
     */
    static get right() {}

    /**
     * Shorthand for writing Vector2(1, 0).
     */
    static set right(value) {}

    /**
     * Shorthand for writing Vector2(0, 1).
     */
    static get up() {}

    /**
     * Shorthand for writing Vector2(0, 1).
     */
    static set up(value) {}

    /**
     * Shorthand for writing Vector2(0, 0).
     */
    static get zero() {}

    /**
     * Shorthand for writing Vector2(0, 0).
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
     * Returns the distance between a and b.
     */
    static Distance() {}

    /**
     * Dot Product of two vectors.
     */
    static Dot() {}

    /**
     * Linearly interpolates between vectors a and b by t.
     */
    static Lerp() {}

    /**
     * Linearly interpolates between vectors a and b by t.
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
     * Reflects a vector off the vector defined by a normal.
     */
    static Reflect() {}

    /**
     * Multiplies two vectors component-wise.
     */
    static Scale() {}

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
     * Access the x or y component using [0] or [1] respectively.
     */
    get this[int]() {}

    /**
     * Access the x or y component using [0] or [1] respectively.
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
     * Makes this vector have a magnitude of 1.
     */
    Normalize() {}

    /**
     * Set x and y components of an existing Vector2.
     */
    Set() {}

    /**
     * Returns a nicely formatted string for this vector.
     */
    ToString() {}

}