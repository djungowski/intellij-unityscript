class ShaderVariantCollection {

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
     * Is this ShaderVariantCollection already warmed up? (Read Only)
     */
    get isWarmedUp() {}

    /**
     * Is this ShaderVariantCollection already warmed up? (Read Only)
     */
    set isWarmedUp(value) {}

    /**
     * Number of shaders in this collection (Read Only).
     */
    get shaderCount() {}

    /**
     * Number of shaders in this collection (Read Only).
     */
    set shaderCount(value) {}

    /**
     * Number of total varians in this collection (Read Only).
     */
    get variantCount() {}

    /**
     * Number of total varians in this collection (Read Only).
     */
    set variantCount(value) {}

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
     * Adds a new shader variant to the collection.
     */
    Add() {}

    /**
     * Remove all shader variants from the collection.
     */
    Clear() {}

    /**
     * Checks if a shader variant is in the collection.
     */
    Contains() {}

    /**
     * Adds shader variant from the collection.
     */
    Remove() {}

    /**
     * Fully load shaders in ShaderVariantCollection.
     */
    WarmUp() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}