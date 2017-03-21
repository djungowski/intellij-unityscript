class CircleCollider2D {

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
     * Radius of the circle.
     */
    get radius() {}

    /**
     * Radius of the circle.
     */
    set radius(value) {}

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
     * The Rigidbody2D attached to the Collider2D&#039;s GameObject.
     */
    get attachedRigidbody() {}

    /**
     * The Rigidbody2D attached to the Collider2D&#039;s GameObject.
     */
    set attachedRigidbody(value) {}

    /**
     * Get the bounciness used by the collider.
     */
    get bounciness() {}

    /**
     * Get the bounciness used by the collider.
     */
    set bounciness(value) {}

    /**
     * The world space bounding area of the collider.
     */
    get bounds() {}

    /**
     * The world space bounding area of the collider.
     */
    set bounds(value) {}

    /**
     * The density of the collider used to calculate its mass (when auto mass is enabled).
     */
    get density() {}

    /**
     * The density of the collider used to calculate its mass (when auto mass is enabled).
     */
    set density(value) {}

    /**
     * Get the friction used by the collider.
     */
    get friction() {}

    /**
     * Get the friction used by the collider.
     */
    set friction(value) {}

    /**
     * Is this collider configured as a trigger?
     */
    get isTrigger() {}

    /**
     * Is this collider configured as a trigger?
     */
    set isTrigger(value) {}

    /**
     * The local offset of the collider geometry.
     */
    get offset() {}

    /**
     * The local offset of the collider geometry.
     */
    set offset(value) {}

    /**
     * The number of separate shaped regions in the collider.
     */
    get shapeCount() {}

    /**
     * The number of separate shaped regions in the collider.
     */
    set shapeCount(value) {}

    /**
     * The PhysicsMaterial2D that is applied to this collider.
     */
    get sharedMaterial() {}

    /**
     * The PhysicsMaterial2D that is applied to this collider.
     */
    set sharedMaterial(value) {}

    /**
     * Whether the collider is used by an attached effector or not.
     */
    get usedByEffector() {}

    /**
     * Whether the collider is used by an attached effector or not.
     */
    set usedByEffector(value) {}

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
     * Casts the collider shape into the scene starting at the collider position ignoring the collider itself.
     */
    Cast() {}

    /**
     * Check whether this collider is touching the collider or not.
     */
    IsTouching() {}

    /**
     * Checks whether this collider is touching any colliders on the specified layerMask or not.
     */
    IsTouchingLayers() {}

    /**
     * Check if a collider overlaps a point in space.
     */
    OverlapPoint() {}

    /**
     * Casts a ray into the scene starting at the collider position ignoring the collider itself.
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