class Rigidbody {

    /**
     * Applies a force to a rigidbody that simulates explosion effects.
     */
    static AddExplosionForce() {}

    /**
     * Adds a force to the Rigidbody.
     */
    static AddForce() {}

    /**
     * Applies force at position. As a result this will apply a torque and force on the object.
     */
    static AddForceAtPosition() {}

    /**
     * Adds a force to the rigidbody relative to its coordinate system.
     */
    static AddRelativeForce() {}

    /**
     * Adds a torque to the rigidbody relative to its coordinate system.
     */
    static AddRelativeTorque() {}

    /**
     * Adds a torque to the rigidbody.
     */
    static AddTorque() {}

    /**
     * The closest point to the bounding box of the attached colliders.
     */
    static ClosestPointOnBounds() {}

    /**
     * The velocity of the rigidbody at the point worldPoint in global space.
     */
    static GetPointVelocity() {}

    /**
     * The velocity relative to the rigidbody at the point relativePoint.
     */
    static GetRelativePointVelocity() {}

    /**
     * Is the rigidbody sleeping?
     */
    static IsSleeping() {}

    /**
     * Moves the rigidbody to position.
     */
    static MovePosition() {}

    /**
     * Rotates the rigidbody to rotation.
     */
    static MoveRotation() {}

    /**
     * Reset the center of mass of the rigidbody.
     */
    static ResetCenterOfMass() {}

    /**
     * Reset the inertia tensor value and rotation.
     */
    static ResetInertiaTensor() {}

    /**
     * Sets the mass based on the attached colliders assuming a constant density.
     */
    static SetDensity() {}

    /**
     * Forces a rigidbody to sleep at least one frame.
     */
    static Sleep() {}

    /**
     * Tests if a rigidbody would collide with anything, if it was moved through the scene.
     */
    static SweepTest() {}

    /**
     * Like Rigidbody.SweepTest, but returns all hits.
     */
    static SweepTestAll() {}

    /**
     * Forces a rigidbody to wake up.
     */
    static WakeUp() {}

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
     * The angular drag of the object.
     */
    get angularDrag() {}

    /**
     * The angular drag of the object.
     */
    set angularDrag(value) {}

    /**
     * The angular velocity vector of the rigidbody.
     */
    get angularVelocity() {}

    /**
     * The angular velocity vector of the rigidbody.
     */
    set angularVelocity(value) {}

    /**
     * The center of mass relative to the transform&#039;s origin.
     */
    get centerOfMass() {}

    /**
     * The center of mass relative to the transform&#039;s origin.
     */
    set centerOfMass(value) {}

    /**
     * The Rigidbody&#039;s collision detection mode.
     */
    get collisionDetectionMode() {}

    /**
     * The Rigidbody&#039;s collision detection mode.
     */
    set collisionDetectionMode(value) {}

    /**
     * Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
     */
    get constraints() {}

    /**
     * Controls which degrees of freedom are allowed for the simulation of this Rigidbody.
     */
    set constraints(value) {}

    /**
     * Should collision detection be enabled? (By default always enabled).
     */
    get detectCollisions() {}

    /**
     * Should collision detection be enabled? (By default always enabled).
     */
    set detectCollisions(value) {}

    /**
     * The drag of the object.
     */
    get drag() {}

    /**
     * The drag of the object.
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
     * The diagonal inertia tensor of mass relative to the center of mass.
     */
    get inertiaTensor() {}

    /**
     * The diagonal inertia tensor of mass relative to the center of mass.
     */
    set inertiaTensor(value) {}

    /**
     * The rotation of the inertia tensor.
     */
    get inertiaTensorRotation() {}

    /**
     * The rotation of the inertia tensor.
     */
    set inertiaTensorRotation(value) {}

    /**
     * Interpolation allows you to smooth out the effect of running physics at a fixed frame rate.
     */
    get interpolation() {}

    /**
     * Interpolation allows you to smooth out the effect of running physics at a fixed frame rate.
     */
    set interpolation(value) {}

