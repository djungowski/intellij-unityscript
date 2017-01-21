class ShaderGUI {

    /**
     * This method is called when a new shader has been selected for a Material.
     */
    static AssignNewShaderToMaterial() {}

    /**
     * To define a custom shader GUI use the methods of materialEditor to render controls for the properties array.
     */
    static OnGUI() {}

    /**
     * Override for extending the rendering of the Preview area or completly replace the preview (by not calling base.OnMaterialPreviewGUI).
     */
    static OnMaterialPreviewGUI() {}

    /**
     * Override for extending the functionality of the toolbar of the preview area or completly replace the toolbar by not calling base.OnMaterialPreviewSettingsGUI.
     */
    static OnMaterialPreviewSettingsGUI() {}



    /**
     * This method is called when a new shader has been selected for a Material.
     */
    AssignNewShaderToMaterial() {}

    /**
     * To define a custom shader GUI use the methods of materialEditor to render controls for the properties array.
     */
    OnGUI() {}

    /**
     * Override for extending the rendering of the Preview area or completly replace the preview (by not calling base.OnMaterialPreviewGUI).
     */
    OnMaterialPreviewGUI() {}

    /**
     * Override for extending the functionality of the toolbar of the preview area or completly replace the toolbar by not calling base.OnMaterialPreviewSettingsGUI.
     */
    OnMaterialPreviewSettingsGUI() {}

}