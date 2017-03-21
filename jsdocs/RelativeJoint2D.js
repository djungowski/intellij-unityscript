class RelativeJoint2D {

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
     * The current angular offset between the Rigidbody2D that the joint connects.
     */
    get angularOffset() {}

    /**
     * The current angular offset between the Rigidbody2D that the joint connects.
     */
    set angularOffset(value) {}

    /**
     * Should both the linearOffset and angularOffset be calculated automatically?
     */
    get autoConfigureOffset() {}

    /**
     * Should both the linearOffset and angularOffset be calculated automatically?
     */
    set autoConfigureOffset(value) {}

    /**
     * Scales both the linear and angular forces used to correct the required relative orientation.
     */
    get correctionScale() {}

    /**
     * Scales both the linear and angular forces used to correct the required relative orientation.
     */
    set correctionScale(value) {}

    /**
     * The current linear offset between the Rigidbody2D that the joint connects.
     */
    get linearOffset() {}

    /**
     * The current linear offset between the Rigidbody2D that the joint connects.
     */
    set linearOffset(value) {}

    /**
     * The maximum force that can be generated when trying to maintain the relative joint constraint.
     */
    get maxForce() {}

    /**
     * The maximum force that can be generated when trying to maintain the relative joint constraint.
     */
    set maxForce(value) {}

    /**
     * The maximum torque that can be generated when trying to maintain the relative joint constraint.
     */
    get maxTorque() {}

    /**
     * The maximum torque that can be generated when trying to maintain the relative joint constraint.
     */
    set maxTorque(value) {}

    /**
     * The world-space position that is currently trying to be maintained.
     */
    get target() {}

    /**
     * The world-space position that is currently trying to be maintained.
     */
    set target(value) {}

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
     * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
     */
    get connectedBody() {}

    /**
     * The Rigidbody2D object to which the other end of the joint is attached (ie, the object without the joint component).
     */
    set connectedBody(value) {}

    /**
     * Should the two rigid bodies connected with this joint collide with each other?
     */
    get enableCollision() {}

    /**
     * Should the two rigid bodies connected with this joint collide with each other?
     */
    set enableCollision(value) {}

    /**
     * Gets the reaction force of the joint.
     */
    get reactionForce() {}

    /**
     * Gets the reaction force of the joint.
     */
    set reactionForce(value) {}

    /**
     * Gets the reaction torque of the joint.
     */
    get reactionTorque() {}

    /**
     * Gets the reaction torque of the joint.
     */
    set reactionTorque(value) {}

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
     * Gets the reaction force of the joint given the specified timeStep.
     */
    GetReactionForce() {}

    /**
     * Gets the reaction torque of the joint given the specified timeStep.
     */
    GetReactionTorque() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}