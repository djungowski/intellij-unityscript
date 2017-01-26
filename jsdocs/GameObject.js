class GameObject {

    /**
     * Creates a game object with a primitive mesh renderer and appropriate collider.
     */
    static CreatePrimitive() {}

    /**
     * Finds a GameObject by name and returns it.
     */
    static Find() {}

    /**
     * Returns a list of active GameObjects tagged tag. Returns empty array if no GameObject was found.
     */
    static FindGameObjectsWithTag() {}

    /**
     * Returns one active GameObject tagged tag. Returns null if no GameObject was found.
     */
    static FindWithTag() {}

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
     * Is the GameObject active in the scene?
     */
    get activeInHierarchy() {}

    /**
     * Is the GameObject active in the scene?
     */
    set activeInHierarchy(value) {}

    /**
     * The local active state of this GameObject. (Read Only)
     */
    get activeSelf() {}

    /**
     * The local active state of this GameObject. (Read Only)
     */
    set activeSelf(value) {}

    /**
     * Editor only API that specifies if a game object is static.
     */
    get isStatic() {}

    /**
     * Editor only API that specifies if a game object is static.
     */
    set isStatic(value) {}

    /**
     * The layer the game object is in. A layer is in the range [0...31].
     */
    get layer() {}

    /**
     * The layer the game object is in. A layer is in the range [0...31].
     */
    set layer(value) {}

    /**
     * Scene that the GameObject is part of.
     */
    get scene() {}

    /**
     * Scene that the GameObject is part of.
     */
    set scene(value) {}

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
     * Adds a component class named className to the game object.
     */
    AddComponent() {}

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
     * Activates/Deactivates the GameObject.
     */
    SetActive() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}