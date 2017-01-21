class ExportPackageOptions {


    /**
     * Default mode. Will not include dependencies or subdirectories nor include Library assets unless specifically included in the asset list.
     */
    get Default() {}

    /**
     * Default mode. Will not include dependencies or subdirectories nor include Library assets unless specifically included in the asset list.
     */
    set Default(value) {}

    /**
     * The export operation will be run asynchronously and reveal the exported package file in a file browser window after the export is finished.
     */
    get Interactive() {}

    /**
     * The export operation will be run asynchronously and reveal the exported package file in a file browser window after the export is finished.
     */
    set Interactive(value) {}

    /**
     * Will recurse through any subdirectories listed and include all assets inside them.
     */
    get Recurse() {}

    /**
     * Will recurse through any subdirectories listed and include all assets inside them.
     */
    set Recurse(value) {}

    /**
     * In addition to the assets paths listed, all dependent assets will be included as well.
     */
    get IncludeDependencies() {}

    /**
     * In addition to the assets paths listed, all dependent assets will be included as well.
     */
    set IncludeDependencies(value) {}

    /**
     * The exported package will include all library assets, ie. the project settings located in the Library folder of the project.
     */
    get IncludeLibraryAssets() {}

    /**
     * The exported package will include all library assets, ie. the project settings located in the Library folder of the project.
     */
    set IncludeLibraryAssets(value) {}


}