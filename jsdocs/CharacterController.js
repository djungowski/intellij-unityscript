class CharacterController {

    /**
     * A more complex move function taking absolute movement deltas.
     */
    static Move() {}

    /**
     * Moves the character with speed.
     */
    static SimpleMove() {}

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
     * The center of the character&#039;s capsule relative to the transform&#039;s position.
     */
    get center() {}

    /**
     * The center of the character&#039;s capsule relative to the transform&#039;s position.
     */
    set center(value) {}

    /**
     * What part of the capsule collided with the environment during the last CharacterController.Move call.
     */
    get collisionFlags() {}

    /**
     * What part of the capsule collided with the environment during the last CharacterController.Move call.
     */
    set collisionFlags(value) {}

    /**
     * Determines whether other rigidbodies or character controllers collide with this character controller (by default this is always enabled).
     */
    get detectCollisions() {}

    /**
     * Determines whether other rigidbodies or character controllers collide with this character controller (by default this is always enabled).
     */
    set detectCollisions(value) {}

    /**
     * Enables or disables overlap recovery.
 Enables or disables overlap recovery. Used to depenetrate character controllers from static objects when an overlap is detected.
     */
    get enableOverlapRecovery() {}

    /**
     * Enables or disables overlap recovery.
 Enables or disables overlap recovery. Used to depenetrate character controllers from static objects when an overlap is detected.
     */
    set enableOverlapRecovery(value) {}

    /**
     * The height of the character&#039;s capsule.
     */
    get height() {}

    /**
     * The height of the character&#039;s capsule.
     */
    set height(value) {}

    /**
     * Was the CharacterController touching the ground during the last move?
     */
    get isGrounded() {}

    /**
     * Was the CharacterController touching the ground during the last move?
     */
    set isGrounded(value) {}

    /**
     * The radius of the character&#039;s capsule.
     */
    get radius() {}

    /**
     * The radius of the character&#039;s capsule.
     */
    set radius(value) {}

    /**
     * The character&#039;s collision skin width.
     */
    get skinWidth() {}

    /**
     * The character&#039;s collision skin width.
     */
    set skinWidth(value) {}

    /**
     * The character controllers slope limit in degrees.
     */
    get slopeLimit() {}

    /**
     * The character controllers slope limit in degrees.
     */
    set slopeLimit(value) {}

    /**
     * The character controllers step offset in meters.
     */
    get stepOffset() {}

    /**
     * The character controllers step offset in meters.
     */
    set stepOffset(value) {}

    /**
     * The current relative velocity of the Character (see notes).
     */
    get velocity() {}

    /**
     * The current relative velocity of the Character (see notes).
     */
    set velocity(value) {}

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
     * A more complex move function taking absolute movement deltas.
     */
    Move() {}

    /**
     * Moves the character with speed.
     */
    SimpleMove() {}

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