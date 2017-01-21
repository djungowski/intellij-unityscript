class AssetPostprocessor {


    /**
     * Reference to the asset importer.
     */
    get assetImporter() {}

    /**
     * Reference to the asset importer.
     */
    set assetImporter(value) {}

    /**
     * The path name of the asset being imported.
     */
    get assetPath() {}

    /**
     * The path name of the asset being imported.
     */
    set assetPath(value) {}


    /**
     * Override the order in which importers are processed.
     */
    GetPostprocessOrder() {}

    /**
     * Returns the version of the asset postprocessor.
     */
    GetVersion() {}

    /**
     * Logs an import error message to the console.
     */
    LogError() {}

    /**
     * Logs an import warning to the console.
     */
    LogWarning() {}

}