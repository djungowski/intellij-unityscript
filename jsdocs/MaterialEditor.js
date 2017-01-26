class MaterialEditor {
    /**
     * Useful for indenting shader properties that need the same indent as mini texture field.
     */
    static get kMiniTextureFieldLabelIndentLevel() {}

    /**
     * Useful for indenting shader properties that need the same indent as mini texture field.
     */
    static set kMiniTextureFieldLabelIndentLevel(value) {}


    /**
     * Apply initial MaterialPropertyDrawer values.
     */
    static ApplyMaterialPropertyDrawers() {}

    /**
     * Calculate height needed for the property, ignoring custom drawers.
     */
    static GetDefaultPropertyHeight() {}

    /**
     * Utility method for GUI layouting ShaderGUI. Used e.g for the rect after a left aligned Color field.
     */
    static GetFlexibleRectBetweenFieldAndRightEdge() {}

    /**
     * Utility method for GUI layouting ShaderGUI.
     */
    static GetFlexibleRectBetweenLabelAndField() {}

    /**
     * Utility method for GUI layouting ShaderGUI.
     */
    static GetLeftAlignedFieldRect() {}

    /**
     * Get shader property information of the passed materials.
     */
    static GetMaterialProperties() {}

    /**
     * Get information about a single shader property.
     */
    static GetMaterialProperty() {}

    /**
     * Utility method for GUI layouting ShaderGUI. This is the rect after the label which can be used for multiple properties. The input rect can be fetched by calling: EditorGUILayout.GetControlRect.
     */
    static GetRectAfterLabelWidth() {}

    /**
     * Utility method for GUI layouting ShaderGUI.
     */
    static GetRightAlignedFieldRect() {}

    /**
     * On return previousEditor is an editor for targetObject or targetObjects. The function either returns if the editor is already tracking the objects, or Destroys the previous editor and creates a new one.
     */
    static CreateCachedEditor() {}

    /**
     * Make a custom editor for targetObject or targetObjects.
     */
    static CreateEditor() {}

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
     * Creates an instance of a scriptable object.
     */
    static CreateInstance() {}


    /**
     * Is the current material expanded.
     */
    get isVisible() {}

    /**
     * Is the current material expanded.
     */
    set isVisible(value) {}

    /**
     * A SerializedObject representing the object or objects being inspected.
     */
    get serializedObject() {}

    /**
     * A SerializedObject representing the object or objects being inspected.
     */
    set serializedObject(value) {}

    /**
     * The object being inspected.
     */
    get target() {}

    /**
     * The object being inspected.
     */
    set target(value) {}

    /**
     * An array of all the object being inspected.
     */
    get targets() {}

    /**
     * An array of all the object being inspected.
     */
    set targets(value) {}

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
     * Called when the Editor is woken up.
     */
    Awake() {}

    /**
     * Draw a property field for a color shader property.
     */
    ColorProperty() {}

    /**
     * Default handling of preview area for materials.
     */
    DefaultPreviewGUI() {}

    /**
     * Default toolbar for material preview area.
     */
    DefaultPreviewSettingsGUI() {}

    /**
     * Handles UI for one shader property ignoring any custom drawers.
     */
    DefaultShaderProperty() {}

    /**
     * Draw a property field for a float shader property.
     */
    FloatProperty() {}

    /**
     * Calculate height needed for the property.
     */
    GetPropertyHeight() {}

    /**
     * Returns the free rect below the label and before the large thumb object field. Is used for e.g. tiling and offset properties.
     */
    GetTexturePropertyCustomArea() {}

    /**
     * Can this component be Previewed in its current state?
     */
    HasPreviewGUI() {}

    /**
     * Make a help box with a message and button. Returns true, if button was pressed.
     */
    HelpBoxWithButton() {}

    /**
     * This function will draw the UI for the lightmap emission property. (None, Realtime, baked)See Also: MaterialLightmapFlags.
     */
    LightmapEmissionProperty() {}

    /**
     * Called when the editor is disabled, if overridden please call the base OnDisable() to ensure that the material inspector is set up properly.
     */
    OnDisable() {}

    /**
     * Called when the editor is enabled, if overridden please call the base OnEnable() to ensure that the material inspector is set up properly.
     */
    OnEnable() {}

    /**
     * Implement specific MaterialEditor GUI code here. If you want to simply extend the existing editor call the base OnInspectorGUI () before doing any custom GUI code.
     */
    OnInspectorGUI() {}

    /**
     * Custom preview for Image component.
     */
    OnPreviewGUI() {}

    /**
     * Whenever a material property is changed call this function. This will rebuild the inspector and validate the properties.
     */
    PropertiesChanged() {}

    /**
     * Default rendering of shader properties.
     */
    PropertiesDefaultGUI() {}

    /**
     * Render the standard material properties. This method will either render properties using a IShaderGUI instance if found otherwise it uses PropertiesDefaultGUI.
     */
    PropertiesGUI() {}

    /**
     * Draw a range slider for a range shader property.
     */
    RangeProperty() {}

    /**
     * Call this when you change a material property. It will add an undo for the action.
     */
    RegisterPropertyChangeUndo() {}

    /**
     * Display UI for editing material&#039;s render queue setting.
     */
    RenderQueueField() {}

    /**
     * Does this edit require to be repainted constantly in its current state?
     */
    RequiresConstantRepaint() {}

    /**
     * Set EditorGUIUtility.fieldWidth and labelWidth to the default values that PropertiesGUI uses.
     */
    SetDefaultGUIWidths() {}

    /**
     * Set the shader of the material.
     */
    SetShader() {}

    /**
     * Handes UI for one shader property.
     */
    ShaderProperty() {}

    /**
     * Checks if particular property has incorrect type of texture specified by the material, displays appropriate warning and suggests the user to automatically fix the problem.
     */
    TextureCompatibilityWarning() {}

    /**
     * Draw a property field for a texture shader property.
     */
    TextureProperty() {}

    /**
     * Draw a property field for a texture shader property that only takes up a single line height.
     */
    TexturePropertyMiniThumbnail() {}

    /**
     * Method for showing a texture property control with additional inlined properites.
     */
    TexturePropertySingleLine() {}

    /**
     * Method for showing a compact layout of properties.
     */
    TexturePropertyTwoLines() {}

    /**
     * Method for showing a texture property control with a HDR color field and its color brightness float field.
     */
    TexturePropertyWithHDRColor() {}

    /**
     * Draws tiling and offset properties for a texture.
     */
    TextureScaleOffsetProperty() {}

    /**
     * Draw a property field for a vector shader property.
     */
    VectorProperty() {}

    /**
     * Draw the built-in inspector.
     */
    DrawDefaultInspector() {}

    /**
     * Call this function to draw the header of the editor.
     */
    DrawHeader() {}

    /**
     * The first entry point for Preview Drawing.
     */
    DrawPreview() {}

    /**
     * Implement this method to show asset information on top of the asset preview.
     */
    GetInfoString() {}

    /**
     * Override this method if you want to change the label of the Preview area.
     */
    GetPreviewTitle() {}

    /**
     * Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.
     */
    OnInteractivePreviewGUI() {}

    /**
     * Override this method if you want to show custom controls in the preview header.
     */
    OnPreviewSettings() {}

    /**
     * Override this method if you want to render a static preview that shows.
     */
    RenderStaticPreview() {}

    /**
     * Repaint any inspectors that shows this editor.
     */
    Repaint() {}

    /**
     * Override this method in subclasses to return false if you don&#039;t want default margins.
     */
    UseDefaultMargins() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}