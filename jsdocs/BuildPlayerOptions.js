class BuildPlayerOptions {


    /**
     * The path to an manifest file describing all of the asset bundles used in the build (optional).
     */
    get assetBundleManifestPath() {}

    /**
     * The path to an manifest file describing all of the asset bundles used in the build (optional).
     */
    set assetBundleManifestPath(value) {}

    /**
     * The path where the application will be built.
     */
    get locationPathName() {}

    /**
     * The path where the application will be built.
     */
    set locationPathName(value) {}

    /**
     * Additional BuildOptions, like whether to run the built player.
     */
    get options() {}

    /**
     * Additional BuildOptions, like whether to run the built player.
     */
    set options(value) {}

    /**
     * The scenes to be included in the build. If empty, the currently open scene will be built. Paths are relative to the project folder (Assets/MyLevels/MyScene.unity).
     */
    get scenes() {}

    /**
     * The scenes to be included in the build. If empty, the currently open scene will be built. Paths are relative to the project folder (Assets/MyLevels/MyScene.unity).
     */
    set scenes(value) {}

    /**
     * The BuildTarget to build.
     */
    get target() {}

    /**
     * The BuildTarget to build.
     */
    set target(value) {}


}