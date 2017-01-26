class MonoScript {

    /**
     * Returns the MonoScript object containing specified MonoBehaviour.
     */
    static FromMonoBehaviour() {}

    /**
     * Returns the MonoScript object containing specified ScriptableObject.
     */
    static FromScriptableObject() {}

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
     * The raw bytes of the text asset. (Read Only)
     */
    get bytes() {}

    /**
     * The raw bytes of the text asset. (Read Only)
     */
    set bytes(value) {}

    /**
     * The text contents of the .txt file as a string. (Read Only)
     */
    get text() {}

    /**
     * The text contents of the .txt file as a string. (Read Only)
     */
    set text(value) {}


    /**
     * Returns the System.Type object of the class implemented by this script.
     */
    GetClass() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}