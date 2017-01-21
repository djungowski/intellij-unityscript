class ObjectPreview {


    /**
     * The object currently being previewed.
     */
    get target() {}

    /**
     * The object currently being previewed.
     */
    set target(value) {}


    /**
     * This is the first entry point for Preview Drawing.
     */
    DrawPreview() {}

    /**
     * Implement this method to show object information on top of the object preview.
     */
    GetInfoString() {}

    /**
     * Override this method if you want to change the label of the Preview area.
     */
    GetPreviewTitle() {}

    /**
     * Can this component be Previewed in its current state?
     */
    HasPreviewGUI() {}

    /**
     * Called when the Preview gets created with the objects being previewed.
     */
    Initialize() {}

    /**
     * Called to iterate through the targets, this will be used when previewing more than one target.
     */
    MoveNextTarget() {}

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
     * Called to Reset the target before iterating through them.
     */
    ResetTarget() {}

}