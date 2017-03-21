class Rigidbody2D {

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
     * Coefficient of angular drag.
     */
    get angularDrag() {}

    /**
     * Coefficient of angular drag.
     */
    set angularDrag(value) {}

    /**
     * Angular velocity in degrees per second.
     */
    get angularVelocity() {}

    /**
     * Angular velocity in degrees per second.
     */
    set angularVelocity(value) {}

    /**
     * The physical behaviour type of the Rigidbody2D.
     */
    get bodyType() {}

    /**
     * The physical behaviour type of the Rigidbody2D.
     */
    set bodyType(value) {}

    /**
     * The center of mass of the rigidBody in local space.
     */
    get centerOfMass() {}

    /**
     * The center of mass of the rigidBody in local space.
     */
    set centerOfMass(value) {}

    /**
     * The method used by the physics engine to check if two objects have collided.
     */
    get collisionDetectionMode() {}

    /**
     * The method used by the physics engine to check if two objects have collided.
     */
    set collisionDetectionMode(value) {}

    /**
     * Controls which degrees of freedom are allowed for the simulation of this Rigidbody2D.
     */
    get constraints() {}

    /**
     * Controls which degrees of freedom are allowed for the simulation of this Rigidbody2D.
     */
    set constraints(value) {}

    /**
     * Coefficient of drag.
     */
    get drag() {}

    /**
     * Coefficient of drag.
     */
    set drag(value) {}

    /**
     * Controls whether physics will change the rotation of the object.
     */
    get freezeRotation() {}

    /**
     * Controls whether physics will change the rotation of the object.
     */
    set freezeRotation(value) {}

    /**
     * The degree to which this object is affected by gravity.
     */
    get gravityScale() {}

    /**
     * The degree to which this object is affected by gravity.
     */
    set gravityScale(value) {}

    /**
     * The rigidBody rotational inertia.
     */
    get inertia() {}

    /**
     * The rigidBody rotational inertia.
     */
    set inertia(value) {}

    /**
     * Physics interpolation used between updates.
     */
    get interpolation() {}

    /**
     * Physics interpolation used between updates.
     */
    set interpolation(value) {}

    /**
     * Should this rigidbody be taken out of physics control?
     */
    get isKinematic() {}

    /**
     * Should this rigidbody be taken out of physics control?
     */
    set isKinematic(value) {}

    /**
     * Mass of the rigidbody.
     */
    get mass() {}

    /**
     * Mass of the rigidbody.
     */
    set mass(value) {}

    /**
     * The position of the rigidbody.
     */
    get position() {}

    /**
     * The position of the rigidbody.
     */
    set position(value) {}

    /**
     * The rotation of the rigidbody.
     */
    get rotation() {}

    /**
     * The rotation of the rigidbody.
     */
    set rotation(value) {}

    /**
     * The PhysicsMaterial2D that is applied to all Collider2D attached to this Rigidbody2D.
     */
    get sharedMaterial() {}

    /**
     * The PhysicsMaterial2D that is applied to all Collider2D attached to this Rigidbody2D.
     */
    set sharedMaterial(value) {}

    /**
     * Indicates whether the rigid body should be simulated or not by the physics system.
     */
    get simulated() {}

    /**
     * Indicates whether the rigid body should be simulated or not by the physics system.
     */
    set simulated(value) {}

    /**
     * The sleep state that the rigidbody will initially be in.
     */
    get sleepMode() {}

    /**
     * The sleep state that the rigidbody will initially be in.
     */
    set sleepMode(value) {}

    /**
     * Should the total rigid-body mass be automatically calculated from the [[Collider2D.density]] of attached colliders?
     */
    get useAutoMass() {}

    /**
     * Should the total rigid-body mass be automatically calculated from the [[Collider2D.density]] of attached colliders?
     */
    set useAutoMass(value) {}

    /**
     * Should kinematic/kinematic and kinematic/static collisions be allowed?
     */
    get useFullKinematicContacts() {}

    /**
     * Should kinematic/kinematic and kinematic/static collisions be allowed?
     */
    set useFullKinematicContacts(value) {}

    /**
     * Linear velocity of the rigidbody.
     */
    get velocity() {}

    /**
     * Linear velocity of the rigidbody.
     */
    set velocity(value) {}

    /**
     * Gets the center of mass of the rigidBody in global space.
     */
    get worldCenterOfMass() {}

    /**
     * Gets the center of mass of the rigidBody in global space.
     */
    set worldCenterOfMass(value) {}

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
     * Apply a force to the rigidbody.
     */
    AddForce() {}

    /**
     * Apply a force at a given position in space.
     */
    AddForceAtPosition() {}

    /**
     * Adds a force to the rigidbody2D relative to its coordinate system.
     */
    AddRelativeForce() {}

    /**
     * Apply a torque at the rigidbody&#039;s centre of mass.
     */
    AddTorque() {}

    /**
     * All the Collider2D shapes attached to the Rigidbody2D are cast into the scene starting at each collider position ignoring the colliders attached to the same Rigidbody2D.
     */
    Cast() {}

    /**
     * Get a local space point given the point point in rigidBody global space.
     */
    GetPoint() {}

    /**
     * The velocity of the rigidbody at the point Point in global space.
     */
    GetPointVelocity() {}

    /**
     * Get a global space point given the point relativePoint in rigidBody local space.
     */
    GetRelativePoint() {}

    /**
     * The velocity of the rigidbody at the point Point in local space.
     */
    GetRelativePointVelocity() {}

    /**
     * Get a global space vector given the vector relativeVector in rigidBody local space.
     */
    GetRelativeVector() {}

    /**
     * Get a local space vector given the vector vector in rigidBody global space.
     */
    GetVector() {}

    /**
     * Is the rigidbody &quot;awake&quot;?
     */
    IsAwake() {}

    /**
     * Is the rigidbody &quot;sleeping&quot;?
     */
    IsSleeping() {}

    /**
     * Check whether any of the collider(s) attached to this rigidbody are touching the collider or not.
     */
    IsTouching() {}

    /**
     * Checks whether any of the collider(s) attached to this rigidbody are touching any colliders on the specified layerMask or not.
     */
    IsTouchingLayers() {}

    /**
     * Moves the rigidbody to position.
     */
    MovePosition() {}

    /**
     * Rotates the rigidbody to angle (given in degrees).
     */
    MoveRotation() {}

    /**
     * Check if any of the Rigidbody2D colliders overlap a point in space.
     */
    OverlapPoint() {}

    /**
     * Make the rigidbody &quot;sleep&quot;.
     */
    Sleep() {}

    /**
     * Disables the &quot;sleeping&quot; state of a rigidbody.
     */
    WakeUp() {}

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