class AssetDeleteResult {


    /**
     * Tells the internal implementation that the callback did not delete the asset. The asset will be delete by the internal implementation.
     */
    get DidNotDelete() {}

    /**
     * Tells the internal implementation that the callback did not delete the asset. The asset will be delete by the internal implementation.
     */
    set DidNotDelete(value) {}

    /**
     * Tells Unity that the file cannot be deleted and Unity should leave it alone.
     */
    get FailedDelete() {}

    /**
     * Tells Unity that the file cannot be deleted and Unity should leave it alone.
     */
    set FailedDelete(value) {}

    /**
     * Tells Unity that the asset was deleted by the callback. Unity will not try to delete the asset, but will delete the cached version and preview file.
     */
    get DidDelete() {}

    /**
     * Tells Unity that the asset was deleted by the callback. Unity will not try to delete the asset, but will delete the cached version and preview file.
     */
    set DidDelete(value) {}


}