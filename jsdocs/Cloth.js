class Cloth {

    /**
     * Clear the pending transform changes from affecting the cloth simulation.
     */
    static ClearTransformMotion() {}

    /**
     * Fade the cloth simulation in or out.
     */
    static SetEnabledFading() {}

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
     * Bending stiffness of the cloth.
     */
    get bendingStiffness() {}

    /**
     * Bending stiffness of the cloth.
     */
    set bendingStiffness(value) {}

    /**
     * An array of CapsuleColliders which this Cloth instance should collide with.
     */
    get capsuleColliders() {}

    /**
     * An array of CapsuleColliders which this Cloth instance should collide with.
     */
    set capsuleColliders(value) {}

    /**
     * The cloth skinning coefficients used to set up how the cloth interacts with the skinned mesh.
     */
    get coefficients() {}

    /**
     * The cloth skinning coefficients used to set up how the cloth interacts with the skinned mesh.
     */
    set coefficients(value) {}

    /**
     * How much to increase mass of colliding particles.
     */
    get collisionMassScale() {}

    /**
     * How much to increase mass of colliding particles.
     */
    set collisionMassScale(value) {}

    /**
     * Damp cloth motion.
     */
    get damping() {}

    /**
     * Damp cloth motion.
     */
    set damping(value) {}

    /**
     * Is this cloth enabled?
     */
    get enabled() {}

    /**
     * Is this cloth enabled?
     */
    set enabled(value) {}

    /**
     * A constant, external acceleration applied to the cloth.
     */
    get externalAcceleration() {}

    /**
     * A constant, external acceleration applied to the cloth.
     */
    set externalAcceleration(value) {}

    /**
     * The friction of the cloth when colliding with the character.
     */
    get friction() {}

    /**
     * The friction of the cloth when colliding with the character.
     */
    set friction(value) {}

    /**
     * The current normals of the cloth object.
     */
    get normals() {}

    /**
     * The current normals of the cloth object.
     */
    set normals(value) {}

    /**
     * A random, external acceleration applied to the cloth.
     */
    get randomAcceleration() {}

    /**
     * A random, external acceleration applied to the cloth.
     */
    set randomAcceleration(value) {}

    /**
     * Cloth&#039;s sleep threshold.
     */
    get sleepThreshold() {}

    /**
     * Cloth&#039;s sleep threshold.
     */
    set sleepThreshold(value) {}

    /**
     * An array of ClothSphereColliderPairs which this Cloth instance should collide with.
     */
    get sphereColliders() {}

    /**
     * An array of ClothSphereColliderPairs which this Cloth instance should collide with.
     */
    set sphereColliders(value) {}

    /**
     * Stretching stiffness of the cloth.
     */
    get stretchingStiffness() {}

    /**
     * Stretching stiffness of the cloth.
     */
    set stretchingStiffness(value) {}

    /**
     * Should gravity affect the cloth simulation?
     */
    get useGravity() {}

    /**
     * Should gravity affect the cloth simulation?
     */
    set useGravity(value) {}

    /**
     * Add one virtual particle per triangle to improve collision stability.
     */
    get useVirtualParticles() {}

    /**
     * Add one virtual particle per triangle to improve collision stability.
     */
    set useVirtualParticles(value) {}

    /**
     * The current vertex positions of the cloth object.
     */
    get vertices() {}

    /**
     * The current vertex positions of the cloth object.
     */
    set vertices(value) {}

    /**
     * How much world-space acceleration of the character will affect cloth vertices.
     */
    get worldAccelerationScale() {}

    /**
     * How much world-space acceleration of the character will affect cloth vertices.
     */
    set worldAccelerationScale(value) {}

    /**
     * How much world-space movement of the character will affect cloth vertices.
     */
    get worldVelocityScale() {}

    /**
     * How much world-space movement of the character will affect cloth vertices.
     */
    set worldVelocityScale(value) {}

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
     * Clear the pending transform changes from affecting the cloth simulation.
     */
    ClearTransformMotion() {}

    /**
     * Fade the cloth simulation in or out.
     */
    SetEnabledFading() {}

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