    /**
     * Controls whether physics affects the rigidbody.
     */
    get isKinematic() {}

    /**
     * Controls whether physics affects the rigidbody.
     */
    set isKinematic(value) {}

    /**
     * The mass of the rigidbody.
     */
    get mass() {}

    /**
     * The mass of the rigidbody.
     */
    set mass(value) {}

    /**
     * The maximimum angular velocity of the rigidbody. (Default 7) range { 0, infinity }.
     */
    get maxAngularVelocity() {}

    /**
     * The maximimum angular velocity of the rigidbody. (Default 7) range { 0, infinity }.
     */
    set maxAngularVelocity(value) {}

    /**
     * Maximum velocity of a rigidbody when moving out of penetrating state.
     */
    get maxDepenetrationVelocity() {}

    /**
     * Maximum velocity of a rigidbody when moving out of penetrating state.
     */
    set maxDepenetrationVelocity(value) {}

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
     * The mass-normalized energy threshold, below which objects start going to sleep.
     */
    get sleepThreshold() {}

    /**
     * The mass-normalized energy threshold, below which objects start going to sleep.
     */
    set sleepThreshold(value) {}

    /**
     * The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
     */
    get solverIterations() {}

    /**
     * The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive.
     */
    set solverIterations(value) {}

    /**
     * The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
     */
    get solverVelocityIterations() {}

    /**
     * The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive.
     */
    set solverVelocityIterations(value) {}

    /**
     * Controls whether gravity affects this rigidbody.
     */
    get useGravity() {}

    /**
     * Controls whether gravity affects this rigidbody.
     */
    set useGravity(value) {}

    /**
     * The velocity vector of the rigidbody.
     */
    get velocity() {}

    /**
     * The velocity vector of the rigidbody.
     */
    set velocity(value) {}

    /**
     * The center of mass of the rigidbody in world space (Read Only).
     */
    get worldCenterOfMass() {}

    /**
     * The center of mass of the rigidbody in world space (Read Only).
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
     * Applies a force to a rigidbody that simulates explosion effects.
     */
    AddExplosionForce() {}

    /**
     * Adds a force to the Rigidbody.
     */
    AddForce() {}

    /**
     * Applies force at position. As a result this will apply a torque and force on the object.
     */
    AddForceAtPosition() {}

    /**
     * Adds a force to the rigidbody relative to its coordinate system.
     */
    AddRelativeForce() {}

    /**
     * Adds a torque to the rigidbody relative to its coordinate system.
     */
    AddRelativeTorque() {}

    /**
     * Adds a torque to the rigidbody.
     */
    AddTorque() {}

    /**
     * The closest point to the bounding box of the attached colliders.
     */
    ClosestPointOnBounds() {}

    /**
     * The velocity of the rigidbody at the point worldPoint in global space.
     */
    GetPointVelocity() {}

    /**
     * The velocity relative to the rigidbody at the point relativePoint.
     */
    GetRelativePointVelocity() {}

    /**
     * Is the rigidbody sleeping?
     */
    IsSleeping() {}

    /**
     * Moves the rigidbody to position.
     */
    MovePosition() {}

    /**
     * Rotates the rigidbody to rotation.
     */
    MoveRotation() {}

    /**
     * Reset the center of mass of the rigidbody.
     */
    ResetCenterOfMass() {}

    /**
     * Reset the inertia tensor value and rotation.
     */
    ResetInertiaTensor() {}

    /**
     * Sets the mass based on the attached colliders assuming a constant density.
     */
    SetDensity() {}

    /**
     * Forces a rigidbody to sleep at least one frame.
     */
    Sleep() {}

    /**
     * Tests if a rigidbody would collide with anything, if it was moved through the scene.
     */
    SweepTest() {}

    /**
     * Like Rigidbody.SweepTest, but returns all hits.
     */
    SweepTestAll() {}

    /**
     * Forces a rigidbody to wake up.
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