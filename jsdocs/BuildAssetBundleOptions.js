class BuildAssetBundleOptions {


    /**
     * Build assetBundle without any special option.
     */
    get None() {}

    /**
     * Build assetBundle without any special option.
     */
    set None(value) {}

    /**
     * Don&#039;t compress the data when creating the asset bundle.
     */
    get UncompressedAssetBundle() {}

    /**
     * Don&#039;t compress the data when creating the asset bundle.
     */
    set UncompressedAssetBundle(value) {}

    /**
     * Do not include type information within the AssetBundle.
     */
    get DisableWriteTypeTree() {}

    /**
     * Do not include type information within the AssetBundle.
     */
    set DisableWriteTypeTree(value) {}

    /**
     * Builds an asset bundle using a hash for the id of the object stored in the asset bundle.
     */
    get DeterministicAssetBundle() {}

    /**
     * Builds an asset bundle using a hash for the id of the object stored in the asset bundle.
     */
    set DeterministicAssetBundle(value) {}

    /**
     * Force rebuild the assetBundles.
     */
    get ForceRebuildAssetBundle() {}

    /**
     * Force rebuild the assetBundles.
     */
    set ForceRebuildAssetBundle(value) {}

    /**
     * Ignore the type tree changes when doing the incremental build check.
     */
    get IgnoreTypeTreeChanges() {}

    /**
     * Ignore the type tree changes when doing the incremental build check.
     */
    set IgnoreTypeTreeChanges(value) {}

    /**
     * Append the hash to the assetBundle name.
     */
    get AppendHashToAssetBundleName() {}

    /**
     * Append the hash to the assetBundle name.
     */
    set AppendHashToAssetBundleName(value) {}

    /**
     * Use chunk-based LZ4 compression when creating the AssetBundle.
     */
    get ChunkBasedCompression() {}

    /**
     * Use chunk-based LZ4 compression when creating the AssetBundle.
     */
    set ChunkBasedCompression(value) {}

    /**
     * Do not allow the build to succeed if any errors are reporting during it.
     */
    get StrictMode() {}

    /**
     * Do not allow the build to succeed if any errors are reporting during it.
     */
    set StrictMode(value) {}

    /**
     * Do a dry run build.
     */
    get DryRunBuild() {}

    /**
     * Do a dry run build.
     */
    set DryRunBuild(value) {}


}