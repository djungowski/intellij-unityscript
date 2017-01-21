class SerializedProperty {

    /**
     * Remove all elements from the array.
     */
    static ClearArray() {}

    /**
     * Returns a copy of the SerializedProperty iterator in its current state. This is useful if you want to keep a reference to the current property but continue with the iteration.
     */
    static Copy() {}

    /**
     * Count visible children of this property, including this property itself.
     */
    static CountInProperty() {}

    /**
     * Count remaining visible properties.
     */
    static CountRemaining() {}

    /**
     * Delete the element at the specified index in the array.
     */
    static DeleteArrayElementAtIndex() {}

    /**
     * Deletes the serialized property.
     */
    static DeleteCommand() {}

    /**
     * Duplicates the serialized property.
     */
    static DuplicateCommand() {}

    /**
     * Retrieves the SerializedProperty at a relative path to the current property.
     */
    static FindPropertyRelative() {}

    /**
     * Returns the element at the specified index in the array.
     */
    static GetArrayElementAtIndex() {}

    /**
     * Retrieves the SerializedProperty that defines the end range of this property.
     */
    static GetEndProperty() {}

    /**
     * Retrieves an iterator that allows you to iterator over the current nexting of a serialized property.
     */
    static GetEnumerator() {}

    /**
     * Insert an empty element at the specified index in the array.
     */
    static InsertArrayElementAtIndex() {}

    /**
     * Move an array element from srcIndex to dstIndex.
     */
    static MoveArrayElement() {}

    /**
     * Move to next property.
     */
    static Next() {}

    /**
     * Move to next visible property.
     */
    static NextVisible() {}

    /**
     * Move to first property of the object.
     */
    static Reset() {}


    /**
     * Value of a animation curve property.
     */
    get animationCurveValue() {}

    /**
     * Value of a animation curve property.
     */
    set animationCurveValue(value) {}

    /**
     * The number of elements in the array. If the SerializedObject contains multiple objects it will return the smallest number of elements. So it is always possible to iterate through the SerializedObject and only get properties found in all objects.
     */
    get arraySize() {}

    /**
     * The number of elements in the array. If the SerializedObject contains multiple objects it will return the smallest number of elements. So it is always possible to iterate through the SerializedObject and only get properties found in all objects.
     */
    set arraySize(value) {}

    /**
     * Value of a boolean property.
     */
    get boolValue() {}

    /**
     * Value of a boolean property.
     */
    set boolValue(value) {}

    /**
     * Value of bounds property.
     */
    get boundsValue() {}

    /**
     * Value of bounds property.
     */
    set boundsValue(value) {}

    /**
     * Value of a color property.
     */
    get colorValue() {}

    /**
     * Value of a color property.
     */
    set colorValue(value) {}

    /**
     * Nesting depth of the property. (Read Only)
     */
    get depth() {}

    /**
     * Nesting depth of the property. (Read Only)
     */
    set depth(value) {}

    /**
     * Nice display name of the property. (Read Only)
     */
    get displayName() {}

    /**
     * Nice display name of the property. (Read Only)
     */
    set displayName(value) {}

    /**
     * Value of a float property as a double.
     */
    get doubleValue() {}

    /**
     * Value of a float property as a double.
     */
    set doubleValue(value) {}

    /**
     * Is this property editable? (Read Only)
     */
    get editable() {}

    /**
     * Is this property editable? (Read Only)
     */
    set editable(value) {}

    /**
     * Display-friendly names of enumeration of an enum property.
     */
    get enumDisplayNames() {}

    /**
     * Display-friendly names of enumeration of an enum property.
     */
    set enumDisplayNames(value) {}

    /**
     * Names of enumeration of an enum property.
     */
    get enumNames() {}

    /**
     * Names of enumeration of an enum property.
     */
    set enumNames(value) {}

    /**
     * Enum index of an enum property.
     */
    get enumValueIndex() {}

    /**
     * Enum index of an enum property.
     */
    set enumValueIndex(value) {}

    /**
     * Value of a float property.
     */
    get floatValue() {}

    /**
     * Value of a float property.
     */
    set floatValue(value) {}

    /**
     * Does it have child properties? (Read Only)
     */
    get hasChildren() {}

    /**
     * Does it have child properties? (Read Only)
     */
    set hasChildren(value) {}

    /**
     * Does this property represent multiple different values due to multi-object editing? (Read Only)
     */
    get hasMultipleDifferentValues() {}

    /**
     * Does this property represent multiple different values due to multi-object editing? (Read Only)
     */
    set hasMultipleDifferentValues(value) {}

    /**
     * Does it have visible child properties? (Read Only)
     */
    get hasVisibleChildren() {}

    /**
     * Does it have visible child properties? (Read Only)
     */
    set hasVisibleChildren(value) {}

    /**
     * Value of an integer property.
     */
    get intValue() {}

    /**
     * Value of an integer property.
     */
    set intValue(value) {}

    /**
     * Is this property an array? (Read Only)
     */
    get isArray() {}

    /**
     * Is this property an array? (Read Only)
     */
    set isArray(value) {}

    /**
     * Is this property expanded in the inspector?
     */
    get isExpanded() {}

    /**
     * Is this property expanded in the inspector?
     */
    set isExpanded(value) {}

    /**
     * Is property part of a prefab instance? (Read Only)
     */
    get isInstantiatedPrefab() {}

    /**
     * Is property part of a prefab instance? (Read Only)
     */
    set isInstantiatedPrefab(value) {}

    /**
     * Value of a integer property as a long.
     */
    get longValue() {}

    /**
     * Value of a integer property as a long.
     */
    set longValue(value) {}

    /**
     * Name of the property. (Read Only)
     */
    get name() {}

    /**
     * Name of the property. (Read Only)
     */
    set name(value) {}

    /**
     * Value of an object reference property.
     */
    get objectReferenceValue() {}

    /**
     * Value of an object reference property.
     */
    set objectReferenceValue(value) {}

    /**
     * Is property&#039;s value different from the prefab it belongs to?
     */
    get prefabOverride() {}

    /**
     * Is property&#039;s value different from the prefab it belongs to?
     */
    set prefabOverride(value) {}

    /**
     * Full path of the property. (Read Only)
     */
    get propertyPath() {}

    /**
     * Full path of the property. (Read Only)
     */
    set propertyPath(value) {}

    /**
     * Type of this property (Read Only).
     */
    get propertyType() {}

    /**
     * Type of this property (Read Only).
     */
    set propertyType(value) {}

    /**
     * Value of a quaternion property.
     */
    get quaternionValue() {}

    /**
     * Value of a quaternion property.
     */
    set quaternionValue(value) {}

    /**
     * Value of a rectangle property.
     */
    get rectValue() {}

    /**
     * Value of a rectangle property.
     */
    set rectValue(value) {}

    /**
     * 
          SerializedObject this property belongs to (Read Only).
     */
    get serializedObject() {}

    /**
     * 
          SerializedObject this property belongs to (Read Only).
     */
    set serializedObject(value) {}

    /**
     * Value of a string property.
     */
    get stringValue() {}

    /**
     * Value of a string property.
     */
    set stringValue(value) {}

    /**
     * Tooltip of the property. (Read Only)
     */
    get tooltip() {}

    /**
     * Tooltip of the property. (Read Only)
     */
    set tooltip(value) {}

    /**
     * Type name of the property. (Read Only)
     */
    get type() {}

    /**
     * Type name of the property. (Read Only)
     */
    set type(value) {}

    /**
     * Value of a 2D vector property.
     */
    get vector2Value() {}

    /**
     * Value of a 2D vector property.
     */
    set vector2Value(value) {}

    /**
     * Value of a 3D vector property.
     */
    get vector3Value() {}

    /**
     * Value of a 3D vector property.
     */
    set vector3Value(value) {}

    /**
     * Value of a 4D vector property.
     */
    get vector4Value() {}

    /**
     * Value of a 4D vector property.
     */
    set vector4Value(value) {}


    /**
     * Remove all elements from the array.
     */
    ClearArray() {}

    /**
     * Returns a copy of the SerializedProperty iterator in its current state. This is useful if you want to keep a reference to the current property but continue with the iteration.
     */
    Copy() {}

    /**
     * Count visible children of this property, including this property itself.
     */
    CountInProperty() {}

    /**
     * Count remaining visible properties.
     */
    CountRemaining() {}

    /**
     * Delete the element at the specified index in the array.
     */
    DeleteArrayElementAtIndex() {}

    /**
     * Deletes the serialized property.
     */
    DeleteCommand() {}

    /**
     * Duplicates the serialized property.
     */
    DuplicateCommand() {}

    /**
     * Retrieves the SerializedProperty at a relative path to the current property.
     */
    FindPropertyRelative() {}

    /**
     * Returns the element at the specified index in the array.
     */
    GetArrayElementAtIndex() {}

    /**
     * Retrieves the SerializedProperty that defines the end range of this property.
     */
    GetEndProperty() {}

    /**
     * Retrieves an iterator that allows you to iterator over the current nexting of a serialized property.
     */
    GetEnumerator() {}

    /**
     * Insert an empty element at the specified index in the array.
     */
    InsertArrayElementAtIndex() {}

    /**
     * Move an array element from srcIndex to dstIndex.
     */
    MoveArrayElement() {}

    /**
     * Move to next property.
     */
    Next() {}

    /**
     * Move to next visible property.
     */
    NextVisible() {}

    /**
     * Move to first property of the object.
     */
    Reset() {}

}