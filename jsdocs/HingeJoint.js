class HingeJoint {

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
     * The current angle in degrees of the joint relative to its rest position. (Read Only)
     */
    get angle() {}

    /**
     * The current angle in degrees of the joint relative to its rest position. (Read Only)
     */
    set angle(value) {}

    /**
     * Limit of angular rotation (in degrees) on the hinge joint.
     */
    get limits() {}

    /**
     * Limit of angular rotation (in degrees) on the hinge joint.
     */
    set limits(value) {}

    /**
     * The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second.
     */
    get motor() {}

    /**
     * The motor will apply a force up to a maximum force to achieve the target velocity in degrees per second.
     */
    set motor(value) {}

    /**
     * The spring attempts to reach a target angle by adding spring and damping forces.
     */
    get spring() {}

    /**
     * The spring attempts to reach a target angle by adding spring and damping forces.
     */
    set spring(value) {}

    /**
     * Enables the joint&#039;s limits. Disabled by default.
     */
    get useLimits() {}

    /**
     * Enables the joint&#039;s limits. Disabled by default.
     */
    set useLimits(value) {}

    /**
     * Enables the joint&#039;s motor. Disabled by default.
     */
    get useMotor() {}

    /**
     * Enables the joint&#039;s motor. Disabled by default.
     */
    set useMotor(value) {}

    /**
     * Enables the joint&#039;s spring. Disabled by default.
     */
    get useSpring() {}

    /**
     * Enables the joint&#039;s spring. Disabled by default.
     */
    set useSpring(value) {}

    /**
     * The angular velocity of the joint in degrees per second. (Read Only)
     */
    get velocity() {}

    /**
     * The angular velocity of the joint in degrees per second. (Read Only)
     */
    set velocity(value) {}

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