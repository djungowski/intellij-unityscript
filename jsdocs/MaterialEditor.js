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
     * Called when the Editor is woken up.
     */
    static Awake() {}

    /**
     * Draw a property field for a color shader property.
     */
    static ColorProperty() {}

    /**
     * Default handling of preview area for materials.
     */
    static DefaultPreviewGUI() {}

    /**
     * Default toolbar for material preview area.
     */
    static DefaultPreviewSettingsGUI() {}

    /**
     * Handles UI for one shader property ignoring any custom drawers.
     */
    static DefaultShaderProperty() {}

    /**
     * Draw a property field for a float shader property.
     */
    static FloatProperty() {}

    /**
     * Calculate height needed for the property.
     */
    static GetPropertyHeight() {}

    /**
     * Returns the free rect below the label and before the large thumb object field. Is used for e.g. tiling and offset properties.
     */
    static GetTexturePropertyCustomArea() {}

    /**
     * Can this component be Previewed in its current state?
     */
    static HasPreviewGUI() {}

    /**
     * Make a help box with a message and button. Returns true, if button was pressed.
     */
    static HelpBoxWithButton() {}

    /**
     * This function will draw the UI for the lightmap emission property. (None, Realtime, baked)See Also: MaterialLightmapFlags.
     */
    static LightmapEmissionProperty() {}

    /**
     * Called when the editor is disabled, if overridden please call the base OnDisable() to ensure that the material inspector is set up properly.
     */
    static OnDisable() {}

    /**
     * Called when the editor is enabled, if overridden please call the base OnEnable() to ensure that the material inspector is set up properly.
     */
    static OnEnable() {}

    /**
     * Implement specific MaterialEditor GUI code here. If you want to simply extend the existing editor call the base OnInspectorGUI () before doing any custom GUI code.
     */
    static OnInspectorGUI() {}

    /**
     * Custom preview for Image component.
     */
    static OnPreviewGUI() {}

    /**
     * Whenever a material property is changed call this function. This will rebuild the inspector and validate the properties.
     */
    static PropertiesChanged() {}

    /**
     * Default rendering of shader properties.
     */
    static PropertiesDefaultGUI() {}

    /**
     * Render the standard material properties. This method will either render properties using a IShaderGUI instance if found otherwise it uses PropertiesDefaultGUI.
     */
    static PropertiesGUI() {}

    /**
     * Draw a range slider for a range shader property.
     */
    static RangeProperty() {}

    /**
     * Call this when you change a material property. It will add an undo for the action.
     */
    static RegisterPropertyChangeUndo() {}

    /**
     * Display UI for editing material&#039;s render queue setting.
     */
    static RenderQueueField() {}

    /**
     * Does this edit require to be repainted constantly in its current state?
     */
    static RequiresConstantRepaint() {}

    /**
     * Set EditorGUIUtility.fieldWidth and labelWidth to the default values that PropertiesGUI uses.
     */
    static SetDefaultGUIWidths() {}

    /**
     * Set the shader of the material.
     */
    static SetShader() {}

    /**
     * Handes UI for one shader property.
     */
    static ShaderProperty() {}

    /**
     * Checks if particular property has incorrect type of texture specified by the material, displays appropriate warning and suggests the user to automatically fix the problem.
     */
    static TextureCompatibilityWarning() {}

    /**
     * Draw a property field for a texture shader property.
     */
    static TextureProperty() {}

    /**
     * Draw a property field for a texture shader property that only takes up a single line height.
     */
    static TexturePropertyMiniThumbnail() {}

    /**
     * Method for showing a texture property control with additional inlined properites.
     */
    static TexturePropertySingleLine() {}

    /**
     * Method for showing a compact layout of properties.
     */
    static TexturePropertyTwoLines() {}

    /**
     * Method for showing a texture property control with a HDR color field and its color brightness float field.
     */
    static TexturePropertyWithHDRColor() {}

    /**
     * Draws tiling and offset properties for a texture.
     */
    static TextureScaleOffsetProperty() {}

    /**
     * Draw a property field for a vector shader property.
     */
    static VectorProperty() {}

    /**
     * Draw the built-in inspector.
     */
    static DrawDefaultInspector() {}

    /**
     * Call this function to draw the header of the editor.
     */
    static DrawHeader() {}

    /**
     * The first entry point for Preview Drawing.
     */
    static DrawPreview() {}

    /**
     * Implement this method to show asset information on top of the asset preview.
     */
    static GetInfoString() {}

    /**
     * Override this method if you want to change the label of the Preview area.
     */
    static GetPreviewTitle() {}

    /**
     * Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.
     */
    static OnInteractivePreviewGUI() {}

    /**
     * Override this method if you want to show custom controls in the preview header.
     */
    static OnPreviewSettings() {}

    /**
     * Override this method if you want to render a static preview that shows.
     */
    static RenderStaticPreview() {}

    /**
     * Repaint any inspectors that shows this editor.
     */
    static Repaint() {}

    /**
     * Override this method in subclasses to return false if you don&#039;t want default margins.
     */
    static UseDefaultMargins() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}

    /**
     * Called when the Editor is woken up.
     */
    static Awake() {}

    /**
     * Draw a property field for a color shader property.
     */
    static ColorProperty() {}

    /**
     * Default handling of preview area for materials.
     */
    static DefaultPreviewGUI() {}

    /**
     * Default toolbar for material preview area.
     */
    static DefaultPreviewSettingsGUI() {}

    /**
     * Handles UI for one shader property ignoring any custom drawers.
     */
    static DefaultShaderProperty() {}

    /**
     * Draw a property field for a float shader property.
     */
    static FloatProperty() {}

    /**
     * Calculate height needed for the property.
     */
    static GetPropertyHeight() {}

    /**
     * Returns the free rect below the label and before the large thumb object field. Is used for e.g. tiling and offset properties.
     */
    static GetTexturePropertyCustomArea() {}

    /**
     * Can this component be Previewed in its current state?
     */
    static HasPreviewGUI() {}

    /**
     * Make a help box with a message and button. Returns true, if button was pressed.
     */
    static HelpBoxWithButton() {}

    /**
     * This function will draw the UI for the lightmap emission property. (None, Realtime, baked)See Also: MaterialLightmapFlags.
     */
    static LightmapEmissionProperty() {}

    /**
     * Called when the editor is disabled, if overridden please call the base OnDisable() to ensure that the material inspector is set up properly.
     */
    static OnDisable() {}

    /**
     * Called when the editor is enabled, if overridden please call the base OnEnable() to ensure that the material inspector is set up properly.
     */
    static OnEnable() {}

    /**
     * Implement specific MaterialEditor GUI code here. If you want to simply extend the existing editor call the base OnInspectorGUI () before doing any custom GUI code.
     */
    static OnInspectorGUI() {}

    /**
     * Custom preview for Image component.
     */
    static OnPreviewGUI() {}

    /**
     * Whenever a material property is changed call this function. This will rebuild the inspector and validate the properties.
     */
    static PropertiesChanged() {}

    /**
     * Default rendering of shader properties.
     */
    static PropertiesDefaultGUI() {}

    /**
     * Render the standard material properties. This method will either render properties using a IShaderGUI instance if found otherwise it uses PropertiesDefaultGUI.
     */
    static PropertiesGUI() {}

    /**
     * Draw a range slider for a range shader property.
     */
    static RangeProperty() {}

    /**
     * Call this when you change a material property. It will add an undo for the action.
     */
    static RegisterPropertyChangeUndo() {}

    /**
     * Display UI for editing material&#039;s render queue setting.
     */
    static RenderQueueField() {}

    /**
     * Does this edit require to be repainted constantly in its current state?
     */
    static RequiresConstantRepaint() {}

    /**
     * Set EditorGUIUtility.fieldWidth and labelWidth to the default values that PropertiesGUI uses.
     */
    static SetDefaultGUIWidths() {}

    /**
     * Set the shader of the material.
     */
    static SetShader() {}

    /**
     * Handes UI for one shader property.
     */
    static ShaderProperty() {}

    /**
     * Checks if particular property has incorrect type of texture specified by the material, displays appropriate warning and suggests the user to automatically fix the problem.
     */
    static TextureCompatibilityWarning() {}

    /**
     * Draw a property field for a texture shader property.
     */
    static TextureProperty() {}

    /**
     * Draw a property field for a texture shader property that only takes up a single line height.
     */
    static TexturePropertyMiniThumbnail() {}

    /**
     * Method for showing a texture property control with additional inlined properites.
     */
    static TexturePropertySingleLine() {}

    /**
     * Method for showing a compact layout of properties.
     */
    static TexturePropertyTwoLines() {}

    /**
     * Method for showing a texture property control with a HDR color field and its color brightness float field.
     */
    static TexturePropertyWithHDRColor() {}

    /**
     * Draws tiling and offset properties for a texture.
     */
    static TextureScaleOffsetProperty() {}

    /**
     * Draw a property field for a vector shader property.
     */
    static VectorProperty() {}


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