class EditorGUI {
    /**
     * Is the platform-dependent &quot;action&quot; modifier key held down? (Read Only)
     */
    static get actionKey() {}

    /**
     * Is the platform-dependent &quot;action&quot; modifier key held down? (Read Only)
     */
    static set actionKey(value) {}

    /**
     * The indent level of the field labels.
     */
    static get indentLevel() {}

    /**
     * The indent level of the field labels.
     */
    static set indentLevel(value) {}

    /**
     * Makes the following controls give the appearance of editing multiple different values.
     */
    static get showMixedValue() {}

    /**
     * Makes the following controls give the appearance of editing multiple different values.
     */
    static set showMixedValue(value) {}


    /**
     * Check if any control was changed inside a block of code.
     */
    static BeginChangeCheck() {}

    /**
     * Create a group of controls that can be disabled.
     */
    static BeginDisabledGroup() {}

    /**
     * Create a Property wrapper, useful for making regular GUI controls work with SerializedProperty.
     */
    static BeginProperty() {}

    /**
     * Make Center &amp; Extents field for entering a Bounds.
     */
    static BoundsField() {}

    /**
     * Make a field for selecting a Color.
     */
    static ColorField() {}

    /**
     * Make a field for editing an AnimationCurve.
     */
    static CurveField() {}

    /**
     * Make a delayed text field for entering doubles.
     */
    static DelayedDoubleField() {}

    /**
     * Make a delayed text field for entering floats.
     */
    static DelayedFloatField() {}

    /**
     * Make a delayed text field for entering integers.
     */
    static DelayedIntField() {}

    /**
     * Make a delayed text field.
     */
    static DelayedTextField() {}

    /**
     * Make a text field for entering doubles.
     */
    static DoubleField() {}

    /**
     * Draws the texture within a rectangle.
     */
    static DrawPreviewTexture() {}

    /**
     * Draws a filled rectangle of color at the specified position and size within the current editor window.
     */
    static DrawRect() {}

    /**
     * Draws the alpha channel of a texture within a rectangle.
     */
    static DrawTextureAlpha() {}

    /**
     * Draws a label with a drop shadow.
     */
    static DropShadowLabel() {}

    /**
     * Ends a change check started with BeginChangeCheck ().
     */
    static EndChangeCheck() {}

    /**
     * Ends a disabled group started with BeginDisabledGroup.
     */
    static EndDisabledGroup() {}

    /**
     * Ends a Property wrapper started with BeginProperty.
     */
    static EndProperty() {}

    /**
     * Make a field for enum based masks.
     */
    static EnumMaskField() {}

    /**
     * Make an enum popup selection field for a bitmask.
     */
    static EnumMaskPopup() {}

    /**
     * Make an enum popup selection field.
     */
    static EnumPopup() {}

    /**
     * Make a text field for entering floats.
     */
    static FloatField() {}

    /**
     * Move keyboard focus to a named text field and begin editing of the content.
     */
    static FocusTextInControl() {}

    /**
     * Make a label with a foldout arrow to the left of it.
     */
    static Foldout() {}

    /**
     * Get the height needed for a PropertyField control.
     */
    static GetPropertyHeight() {}

    /**
     * Make a label for some control.
     */
    static HandlePrefixLabel() {}

    /**
     * Make a help box with a message to the user.
     */
    static HelpBox() {}

    /**
     * Make an inspector-window-like titlebar.
     */
    static InspectorTitlebar() {}

    /**
     * Make a text field for entering integers.
     */
    static IntField() {}

    /**
     * Make an integer popup selection field.
     */
    static IntPopup() {}

    /**
     * Make a slider the user can drag to change an integer value between a min and a max.
     */
    static IntSlider() {}

    /**
     * Make a label field. (Useful for showing read-only info.)
     */
    static LabelField() {}

    /**
     * Make a layer selection field.
     */
    static LayerField() {}

    /**
     * Make a text field for entering long integers.
     */
    static LongField() {}

    /**
     * Make a field for masks.
     */
    static MaskField() {}

    /**
     * Make a special slider the user can use to specify a range between a min and a max.
     */
    static MinMaxSlider() {}

    /**
     * Make a multi-control with text fields for entering multiple floats in the same line.
     */
    static MultiFloatField() {}

    /**
     * Make a multi-control with several property fields in the same line.
     */
    static MultiPropertyField() {}

    /**
     * Make an object field. You can assign objects either by drag and drop objects or by selecting an object using the Object Picker.
     */
    static ObjectField() {}

    /**
     * Make a text field where the user can enter a password.
     */
    static PasswordField() {}

    /**
     * Make a generic popup selection field.
     */
    static Popup() {}

    /**
     * Make a label in front of some control.
     */
    static PrefixLabel() {}

    /**
     * Make a progress bar.
     */
    static ProgressBar() {}

    /**
     * Make a field for SerializedProperty.
     */
    static PropertyField() {}

    /**
     * Make an X, Y, W &amp; H field for entering a Rect.
     */
    static RectField() {}

    /**
     * Make a selectable label field. (Useful for showing read-only info that can be copy-pasted.)
     */
    static SelectableLabel() {}

    /**
     * Make a slider the user can drag to change a value between a min and a max.
     */
    static Slider() {}

    /**
     * Make a tag selection field.
     */
    static TagField() {}

    /**
     * Make a text area.
     */
    static TextArea() {}

    /**
     * Make a text field.
     */
    static TextField() {}

    /**
     * Make a toggle.
     */
    static Toggle() {}

    /**
     * Make a toggle field where the toggle is to the left and the label immediately to the right of it.
     */
    static ToggleLeft() {}

    /**
     * Make an X &amp; Y field for entering a Vector2.
     */
    static Vector2Field() {}

    /**
     * Make an X, Y &amp; Z field for entering a Vector3.
     */
    static Vector3Field() {}

    /**
     * Make an X, Y, Z &amp; W field for entering a Vector4.
     */
    static Vector4Field() {}



}