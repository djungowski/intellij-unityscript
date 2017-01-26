class Canvas {

    /**
     * Force all canvases to update their content.
     */
    static ForceUpdateCanvases() {}

    /**
     * Returns the default material that can be used for rendering normal elements on the Canvas.
     */
    static GetDefaultCanvasMaterial() {}

    /**
     * Gets or generates the ETC1 Material.
     */
    static GetETC1SupportedCanvasMaterial() {}

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
     * Cached calculated value based upon SortingLayerID.
     */
    get cachedSortingLayerValue() {}

    /**
     * Cached calculated value based upon SortingLayerID.
     */
    set cachedSortingLayerValue(value) {}

    /**
     * Is this the root Canvas?
     */
    get isRootCanvas() {}

    /**
     * Is this the root Canvas?
     */
    set isRootCanvas(value) {}

    /**
     * The normalized grid size that the canvas will split the renderable area into.
     */
    get normalizedSortingGridSize() {}

    /**
     * The normalized grid size that the canvas will split the renderable area into.
     */
    set normalizedSortingGridSize(value) {}

    /**
     * Allows for nested canvases to override pixelPerfect settings inherited from parent canvases.
     */
    get overridePixelPerfect() {}

    /**
     * Allows for nested canvases to override pixelPerfect settings inherited from parent canvases.
     */
    set overridePixelPerfect(value) {}

    /**
     * Override the sorting of canvas.
     */
    get overrideSorting() {}

    /**
     * Override the sorting of canvas.
     */
    set overrideSorting(value) {}

    /**
     * Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space.
     */
    get pixelPerfect() {}

    /**
     * Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space.
     */
    set pixelPerfect(value) {}

    /**
     * Get the render rect for the Canvas.
     */
    get pixelRect() {}

    /**
     * Get the render rect for the Canvas.
     */
    set pixelRect(value) {}

    /**
     * How far away from the camera is the Canvas generated.
     */
    get planeDistance() {}

    /**
     * How far away from the camera is the Canvas generated.
     */
    set planeDistance(value) {}

    /**
     * The number of pixels per unit that is considered the default.
     */
    get referencePixelsPerUnit() {}

    /**
     * The number of pixels per unit that is considered the default.
     */
    set referencePixelsPerUnit(value) {}

    /**
     * Is the Canvas in World or Overlay mode?
     */
    get renderMode() {}

    /**
     * Is the Canvas in World or Overlay mode?
     */
    set renderMode(value) {}

    /**
     * The render order in which the canvas is being emitted to the scene.
     */
    get renderOrder() {}

    /**
     * The render order in which the canvas is being emitted to the scene.
     */
    set renderOrder(value) {}

    /**
     * Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself.
     */
    get rootCanvas() {}

    /**
     * Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself.
     */
    set rootCanvas(value) {}

    /**
     * Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space.
     */
    get scaleFactor() {}

    /**
     * Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space.
     */
    set scaleFactor(value) {}

    /**
     * Unique ID of the Canvas&#039; sorting layer.
     */
    get sortingLayerID() {}

    /**
     * Unique ID of the Canvas&#039; sorting layer.
     */
    set sortingLayerID(value) {}

    /**
     * Name of the Canvas&#039; sorting layer.
     */
    get sortingLayerName() {}

    /**
     * Name of the Canvas&#039; sorting layer.
     */
    set sortingLayerName(value) {}

    /**
     * Canvas&#039; order within a sorting layer.
     */
    get sortingOrder() {}

    /**
     * Canvas&#039; order within a sorting layer.
     */
    set sortingOrder(value) {}

    /**
     * For Overlay mode, display index on which the UI canvas will appear.
     */
    get targetDisplay() {}

    /**
     * For Overlay mode, display index on which the UI canvas will appear.
     */
    set targetDisplay(value) {}

    /**
     * 
          Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas].
     */
    get worldCamera() {}

    /**
     * 
          Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas].
     */
    set worldCamera(value) {}

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