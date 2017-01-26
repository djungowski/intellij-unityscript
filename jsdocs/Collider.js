class Collider {

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
     * The rigidbody the collider is attached to.
     */
    get attachedRigidbody() {}

    /**
     * The rigidbody the collider is attached to.
     */
    set attachedRigidbody(value) {}

    /**
     * The world space bounding volume of the collider.
     */
    get bounds() {}

    /**
     * The world space bounding volume of the collider.
     */
    set bounds(value) {}

    /**
     * Contact offset value of this collider.
     */
    get contactOffset() {}

    /**
     * Contact offset value of this collider.
     */
    set contactOffset(value) {}

    /**
     * Enabled Colliders will collide with other colliders, disabled Colliders won&#039;t.
     */
    get enabled() {}

    /**
     * Enabled Colliders will collide with other colliders, disabled Colliders won&#039;t.
     */
    set enabled(value) {}

    /**
     * Is the collider a trigger?
     */
    get isTrigger() {}

    /**
     * Is the collider a trigger?
     */
    set isTrigger(value) {}

    /**
     * The material used by the collider.
     */
    get material() {}

    /**
     * The material used by the collider.
     */
    set material(value) {}

    /**
     * The shared physic material of this collider.
     */
    get sharedMaterial() {}

    /**
     * The shared physic material of this collider.
     */
    set sharedMaterial(value) {}

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
     * The closest point to the bounding box of the attached collider.
     */
    ClosestPointOnBounds() {}

    /**
     * Casts a Ray that ignores all Colliders except this one.
     */
    Raycast() {}

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