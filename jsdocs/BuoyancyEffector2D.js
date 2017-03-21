class BuoyancyEffector2D {

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
     * A force applied to slow angular movement of any Collider2D in contact with the effector.
     */
    get angularDrag() {}

    /**
     * A force applied to slow angular movement of any Collider2D in contact with the effector.
     */
    set angularDrag(value) {}

    /**
     * The density of the fluid used to calculate the buoyancy forces.
     */
    get density() {}

    /**
     * The density of the fluid used to calculate the buoyancy forces.
     */
    set density(value) {}

    /**
     * The angle of the force used to similate fluid flow.
     */
    get flowAngle() {}

    /**
     * The angle of the force used to similate fluid flow.
     */
    set flowAngle(value) {}

    /**
     * The magnitude of the force used to similate fluid flow.
     */
    get flowMagnitude() {}

    /**
     * The magnitude of the force used to similate fluid flow.
     */
    set flowMagnitude(value) {}

    /**
     * The random variation of the force used to similate fluid flow.
     */
    get flowVariation() {}

    /**
     * The random variation of the force used to similate fluid flow.
     */
    set flowVariation(value) {}

    /**
     * A force applied to slow linear movement of any Collider2D in contact with the effector.
     */
    get linearDrag() {}

    /**
     * A force applied to slow linear movement of any Collider2D in contact with the effector.
     */
    set linearDrag(value) {}

    /**
     * Defines an arbitrary horizontal line that represents the fluid surface level.
     */
    get surfaceLevel() {}

    /**
     * Defines an arbitrary horizontal line that represents the fluid surface level.
     */
    set surfaceLevel(value) {}

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
     * The mask used to select specific layers allowed to interact with the effector.
     */
    get colliderMask() {}

    /**
     * The mask used to select specific layers allowed to interact with the effector.
     */
    set colliderMask(value) {}

    /**
     * Should the collider-mask be used or the global collision matrix?
     */
    get useColliderMask() {}

    /**
     * Should the collider-mask be used or the global collision matrix?
     */
    set useColliderMask(value) {}

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