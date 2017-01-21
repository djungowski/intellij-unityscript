class LODGroup {
    /**
     * The cross-fading animation duration in seconds. ArgumentException will be thrown if it is set to zero or a negative value.
     */
    static get crossFadeAnimationDuration() {}

    /**
     * The cross-fading animation duration in seconds. ArgumentException will be thrown if it is set to zero or a negative value.
     */
    static set crossFadeAnimationDuration(value) {}


    /**
     * 
     */
    static ForceLOD() {}

    /**
     * Returns the array of LODs.
     */
    static GetLODs() {}

    /**
     * Recalculate the bounding region for the LODGroup (Relatively slow, do not call often).
     */
    static RecalculateBounds() {}

    /**
     * Set the LODs for the LOD group. This will remove any existing LODs configured on the LODGroup.
     */
    static SetLODs() {}

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
     * Specify if the cross-fading should be animated by time. The animation duration is specified globally as crossFadeAnimationDuration.
     */
    get animateCrossFading() {}

    /**
     * Specify if the cross-fading should be animated by time. The animation duration is specified globally as crossFadeAnimationDuration.
     */
    set animateCrossFading(value) {}

    /**
     * Enable / Disable the LODGroup - Disabling will turn off all renderers.
     */
    get enabled() {}

    /**
     * Enable / Disable the LODGroup - Disabling will turn off all renderers.
     */
    set enabled(value) {}

    /**
     * The LOD fade mode used.
     */
    get fadeMode() {}

    /**
     * The LOD fade mode used.
     */
    set fadeMode(value) {}

    /**
     * The local reference point against which the LOD distance is calculated.
     */
    get localReferencePoint() {}

    /**
     * The local reference point against which the LOD distance is calculated.
     */
    set localReferencePoint(value) {}

    /**
     * The number of LOD levels.
     */
    get lodCount() {}

    /**
     * The number of LOD levels.
     */
    set lodCount(value) {}

    /**
     * The size of the LOD object in local space.
     */
    get size() {}

    /**
     * The size of the LOD object in local space.
     */
    set size(value) {}

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
     * 
     */
    ForceLOD() {}

    /**
     * Returns the array of LODs.
     */
    GetLODs() {}

    /**
     * Recalculate the bounding region for the LODGroup (Relatively slow, do not call often).
     */
    RecalculateBounds() {}

    /**
     * Set the LODs for the LOD group. This will remove any existing LODs configured on the LODGroup.
     */
    SetLODs() {}

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