class Font {

    /**
     * Creates a Font object which lets you render a font installed on the user machine.
     */
    static CreateDynamicFontFromOSFont() {}

    /**
     * Returns the maximum number of verts that the text generator may return for a given string.
     */
    static GetMaxVertsForString() {}

    /**
     * Get names of fonts installed on the machine.
     */
    static GetOSInstalledFontNames() {}

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
     * The ascent of the font.
     */
    get ascent() {}

    /**
     * The ascent of the font.
     */
    set ascent(value) {}

    /**
     * Access an array of all characters contained in the font texture.
     */
    get characterInfo() {}

    /**
     * Access an array of all characters contained in the font texture.
     */
    set characterInfo(value) {}

    /**
     * Is the font a dynamic font.
     */
    get dynamic() {}

    /**
     * Is the font a dynamic font.
     */
    set dynamic(value) {}

    /**
     * The default size of the font.
     */
    get fontSize() {}

    /**
     * The default size of the font.
     */
    set fontSize(value) {}

    /**
     * The line height of the font.
     */
    get lineHeight() {}

    /**
     * The line height of the font.
     */
    set lineHeight(value) {}

    /**
     * The material used for the font display.
     */
    get material() {}

    /**
     * The material used for the font display.
     */
    set material(value) {}

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
     * Get rendering info for a specific character.
     */
    GetCharacterInfo() {}

    /**
     * Does this font have a specific character?
     */
    HasCharacter() {}

    /**
     * Request characters to be added to the font texture (dynamic fonts only).
     */
    RequestCharactersInTexture() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}