class AnimationCurve {

    /**
     * Creates an ease-in and out curve starting at timeStart, valueStart and ending at timeEnd, valueEnd.
     */
    static EaseInOut() {}

    /**
     * A straight Line starting at timeStart, valueStart and ending at timeEnd, valueEnd.
     */
    static Linear() {}


    /**
     * All keys defined in the animation curve.
     */
    get keys() {}

    /**
     * All keys defined in the animation curve.
     */
    set keys(value) {}

    /**
     * The number of keys in the curve. (Read Only)
     */
    get length() {}

    /**
     * The number of keys in the curve. (Read Only)
     */
    set length(value) {}

    /**
     * The behaviour of the animation after the last keyframe.
     */
    get postWrapMode() {}

    /**
     * The behaviour of the animation after the last keyframe.
     */
    set postWrapMode(value) {}

    /**
     * The behaviour of the animation before the first keyframe.
     */
    get preWrapMode() {}

    /**
     * The behaviour of the animation before the first keyframe.
     */
    set preWrapMode(value) {}

    /**
     * Retrieves the key at index. (Read Only)
     */
    get this[int]() {}

    /**
     * Retrieves the key at index. (Read Only)
     */
    set this[int](value) {}


    /**
     * Add a new key to the curve.
     */
    AddKey() {}

    /**
     * Evaluate the curve at time.
     */
    Evaluate() {}

    /**
     * Removes the keyframe at index and inserts key.
     */
    MoveKey() {}

    /**
     * Removes a key.
     */
    RemoveKey() {}

    /**
     * Smooth the in and out tangents of the keyframe at index.
     */
    SmoothTangents() {}

}