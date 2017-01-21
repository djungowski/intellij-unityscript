class SpeedTreeImporter {
    /**
     * Gets an array of name strings for wind quality value.
     */
    static get windQualityNames() {}

    /**
     * Gets an array of name strings for wind quality value.
     */
    static set windQualityNames(value) {}


    /**
     * Generates all necessary materials under materialFolderPath. If Version Control is enabled please first check out the folder.
     */
    static GenerateMaterials() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    static SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    static SetAssetBundleNameAndVariant() {}

    /**
     * Returns the instance id of the object.
     */
    static GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    static ToString() {}


    /**
     * Gets and sets a default alpha test reference values.
     */
    get alphaTestRef() {}

    /**
     * Gets and sets a default alpha test reference values.
     */
    set alphaTestRef(value) {}

    /**
     * Indicates if the cross-fade LOD transition, applied to the last mesh LOD and the billboard, should be animated.
     */
    get animateCrossFading() {}

    /**
     * Indicates if the cross-fade LOD transition, applied to the last mesh LOD and the billboard, should be animated.
     */
    set animateCrossFading(value) {}

    /**
     * Returns the best-possible wind quality on this asset (configured in SpeedTree modeler).
     */
    get bestWindQuality() {}

    /**
     * Returns the best-possible wind quality on this asset (configured in SpeedTree modeler).
     */
    set bestWindQuality(value) {}

    /**
     * Proportion of the last 3D mesh LOD region width which is used for cross-fading to billboard tree.
     */
    get billboardTransitionCrossFadeWidth() {}

    /**
     * Proportion of the last 3D mesh LOD region width which is used for cross-fading to billboard tree.
     */
    set billboardTransitionCrossFadeWidth(value) {}

    /**
     * Gets and sets an array of booleans to enable shadow casting for each LOD.
     */
    get castShadows() {}

    /**
     * Gets and sets an array of booleans to enable shadow casting for each LOD.
     */
    set castShadows(value) {}

    /**
     * Gets and sets an array of booleans to enable normal mapping for each LOD.
     */
    get enableBump() {}

    /**
     * Gets and sets an array of booleans to enable normal mapping for each LOD.
     */
    set enableBump(value) {}

    /**
     * Gets and sets an array of booleans to enable Hue variation effect for each LOD.
     */
    get enableHue() {}

    /**
     * Gets and sets an array of booleans to enable Hue variation effect for each LOD.
     */
    set enableHue(value) {}

    /**
     * Enables smooth LOD transitions.
     */
    get enableSmoothLODTransition() {}

    /**
     * Enables smooth LOD transitions.
     */
    set enableSmoothLODTransition(value) {}

    /**
     * Proportion of the billboard LOD region width which is used for fading out the billboard.
     */
    get fadeOutWidth() {}

    /**
     * Proportion of the billboard LOD region width which is used for fading out the billboard.
     */
    set fadeOutWidth(value) {}

    /**
     * Tells if there is a billboard LOD.
     */
    get hasBillboard() {}

    /**
     * Tells if there is a billboard LOD.
     */
    set hasBillboard(value) {}

    /**
     * Tells if the SPM file has been previously imported.
     */
    get hasImported() {}

    /**
     * Tells if the SPM file has been previously imported.
     */
    set hasImported(value) {}

    /**
     * Gets and sets a default Hue variation color and amount (in alpha).
     */
    get hueVariation() {}

    /**
     * Gets and sets a default Hue variation color and amount (in alpha).
     */
    set hueVariation(value) {}

    /**
     * Gets and sets an array of floats of each LOD&#039;s screen height value.
     */
    get LODHeights() {}

    /**
     * Gets and sets an array of floats of each LOD&#039;s screen height value.
     */
    set LODHeights(value) {}

    /**
     * Gets and sets a default main color.
     */
    get mainColor() {}

    /**
     * Gets and sets a default main color.
     */
    set mainColor(value) {}

    /**
     * Returns the folder path where generated materials will be placed in.
     */
    get materialFolderPath() {}

    /**
     * Returns the folder path where generated materials will be placed in.
     */
    set materialFolderPath(value) {}

    /**
     * Gets and sets an array of booleans to enable shadow receiving for each LOD.
     */
    get receiveShadows() {}

    /**
     * Gets and sets an array of booleans to enable shadow receiving for each LOD.
     */
    set receiveShadows(value) {}

    /**
     * Gets and sets an array of Reflection Probe usages for each LOD.
     */
    get reflectionProbeUsages() {}

    /**
     * Gets and sets an array of Reflection Probe usages for each LOD.
     */
    set reflectionProbeUsages(value) {}

    /**
     * How much to scale the tree model compared to what is in the .spm file.
     */
    get scaleFactor() {}

    /**
     * How much to scale the tree model compared to what is in the .spm file.
     */
    set scaleFactor(value) {}

    /**
     * Gets and sets an array of booleans to enable Light Probe lighting for each LOD.
     */
    get useLightProbes() {}

    /**
     * Gets and sets an array of booleans to enable Light Probe lighting for each LOD.
     */
    set useLightProbes(value) {}

    /**
     * Gets and sets an array of integers of the wind qualities on each LOD. Values will be clampped by BestWindQuality internally.
     */
    get windQualities() {}

    /**
     * Gets and sets an array of integers of the wind qualities on each LOD. Values will be clampped by BestWindQuality internally.
     */
    set windQualities(value) {}

    /**
     * Get or set the AssetBundle name.
     */
    get assetBundleName() {}

    /**
     * Get or set the AssetBundle name.
     */
    set assetBundleName(value) {}

    /**
     * Get or set the AssetBundle variant.
     */
    get assetBundleVariant() {}

    /**
     * Get or set the AssetBundle variant.
     */
    set assetBundleVariant(value) {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    get assetPath() {}

    /**
     * The path name of the asset for this importer. (Read Only)
     */
    set assetPath(value) {}

    /**
     * Get or set any user data.
     */
    get userData() {}

    /**
     * Get or set any user data.
     */
    set userData(value) {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    get hideFlags() {}

    /**
     * Should the object be hidden, saved with the scene or modifiable by the user?
     */
    set hideFlags(value) {}

    /**
     * The name of the object.
     */
    get name() {}

    /**
     * The name of the object.
     */
    set name(value) {}


    /**
     * Generates all necessary materials under materialFolderPath. If Version Control is enabled please first check out the folder.
     */
    GenerateMaterials() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    SetAssetBundleNameAndVariant() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}