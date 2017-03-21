class DistanceJoint2D {

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
     * Should the distance be calculated automatically?
     */
    get autoConfigureDistance() {}

    /**
     * Should the distance be calculated automatically?
     */
    set autoConfigureDistance(value) {}

    /**
     * The distance separating the two ends of the joint.
     */
    get distance() {}

    /**
     * The distance separating the two ends of the joint.
     */
    set distance(value) {}

    /**
     * Whether to maintain a maximum distance only or not.  If not then the absolute distance will be maintained instead.
     */
    get maxDistanceOnly() {}

    /**
     * Whether to maintain a maximum distance only or not.  If not then the absolute distance will be maintained instead.
     */
    set maxDistanceOnly(value) {}

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