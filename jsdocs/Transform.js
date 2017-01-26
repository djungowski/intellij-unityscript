class Transform {

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
     * The number of children the Transform has.
     */
    get childCount() {}

    /**
     * The number of children the Transform has.
     */
    set childCount(value) {}

    /**
     * The rotation as Euler angles in degrees.
     */
    get eulerAngles() {}

    /**
     * The rotation as Euler angles in degrees.
     */
    set eulerAngles(value) {}

    /**
     * The blue axis of the transform in world space.
     */
    get forward() {}

    /**
     * The blue axis of the transform in world space.
     */
    set forward(value) {}

    /**
     * Has the transform changed since the last time the flag was set to &#039;false&#039;?
     */
    get hasChanged() {}

    /**
     * Has the transform changed since the last time the flag was set to &#039;false&#039;?
     */
    set hasChanged(value) {}

    /**
     * The transform capacity of the transform&#039;s hierarchy data structure.
     */
    get hierarchyCapacity() {}

    /**
     * The transform capacity of the transform&#039;s hierarchy data structure.
     */
    set hierarchyCapacity(value) {}

    /**
     * The number of transforms in the transform&#039;s hierarchy data structure.
     */
    get hierarchyCount() {}

    /**
     * The number of transforms in the transform&#039;s hierarchy data structure.
     */
    set hierarchyCount(value) {}

    /**
     * The rotation as Euler angles in degrees relative to the parent transform&#039;s rotation.
     */
    get localEulerAngles() {}

    /**
     * The rotation as Euler angles in degrees relative to the parent transform&#039;s rotation.
     */
    set localEulerAngles(value) {}

    /**
     * Position of the transform relative to the parent transform.
     */
    get localPosition() {}

    /**
     * Position of the transform relative to the parent transform.
     */
    set localPosition(value) {}

    /**
     * The rotation of the transform relative to the parent transform&#039;s rotation.
     */
    get localRotation() {}

    /**
     * The rotation of the transform relative to the parent transform&#039;s rotation.
     */
    set localRotation(value) {}

    /**
     * The scale of the transform relative to the parent.
     */
    get localScale() {}

    /**
     * The scale of the transform relative to the parent.
     */
    set localScale(value) {}

    /**
     * Matrix that transforms a point from local space into world space (Read Only).
     */
    get localToWorldMatrix() {}

    /**
     * Matrix that transforms a point from local space into world space (Read Only).
     */
    set localToWorldMatrix(value) {}

    /**
     * The global scale of the object (Read Only).
     */
    get lossyScale() {}

    /**
     * The global scale of the object (Read Only).
     */
    set lossyScale(value) {}

    /**
     * The parent of the transform.
     */
    get parent() {}

    /**
     * The parent of the transform.
     */
    set parent(value) {}

    /**
     * The position of the transform in world space.
     */
    get position() {}

    /**
     * The position of the transform in world space.
     */
    set position(value) {}

    /**
     * The red axis of the transform in world space.
     */
    get right() {}

    /**
     * The red axis of the transform in world space.
     */
    set right(value) {}

    /**
     * Returns the topmost transform in the hierarchy.
     */
    get root() {}

    /**
     * Returns the topmost transform in the hierarchy.
     */
    set root(value) {}

    /**
     * The rotation of the transform in world space stored as a Quaternion.
     */
    get rotation() {}

    /**
     * The rotation of the transform in world space stored as a Quaternion.
     */
    set rotation(value) {}

    /**
     * The green axis of the transform in world space.
     */
    get up() {}

    /**
     * The green axis of the transform in world space.
     */
    set up(value) {}

    /**
     * Matrix that transforms a point from world space into local space (Read Only).
     */
    get worldToLocalMatrix() {}

    /**
     * Matrix that transforms a point from world space into local space (Read Only).
     */
    set worldToLocalMatrix(value) {}

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
     * Unparents all children.
     */
    DetachChildren() {}

    /**
     * Finds a child by name and returns it.
     */
    Find() {}

    /**
     * Returns a transform child by index.
     */
    GetChild() {}

    /**
     * Gets the sibling index.
     */
    GetSiblingIndex() {}

    /**
     * Transforms a direction from world space to local space. The opposite of Transform.TransformDirection.
     */
    InverseTransformDirection() {}

    /**
     * Transforms position from world space to local space.
     */
    InverseTransformPoint() {}

    /**
     * Transforms a vector from world space to local space. The opposite of Transform.TransformVector.
     */
    InverseTransformVector() {}

    /**
     * Is this transform a child of parent?
     */
    IsChildOf() {}

    /**
     * Rotates the transform so the forward vector points at /target/&#039;s current position.
     */
    LookAt() {}

    /**
     * Applies a rotation of eulerAngles.z degrees around the z axis, eulerAngles.x degrees around the x axis, and eulerAngles.y degrees around the y axis (in that order).
     */
    Rotate() {}

    /**
     * Rotates the transform about axis passing through point in world coordinates by angle degrees.
     */
    RotateAround() {}

    /**
     * Move the transform to the start of the local transform list.
     */
    SetAsFirstSibling() {}

    /**
     * Move the transform to the end of the local transform list.
     */
    SetAsLastSibling() {}

    /**
     * Set the parent of the transform.
     */
    SetParent() {}

    /**
     * Sets the sibling index.
     */
    SetSiblingIndex() {}

    /**
     * Transforms direction from local space to world space.
     */
    TransformDirection() {}

    /**
     * Transforms position from local space to world space.
     */
    TransformPoint() {}

    /**
     * Transforms vector from local space to world space.
     */
    TransformVector() {}

    /**
     * Moves the transform in the direction and distance of translation.
     */
    Translate() {}

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