class SerializedObject {


    /**
     * Does the serialized object represents multiple objects due to multi-object editing? (Read Only)
     */
    get isEditingMultipleObjects() {}

    /**
     * Does the serialized object represents multiple objects due to multi-object editing? (Read Only)
     */
    set isEditingMultipleObjects(value) {}

    /**
     * Defines the maximum size beyond which arrays cannot be edited when multiple objects are selected.
     */
    get maxArraySizeForMultiEditing() {}

    /**
     * Defines the maximum size beyond which arrays cannot be edited when multiple objects are selected.
     */
    set maxArraySizeForMultiEditing(value) {}

    /**
     * The inspected object (Read Only).
     */
    get targetObject() {}

    /**
     * The inspected object (Read Only).
     */
    set targetObject(value) {}

    /**
     * The inspected objects (Read Only).
     */
    get targetObjects() {}

    /**
     * The inspected objects (Read Only).
     */
    set targetObjects(value) {}


    /**
     * Apply property modifications.
     */
    ApplyModifiedProperties() {}

    /**
     * Applies property modifications without registering an undo operation.
     */
    ApplyModifiedPropertiesWithoutUndo() {}

    /**
     * Copies a value from a SerializedProperty to the same serialized property on this serialized object.
     */
    CopyFromSerializedProperty() {}

    /**
     * Find serialized property by name.
     */
    FindProperty() {}

    /**
     * Get the first serialized property.
     */
    GetIterator() {}

    /**
     * Update hasMultipleDifferentValues cache on the next /Update()/ call.
     */
    SetIsDifferentCacheDirty() {}

    /**
     * Update serialized object&#039;s representation.
     */
    Update() {}

    /**
     * Update serialized object&#039;s representation, only if the object has been modified since the last call to Update or if it is a script.
     */
    UpdateIfDirtyOrScript() {}

}