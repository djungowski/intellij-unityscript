class AnimationUtility {
    /**
     * Triggered when an animation curve inside an animation clip has been modified.
     */
    static get onCurveWasModified() {}

    /**
     * Triggered when an animation curve inside an animation clip has been modified.
     */
    static set onCurveWasModified(value) {}


    /**
     * Calculates path from root transform to target transform.
     */
    static CalculateTransformPath() {}

    /**
     * Returns all the animatable bindings that a specific game object has.
     */
    static GetAnimatableBindings() {}

    /**
     * Returns the animated object that the binding is pointing to.
     */
    static GetAnimatedObject() {}

    /**
     * Returns the array of AnimationClips that are referenced in the Animation component.
     */
    static GetAnimationClips() {}

    /**
     * Retrieves all animation events associated with the animation clip.
     */
    static GetAnimationEvents() {}

    /**
     * Returns all the float curve bindings currently stored in the clip.
     */
    static GetCurveBindings() {}

    /**
     * Return the float curve that the binding is pointing to.
     */
    static GetEditorCurve() {}

    /**
     * Retrieves the current float value by sampling a curve value on a specific game object.
     */
    static GetFloatValue() {}

    /**
     * Return the object reference curve that the binding is pointing to.
     */
    static GetObjectReferenceCurve() {}

    /**
     * Returns all the object reference curve bindings currently stored in the clip.
     */
    static GetObjectReferenceCurveBindings() {}

    /**
     * Set the additive reference pose from referenceClip at time for animation clip clip.
     */
    static SetAdditiveReferencePose() {}

    /**
     * Sets the array of AnimationClips to be referenced in the Animation component.
     */
    static SetAnimationClips() {}

    /**
     * Replaces all animation events in the animation clip.
     */
    static SetAnimationEvents() {}

    /**
     * Adds, modifies or removes an editor float curve in a given clip.
     */
    static SetEditorCurve() {}

    /**
     * Change the specified keyframe broken tangent flag.
     */
    static SetKeyBroken() {}

    /**
     * Change the specified keyframe tangent mode.
     */
    static SetKeyLeftTangentMode() {}

    /**
     * Change the specified keyframe tangent mode.
     */
    static SetKeyRightTangentMode() {}

    /**
     * Adds, modifies or removes an object reference curve in a given clip.
     */
    static SetObjectReferenceCurve() {}



}