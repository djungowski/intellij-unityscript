class SelectionMode {


    /**
     * Return the whole selection.
     */
    get Unfiltered() {}

    /**
     * Return the whole selection.
     */
    set Unfiltered(value) {}

    /**
     * Only return the topmost selected transform. A selected child of another selected transform will be filtered out.
     */
    get TopLevel() {}

    /**
     * Only return the topmost selected transform. A selected child of another selected transform will be filtered out.
     */
    set TopLevel(value) {}

    /**
     * Return the selection and all child transforms of the selection.
     */
    get Deep() {}

    /**
     * Return the selection and all child transforms of the selection.
     */
    set Deep(value) {}

    /**
     * Excludes any prefabs from the selection.
     */
    get ExcludePrefab() {}

    /**
     * Excludes any prefabs from the selection.
     */
    set ExcludePrefab(value) {}

    /**
     * Excludes any objects which shall not be modified.
     */
    get Editable() {}

    /**
     * Excludes any objects which shall not be modified.
     */
    set Editable(value) {}

    /**
     * Only return objects that are assets in the Asset directory.
     */
    get Assets() {}

    /**
     * Only return objects that are assets in the Asset directory.
     */
    set Assets(value) {}

    /**
     * If the selection contains folders, also include all assets and subfolders within that folder in the file hierarchy.
     */
    get DeepAssets() {}

    /**
     * If the selection contains folders, also include all assets and subfolders within that folder in the file hierarchy.
     */
    set DeepAssets(value) {}


}