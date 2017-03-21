class SurfaceEffector2D {

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
     * The scale of the impulse force applied while attempting to reach the surface speed.
     */
    get forceScale() {}

    /**
     * The scale of the impulse force applied while attempting to reach the surface speed.
     */
    set forceScale(value) {}

    /**
     * The speed to be maintained along the surface.
     */
    get speed() {}

    /**
     * The speed to be maintained along the surface.
     */
    set speed(value) {}

    /**
     * The speed variation (from zero to the variation) added to base speed to be applied.
     */
    get speedVariation() {}

    /**
     * The speed variation (from zero to the variation) added to base speed to be applied.
     */
    set speedVariation(value) {}

    /**
     * Should bounce be used for any contact with the surface?
     */
    get useBounce() {}

    /**
     * Should bounce be used for any contact with the surface?
     */
    set useBounce(value) {}

    /**
     * Should the impulse force but applied to the contact point?
     */
    get useContactForce() {}

    /**
     * Should the impulse force but applied to the contact point?
     */
    set useContactForce(value) {}

    /**
     * Should friction be used for any contact with the surface?
     */
    get useFriction() {}

    /**
     * Should friction be used for any contact with the surface?
     */
    set useFriction(value) {}

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
     * The mask used to select specific layers allowed to interact with the effector.
     */
    get colliderMask() {}

    /**
     * The mask used to select specific layers allowed to interact with the effector.
     */
    set colliderMask(value) {}

    /**
     * Should the collider-mask be used or the global collision matrix?
     */
    get useColliderMask() {}

    /**
     * Should the collider-mask be used or the global collision matrix?
     */
    set useColliderMask(value) {}

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