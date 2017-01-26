class AssetDatabase {

    /**
     * Adds objectToAdd to an existing asset at path.
     */
    static AddObjectToAsset() {}

    /**
     * Get the GUID for the asset at path.
     */
    static AssetPathToGUID() {}

    /**
     * Removes all labels attached to an asset.
     */
    static ClearLabels() {}

    /**
     * Is object an asset?
     */
    static Contains() {}

    /**
     * Duplicates the asset at path and stores it at newPath.
     */
    static CopyAsset() {}

    /**
     * Creates a new asset at path.
     */
    static CreateAsset() {}

    /**
     * Create a new folder.
     */
    static CreateFolder() {}

    /**
     * Deletes the asset file at path.
     */
    static DeleteAsset() {}

    /**
     * Exports the assets identified by assetPathNames to a unitypackage file in fileName.
     */
    static ExportPackage() {}

    /**
     * Search the asset database using a search filter string.
     */
    static FindAssets() {}

    /**
     * Creates a new unique path for an asset.
     */
    static GenerateUniqueAssetPath() {}

    /**
     * Return all the AssetBundle names in the asset database.
     */
    static GetAllAssetBundleNames() {}

    /**
     * Given an assetBundleName, returns the list of AssetBundles that it depends on.
     */
    static GetAssetBundleDependencies() {}

    /**
     * Returns the hash of all the dependencies of an asset.
     */
    static GetAssetDependencyHash() {}

    /**
     * Returns the path name relative to the project folder where the asset is stored.
     */
    static GetAssetOrScenePath() {}

    /**
     * Returns the path name relative to the project folder where the asset is stored.
     */
    static GetAssetPath() {}

    /**
     * Gets the path to the asset file associated with a text .meta file.
     */
    static GetAssetPathFromTextMetaFilePath() {}

    /**
     * Get the paths of the assets which have been marked with the given assetBundle name.
     */
    static GetAssetPathsFromAssetBundle() {}

    /**
     * Get the asset paths from the given assetBundle name and asset name.
     */
    static GetAssetPathsFromAssetBundleAndAssetName() {}

    /**
     * Retrieves an icon for the asset at the given asset path.
     */
    static GetCachedIcon() {}

    /**
     * Given a pathName, returns the list of all assets that it depends on.
     */
    static GetDependencies() {}

    /**
     * Returns all labels attached to a given asset.
     */
    static GetLabels() {}

    /**
     * Returns the type of the main asset object at assetPath.
     */
    static GetMainAssetTypeAtPath() {}

    /**
     * Given an absolute path to a directory, this method will return an array of all it&#039;s subdirectories.
     */
    static GetSubFolders() {}

    /**
     * Gets the path to the text .meta file associated with an asset.
     */
    static GetTextMetaFilePathFromAssetPath() {}

    /**
     * Return all the unused assetBundle names in the asset database.
     */
    static GetUnusedAssetBundleNames() {}

    /**
     * Translate a GUID to its current asset path.
     */
    static GUIDToAssetPath() {}

    /**
     * Import asset at path.
     */
    static ImportAsset() {}

    /**
     * Imports package at packagePath into the current project.
     */
    static ImportPackage() {}

    /**
     * Is asset a foreign asset?
     */
    static IsForeignAsset() {}

    /**
     * Is asset a main asset in the project window?
     */
    static IsMainAsset() {}

    /**
     * Returns true if the main asset object at assetPath is loaded in memory.
     */
    static IsMainAssetAtPathLoaded() {}

    /**
     * Is asset a native asset?
     */
    static IsNativeAsset() {}

    /**
     * Use IsOpenForEdit to determine if the asset is open for edit by the version control.
     */
    static IsOpenForEdit() {}

    /**
     * Does the asset form part of another asset?
     */
    static IsSubAsset() {}

    /**
     * Given an absolute path to a folder, returns true if it exists, false otherwise.
     */
    static IsValidFolder() {}

    /**
     * Returns all asset representations at assetPath.
     */
    static LoadAllAssetRepresentationsAtPath() {}

    /**
     * Returns an array of all asset objects at assetPath.
     */
    static LoadAllAssetsAtPath() {}

    /**
     * Returns the first asset object of type type at given path assetPath.
     */
    static LoadAssetAtPath() {}

    /**
     * Returns the main asset object at assetPath.
     */
    static LoadMainAssetAtPath() {}

    /**
     * Move an asset file from one folder to another.
     */
    static MoveAsset() {}

    /**
     * Moves the asset at path to the trash.
     */
    static MoveAssetToTrash() {}

    /**
     * Opens the asset with associated application.
     */
    static OpenAsset() {}

    /**
     * Import any changed assets.
     */
    static Refresh() {}

    /**
     * Remove the assetBundle name from the asset database. The forceRemove flag is used to indicate if you want to remove it even it&#039;s in use.
     */
    static RemoveAssetBundleName() {}

    /**
     * Remove all the unused assetBundle names in the asset database.
     */
    static RemoveUnusedAssetBundleNames() {}

    /**
     * Rename an asset file.
     */
    static RenameAsset() {}

    /**
     * Writes all unsaved asset changes to disk.
     */
    static SaveAssets() {}

    /**
     * Replaces that list of labels on an asset.
     */
    static SetLabels() {}

    /**
     * Begin Asset importing. This lets you group several asset imports together into one larger import.
     */
    static StartAssetEditing() {}

    /**
     * Stop Asset importing. This lets you group several asset imports together into one larger import.
     */
    static StopAssetEditing() {}

    /**
     * Checks if an asset file can be moved from one folder to another. (Without actually moving the file).
     */
    static ValidateMoveAsset() {}

    /**
     * Writes the import settings to disk.
     */
    static WriteImportSettingsIfDirty() {}



}