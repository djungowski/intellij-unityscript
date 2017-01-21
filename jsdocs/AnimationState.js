class AnimationState {


    /**
     * Which blend mode should be used?
     */
    get blendMode() {}

    /**
     * Which blend mode should be used?
     */
    set blendMode(value) {}

    /**
     * The clip that is being played by this animation state.
     */
    get clip() {}

    /**
     * The clip that is being played by this animation state.
     */
    set clip(value) {}

    /**
     * Enables / disables the animation.
     */
    get enabled() {}

    /**
     * Enables / disables the animation.
     */
    set enabled(value) {}

    /**
     * The length of the animation clip in seconds.
     */
    get length() {}

    /**
     * The length of the animation clip in seconds.
     */
    set length(value) {}

    /**
     * The name of the animation.
     */
    get name() {}

    /**
     * The name of the animation.
     */
    set name(value) {}

    /**
     * The normalized playback speed.
     */
    get normalizedSpeed() {}

    /**
     * The normalized playback speed.
     */
    set normalizedSpeed(value) {}

    /**
     * The normalized time of the animation.
     */
    get normalizedTime() {}

    /**
     * The normalized time of the animation.
     */
    set normalizedTime(value) {}

    /**
     * The playback speed of the animation. 1 is normal playback speed.
     */
    get speed() {}

    /**
     * The playback speed of the animation. 1 is normal playback speed.
     */
    set speed(value) {}

    /**
     * The current time of the animation.
     */
    get time() {}

    /**
     * The current time of the animation.
     */
    set time(value) {}

    /**
     * The weight of animation.
     */
    get weight() {}

    /**
     * The weight of animation.
     */
    set weight(value) {}

    /**
     * Wrapping mode of the animation.
     */
    get wrapMode() {}

    /**
     * Wrapping mode of the animation.
     */
    set wrapMode(value) {}


    /**
     * Adds a transform which should be animated. This allows you to reduce the number of animations you have to create.
     */
    AddMixingTransform() {}

    /**
     * Removes a transform which should be animated.
     */
    RemoveMixingTransform() {}

}