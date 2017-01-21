class Path {


    /**
     * An alternate character used to separate directory levels. (Read Only)
     */
    get AltDirectorySeparatorChar() {}

    /**
     * An alternate character used to separate directory levels. (Read Only)
     */
    set AltDirectorySeparatorChar(value) {}

    /**
     * The default character used to separate directory levels. (Read Only)
     */
    get DirectorySeparatorChar() {}

    /**
     * The default character used to separate directory levels. (Read Only)
     */
    set DirectorySeparatorChar(value) {}


    /**
     * Concatenates two path strings.
     */
    Combine() {}

    /**
     * Returns the directory name component of the specified path string.
     */
    GetDirectoryName() {}

    /**
     * Returns the extension component of the specified path string.
     */
    GetExtension() {}

    /**
     * Returns the file name, including the extension if any, of the specified path string.
     */
    GetFileName() {}

    /**
     * Returns the file base component of the specified path string without the extension.
     */
    GetFileNameWithoutExtension() {}

}