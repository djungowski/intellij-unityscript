class BillboardAsset {

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
     * Height of the billboard that is below ground.
     */
    get bottom() {}

    /**
     * Height of the billboard that is below ground.
     */
    set bottom(value) {}

    /**
     * Height of the billboard.
     */
    get height() {}

    /**
     * Height of the billboard.
     */
    set height(value) {}

    /**
     * Number of pre-rendered images that can be switched when the billboard is viewed from different angles.
     */
    get imageCount() {}

    /**
     * Number of pre-rendered images that can be switched when the billboard is viewed from different angles.
     */
    set imageCount(value) {}

    /**
     * Number of indices in the billboard mesh.
     */
    get indexCount() {}

    /**
     * Number of indices in the billboard mesh.
     */
    set indexCount(value) {}

    /**
     * The material used for rendering.
     */
    get material() {}

    /**
     * The material used for rendering.
     */
    set material(value) {}

    /**
     * Number of vertices in the billboard mesh.
     */
    get vertexCount() {}

    /**
     * Number of vertices in the billboard mesh.
     */
    set vertexCount(value) {}

    /**
     * Width of the billboard.
     */
    get width() {}

    /**
     * Width of the billboard.
     */
    set width(value) {}

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
     * Get the array of billboard image texture coordinate data.
     */
    GetImageTexCoords() {}

    /**
     * Get the indices of the billboard mesh.
     */
    GetIndices() {}

    /**
     * Get the vertices of the billboard mesh.
     */
    GetVertices() {}

    /**
     * Set the array of billboard image texture coordinate data.
     */
    SetImageTexCoords() {}

    /**
     * Set the indices of the billboard mesh.
     */
    SetIndices() {}

    /**
     * Set the vertices of the billboard mesh.
     */
    SetVertices() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}