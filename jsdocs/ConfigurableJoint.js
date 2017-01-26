class ConfigurableJoint {

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
     * Definition of how the joint&#039;s rotation will behave around its local X axis. Only used if Rotation Drive Mode is Swing &amp; Twist.
     */
    get angularXDrive() {}

    /**
     * Definition of how the joint&#039;s rotation will behave around its local X axis. Only used if Rotation Drive Mode is Swing &amp; Twist.
     */
    set angularXDrive(value) {}

    /**
     * The configuration of the spring attached to the angular X limit of the joint.
     */
    get angularXLimitSpring() {}

    /**
     * The configuration of the spring attached to the angular X limit of the joint.
     */
    set angularXLimitSpring(value) {}

    /**
     * Allow rotation around the X axis to be Free, completely Locked, or Limited according to Low and High Angular XLimit.
     */
    get angularXMotion() {}

    /**
     * Allow rotation around the X axis to be Free, completely Locked, or Limited according to Low and High Angular XLimit.
     */
    set angularXMotion(value) {}

    /**
     * Boundary defining rotation restriction, based on delta from original rotation.
     */
    get angularYLimit() {}

    /**
     * Boundary defining rotation restriction, based on delta from original rotation.
     */
    set angularYLimit(value) {}

    /**
     * Allow rotation around the Y axis to be Free, completely Locked, or Limited according to Angular YLimit.
     */
    get angularYMotion() {}

    /**
     * Allow rotation around the Y axis to be Free, completely Locked, or Limited according to Angular YLimit.
     */
    set angularYMotion(value) {}

    /**
     * Definition of how the joint&#039;s rotation will behave around its local Y and Z axes. Only used if Rotation Drive Mode is Swing &amp; Twist.
     */
    get angularYZDrive() {}

    /**
     * Definition of how the joint&#039;s rotation will behave around its local Y and Z axes. Only used if Rotation Drive Mode is Swing &amp; Twist.
     */
    set angularYZDrive(value) {}

    /**
     * The configuration of the spring attached to the angular Y and angular Z limits of the joint.
     */
    get angularYZLimitSpring() {}

    /**
     * The configuration of the spring attached to the angular Y and angular Z limits of the joint.
     */
    set angularYZLimitSpring(value) {}

    /**
     * Boundary defining rotation restriction, based on delta from original rotation.
     */
    get angularZLimit() {}

    /**
     * Boundary defining rotation restriction, based on delta from original rotation.
     */
    set angularZLimit(value) {}

    /**
     * Allow rotation around the Z axis to be Free, completely Locked, or Limited according to Angular ZLimit.
     */
    get angularZMotion() {}

    /**
     * Allow rotation around the Z axis to be Free, completely Locked, or Limited according to Angular ZLimit.
     */
    set angularZMotion(value) {}

    /**
     * If enabled, all Target values will be calculated in world space instead of the object&#039;s local space.
     */
    get configuredInWorldSpace() {}

    /**
     * If enabled, all Target values will be calculated in world space instead of the object&#039;s local space.
     */
    set configuredInWorldSpace(value) {}

    /**
     * Boundary defining upper rotation restriction, based on delta from original rotation.
     */
    get highAngularXLimit() {}

    /**
     * Boundary defining upper rotation restriction, based on delta from original rotation.
     */
    set highAngularXLimit(value) {}

    /**
     * Boundary defining movement restriction, based on distance from the joint&#039;s origin.
     */
    get linearLimit() {}

    /**
     * Boundary defining movement restriction, based on distance from the joint&#039;s origin.
     */
    set linearLimit(value) {}

    /**
     * The configuration of the spring attached to the linear limit of the joint.
     */
    get linearLimitSpring() {}

    /**
     * The configuration of the spring attached to the linear limit of the joint.
     */
    set linearLimitSpring(value) {}

    /**
     * Boundary defining lower rotation restriction, based on delta from original rotation.
     */
    get lowAngularXLimit() {}

    /**
     * Boundary defining lower rotation restriction, based on delta from original rotation.
     */
    set lowAngularXLimit(value) {}

    /**
     * Set the angular tolerance threshold (in degrees) for projection.If the joint deviates by more than this angle around its locked angular degrees of freedom, 
the solver will move the bodies to close the angle.Setting a very small tolerance may result in simulation jitter or other artifacts.Sometimes it is not possible to project (for example when the joints form a cycle).
     */
    get projectionAngle() {}

    /**
     * Set the angular tolerance threshold (in degrees) for projection.If the joint deviates by more than this angle around its locked angular degrees of freedom, 
the solver will move the bodies to close the angle.Setting a very small tolerance may result in simulation jitter or other artifacts.Sometimes it is not possible to project (for example when the joints form a cycle).
     */
    set projectionAngle(value) {}

    /**
     * Set the linear tolerance threshold for projection.If the joint separates by more than this distance along its locked degrees of freedom, the solver 
will move the bodies to close the distance.Setting a very small tolerance may result in simulation jitter or other artifacts.Sometimes it is not possible to project (for example when the joints form a cycle).
     */
    get projectionDistance() {}

    /**
     * Set the linear tolerance threshold for projection.If the joint separates by more than this distance along its locked degrees of freedom, the solver 
will move the bodies to close the distance.Setting a very small tolerance may result in simulation jitter or other artifacts.Sometimes it is not possible to project (for example when the joints form a cycle).
     */
    set projectionDistance(value) {}

    /**
     * Brings violated constraints back into alignment even when the solver fails. Projection is not a physical process and does not preserve momentum or respect collision geometry. It is best avoided if practical, but can be useful in improving simulation quality where joint separation results in unacceptable artifacts.
     */
    get projectionMode() {}

    /**
     * Brings violated constraints back into alignment even when the solver fails. Projection is not a physical process and does not preserve momentum or respect collision geometry. It is best avoided if practical, but can be useful in improving simulation quality where joint separation results in unacceptable artifacts.
     */
    set projectionMode(value) {}

    /**
     * Control the object&#039;s rotation with either X &amp; YZ or Slerp Drive by itself.
     */
    get rotationDriveMode() {}

    /**
     * Control the object&#039;s rotation with either X &amp; YZ or Slerp Drive by itself.
     */
    set rotationDriveMode(value) {}

    /**
     * The joint&#039;s secondary axis.
     */
    get secondaryAxis() {}

    /**
     * The joint&#039;s secondary axis.
     */
    set secondaryAxis(value) {}

    /**
     * Definition of how the joint&#039;s rotation will behave around all local axes. Only used if Rotation Drive Mode is Slerp Only.
     */
    get slerpDrive() {}

    /**
     * Definition of how the joint&#039;s rotation will behave around all local axes. Only used if Rotation Drive Mode is Slerp Only.
     */
    set slerpDrive(value) {}

    /**
     * If enabled, the two connected rigidbodies will be swapped, as if the joint was attached to the other body.
     */
    get swapBodies() {}

    /**
     * If enabled, the two connected rigidbodies will be swapped, as if the joint was attached to the other body.
     */
    set swapBodies(value) {}

    /**
     * This is a Vector3. It defines the desired angular velocity that the joint should rotate into.
     */
    get targetAngularVelocity() {}

    /**
     * This is a Vector3. It defines the desired angular velocity that the joint should rotate into.
     */
    set targetAngularVelocity(value) {}

    /**
     * The desired position that the joint should move into.
     */
    get targetPosition() {}

    /**
     * The desired position that the joint should move into.
     */
    set targetPosition(value) {}

    /**
     * This is a Quaternion. It defines the desired rotation that the joint should rotate into.
     */
    get targetRotation() {}

    /**
     * This is a Quaternion. It defines the desired rotation that the joint should rotate into.
     */
    set targetRotation(value) {}

    /**
     * The desired velocity that the joint should move along.
     */
    get targetVelocity() {}

    /**
     * The desired velocity that the joint should move along.
     */
    set targetVelocity(value) {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local X axis.
     */
    get xDrive() {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local X axis.
     */
    set xDrive(value) {}

    /**
     * Allow movement along the X axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    get xMotion() {}

    /**
     * Allow movement along the X axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    set xMotion(value) {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local Y axis.
     */
    get yDrive() {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local Y axis.
     */
    set yDrive(value) {}

    /**
     * Allow movement along the Y axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    get yMotion() {}

    /**
     * Allow movement along the Y axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    set yMotion(value) {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local Z axis.
     */
    get zDrive() {}

    /**
     * Definition of how the joint&#039;s movement will behave along its local Z axis.
     */
    set zDrive(value) {}

    /**
     * Allow movement along the Z axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    get zMotion() {}

    /**
     * Allow movement along the Z axis to be Free, completely Locked, or Limited according to Linear Limit.
     */
    set zMotion(value) {}

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
     * The Position of the anchor around which the joints motion is constrained.
     */
    get anchor() {}

    /**
     * The Position of the anchor around which the joints motion is constrained.
     */
    set anchor(value) {}

    /**
     * Should the connectedAnchor be calculated automatically?
     */
    get autoConfigureConnectedAnchor() {}

    /**
     * Should the connectedAnchor be calculated automatically?
     */
    set autoConfigureConnectedAnchor(value) {}

    /**
     * The Direction of the axis around which the body is constrained.
     */
    get axis() {}

    /**
     * The Direction of the axis around which the body is constrained.
     */
    set axis(value) {}

    /**
     * The force that needs to be applied for this joint to break.
     */
    get breakForce() {}

    /**
     * The force that needs to be applied for this joint to break.
     */
    set breakForce(value) {}

    /**
     * The torque that needs to be applied for this joint to break.
     */
    get breakTorque() {}

    /**
     * The torque that needs to be applied for this joint to break.
     */
    set breakTorque(value) {}

    /**
     * Position of the anchor relative to the connected Rigidbody.
     */
    get connectedAnchor() {}

    /**
     * Position of the anchor relative to the connected Rigidbody.
     */
    set connectedAnchor(value) {}

    /**
     * A reference to another rigidbody this joint connects to.
     */
    get connectedBody() {}

    /**
     * A reference to another rigidbody this joint connects to.
     */
    set connectedBody(value) {}

    /**
     * The force applied by the solver to satisfy all constraints.
     */
    get currentForce() {}

    /**
     * The force applied by the solver to satisfy all constraints.
     */
    set currentForce(value) {}

    /**
     * The torque applied by the solver to satisfy all constraints.
     */
    get currentTorque() {}

    /**
     * The torque applied by the solver to satisfy all constraints.
     */
    set currentTorque(value) {}

    /**
     * Enable collision between bodies connected with the joint.
     */
    get enableCollision() {}

    /**
     * Enable collision between bodies connected with the joint.
     */
    set enableCollision(value) {}

    /**
     * Toggle preprocessing for this joint.
     */
    get enablePreprocessing() {}

    /**
     * Toggle preprocessing for this joint.
     */
    set enablePreprocessing(value) {}

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