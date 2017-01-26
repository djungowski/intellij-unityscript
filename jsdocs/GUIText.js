class GUIText {

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
     * The alignment of the text.
     */
    get alignment() {}

    /**
     * The alignment of the text.
     */
    set alignment(value) {}

    /**
     * The anchor of the text.
     */
    get anchor() {}

    /**
     * The anchor of the text.
     */
    set anchor(value) {}

    /**
     * The color used to render the text.
     */
    get color() {}

    /**
     * The color used to render the text.
     */
    set color(value) {}

    /**
     * The font used for the text.
     */
    get font() {}

    /**
     * The font used for the text.
     */
    set font(value) {}

    /**
     * The font size to use (for dynamic fonts).
     */
    get fontSize() {}

    /**
     * The font size to use (for dynamic fonts).
     */
    set fontSize(value) {}

    /**
     * The font style to use (for dynamic fonts).
     */
    get fontStyle() {}

    /**
     * The font style to use (for dynamic fonts).
     */
    set fontStyle(value) {}

    /**
     * The line spacing multiplier.
     */
    get lineSpacing() {}

    /**
     * The line spacing multiplier.
     */
    set lineSpacing(value) {}

    /**
     * The Material to use for rendering.
     */
    get material() {}

    /**
     * The Material to use for rendering.
     */
    set material(value) {}

    /**
     * The pixel offset of the text.
     */
    get pixelOffset() {}

    /**
     * The pixel offset of the text.
     */
    set pixelOffset(value) {}

    /**
     * Enable HTML-style tags for Text Formatting Markup.
     */
    get richText() {}

    /**
     * Enable HTML-style tags for Text Formatting Markup.
     */
    set richText(value) {}

    /**
     * The tab width multiplier.
     */
    get tabSize() {}

    /**
     * The tab width multiplier.
     */
    set tabSize(value) {}

    /**
     * The text to display.
     */
    get text() {}

    /**
     * The text to display.
     */
    set text(value) {}

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
     * Returns bounding rectangle of GUIElement in screen coordinates.
     */
    GetScreenRect() {}

    /**
     * Is a point on screen inside the element?
     */
    HitTest() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}