class TextGenerator {


    /**
     * The number of characters that have been generated.
     */
    get characterCount() {}

    /**
     * The number of characters that have been generated.
     */
    set characterCount(value) {}

    /**
     * The number of characters that have been generated and are included in the visible lines.
     */
    get characterCountVisible() {}

    /**
     * The number of characters that have been generated and are included in the visible lines.
     */
    set characterCountVisible(value) {}

    /**
     * Array of generated characters.
     */
    get characters() {}

    /**
     * Array of generated characters.
     */
    set characters(value) {}

    /**
     * The size of the font that was found if using best fit mode.
     */
    get fontSizeUsedForBestFit() {}

    /**
     * The size of the font that was found if using best fit mode.
     */
    set fontSizeUsedForBestFit(value) {}

    /**
     * Number of text lines generated.
     */
    get lineCount() {}

    /**
     * Number of text lines generated.
     */
    set lineCount(value) {}

    /**
     * Information about each generated text line.
     */
    get lines() {}

    /**
     * Information about each generated text line.
     */
    set lines(value) {}

    /**
     * Extents of the generated text in rect format.
     */
    get rectExtents() {}

    /**
     * Extents of the generated text in rect format.
     */
    set rectExtents(value) {}

    /**
     * Number of vertices generated.
     */
    get vertexCount() {}

    /**
     * Number of vertices generated.
     */
    set vertexCount(value) {}

    /**
     * Array of generated vertices.
     */
    get verts() {}

    /**
     * Array of generated vertices.
     */
    set verts(value) {}


    /**
     * Populate the given List with UICharInfo.
     */
    GetCharacters() {}

    /**
     * Returns the current UICharInfo.
     */
    GetCharactersArray() {}

    /**
     * Populate the given list with UILineInfo.
     */
    GetLines() {}

    /**
     * Returns the current UILineInfo.
     */
    GetLinesArray() {}

    /**
     * Given a string and settings, returns the preferred height for a container that would hold this text.
     */
    GetPreferredHeight() {}

    /**
     * Given a string and settings, returns the preferred width for a container that would hold this text.
     */
    GetPreferredWidth() {}

    /**
     * Populate the given list with generated Vertices.
     */
    GetVertices() {}

    /**
     * Returns the current UILineInfo.
     */
    GetVerticesArray() {}

    /**
     * Mark the text generator as invalid. This will force a full text generation the next time Populate is called.
     */
    Invalidate() {}

    /**
     * Will generate the vertices and other data for the given string with the given settings.
     */
    Populate() {}

    /**
     * Will generate the vertices and other data for the given string with the given settings.
     */
    PopulateWithErrors() {}

}