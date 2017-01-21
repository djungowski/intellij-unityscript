class WheelCollider {

    /**
     * Configure vehicle sub-stepping parameters.
     */
    static ConfigureVehicleSubsteps() {}

    /**
     * Gets ground collision data for the wheel.
     */
    static GetGroundHit() {}

    /**
     * Gets the world space pose of the wheel accounting for ground contact, suspension limits, steer angle, and rotation angle (angles in degrees).
     */
    static GetWorldPose() {}

    /**
     * The closest point to the bounding box of the attached collider.
     */
    static ClosestPointOnBounds() {}

    /**
     * Casts a Ray that ignores all Colliders except this one.
     */
    static Raycast() {}

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
     * Brake torque expressed in Newton metres.
     */
    get brakeTorque() {}

    /**
     * Brake torque expressed in Newton metres.
     */
    set brakeTorque(value) {}

    /**
     * The center of the wheel, measured in the object&#039;s local space.
     */
    get center() {}

    /**
     * The center of the wheel, measured in the object&#039;s local space.
     */
    set center(value) {}

    /**
     * Application point of the suspension and tire forces measured from the base of the resting wheel.
     */
    get forceAppPointDistance() {}

    /**
     * Application point of the suspension and tire forces measured from the base of the resting wheel.
     */
    set forceAppPointDistance(value) {}

    /**
     * Properties of tire friction in the direction the wheel is pointing in.
     */
    get forwardFriction() {}

    /**
     * Properties of tire friction in the direction the wheel is pointing in.
     */
    set forwardFriction(value) {}

    /**
     * Indicates whether the wheel currently collides with something (Read Only).
     */
    get isGrounded() {}

    /**
     * Indicates whether the wheel currently collides with something (Read Only).
     */
    set isGrounded(value) {}

    /**
     * The mass of the wheel, expressed in kilograms. Must be larger than zero. Typical values would be in range (20,80).
     */
    get mass() {}

    /**
     * The mass of the wheel, expressed in kilograms. Must be larger than zero. Typical values would be in range (20,80).
     */
    set mass(value) {}

    /**
     * Motor torque on the wheel axle expressed in Newton metres. Positive or negative depending on direction.
     */
    get motorTorque() {}

    /**
     * Motor torque on the wheel axle expressed in Newton metres. Positive or negative depending on direction.
     */
    set motorTorque(value) {}

    /**
     * The radius of the wheel, measured in local space.
     */
    get radius() {}

    /**
     * The radius of the wheel, measured in local space.
     */
    set radius(value) {}

    /**
     * Current wheel axle rotation speed, in rotations per minute (Read Only).
     */
    get rpm() {}

    /**
     * Current wheel axle rotation speed, in rotations per minute (Read Only).
     */
    set rpm(value) {}

    /**
     * Properties of tire friction in the sideways direction.
     */
    get sidewaysFriction() {}

    /**
     * Properties of tire friction in the sideways direction.
     */
    set sidewaysFriction(value) {}

    /**
     * The mass supported by this WheelCollider.
     */
    get sprungMass() {}

    /**
     * The mass supported by this WheelCollider.
     */
    set sprungMass(value) {}

    /**
     * Steering angle in degrees, always around the local y-axis.
     */
    get steerAngle() {}

    /**
     * Steering angle in degrees, always around the local y-axis.
     */
    set steerAngle(value) {}

    /**
     * Maximum extension distance of wheel suspension, measured in local space.
     */
    get suspensionDistance() {}

    /**
     * Maximum extension distance of wheel suspension, measured in local space.
     */
    set suspensionDistance(value) {}

    /**
     * The parameters of wheel&#039;s suspension. The suspension attempts to reach a target position by applying a linear force and a damping force.
     */
    get suspensionSpring() {}

    /**
     * The parameters of wheel&#039;s suspension. The suspension attempts to reach a target position by applying a linear force and a damping force.
     */
    set suspensionSpring(value) {}

    /**
     * The damping rate of the wheel. Must be larger than zero.
     */
    get wheelDampingRate() {}

    /**
     * The damping rate of the wheel. Must be larger than zero.
     */
    set wheelDampingRate(value) {}

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
     * Configure vehicle sub-stepping parameters.
     */
    ConfigureVehicleSubsteps() {}

    /**
     * Gets ground collision data for the wheel.
     */
    GetGroundHit() {}

    /**
     * Gets the world space pose of the wheel accounting for ground contact, suspension limits, steer angle, and rotation angle (angles in degrees).
     */
    GetWorldPose() {}

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