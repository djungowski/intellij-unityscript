class CharacterJoint {

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
     * Brings violated constraints back into alignment even when the solver fails.
     */
    get enableProjection() {}

    /**
     * Brings violated constraints back into alignment even when the solver fails.
     */
    set enableProjection(value) {}

    /**
     * The upper limit around the primary axis of the character joint.
     */
    get highTwistLimit() {}

    /**
     * The upper limit around the primary axis of the character joint.
     */
    set highTwistLimit(value) {}

    /**
     * The lower limit around the primary axis of the character joint.
     */
    get lowTwistLimit() {}

    /**
     * The lower limit around the primary axis of the character joint.
     */
    set lowTwistLimit(value) {}

    /**
     * Set the angular tolerance threshold (in degrees) for projection.
     */
    get projectionAngle() {}

    /**
     * Set the angular tolerance threshold (in degrees) for projection.
     */
    set projectionAngle(value) {}

    /**
     * Set the linear tolerance threshold for projection.
     */
    get projectionDistance() {}

    /**
     * Set the linear tolerance threshold for projection.
     */
    set projectionDistance(value) {}

    /**
     * The angular limit of rotation (in degrees) around the primary axis of the character joint.
     */
    get swing1Limit() {}

    /**
     * The angular limit of rotation (in degrees) around the primary axis of the character joint.
     */
    set swing1Limit(value) {}

    /**
     * The angular limit of rotation (in degrees) around the primary axis of the character joint.
     */
    get swing2Limit() {}

    /**
     * The angular limit of rotation (in degrees) around the primary axis of the character joint.
     */
    set swing2Limit(value) {}

    /**
     * The secondary axis around which the joint can rotate.
     */
    get swingAxis() {}

    /**
     * The secondary axis around which the joint can rotate.
     */
    set swingAxis(value) {}

    /**
     * The configuration of the spring attached to the swing limits of the joint.
     */
    get swingLimitSpring() {}

    /**
     * The configuration of the spring attached to the swing limits of the joint.
     */
    set swingLimitSpring(value) {}

    /**
     * The configuration of the spring attached to the twist limits of the joint.
     */
    get twistLimitSpring() {}

    /**
     * The configuration of the spring attached to the twist limits of the joint.
     */
    set twistLimitSpring(value) {}

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