class PlatformEffector2D {

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
     * The rotational offset angle from the local &#039;up&#039;.
     */
    get rotationalOffset() {}

    /**
     * The rotational offset angle from the local &#039;up&#039;.
     */
    set rotationalOffset(value) {}

    /**
     * The angle of an arc that defines the sides of the platform centered on the local &#039;left&#039; and &#039;right&#039; of the effector. Any collision normals within this arc are considered for the &#039;side&#039; behaviours.
     */
    get sideArc() {}

    /**
     * The angle of an arc that defines the sides of the platform centered on the local &#039;left&#039; and &#039;right&#039; of the effector. Any collision normals within this arc are considered for the &#039;side&#039; behaviours.
     */
    set sideArc(value) {}

    /**
     * The angle of an arc that defines the surface of the platform centered of the local &#039;up&#039; of the effector.
     */
    get surfaceArc() {}

    /**
     * The angle of an arc that defines the surface of the platform centered of the local &#039;up&#039; of the effector.
     */
    set surfaceArc(value) {}

    /**
     * Should the one-way collision behaviour be used?
     */
    get useOneWay() {}

    /**
     * Should the one-way collision behaviour be used?
     */
    set useOneWay(value) {}

    /**
     * Ensures that all contacts controlled by the one-way behaviour act the same.
     */
    get useOneWayGrouping() {}

    /**
     * Ensures that all contacts controlled by the one-way behaviour act the same.
     */
    set useOneWayGrouping(value) {}

    /**
     * Should bounce be used on the platform sides?
     */
    get useSideBounce() {}

    /**
     * Should bounce be used on the platform sides?
     */
    set useSideBounce(value) {}

    /**
     * Should friction be used on the platform sides?
     */
    get useSideFriction() {}

    /**
     * Should friction be used on the platform sides?
     */
    set useSideFriction(value) {}

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