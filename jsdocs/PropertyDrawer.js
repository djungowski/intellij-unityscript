class PropertyDrawer {


    /**
     * The PropertyAttribute for the property. Not applicable for custom class drawers. (Read Only)
     */
    get attribute() {}

    /**
     * The PropertyAttribute for the property. Not applicable for custom class drawers. (Read Only)
     */
    set attribute(value) {}

    /**
     * The reflection FieldInfo for the member this property represents. (Read Only)
     */
    get fieldInfo() {}

    /**
     * The reflection FieldInfo for the member this property represents. (Read Only)
     */
    set fieldInfo(value) {}


    /**
     * Override this method to specify how tall the GUI for this field is in pixels.
     */
    GetPropertyHeight() {}

    /**
     * Override this method to make your own GUI for the property.
     */
    OnGUI() {}

}