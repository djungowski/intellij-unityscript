class AnimatorOverrideController {

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
     * Returns the list of orignal clip from the controller and their override clip.
     */
    get clips() {}

    /**
     * Returns the list of orignal clip from the controller and their override clip.
     */
    set clips(value) {}

    /**
     * The Controller that the AnimatorOverrideController overrides.
     */
    get runtimeAnimatorController() {}

    /**
     * The Controller that the AnimatorOverrideController overrides.
     */
    set runtimeAnimatorController(value) {}

    /**
     * Returns either the overriding clip if set or the original clip named name.
     */
    get this[string]() {}

    /**
     * Returns either the overriding clip if set or the original clip named name.
     */
    set this[string](value) {}

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
     * Retrieves all AnimationClip used by the controller.
     */
    get animationClips() {}

    /**
     * Retrieves all AnimationClip used by the controller.
     */
    set animationClips(value) {}


    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}