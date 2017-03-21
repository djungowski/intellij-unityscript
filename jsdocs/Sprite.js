class Sprite {

    /**
     * Create a new Sprite object.
     */
    static Create() {}

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
     * Returns the texture that contains the alpha channel from the source texture. Unity generates this texture under the hood for sprites that have alpha in the source, and need to be compressed using techniques like ETC1.Returns NULL if there is no associated alpha texture for the source sprite. This is the case if the sprite has not been setup to use ETC1 compression.
     */
    get associatedAlphaSplitTexture() {}

    /**
     * Returns the texture that contains the alpha channel from the source texture. Unity generates this texture under the hood for sprites that have alpha in the source, and need to be compressed using techniques like ETC1.Returns NULL if there is no associated alpha texture for the source sprite. This is the case if the sprite has not been setup to use ETC1 compression.
     */
    set associatedAlphaSplitTexture(value) {}

    /**
     * Returns the border sizes of the sprite.
     */
    get border() {}

    /**
     * Returns the border sizes of the sprite.
     */
    set border(value) {}

    /**
     * 
          Bounds of the Sprite, specified by its center and extents in world space units.
     */
    get bounds() {}

    /**
     * 
          Bounds of the Sprite, specified by its center and extents in world space units.
     */
    set bounds(value) {}

    /**
     * Returns true if this Sprite is packed in an atlas.
     */
    get packed() {}

    /**
     * Returns true if this Sprite is packed in an atlas.
     */
    set packed(value) {}

    /**
     * If Sprite is packed (see Sprite.packed), returns its SpritePackingMode.
     */
    get packingMode() {}

    /**
     * If Sprite is packed (see Sprite.packed), returns its SpritePackingMode.
     */
    set packingMode(value) {}

    /**
     * If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation.
     */
    get packingRotation() {}

    /**
     * If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation.
     */
    set packingRotation(value) {}

    /**
     * Location of the Sprite&#039;s center point in the Rect on the original Texture, specified in pixels.
     */
    get pivot() {}

    /**
     * Location of the Sprite&#039;s center point in the Rect on the original Texture, specified in pixels.
     */
    set pivot(value) {}

    /**
     * The number of pixels in the sprite that correspond to one unit in world space. (Read Only)
     */
    get pixelsPerUnit() {}

    /**
     * The number of pixels in the sprite that correspond to one unit in world space. (Read Only)
     */
    set pixelsPerUnit(value) {}

    /**
     * Location of the Sprite on the original Texture, specified in pixels.
     */
    get rect() {}

    /**
     * Location of the Sprite on the original Texture, specified in pixels.
     */
    set rect(value) {}

    /**
     * Get the reference to the used texture. If packed this will point to the atlas, if not packed will point to the source sprite.
     */
    get texture() {}

    /**
     * Get the reference to the used texture. If packed this will point to the atlas, if not packed will point to the source sprite.
     */
    set texture(value) {}

    /**
     * Get the rectangle this sprite uses on its texture. Raises an exception if this sprite is tightly packed in an atlas.
     */
    get textureRect() {}

    /**
     * Get the rectangle this sprite uses on its texture. Raises an exception if this sprite is tightly packed in an atlas.
     */
    set textureRect(value) {}

    /**
     * Gets the offset of the rectangle this sprite uses on its texture to the original sprite bounds. If sprite mesh type is FullRect, offset is zero.
     */
    get textureRectOffset() {}

    /**
     * Gets the offset of the rectangle this sprite uses on its texture to the original sprite bounds. If sprite mesh type is FullRect, offset is zero.
     */
    set textureRectOffset(value) {}

    /**
     * Returns a copy of the array containing sprite mesh triangles.
     */
    get triangles() {}

    /**
     * Returns a copy of the array containing sprite mesh triangles.
     */
    set triangles(value) {}

    /**
     * The base texture coordinates of the sprite mesh.
     */
    get uv() {}

    /**
     * The base texture coordinates of the sprite mesh.
     */
    set uv(value) {}

    /**
     * Returns a copy of the array containing sprite mesh vertex positions.
     */
    get vertices() {}

    /**
     * Returns a copy of the array containing sprite mesh vertex positions.
     */
    set vertices(value) {}

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
     * Sets up new Sprite geometry.
     */
    OverrideGeometry() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}