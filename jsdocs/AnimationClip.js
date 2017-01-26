class AnimationClip {

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}


    /**
     * Animation Events for this animation clip.
     */
    get events() {}

    /**
     * Animation Events for this animation clip.
     */
    set events(value) {}

    /**
     * Frame rate at which keyframes are sampled. (Read Only)
     */
    get frameRate() {}

    /**
     * Frame rate at which keyframes are sampled. (Read Only)
     */
    set frameRate(value) {}

    /**
     * Returns true if the animation contains curve that drives a humanoid rig.
     */
    get humanMotion() {}

    /**
     * Returns true if the animation contains curve that drives a humanoid rig.
     */
    set humanMotion(value) {}

    /**
     * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
     */
    get legacy() {}

    /**
     * Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ).
     */
    set legacy(value) {}

    /**
     * Animation length in seconds. (Read Only)
     */
    get length() {}

    /**
     * Animation length in seconds. (Read Only)
     */
    set length(value) {}

    /**
     * AABB of this Animation Clip in local space of Animation component that it is attached too.
     */
    get localBounds() {}

    /**
     * AABB of this Animation Clip in local space of Animation component that it is attached too.
     */
    set localBounds(value) {}

    /**
     * Sets the default wrap mode used in the animation state.
     */
    get wrapMode() {}

    /**
     * Sets the default wrap mode used in the animation state.
     */
    set wrapMode(value) {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    get hideFlags() {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    set hideFlags(value) {}

    /**
     * The name of the object.
     */
    get name() {}

    /**
     * The name of the object.
     */
    set name(value) {}


    /**
     * Adds an animation event to the clip.
     */
    AddEvent() {}

    /**
     * Clears all curves from the clip.
     */
    ClearCurves() {}

    /**
     * Realigns quaternion keys to ensure shortest interpolation paths.
     */
    EnsureQuaternionContinuity() {}

    /**
     * Samples an animation at a given time for any animated properties.
     */
    SampleAnimation() {}

    /**
     * Assigns the curve to animate a specific property.
     */
    SetCurve() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}