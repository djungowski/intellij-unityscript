class SketchUpImporter {

    /**
     * Retrieves the asset importer for the asset at path.
     */
    static GetAtPath() {}

    /**
     * Removes a gameobject, component or asset.
     */
    static Destroy() {}

    /**
     * Destroys the object obj immediately.
     */
    static DestroyImmediate() {}

    /**
     * Makes the object target not be destroyed automatically when loading a new scene.
     */
    static DontDestroyOnLoad() {}

    /**
     * Returns the first active loaded object of Type type.
     */
    static FindObjectOfType() {}

    /**
     * Returns a list of all active loaded objects of Type type.
     */
    static FindObjectsOfType() {}

    /**
     * Clones the object original and returns the clone.
     */
    static Instantiate() {}


    /**
     * Retrieves the latitude Geo Coordinate imported from the SketchUp file.
     */
    get latitude() {}

    /**
     * Retrieves the latitude Geo Coordinate imported from the SketchUp file.
     */
    set latitude(value) {}

    /**
     * Retrieves the longitude Geo Coordinate imported from the SketchUp file.
     */
    get longitude() {}

    /**
     * Retrieves the longitude Geo Coordinate imported from the SketchUp file.
     */
    set longitude(value) {}

    /**
     * Retrieves the north correction value imported from the SketchUp file.
     */
    get northCorrection() {}

    /**
     * Retrieves the north correction value imported from the SketchUp file.
     */
    set northCorrection(value) {}

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
     * Add mesh colliders to imported meshes.
     */
    get addCollider() {}

    /**
     * Add mesh colliders to imported meshes.
     */
    set addCollider(value) {}

    /**
     * Animation compression setting.
     */
    get animationCompression() {}

    /**
     * Animation compression setting.
     */
    set animationCompression(value) {}

    /**
     * Allowed error of animation position compression.
     */
    get animationPositionError() {}

    /**
     * Allowed error of animation position compression.
     */
    set animationPositionError(value) {}

    /**
     * Allowed error of animation rotation compression.
     */
    get animationRotationError() {}

    /**
     * Allowed error of animation rotation compression.
     */
    set animationRotationError(value) {}

    /**
     * Allowed error of animation scale compression.
     */
    get animationScaleError() {}

    /**
     * Allowed error of animation scale compression.
     */
    set animationScaleError(value) {}

    /**
     * Animator generation mode.
     */
    get animationType() {}

    /**
     * Animator generation mode.
     */
    set animationType(value) {}

    /**
     * The default wrap mode for the generated animation clips.
     */
    get animationWrapMode() {}

    /**
     * The default wrap mode for the generated animation clips.
     */
    set animationWrapMode(value) {}

    /**
     * Bake Inverse Kinematics (IK) when importing.
     */
    get bakeIK() {}

    /**
     * Bake Inverse Kinematics (IK) when importing.
     */
    set bakeIK(value) {}

    /**
     * Animation clips to split animation into. See Also: ModelImporterClipAnimation.
     */
    get clipAnimations() {}

    /**
     * Animation clips to split animation into. See Also: ModelImporterClipAnimation.
     */
    set clipAnimations(value) {}

    /**
     * Generate a list of all default animation clip based on TakeInfo.
     */
    get defaultClipAnimations() {}

    /**
     * Generate a list of all default animation clip based on TakeInfo.
     */
    set defaultClipAnimations(value) {}

    /**
     * Animation optimization setting.
     */
    get extraExposedTransformPaths() {}

    /**
     * Animation optimization setting.
     */
    set extraExposedTransformPaths(value) {}

    /**
     * File scale factor (if available) or default one. (Read-only).
     */
    get fileScale() {}

    /**
     * File scale factor (if available) or default one. (Read-only).
     */
    set fileScale(value) {}

    /**
     * Animation generation options.
     */
    get generateAnimations() {}

    /**
     * Animation generation options.
     */
    set generateAnimations(value) {}

    /**
     * Generate secondary UV set for lightmapping.
     */
    get generateSecondaryUV() {}

    /**
     * Generate secondary UV set for lightmapping.
     */
    set generateSecondaryUV(value) {}

    /**
     * Global scale factor for importing.
     */
    get globalScale() {}

    /**
     * Global scale factor for importing.
     */
    set globalScale(value) {}

    /**
     * The human description that is used to generate an Avatar during the import process.
     */
    get humanDescription() {}

    /**
     * The human description that is used to generate an Avatar during the import process.
     */
    set humanDescription(value) {}

    /**
     * Controls how much oversampling is used when importing humanoid animations for retargeting.
     */
    get humanoidOversampling() {}

    /**
     * Controls how much oversampling is used when importing humanoid animations for retargeting.
     */
    set humanoidOversampling(value) {}

    /**
     * Import animation from file.
     */
    get importAnimation() {}

    /**
     * Import animation from file.
     */
    set importAnimation(value) {}

    /**
     * Controls import of BlendShapes.
     */
    get importBlendShapes() {}

    /**
     * Controls import of BlendShapes.
     */
    set importBlendShapes(value) {}

    /**
     * Generates the list of all imported take.
     */
    get importedTakeInfos() {}

    /**
     * Generates the list of all imported take.
     */
    set importedTakeInfos(value) {}

    /**
     * Import materials from file.
     */
    get importMaterials() {}

    /**
     * Import materials from file.
     */
    set importMaterials(value) {}

    /**
     * Vertex normal import options.
     */
    get importNormals() {}

    /**
     * Vertex normal import options.
     */
    set importNormals(value) {}

    /**
     * Vertex tangent import options.
     */
    get importTangents() {}

    /**
     * Vertex tangent import options.
     */
    set importTangents(value) {}

    /**
     * Is Bake Inverse Kinematics (IK) supported by this importer.
     */
    get isBakeIKSupported() {}

    /**
     * Is Bake Inverse Kinematics (IK) supported by this importer.
     */
    set isBakeIKSupported(value) {}

    /**
     * Is FileScale was used when importing.
     */
    get isFileScaleUsed() {}

    /**
     * Is FileScale was used when importing.
     */
    set isFileScaleUsed(value) {}

    /**
     * Are mesh vertices and indices accessible from script?
     */
    get isReadable() {}

    /**
     * Are mesh vertices and indices accessible from script?
     */
    set isReadable(value) {}

    /**
     * Is import of tangents supported by this importer.
     */
    get isTangentImportSupported() {}

    /**
     * Is import of tangents supported by this importer.
     */
    set isTangentImportSupported(value) {}

    /**
     * Is useFileUnits supported for this asset.
     */
    get isUseFileUnitsSupported() {}

    /**
     * Is useFileUnits supported for this asset.
     */
    set isUseFileUnitsSupported(value) {}

    /**
     * Material naming setting.
     */
    get materialName() {}

    /**
     * Material naming setting.
     */
    set materialName(value) {}

    /**
     * Existing material search setting.
     */
    get materialSearch() {}

    /**
     * Existing material search setting.
     */
    set materialSearch(value) {}

    /**
     * Mesh compression setting.
     */
    get meshCompression() {}

    /**
     * Mesh compression setting.
     */
    set meshCompression(value) {}

    /**
     * The path of the transform used to generation the motion of the animation.
     */
    get motionNodeName() {}

    /**
     * The path of the transform used to generation the motion of the animation.
     */
    set motionNodeName(value) {}

    /**
     * Smoothing angle (in degrees) for calculating normals.
     */
    get normalSmoothingAngle() {}

    /**
     * Smoothing angle (in degrees) for calculating normals.
     */
    set normalSmoothingAngle(value) {}

    /**
     * Animation optimization setting.
     */
    get optimizeGameObjects() {}

    /**
     * Animation optimization setting.
     */
    set optimizeGameObjects(value) {}

    /**
     * Vertex optimization setting.
     */
    get optimizeMesh() {}

    /**
     * Vertex optimization setting.
     */
    set optimizeMesh(value) {}

    /**
     * Generates the list of all imported Animations.
     */
    get referencedClips() {}

    /**
     * Generates the list of all imported Animations.
     */
    set referencedClips(value) {}

    /**
     * If set to false, the importer will not resample curves when possible.
Read more about animation curve resampling.Notes:- Some unsupported FBX features (such as PreRotation or PostRotation on transforms) will override this setting. In these situations, animation curves will still be resampled even if the setting is disabled. For best results, avoid using PreRotation, PostRotation and GetRotationPivot.- This option was introduced in Version 5.3. Prior to this version, Unity&#039;s import behaviour was as if this option was always enabled. Therefore enabling the option gives the same behaviour as pre-5.3 animation import.

     */
    get resampleCurves() {}

    /**
     * If set to false, the importer will not resample curves when possible.
Read more about animation curve resampling.Notes:- Some unsupported FBX features (such as PreRotation or PostRotation on transforms) will override this setting. In these situations, animation curves will still be resampled even if the setting is disabled. For best results, avoid using PreRotation, PostRotation and GetRotationPivot.- This option was introduced in Version 5.3. Prior to this version, Unity&#039;s import behaviour was as if this option was always enabled. Therefore enabling the option gives the same behaviour as pre-5.3 animation import.

     */
    set resampleCurves(value) {}

    /**
     * Threshold for angle distortion (in degrees) when generating secondary UV.
     */
    get secondaryUVAngleDistortion() {}

    /**
     * Threshold for angle distortion (in degrees) when generating secondary UV.
     */
    set secondaryUVAngleDistortion(value) {}

    /**
     * Threshold for area distortion when generating secondary UV.
     */
    get secondaryUVAreaDistortion() {}

    /**
     * Threshold for area distortion when generating secondary UV.
     */
    set secondaryUVAreaDistortion(value) {}

    /**
     * Hard angle (in degrees) for generating secondary UV.
     */
    get secondaryUVHardAngle() {}

    /**
     * Hard angle (in degrees) for generating secondary UV.
     */
    set secondaryUVHardAngle(value) {}

    /**
     * Margin to be left between charts when packing secondary UV.
     */
    get secondaryUVPackMargin() {}

    /**
     * Margin to be left between charts when packing secondary UV.
     */
    set secondaryUVPackMargin(value) {}

    /**
     * Imports the HumanDescription from the given Avatar.
     */
    get sourceAvatar() {}

    /**
     * Imports the HumanDescription from the given Avatar.
     */
    set sourceAvatar(value) {}

    /**
     * Swap primary and secondary UV channels when importing.
     */
    get swapUVChannels() {}

    /**
     * Swap primary and secondary UV channels when importing.
     */
    set swapUVChannels(value) {}

    /**
     * Generates the list of all imported Transforms.
     */
    get transformPaths() {}

    /**
     * Generates the list of all imported Transforms.
     */
    set transformPaths(value) {}

    /**
     * Detect file units and import as 1FileUnit=1UnityUnit, otherwise it will import as 1cm=1UnityUnit.
     */
    get useFileUnits() {}

    /**
     * Detect file units and import as 1FileUnit=1UnityUnit, otherwise it will import as 1cm=1UnityUnit.
     */
    set useFileUnits(value) {}

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
     * The default camera or the camera of the active scene which the SketchUp file was saved with.
     */
    GetDefaultCamera() {}

    /**
     * The method returns an array of SketchUpImportScene which represents SketchUp scenes.
     */
    GetScenes() {}

    /**
     * Save asset importer settings if asset importer is dirty.
     */
    SaveAndReimport() {}

    /**
     * Set the AssetBundle name and variant.
     */
    SetAssetBundleNameAndVariant() {}

    /**
     * Creates a mask that matches the model hierarchy, and applies it to the provided ModelImporterClipAnimation.
     */
    CreateDefaultMaskForClip() {}

    /**
     * Returns the instance id of the object.
     */
    GetInstanceID() {}

    /**
     * Returns the name of the game object.
     */
    ToString() {}

}