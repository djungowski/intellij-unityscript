class LightProbeProxyVolume {
    /**
     * Checks if Light Probe Proxy Volumes are supported.
     */
    static get isFeatureSupported() {}

    /**
     * Checks if Light Probe Proxy Volumes are supported.
     */
    static set isFeatureSupported(value) {}


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
     * The bounding box mode for generating the 3D grid of interpolated Light Probes.
     */
    get boundingBoxMode() {}

    /**
     * The bounding box mode for generating the 3D grid of interpolated Light Probes.
     */
    set boundingBoxMode(value) {}

    /**
     * The world-space bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    get boundsGlobal() {}

    /**
     * The world-space bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    set boundsGlobal(value) {}

    /**
     * The 3D grid resolution on the z-axis.
     */
    get gridResolutionX() {}

    /**
     * The 3D grid resolution on the z-axis.
     */
    set gridResolutionX(value) {}

    /**
     * The 3D grid resolution on the y-axis.
     */
    get gridResolutionY() {}

    /**
     * The 3D grid resolution on the y-axis.
     */
    set gridResolutionY(value) {}

    /**
     * The 3D grid resolution on the z-axis.
     */
    get gridResolutionZ() {}

    /**
     * The 3D grid resolution on the z-axis.
     */
    set gridResolutionZ(value) {}

    /**
     * The local-space origin of the bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    get originCustom() {}

    /**
     * The local-space origin of the bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    set originCustom(value) {}

    /**
     * Interpolated Light Probe density.
     */
    get probeDensity() {}

    /**
     * Interpolated Light Probe density.
     */
    set probeDensity(value) {}

    /**
     * The mode in which the interpolated Light Probe positions are generated.
     */
    get probePositionMode() {}

    /**
     * The mode in which the interpolated Light Probe positions are generated.
     */
    set probePositionMode(value) {}

    /**
     * Sets the way the Light Probe Proxy Volume refreshes.
     */
    get refreshMode() {}

    /**
     * Sets the way the Light Probe Proxy Volume refreshes.
     */
    set refreshMode(value) {}

    /**
     * The resolution mode for generating the grid of interpolated Light Probes.
     */
    get resolutionMode() {}

    /**
     * The resolution mode for generating the grid of interpolated Light Probes.
     */
    set resolutionMode(value) {}

    /**
     * The size of the bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    get sizeCustom() {}

    /**
     * The size of the bounding box in which the 3D grid of interpolated Light Probes is generated.
     */
    set sizeCustom(value) {}

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
     * Triggers an update of the Light Probe Proxy Volume.
     */
    Update() {}

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