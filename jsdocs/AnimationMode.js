class AnimationMode {
    /**
     * The color used to show that a property is currently being animated.
     */
    static get animatedPropertyColor() {}

    /**
     * The color used to show that a property is currently being animated.
     */
    static set animatedPropertyColor(value) {}


    /**
     * Initialise the start of the animation clip sampling.
     */
    static BeginSampling() {}

    /**
     * Finish the sampling of the animation clip.
     */
    static EndSampling() {}

    /**
     * Are we currently in AnimationMode?
     */
    static InAnimationMode() {}

    /**
     * Is the specified property currently in animation mode and being animated?
     */
    static IsPropertyAnimated() {}

    /**
     * Samples an AnimationClip on the object and also records any modified
        properties in AnimationMode.
     */
    static SampleAnimationClip() {}

    /**
     * Starts the animation mode.
     */
    static StartAnimationMode() {}

    /**
     * Stops Animation mode, reverts all properties that were animated in animation mode.
     */
    static StopAnimationMode() {}



}