class Editor {

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
     * Override this method in subclasses if you implement OnPreviewGUI.
     */
    static HasPreviewGUI() {}

    /**
     * Implement this function to make a custom inspector.
     */
    static OnInspectorGUI() {}

    /**
     * Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.
     */
    static OnInteractivePreviewGUI() {}

    /**
     * Implement to create your own custom preview for the preview area of the inspector, primary editor headers and the object selector.
     */
    static OnPreviewGUI() {}

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
     * Does this edit require to be repainted constantly in its current state?
     */
    static RequiresConstantRepaint() {}

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
     * Override this method in subclasses if you implement OnPreviewGUI.
     */
    static HasPreviewGUI() {}

    /**
     * Implement this function to make a custom inspector.
     */
    static OnInspectorGUI() {}

    /**
     * Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.
     */
    static OnInteractivePreviewGUI() {}

    /**
     * Implement to create your own custom preview for the preview area of the inspector, primary editor headers and the object selector.
     */
    static OnPreviewGUI() {}

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
     * Does this edit require to be repainted constantly in its current state?
     */
    static RequiresConstantRepaint() {}

    /**
     * Override this method in subclasses to return false if you don&#039;t want default margins.
     */
    static UseDefaultMargins() {}


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
     * Override this method in subclasses if you implement OnPreviewGUI.
     */
    HasPreviewGUI() {}

    /**
     * Implement this function to make a custom inspector.
     */
    OnInspectorGUI() {}

    /**
     * Implement to create your own interactive custom preview. Interactive custom previews are used in the preview area of the inspector and the object selector.
     */
    OnInteractivePreviewGUI() {}

    /**
     * Implement to create your own custom preview for the preview area of the inspector, primary editor headers and the object selector.
     */
    OnPreviewGUI() {}

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
     * Does this edit require to be repainted constantly in its current state?
     */
    RequiresConstantRepaint() {}

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