class GUIStyle {
    /**
     * Shortcut for an empty GUIStyle.
     */
    static get none() {}

    /**
     * Shortcut for an empty GUIStyle.
     */
    static set none(value) {}



    /**
     * Rendering settings for when the control is pressed down.
     */
    get active() {}

    /**
     * Rendering settings for when the control is pressed down.
     */
    set active(value) {}

    /**
     * Text alignment.
     */
    get alignment() {}

    /**
     * Text alignment.
     */
    set alignment(value) {}

    /**
     * The borders of all background images.
     */
    get border() {}

    /**
     * The borders of all background images.
     */
    set border(value) {}

    /**
     * What to do when the contents to be rendered is too large to fit within the area given.
     */
    get clipping() {}

    /**
     * What to do when the contents to be rendered is too large to fit within the area given.
     */
    set clipping(value) {}

    /**
     * Pixel offset to apply to the content of this GUIstyle.
     */
    get contentOffset() {}

    /**
     * Pixel offset to apply to the content of this GUIstyle.
     */
    set contentOffset(value) {}

    /**
     * If non-0, any GUI elements rendered with this style will have the height specified here.
     */
    get fixedHeight() {}

    /**
     * If non-0, any GUI elements rendered with this style will have the height specified here.
     */
    set fixedHeight(value) {}

    /**
     * If non-0, any GUI elements rendered with this style will have the width specified here.
     */
    get fixedWidth() {}

    /**
     * If non-0, any GUI elements rendered with this style will have the width specified here.
     */
    set fixedWidth(value) {}

    /**
     * Rendering settings for when the element has keyboard focus.
     */
    get focused() {}

    /**
     * Rendering settings for when the element has keyboard focus.
     */
    set focused(value) {}

    /**
     * The font to use for rendering. If null, the default font for the current GUISkin is used instead.
     */
    get font() {}

    /**
     * The font to use for rendering. If null, the default font for the current GUISkin is used instead.
     */
    set font(value) {}

    /**
     * The font size to use (for dynamic fonts).
     */
    get fontSize() {}

    /**
     * The font size to use (for dynamic fonts).
     */
    set fontSize(value) {}

    /**
     * The font style to use (for dynamic fonts).
     */
    get fontStyle() {}

    /**
     * The font style to use (for dynamic fonts).
     */
    set fontStyle(value) {}

    /**
     * Rendering settings for when the mouse is hovering over the control.
     */
    get hover() {}

    /**
     * Rendering settings for when the mouse is hovering over the control.
     */
    set hover(value) {}

    /**
     * How image and text of the GUIContent is combined.
     */
    get imagePosition() {}

    /**
     * How image and text of the GUIContent is combined.
     */
    set imagePosition(value) {}

    /**
     * The height of one line of text with this style, measured in pixels. (Read Only)
     */
    get lineHeight() {}

    /**
     * The height of one line of text with this style, measured in pixels. (Read Only)
     */
    set lineHeight(value) {}

    /**
     * The margins between elements rendered in this style and any other GUI elements.
     */
    get margin() {}

    /**
     * The margins between elements rendered in this style and any other GUI elements.
     */
    set margin(value) {}

    /**
     * The name of this GUIStyle. Used for getting them based on name.
     */
    get name() {}

    /**
     * The name of this GUIStyle. Used for getting them based on name.
     */
    set name(value) {}

    /**
     * Rendering settings for when the component is displayed normally.
     */
    get normal() {}

    /**
     * Rendering settings for when the component is displayed normally.
     */
    set normal(value) {}

    /**
     * Rendering settings for when the element is turned on and pressed down.
     */
    get onActive() {}

    /**
     * Rendering settings for when the element is turned on and pressed down.
     */
    set onActive(value) {}

    /**
     * Rendering settings for when the element has keyboard and is turned on.
     */
    get onFocused() {}

    /**
     * Rendering settings for when the element has keyboard and is turned on.
     */
    set onFocused(value) {}

    /**
     * Rendering settings for when the control is turned on and the mouse is hovering it.
     */
    get onHover() {}

    /**
     * Rendering settings for when the control is turned on and the mouse is hovering it.
     */
    set onHover(value) {}

    /**
     * Rendering settings for when the control is turned on.
     */
    get onNormal() {}

    /**
     * Rendering settings for when the control is turned on.
     */
    set onNormal(value) {}

    /**
     * Extra space to be added to the background image.
     */
    get overflow() {}

    /**
     * Extra space to be added to the background image.
     */
    set overflow(value) {}

    /**
     * Space from the edge of GUIStyle to the start of the contents.
     */
    get padding() {}

    /**
     * Space from the edge of GUIStyle to the start of the contents.
     */
    set padding(value) {}

    /**
     * Enable HTML-style tags for Text Formatting Markup.
     */
    get richText() {}

    /**
     * Enable HTML-style tags for Text Formatting Markup.
     */
    set richText(value) {}

    /**
     * Can GUI elements of this style be stretched vertically for better layout?
     */
    get stretchHeight() {}

    /**
     * Can GUI elements of this style be stretched vertically for better layout?
     */
    set stretchHeight(value) {}

    /**
     * Can GUI elements of this style be stretched horizontally for better layouting?
     */
    get stretchWidth() {}

    /**
     * Can GUI elements of this style be stretched horizontally for better layouting?
     */
    set stretchWidth(value) {}

    /**
     * Should the text be wordwrapped?
     */
    get wordWrap() {}

    /**
     * Should the text be wordwrapped?
     */
    set wordWrap(value) {}


    /**
     * How tall this element will be when rendered with content and a specific width.
     */
    CalcHeight() {}

    /**
     * Calculate the minimum and maximum widths for this style rendered with content.
     */
    CalcMinMaxWidth() {}

    /**
     * Calculate the size of an element formatted with this style, and a given space to content.
     */
    CalcScreenSize() {}

    /**
     * Calculate the size of some content if it is rendered with this style.
     */
    CalcSize() {}

    /**
     * Draw this GUIStyle on to the screen, internal version.
     */
    Draw() {}

    /**
     * Draw this GUIStyle with selected content.
     */
    DrawCursor() {}

    /**
     * Draw this GUIStyle with selected content.
     */
    DrawWithTextSelection() {}

    /**
     * Get the pixel position of a given string index.
     */
    GetCursorPixelPosition() {}

    /**
     * Get the cursor position (indexing into contents.text) when the user clicked at cursorPixelPosition.
     */
    GetCursorStringIndex() {}

}