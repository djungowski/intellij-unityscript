class Animation {

    /**
     * Adds a clip to the animation with name newName.
     */
    static AddClip() {}

    /**
     * Blends the animation named animation towards targetWeight over the next time seconds.
     */
    static Blend() {}

    /**
     * Fades the animation with name animation in over a period of time seconds and fades other animations out.
     */
    static CrossFade() {}

    /**
     * Cross fades an animation after previous animations has finished playing.
     */
    static CrossFadeQueued() {}

    /**
     * Get the number of clips currently assigned to this animation.
     */
    static GetClipCount() {}

    /**
     * Is the animation named name playing?
     */
    static IsPlaying() {}

    /**
     * Plays an animation without any blending.
     */
    static Play() {}

    /**
     * Plays an animation after previous animations has finished playing.
     */
    static PlayQueued() {}

    /**
     * Remove clip from the animation list.
     */
    static RemoveClip() {}

    /**
     * Rewinds the animation named name.
     */
    static Rewind() {}

    /**
     * Samples animations at the current state.
     */
    static Sample() {}

    /**
     * Stops all playing animations that were started with this Animation.
     */
    static Stop() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
     */
    static BroadcastMessage() {}

    /**
     * Is this game object tagged with tag ?
     */
    static CompareTag() {}

    /**
     * Returns the component of Type type if the game object has one attached, null if it doesn&#039;t.
     */
    static GetComponent() {}

    /**
     * Returns the component of Type type in the GameObject or any of its children using depth first search.
     */
    static GetComponentInChildren() {}

    /**
     * Returns the component of Type type in the GameObject or any of its parents.
     */
    static GetComponentInParent() {}

    /**
     * Returns all components of Type type in the GameObject.
     */
    static GetComponents() {}

    /**
     * Returns all components of Type type in the GameObject or any of its children.
     */
    static GetComponentsInChildren() {}

    /**
     * Returns all components of Type type in the GameObject or any of its parents.
     */
    static GetComponentsInParent() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object.
     */
    static SendMessage() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
     */
    static SendMessageUpwards() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * When turned on, animations will be executed in the physics loop. This is only useful in conjunction with kinematic rigidbodies.
     */
    get animatePhysics() {}

    /**
     * When turned on, animations will be executed in the physics loop. This is only useful in conjunction with kinematic rigidbodies.
     */
    set animatePhysics(value) {}

    /**
     * The default animation.
     */
    get clip() {}

    /**
     * The default animation.
     */
    set clip(value) {}

    /**
     * Controls culling of this Animation component.
     */
    get cullingType() {}

    /**
     * Controls culling of this Animation component.
     */
    set cullingType(value) {}

    /**
     * Are we playing any animations?
     */
    get isPlaying() {}

    /**
     * Are we playing any animations?
     */
    set isPlaying(value) {}

    /**
     * AABB of this Animation animation component in local space.
     */
    get localBounds() {}

    /**
     * AABB of this Animation animation component in local space.
     */
    set localBounds(value) {}

    /**
     * Should the default animation clip (the Animation.clip property) automatically start playing on startup?
     */
    get playAutomatically() {}

    /**
     * Should the default animation clip (the Animation.clip property) automatically start playing on startup?
     */
    set playAutomatically(value) {}

    /**
     * Returns the animation state named name.
     */
    get this[string]() {}

    /**
     * Returns the animation state named name.
     */
    set this[string](value) {}

    /**
     * How should time beyond the playback range of the clip be treated?
     */
    get wrapMode() {}

    /**
     * How should time beyond the playback range of the clip be treated?
     */
    set wrapMode(value) {}

    /**
     * Enabled Behaviours are Updated, disabled Behaviours are not.
     */
    get enabled() {}

    /**
     * Enabled Behaviours are Updated, disabled Behaviours are not.
     */
    set enabled(value) {}

    /**
     * Has the Behaviour had enabled called.
     */
    get isActiveAndEnabled() {}

    /**
     * Has the Behaviour had enabled called.
     */
    set isActiveAndEnabled(value) {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    get gameObject() {}

    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    set gameObject(value) {}

    /**
     * The tag of this game object.
     */
    get tag() {}

    /**
     * The tag of this game object.
     */
    set tag(value) {}

    /**
     * The Transform attached to this GameObject.
     */
    get transform() {}

    /**
     * The Transform attached to this GameObject.
     */
    set transform(value) {}

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
     * Adds a clip to the animation with name newName.
     */
    AddClip() {}

    /**
     * Blends the animation named animation towards targetWeight over the next time seconds.
     */
    Blend() {}

    /**
     * Fades the animation with name animation in over a period of time seconds and fades other animations out.
     */
    CrossFade() {}

    /**
     * Cross fades an animation after previous animations has finished playing.
     */
    CrossFadeQueued() {}

    /**
     * Get the number of clips currently assigned to this animation.
     */
    GetClipCount() {}

    /**
     * Is the animation named name playing?
     */
    IsPlaying() {}

    /**
     * Plays an animation without any blending.
     */
    Play() {}

    /**
     * Plays an animation after previous animations has finished playing.
     */
    PlayQueued() {}

    /**
     * Remove clip from the animation list.
     */
    RemoveClip() {}

    /**
     * Rewinds the animation named name.
     */
    Rewind() {}

    /**
     * Samples animations at the current state.
     */
    Sample() {}

    /**
     * Stops all playing animations that were started with this Animation.
     */
    Stop() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
     */
    BroadcastMessage() {}

    /**
     * Is this game object tagged with tag ?
     */
    CompareTag() {}

    /**
     * Returns the component of Type type if the game object has one attached, null if it doesn&#039;t.
     */
    GetComponent() {}

    /**
     * Returns the component of Type type in the GameObject or any of its children using depth first search.
     */
    GetComponentInChildren() {}

    /**
     * Returns the component of Type type in the GameObject or any of its parents.
     */
    GetComponentInParent() {}

    /**
     * Returns all components of Type type in the GameObject.
     */
    GetComponents() {}

    /**
     * Returns all components of Type type in the GameObject or any of its children.
     */
    GetComponentsInChildren() {}

    /**
     * Returns all components of Type type in the GameObject or any of its parents.
     */
    GetComponentsInParent() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object.
     */
    SendMessage() {}

    /**
     * Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
     */
    SendMessageUpwards() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}