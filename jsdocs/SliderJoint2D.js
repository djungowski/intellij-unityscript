class SliderJoint2D {

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
     * The angle of the line in space (in degrees).
     */
    get angle() {}

    /**
     * The angle of the line in space (in degrees).
     */
    set angle(value) {}

    /**
     * Should the angle be calculated automatically?
     */
    get autoConfigureAngle() {}

    /**
     * Should the angle be calculated automatically?
     */
    set autoConfigureAngle(value) {}

    /**
     * The current joint speed.
     */
    get jointSpeed() {}

    /**
     * The current joint speed.
     */
    set jointSpeed(value) {}

    /**
     * The current joint translation.
     */
    get jointTranslation() {}

    /**
     * The current joint translation.
     */
    set jointTranslation(value) {}

    /**
     * Restrictions on how far the joint can slide in each direction along the line.
     */
    get limits() {}

    /**
     * Restrictions on how far the joint can slide in each direction along the line.
     */
    set limits(value) {}

    /**
     * Gets the state of the joint limit.
     */
    get limitState() {}

    /**
     * Gets the state of the joint limit.
     */
    set limitState(value) {}

    /**
     * Parameters for a motor force that is applied automatically to the Rigibody2D along the line.
     */
    get motor() {}

    /**
     * Parameters for a motor force that is applied automatically to the Rigibody2D along the line.
     */
    set motor(value) {}

    /**
     * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
     */
    get referenceAngle() {}

    /**
     * The angle (in degrees) referenced between the two bodies used as the constraint for the joint.
     */
    set referenceAngle(value) {}

    /**
     * Should motion limits be used?
     */
    get useLimits() {}

    /**
     * Should motion limits be used?
     */
    set useLimits(value) {}

    /**
     * Should a motor force be applied automatically to the Rigidbody2D?
     */
    get useMotor() {}

    /**
     * Should a motor force be applied automatically to the Rigidbody2D?
     */
    set useMotor(value) {}

    /**
     * The joint&#039;s anchor point on the object that has the joint component.
     */
    get anchor() {}

    /**
     * The joint&#039;s anchor point on the object that has the joint component.
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
     * The joint&#039;s anchor point on the second object (ie, the one which doesn&#039;t have the joint component).
     */
    get connectedAnchor() {}

    /**
     * The joint&#039;s anchor point on the second object (ie, the one which doesn&#039;t have the joint component).
     */
    set connectedAnchor(value) {}

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
     * Gets the motor force of the joint given the specified timestep.
     */
    GetMotorForce() {}

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